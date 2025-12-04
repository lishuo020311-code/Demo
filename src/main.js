// src/main.js
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { HandLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';
import { Pane } from 'tweakpane';

// 默认内置图片（确保 vite/webpack 能解析这些 import）
import fireworkImageUrl from './assert/47ee8e6149e3fcf9ed229896d2f484fb.jpg';
import img1Url from './assert/47ee8e6149e3fcf9ed229896d2f484fb.jpg';
import img2Url from './assert/0172d4f4caeadacb1cad866e9ff7f7db.jpg';
import img3Url from './assert/d7bb4d2ac14592c1e32dd904e63ef599.jpg';

import './styles.css';

// --- 常量配置 ---
const MEDIAPIPE_WASM_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm';
const HAND_LANDMARKER_MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const PARTICLES_COUNT = 100000;
const POINTING_THRESHOLD = 0.07;
const VIEW_PHOTO_SCALE = 2.5;
const AUTO_CYCLE_INTERVAL = 3000;
const MANUAL_COOLDOWN_TIME = 700;

// --- 全局状态 ---
let handLandmarker;
let particles;
let particleMaterial;
const currentPositions = new Float32Array(PARTICLES_COUNT * 3);
const targetPositions = new Float32Array(PARTICLES_COUNT * 3);
const initialColors = new Float32Array(PARTICLES_COUNT * 3);
const targetColors = new Float32Array(PARTICLES_COUNT * 3);

const MODES = {
    SHAPE: 'SHAPE',
    VIEW_PHOTO: 'VIEW_PHOTO',
    EXPLODE: 'EXPLODE'
};

let currentMode = MODES.SHAPE;
let loadedImages = [];
let selectedPhotoIndex = -1;

let imageSamplePoints = [];
let imageLoaded = false;

// 自动循环与冷却
let lastCycleTime = performance.now();
let isAutoCycling = true;
let lastManualChangeTime = 0;

// UI 参数
const PARAMS = {
    model: 'Sphere',
    color: 'rgba(51, 146, 255, 1)',
    particleSize: 0.43,
};

// --- 加载默认图片并转换为点阵 ---
async function loadImageAsPoints(url) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = url;
        img.crossOrigin = 'anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');

            const size = 1024;
            const scale = Math.min(size / img.width, size / img.height);
            canvas.width = Math.floor(img.width * scale);
            canvas.height = Math.floor(img.height * scale);

            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

            const points = [];
            for (let y = 0; y < canvas.height; y += 1) {
                for (let x = 0; x < canvas.width; x += 1) {
                    const i = (y * canvas.width + x) * 4;
                    if (data[i + 3] > 50) {
                        points.push({
                            x: (x / canvas.width - 0.5) * 2 * (canvas.width / canvas.height),
                            y: -(y / canvas.height - 0.5) * 2,
                            r: data[i] / 255,
                            g: data[i + 1] / 255,
                            b: data[i + 2] / 255
                        });
                    }
                }
            }

            if (points.length > PARTICLES_COUNT) {
                points.sort(() => 0.5 - Math.random());
                points.length = PARTICLES_COUNT;
            }

            resolve({ points });
        };

        img.onerror = () => {
            console.warn('Failed to load default image:', url);
            resolve({ points: [] });
        };
    });
}

async function loadDefaultImages() {
    const urls = [img1Url, img2Url, img3Url];
    loadedImages = [];

    for (const url of urls) {
        const img = await loadImageAsPoints(url);
        if (img.points && img.points.length > 0) loadedImages.push(img);
    }

    console.log(`默认图片已加载: ${loadedImages.length} 张`);
    if (loadedImages.length > 0) {
        currentMode = MODES.VIEW_PHOTO;
        selectedPhotoIndex = 0;
        isAutoCycling = true;
        lastCycleTime = performance.now();
        updateTargetShape();
    }
}

