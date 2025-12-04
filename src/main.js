import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { HandLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';
import { Pane } from 'tweakpane';
import fireworkImageUrl from './assert/47ee8e6149e3fcf9ed229896d2f484fb.jpg';
import img1Url from './assert/47ee8e6149e3fcf9ed229896d2f484fb.jpg';
import img2Url from './assert/0172d4f4caeadacb1cad866e9ff7f7db.jpg';
import img3Url from './assert/d7bb4d2ac14592c1e32dd904e63ef599.jpg';

import './styles.css'
// --- 常量配置 ---
const MEDIAPIPE_WASM_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm';
const HAND_LANDMARKER_MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const PARTICLES_COUNT = 100000;
const POINTING_THRESHOLD = 0.07; // **强化修改 1：提高指向的检测阈值 (原为 0.04)**
const VIEW_PHOTO_SCALE = 2.5;
const AUTO_CYCLE_INTERVAL = 5000;
const MANUAL_COOLDOWN_TIME = 700; // **强化修改 2：增加手动切换的冷却时间 (原为 500ms)**

// --- 全局状态 ---
let handLandmarker;
let particles;
let particleMaterial;
const currentPositions = new Float32Array(PARTICLES_COUNT * 3);
const targetPositions = new Float32Array(PARTICLES_COUNT * 3);
const initialColors = new Float32Array(PARTICLES_COUNT * 3);
const targetColors = new Float32Array(PARTICLES_COUNT * 3);

// 状态
const MODES = {
    SHAPE: 'SHAPE',
    VIEW_PHOTO: 'VIEW_PHOTO'
};
let currentMode = MODES.SHAPE;
let loadedImages = [];
let selectedPhotoIndex = -1;

// 图像采样点 (Firework)
let imageSamplePoints = [];
let imageLoaded = false;

// --- 自动循环播放状态 ---
let lastCycleTime = performance.now();
let isAutoCycling = true;
let lastManualChangeTime = 0; // 记录上一次手动切换的时间

// UI 参数
const PARAMS = {
    model: 'sphere',
    color: 'rgba(51, 146, 255, 1)',
    particleSize: 0.43,
};
async function loadDefaultImages() {
    const urls = [img1Url, img2Url, img3Url];

    loadedImages = [];

    for (const url of urls) {
        const img = await loadImageAsPoints(url);
        loadedImages.push(img);
    }

    console.log(`默认图片已加载: ${loadedImages.length} 张`);

    // 启动图片模式
    if (loadedImages.length > 0) {
        currentMode = MODES.VIEW_PHOTO;
        selectedPhotoIndex = 0;
        isAutoCycling = true;
        lastCycleTime = performance.now();
        updateTargetShape();
    }
}
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
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;

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

            // 限制粒子数
            if (points.length > PARTICLES_COUNT) {
                points.sort(() => 0.5 - Math.random());
                points.length = PARTICLES_COUNT;
            }

            resolve({ points });
        };
    });
}

// --- 辅助函数：加载图片采样 (略) ---
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

// --- 场景初始化 (略) ---
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

// --- 粒子系统初始化 (略) ---
function initParticles() {
    const geometry = new THREE.BufferGeometry();
    for (let i = 0; i < PARTICLES_COUNT * 3; i++) {
        currentPositions[i] = (Math.random() - 0.5) * 10;
        targetPositions[i] = currentPositions[i];
        initialColors[i] = 1.0;
        targetColors[i] = 1.0;
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

// --- 切换到上一张照片的逻辑 (略) ---
function switchToPreviousPhoto() {
    if (loadedImages.length > 1) {
        selectedPhotoIndex = (selectedPhotoIndex - 1 + loadedImages.length) % loadedImages.length;
        updateTargetShape();
    }
}

// --- 核心逻辑：更新目标形状 (略) ---
function updateTargetShape() {
    const type = PARAMS.model;
    const color = new THREE.Color(PARAMS.color);

    if (currentMode === MODES.SHAPE) {
        for (let i = 0; i < PARTICLES_COUNT; i++) {
            const i3 = i * 3;
            let x, y, z;
            if (type === 'Heart') {
                const t = Math.random() * Math.PI * 2;
                const r = 0.5 + Math.random() * 0.5;
                x = 16 * Math.pow(Math.sin(t), 3);
                y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
                z = (Math.random() - 0.5) * 5;
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
    }
    else if (currentMode === MODES.VIEW_PHOTO && selectedPhotoIndex >= 0 && loadedImages.length > 0) {
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
                targetPositions[i3] = 0;
                targetPositions[i3 + 1] = 0;
                targetPositions[i3 + 2] = 0;
                targetColors[i3] = 0;
                targetColors[i3 + 1] = 0;
                targetColors[i3 + 2] = 0;
            }
        }
    }
}

// --- 图片处理 (略) ---
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
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
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
    });
}