// --- 备用：firework 图像采样 ---
function loadFireworkImageSamples() {
    const img = new Image();
    img.src = fireworkImageUrl;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const maxSize = 256;
        const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
        canvas.width = Math.floor(img.width * scale);
        canvas.height = Math.floor(img.height * scale);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

        imageSamplePoints = [];
        for (let y = 0; y < canvas.height; y++) {
            for (let x = 0; x < canvas.width; x++) {
                const idx = (y * canvas.width + x) * 4;
                if (data[idx + 3] > 20 && (data[idx] + data[idx + 1] + data[idx + 2]) / 3 > 50) {
                    imageSamplePoints.push({
                        x: (x / canvas.width) * 2 - 1,
                        y: 1 - (y / canvas.height) * 2
                    });
                }
            }
        }
        imageLoaded = true;
        if (PARAMS.model === 'Firework') updateTargetShape();
    };
}
loadFireworkImageSamples();

// --- 三维场景初始化 ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 4;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio || 1);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

// --- 初始化粒子 ---
function initParticles() {
    const geometry = new THREE.BufferGeometry();

    // 初始随机分布 & 颜色
    for (let i = 0; i < PARTICLES_COUNT * 3; i++) {
        currentPositions[i] = (Math.random() - 0.5) * 10;
        targetPositions[i] = currentPositions[i];
        initialColors[i] = Math.random(); // 随机色基调
        targetColors[i] = initialColors[i];
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(currentPositions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(initialColors, 3));

    particleMaterial = new THREE.PointsMaterial({
        size: PARAMS.particleSize * 0.12,
        vertexColors: true,
        blending: THREE.NormalBlending,
        depthTest: false,
        transparent: true,
        opacity: 1.0
    });

    particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    updateTargetShape();
}

// --- 切换至上一张照片（保留） ---
function switchToPreviousPhoto() {
    if (loadedImages.length > 1) {
        selectedPhotoIndex = (selectedPhotoIndex - 1 + loadedImages.length) % loadedImages.length;
        updateTargetShape();
    }
}

// --- 更新目标形状（含 EXPLODE 实现） ---
function updateTargetShape() {
    const type = PARAMS.model;
    const color = new THREE.Color(PARAMS.color);

    if (currentMode === MODES.SHAPE) {
        // 保持原有 SHAPE 逻辑（Heart / Firework / Sphere）
        for (let i = 0; i < PARTICLES_COUNT; i++) {
            const i3 = i * 3;
            if (type === 'Heart') {
                const t = Math.random() * Math.PI * 2;
                const r = 0.5 + Math.random() * 0.5;
                const x = 16 * Math.pow(Math.sin(t), 3);
                const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
                const z = (Math.random() - 0.5) * 5;
                const scale = 0.05;
                targetPositions[i3] = x * scale * r;
                targetPositions[i3 + 1] = y * scale * r;
                targetPositions[i3 + 2] = z * scale * r;
            } else if (type === 'Firework' && imageLoaded && imageSamplePoints.length > 0) {
                const p = imageSamplePoints[Math.floor(Math.random() * imageSamplePoints.length)];
                targetPositions[i3] = p.x * 2.0;
                targetPositions[i3 + 1] = p.y * 2.0;
                targetPositions[i3 + 2] = (Math.random() - 0.5) * 0.5;
            } else { // Sphere
                const r = Math.random() * 2;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.acos(Math.random() * 2 - 1);
                targetPositions[i3] = r * Math.sin(phi) * Math.cos(theta);
                targetPositions[i3 + 1] = r * Math.sin(phi) * Math.sin(theta);
                targetPositions[i3 + 2] = r * Math.cos(phi);
            }
            targetColors[i3] = color.r;
            targetColors[i3 + 1] = color.g;
            targetColors[i3 + 2] = color.b;
        }
    } else if (currentMode === MODES.VIEW_PHOTO && selectedPhotoIndex >= 0 && loadedImages.length > 0) {
        // 聚合成图片
        selectedPhotoIndex = selectedPhotoIndex % loadedImages.length;
        if (selectedPhotoIndex < 0) selectedPhotoIndex += loadedImages.length;

        const img = loadedImages[selectedPhotoIndex];
        const numImagePoints = img.points.length;

        for (let i = 0; i < PARTICLES_COUNT; i++) {
            const i3 = i * 3;
            if (i < numImagePoints) {
                const p = img.points[i % numImagePoints];
                targetPositions[i3] = p.x * VIEW_PHOTO_SCALE;
                targetPositions[i3 + 1] = p.y * VIEW_PHOTO_SCALE;
                targetPositions[i3 + 2] = (Math.random() - 0.5) * 0.2;
                targetColors[i3] = p.r;
                targetColors[i3 + 1] = p.g;
                targetColors[i3 + 2] = p.b;
            } else {
                // 把额外的粒子塞到图像附近的微小噪声点（更自然）
                targetPositions[i3] = (Math.random() - 0.5) * 0.2;
                targetPositions[i3 + 1] = (Math.random() - 0.5) * 0.2;
                targetPositions[i3 + 2] = (Math.random() - 0.5) * 0.2;
                targetColors[i3] = color.r * 0.5;
                targetColors[i3 + 1] = color.g * 0.5;
                targetColors[i3 + 2] = color.b * 0.5;
            }
        }
    } else if (currentMode === MODES.EXPLODE) {
        // 分散到全屏空间
        const spread = Math.max(window.innerWidth, window.innerHeight) / 50; // 根据屏幕动态调整扩散大小
        for (let i = 0; i < PARTICLES_COUNT; i++) {
            const i3 = i * 3;
            targetPositions[i3] = (Math.random() - 0.5) * spread * 8;
            targetPositions[i3 + 1] = (Math.random() - 0.5) * spread * 8;
            targetPositions[i3 + 2] = (Math.random() - 0.5) * spread * 2;
            // 爆炸时颜色为当前颜色或白色高亮
            targetColors[i3] = 1.0;
            targetColors[i3 + 1] = 1.0;
            targetColors[i3 + 2] = 1.0;
        }
    }
}

// --- 将 file 转 points（保留） ---
async function processImage(file) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.src = url;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const size = 1024;
            const scale = Math.min(size / img.width, size / img.height);
            canvas.width = Math.floor(img.width * scale);
            canvas.height = Math.floor(img.height * scale);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

            const points = [];
            for (let y = 0; y < canvas.height; y += 1) {
                for (let x = 0; x < canvas.width; x += 1) {
                    const i = (y * canvas.width + x) * 4;
                    if (data[i + 3] > 50) {
                        points.push({
                            x: (x / canvas.width - 0.5) * 2 * (canvas.width / canvas.height),
                            y: -(y / canvas.height - 0.5) * 2,
                            r: data[i] / 255, g: data[i + 1] / 255, b: data[i + 2] / 255
                        });
                    }
                }
            }
            resolve({ points });
        };
        img.onerror = () => {
            resolve({ points: [] });
        };
    });
}

// --- 文件选择事件（保留） ---
const folderInput = document.getElementById('folder-input');
if (folderInput) {
    folderInput.addEventListener('change', async (e) => {
        const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
        if (files.length === 0) return;

        loadedImages = [];
        for (const f of files) {
            const result = await processImage(f);

            if (result.points.length > PARTICLES_COUNT) {
                result.points.sort(() => 0.5 - Math.random());
                result.points.length = PARTICLES_COUNT;
            }
            loadedImages.push(result);
        }
        console.log(`Loaded ${loadedImages.length} images`);

        if (loadedImages.length > 0) {
            currentMode = MODES.VIEW_PHOTO;
            selectedPhotoIndex = 0;
            isAutoCycling = true;
            lastCycleTime = performance.now();
            updateTargetShape();
        }
    });
}

// --- 手势识别逻辑（保持原有 detectGesture） ---
function detectGesture(landmarks) {
    const wrist = landmarks[0];
    const tips = [8, 12, 16, 20];
    const pips = [6, 10, 14, 18];

    const extended = tips.map((tip, i) => {
        const dTip = Math.hypot(landmarks[tip].x - wrist.x, landmarks[tip].y - wrist.y);
        const dPip = Math.hypot(landmarks[pips[i]].x - wrist.x, landmarks[pips[i]].y - wrist.y);
        return dTip > dPip;
    });

    const [index, middle, ring, pinky] = extended;

    let currentGesture = 'NONE';

    if (index && middle && ring && pinky) {
        currentGesture = 'OPEN_PALM';
    } else if (!index && !middle && !ring && !pinky) {
        currentGesture = 'FIST';
    } else if (index && !middle && !ring && !pinky) {
        // 食指伸出，检测方向
        const indexTip = landmarks[8];
        const indexPip = landmarks[6];
        const deltaX = indexTip.x - indexPip.x;

        if (Math.abs(deltaX) > POINTING_THRESHOLD) {
            if (deltaX < 0) {
                currentGesture = 'INDEX_PREVIOUS';
            } else {
                currentGesture = 'INDEX_NEXT';
            }
        } else {
            currentGesture = 'POINTING';
        }
    }

    return currentGesture;
}