// 文件夹选择事件 (略)
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

// --- 手势识别 ---
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
                // indexTip.x < indexPip.x (在镜像画面中：食指向左)
                currentGesture = 'INDEX_PREVIOUS'; // 食指向左 -> 上一张
            } else {
                // indexTip.x > indexPip.x (在镜像画面中：食指向右)
                currentGesture = 'INDEX_NEXT'; // 食指向右 -> 下一张
            }
        } else {
            currentGesture = 'POINTING'; // 食指伸出但方向不明显
        }
    }

    return currentGesture;
}

// --- 交互逻辑：加入冷却时间逻辑 ---
function handleInteraction(leftGesture, rightGesture) {
    let activeGesture = 'NONE';
    const currentTime = performance.now();

    // 1. 左手控制模式切换
    if (loadedImages.length > 0) {
        if (leftGesture === 'OPEN_PALM') {
            if (currentMode !== MODES.VIEW_PHOTO) {
                currentMode = MODES.VIEW_PHOTO;
                if (selectedPhotoIndex === -1) selectedPhotoIndex = 0;
                isAutoCycling = true;
                lastCycleTime = currentTime;
                updateTargetShape();
            }
            activeGesture = 'OPEN_PALM';
        } else if (leftGesture === 'FIST') {
            if (currentMode !== MODES.SHAPE) {
                currentMode = MODES.SHAPE;
                selectedPhotoIndex = -1;
                isAutoCycling = false;
                updateTargetShape();
            }
            activeGesture = 'FIST';
        }
    }

    // 2. 右手控制图片切换 (应用冷却时间)
    if (currentMode === MODES.VIEW_PHOTO && loadedImages.length > 1) {

        // 即使在冷却期，也要检查是否是切换手势，以便在 UI 上显示
        if (rightGesture === 'INDEX_PREVIOUS' || rightGesture === 'INDEX_NEXT') {
            activeGesture = rightGesture;
        }

        // 检查是否通过冷却期
        if (currentTime - lastManualChangeTime > MANUAL_COOLDOWN_TIME) {

            if (rightGesture === 'INDEX_PREVIOUS') {
                selectedPhotoIndex = (selectedPhotoIndex - 1 + loadedImages.length) % loadedImages.length;
                lastCycleTime = currentTime;
                lastManualChangeTime = currentTime;
                updateTargetShape();
                // activeGesture 已在前面更新
            } else if (rightGesture === 'INDEX_NEXT') {
                selectedPhotoIndex = (selectedPhotoIndex + 1) % loadedImages.length;
                lastCycleTime = currentTime;
                lastManualChangeTime = currentTime;
                updateTargetShape();
                // activeGesture 已在前面更新
            }
        }
    }

    return activeGesture;
}

// --- 动画循环 (略) ---
function animate(currentTime) {
    requestAnimationFrame(animate);

    // 自动循环逻辑 (每5秒切换到上一张照片)
    if (currentMode === MODES.VIEW_PHOTO && isAutoCycling && loadedImages.length > 1) {
        if (currentTime - lastCycleTime >= AUTO_CYCLE_INTERVAL) {
            switchToPreviousPhoto();
            lastCycleTime = currentTime;
        }
    }

    // 粒子插值 (略)
    const positions = particles.geometry.attributes.position.array;
    const colors = particles.geometry.attributes.color.array;

    for (let i = 0; i < PARTICLES_COUNT * 3; i++) {
        positions[i] += (targetPositions[i] - positions[i]) * 0.05;
        colors[i] += (targetColors[i] - colors[i]) * 0.05;
    }
    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.color.needsUpdate = true;

    particles.rotation.y += 0.002;

    controls.update();
    renderer.render(scene, camera);
}