// --- 交互逻辑：左手张开->EXPLODE，左手握拳->VIEW_PHOTO，右手用于切图 ---
function handleInteraction(leftGesture, rightGesture) {
    let activeGesture = 'NONE';
    const currentTime = performance.now();

    // 左手：张开 -> 分散；握拳 -> 聚合（图片）
    if (loadedImages.length > 0) {
        if (leftGesture === 'OPEN_PALM') {
            if (currentMode !== MODES.EXPLODE) {
                currentMode = MODES.EXPLODE;
                isAutoCycling = false;
                updateTargetShape();
            }
            activeGesture = 'OPEN_PALM';
        } else if (leftGesture === 'FIST') {
            if (currentMode !== MODES.VIEW_PHOTO) {
                currentMode = MODES.VIEW_PHOTO;
                if (selectedPhotoIndex === -1) selectedPhotoIndex = 0;
                isAutoCycling = false;
                updateTargetShape();
            }
            activeGesture = 'FIST';
        }
    }

    // 右手用于翻页（保留冷却逻辑）
    if (currentMode === MODES.VIEW_PHOTO && loadedImages.length > 1) {
        if (rightGesture === 'INDEX_PREVIOUS' || rightGesture === 'INDEX_NEXT') {
            activeGesture = rightGesture;
        }

        if (currentTime - lastManualChangeTime > MANUAL_COOLDOWN_TIME) {
            if (rightGesture === 'INDEX_PREVIOUS') {
                selectedPhotoIndex = (selectedPhotoIndex - 1 + loadedImages.length) % loadedImages.length;
                lastCycleTime = currentTime;
                lastManualChangeTime = currentTime;
                updateTargetShape();
            } else if (rightGesture === 'INDEX_NEXT') {
                selectedPhotoIndex = (selectedPhotoIndex + 1) % loadedImages.length;
                lastCycleTime = currentTime;
                lastManualChangeTime = currentTime;
                updateTargetShape();
            }
        }
    }

    return activeGesture;
}

// --- 动画循环与插值 ---
function animate(currentTime) {
    requestAnimationFrame(animate);

    // 自动循环（如果处于 VIEW_PHOTO 并且启用自动切换）
    if (currentMode === MODES.VIEW_PHOTO && isAutoCycling && loadedImages.length > 1) {
        if (currentTime - lastCycleTime >= AUTO_CYCLE_INTERVAL) {
            switchToPreviousPhoto();
            lastCycleTime = currentTime;
        }
    }

    // 插值：位置与颜色
    const positions = particles.geometry.attributes.position.array;
    const colors = particles.geometry.attributes.color.array;

    // 更改插值速度：当 EXPLODE 时加快速度，聚合时放慢以展示缓动
    const lerpFactor = currentMode === MODES.EXPLODE ? 0.18 : 0.05;

    for (let i = 0; i < PARTICLES_COUNT * 3; i++) {
        positions[i] += (targetPositions[i] - positions[i]) * lerpFactor;
        colors[i] += (targetColors[i] - colors[i]) * lerpFactor;
    }

    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.color.needsUpdate = true;

    // 轻微旋转，EXPOLE 时可以增大
    particles.rotation.y += currentMode === MODES.EXPLODE ? 0.008 : 0.002;

    controls.update();
    renderer.render(scene, camera);
}

// --- MediaPipe 手势识别与 UI 绘制 ---
async function setupHandTracking() {
    const video = document.getElementById('webcam');
    const canvas = document.getElementById('gesture-canvas');
    const ctx = canvas.getContext('2d');

    const vision = await FilesetResolver.forVisionTasks(MEDIAPIPE_WASM_URL);
    handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: HAND_LANDMARKER_MODEL_URL, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numHands: 2
    });

    const drawingUtils = new DrawingUtils(ctx);

    async function predict() {
        if (video.currentTime !== 0) {
            const results = handLandmarker.detectForVideo(video, performance.now());

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.canvas.width = video.videoWidth;
            ctx.canvas.height = video.videoHeight;

            let leftHandGesture = 'NONE';
            let rightHandGesture = 'NONE';
            let usedGesture = 'NONE';

            if (results.landmarks && results.landmarks.length > 0) {
                for (let i = 0; i < results.landmarks.length; i++) {
                    const landmarks = results.landmarks[i];
                    const handedness = results.handedness[i][0].categoryName;
                    const gesture = detectGesture(landmarks);
                    const color = handedness === 'Left' ? '#00FF00' : '#FF8C00';

                    drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, { color: color });
                    drawingUtils.drawLandmarks(landmarks, { color: color, radius: 1 });

                    if (handedness === 'Left') leftHandGesture = gesture;
                    else if (handedness === 'Right') rightHandGesture = gesture;
                }

                usedGesture = handleInteraction(leftHandGesture, rightHandGesture);
            }

            // --- 在视频画布上绘制文本 UI ---
            ctx.fillStyle = 'white';
            ctx.font = '20px Arial';

            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-ctx.canvas.width, 0);

            let modeText = '';
            if (currentMode === MODES.SHAPE) modeText = '形状模式';
            else if (currentMode === MODES.VIEW_PHOTO) modeText = '图片聚合模式 (左手握拳)';
            else if (currentMode === MODES.EXPLODE) modeText = '分散模式 (左手张开)';

            ctx.fillText(`模式: ${modeText}`, 10, 26);

            let gestureText = '';
            const inCooldown = performance.now() - lastManualChangeTime <= MANUAL_COOLDOWN_TIME;

            if (usedGesture === 'NONE') gestureText = '无控制手势';
            else if (usedGesture === 'OPEN_PALM') gestureText = '左手张开 (分散)';
            else if (usedGesture === 'FIST') gestureText = '左手握拳 (聚合图片)';
            else if (usedGesture === 'INDEX_PREVIOUS') gestureText = `右手食指向左 (上一张${inCooldown ? " - 冷却中" : ""})`;
            else if (usedGesture === 'INDEX_NEXT') gestureText = `右手食指向右 (下一张${inCooldown ? " - 冷却中" : ""})`;
            else if (usedGesture === 'POINTING') gestureText = '食指伸出 (未切换)';

            ctx.fillText(`手势: ${gestureText}`, 10, 56);

            if (currentMode === MODES.VIEW_PHOTO && loadedImages.length > 0) {
                ctx.fillText(`照片: ${selectedPhotoIndex + 1} / ${loadedImages.length}`, 10, 86);

                if (isAutoCycling && loadedImages.length > 1) {
                    const elapsed = performance.now() - lastCycleTime;
                    const progress = Math.min(1, elapsed / AUTO_CYCLE_INTERVAL);
                    const remainingTime = Math.ceil((AUTO_CYCLE_INTERVAL - elapsed) / 1000);

                    ctx.fillStyle = 'lightblue';
                    ctx.fillText(`自动切换倒计时: ${remainingTime}s`, 10, 116);

                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(10, 126, 200 * progress, 8);
                }
            }

            ctx.restore();
        }
        requestAnimationFrame(predict);
    }

    // 摄像头权限与流
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        video.addEventListener('loadeddata', predict);
    } catch (err) {
        console.error('Camera error:', err);
    }
}

// --- UI 设置 ---
function setupUI() {
    const pane = new Pane();
    pane.addBinding(PARAMS, 'model', {
        options: { Heart: 'Heart', Sphere: 'Sphere', Firework: 'Firework' }
    }).on('change', () => {
        updateTargetShape();
    });

    pane.addBinding(PARAMS, 'color', { view: 'color', label: '颜色' }).on('change', updateTargetShape);
    pane.addBinding(PARAMS, 'particleSize', { min: 0.1, max: 2.0, label: '粒子大小' }).on('change', (v) => {
        particleMaterial.size = v.value * 0.12;
    });

    const fsBtn = document.getElementById('fullscreen-btn');
    if (fsBtn) {
        fsBtn.addEventListener('click', () => {
            if (document.fullscreenElement) document.exitFullscreen();
            else renderer.domElement.requestFullscreen();
        });
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        // 当窗口改变时，若处于 EXPLODE，重新计算扩散范围
        if (currentMode === MODES.EXPLODE) updateTargetShape();
    });
}

// --- 启动流程 ---
initParticles();
setupUI();
setupHandTracking();
animate(performance.now());
loadDefaultImages();