// --- MediaPipe 预测及 UI 显示 (略) ---
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

                    if (handedness === 'Left') {
                        leftHandGesture = gesture;
                    } else if (handedness === 'Right') {
                        rightHandGesture = gesture;
                    }
                }

                usedGesture = handleInteraction(leftHandGesture, rightHandGesture);
            }

            // --- UI 文本显示 ---
            ctx.fillStyle = 'white';
            ctx.font = '24px Arial';

            ctx.save();
            ctx.scale(-1, 1);
            ctx.translate(-ctx.canvas.width, 0);

            // 模式显示
            let modeText = '';
            if (currentMode === MODES.SHAPE) modeText = '形状模式 (左手握拳切换)';
            else if (currentMode === MODES.VIEW_PHOTO) modeText = '图片循环模式 (左手张开切换)';

            ctx.fillText(`模式: ${modeText}`, 10, 30);

            // 手势显示
            let gestureText = '';
            const inCooldown = performance.now() - lastManualChangeTime <= MANUAL_COOLDOWN_TIME;

            if (usedGesture === 'NONE') gestureText = '无控制手势';
            else if (usedGesture === 'OPEN_PALM') gestureText = '左手张开 (已切换到图片)';
            else if (usedGesture === 'FIST') gestureText = '左手握拳 (已切换到形状)';
            else if (usedGesture === 'INDEX_PREVIOUS') gestureText = `右手食指向左 (上一张${inCooldown ? " - 冷却中" : " - 切换成功"})`;
            else if (usedGesture === 'INDEX_NEXT') gestureText = `右手食指向右 (下一张${inCooldown ? " - 冷却中" : " - 切换成功"})`;
            else if (usedGesture === 'POINTING') gestureText = '食指伸出 (未切换)';

            ctx.fillText(`控制手势: ${gestureText}`, 10, 60);

            // 照片索引和自动循环提示显示
            if (currentMode === MODES.VIEW_PHOTO && loadedImages.length > 0) {
                ctx.fillText(`照片: ${selectedPhotoIndex + 1} / ${loadedImages.length}`, 10, 90);

                // 自动循环计时器显示
                if (isAutoCycling && loadedImages.length > 1) {
                    const elapsed = performance.now() - lastCycleTime;
                    const progress = elapsed / AUTO_CYCLE_INTERVAL;
                    const remainingTime = Math.ceil((AUTO_CYCLE_INTERVAL - elapsed) / 1000);

                    ctx.fillStyle = 'lightblue';
                    ctx.fillText(`自动切换倒计时: ${remainingTime} 秒 (上一张)`, 10, 120);

                    // 进度条
                    ctx.fillStyle = 'yellow';
                    ctx.fillRect(10, 130, 200 * progress, 10);
                }
            }

            ctx.restore();
        }
        requestAnimationFrame(predict);
    }

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.addEventListener('loadeddata', predict);
    });
}

// --- UI Setup (略) ---
function setupUI() {
    const pane = new Pane();
    pane.addBinding(PARAMS, 'model', {
        options: { Heart: '心形', Sphere: '球形', Firework: '烟花' }
    }).on('change', updateTargetShape);

    pane.addBinding(PARAMS, 'color', { view: 'color', label: '颜色' }).on('change', updateTargetShape);
    pane.addBinding(PARAMS, 'particleSize', { min: 0.1, max: 2.0, label: '粒子大小' }).on('change', v => {
        particleMaterial.size = v.value * 0.12;
    });

    document.getElementById('fullscreen-btn').addEventListener('click', () => {
        if (document.fullscreenElement) document.exitFullscreen();
        else renderer.domElement.requestFullscreen();
    });

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });
}

initParticles();
setupUI();
setupHandTracking();
animate(performance.now());
loadDefaultImages();
