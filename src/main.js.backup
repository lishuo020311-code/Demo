import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { HandLandmarker, FilesetResolver, DrawingUtils } from '@mediapipe/tasks-vision';
import { Pane } from 'tweakpane';
import fireworkImageUrl from './assert/0d0f778295c0641e48727f9da1422ac6.jpg';

// --- 常量配置 ---
const MEDIAPIPE_WASM_URL = 'https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision/wasm';
const HAND_LANDMARKER_MODEL_URL = 'https://storage.googleapis.com/mediapipe-models/hand_landmarker/hand_landmarker/float16/1/hand_landmarker.task';
const PARTICLES_COUNT = 100000;

// --- 全局状态 ---
let handLandmarker;
let particles;
let particleMaterial;
// 粒子位置数据
const currentPositions = new Float32Array(PARTICLES_COUNT * 3);
const targetPositions = new Float32Array(PARTICLES_COUNT * 3);
const initialColors = new Float32Array(PARTICLES_COUNT * 3); // 存储初始颜色
const targetColors = new Float32Array(PARTICLES_COUNT * 3);  // 目标颜色

// 状态
const MODES = {
    SHAPE: 'SHAPE', // 原有的 Sphere, Heart, Firework
    GALLERY: 'GALLERY',
    VIEW_PHOTO: 'VIEW_PHOTO'
};
let currentMode = MODES.SHAPE;
let loadedImages = []; // { points: [], ratio: number, texture: ... }
let selectedPhotoIndex = -1;
let hoverStartTime = 0;
let lastHoverIndex = -1;

// 图像采样点 (Firework)
let imageSamplePoints = [];
let imageLoaded = false;

// UI 参数
const PARAMS = {
    model: 'Heart', // 默认 Heart
    color: '#ff3366', // 默认粉色
    particleSize: 1.0,
};

// --- 辅助函数：加载图片采样 ---
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

// --- 场景初始化 ---
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

// --- 粒子系统初始化 ---
function initParticles() {
    const geometry = new THREE.BufferGeometry();

    // 初始位置随机
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

// --- 核心逻辑：更新目标形状 ---
function updateTargetShape() {
    const type = PARAMS.model;
    const color = new THREE.Color(PARAMS.color);

    // 如果是 SHAPE 模式
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

            // 颜色更新
            targetColors[i3] = color.r;
            targetColors[i3 + 1] = color.g;
            targetColors[i3 + 2] = color.b;
        }
    }
    // 画廊模式
    else if (currentMode === MODES.GALLERY && loadedImages.length > 0) {
        const cols = Math.ceil(Math.sqrt(loadedImages.length));
        const rows = Math.ceil(loadedImages.length / cols);
        const cellW = 2.5, cellH = 2.5;
        const particlesPerImg = Math.floor(PARTICLES_COUNT / loadedImages.length);

        for (let imgIdx = 0; imgIdx < loadedImages.length; imgIdx++) {
            const img = loadedImages[imgIdx];
            const start = imgIdx * particlesPerImg;
            const end = start + particlesPerImg;

            const col = imgIdx % cols;
            const row = Math.floor(imgIdx / cols);
            const offX = (col - (cols - 1) / 2) * cellW;
            const offY = ((rows - 1) / 2 - row) * cellH;

            for (let i = start; i < end; i++) {
                if (i >= PARTICLES_COUNT) break;
                const p = img.points[Math.floor(Math.random() * img.points.length)];
                if (p) {
                    targetPositions[i * 3] = p.x + offX;
                    targetPositions[i * 3 + 1] = p.y + offY;
                    targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.1;
                    targetColors[i * 3] = p.r;
                    targetColors[i * 3 + 1] = p.g;
                    targetColors[i * 3 + 2] = p.b;
                }
            }
        }
    }
    // 查看单张照片模式
    else if (currentMode === MODES.VIEW_PHOTO && selectedPhotoIndex >= 0) {
        const img = loadedImages[selectedPhotoIndex];
        for (let i = 0; i < PARTICLES_COUNT; i++) {
            const p = img.points[i % img.points.length];
            if (p) {
                targetPositions[i * 3] = p.x * 3.0; // 放大
                targetPositions[i * 3 + 1] = p.y * 3.0;
                targetPositions[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
                targetColors[i * 3] = p.r;
                targetColors[i * 3 + 1] = p.g;
                targetColors[i * 3 + 2] = p.b;
            }
        }
    }
}

// --- 图片处理 ---
async function processImage(file) {
    return new Promise((resolve) => {
        const url = URL.createObjectURL(file);
        const img = new Image();
        img.src = url;
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const size = 800;
            const scale = Math.min(size / img.width, size / img.height);
            canvas.width = img.width * scale;
            canvas.height = img.height * scale;
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

            const points = [];
            for (let y = 0; y < canvas.height; y += 1) { // 采样步长1，提高清晰度
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

// 文件夹选择事件
const folderInput = document.getElementById('folder-input');
if (folderInput) {
    folderInput.addEventListener('change', async (e) => {
        const files = Array.from(e.target.files).filter(f => f.type.startsWith('image/'));
        if (files.length === 0) return;

        loadedImages = [];
        for (const f of files) {
            loadedImages.push(await processImage(f));
        }
        console.log(`Loaded ${loadedImages.length} images`);

        // 如果当前是画廊模式，立即刷新
        if (currentMode === MODES.GALLERY) updateTargetShape();
    });
}

// --- 手势识别 ---
function detectGesture(landmarks) {
    const wrist = landmarks[0];
    const tips = [8, 12, 16, 20]; // 食指到小指指尖
    const pips = [6, 10, 14, 18]; // 指关节

    // 判断手指伸直：指尖到手腕距离 > 指关节到手腕距离
    const extended = tips.map((tip, i) => {
        const dTip = Math.hypot(landmarks[tip].x - wrist.x, landmarks[tip].y - wrist.y);
        const dPip = Math.hypot(landmarks[pips[i]].x - wrist.x, landmarks[pips[i]].y - wrist.y);
        return dTip > dPip;
    });

    const [index, middle, ring, pinky] = extended;

    if (index && middle && ring && pinky) return 'OPEN_PALM';
    if (!index && !middle && !ring && !pinky) return 'FIST';
    if (index && !middle && !ring && !pinky) return 'POINTING';

    return 'NONE';
}

// --- 交互逻辑 ---
function handleInteraction(landmarks) {
    const gesture = detectGesture(landmarks);

    if (gesture === 'OPEN_PALM' && loadedImages.length > 0) {
        if (currentMode !== MODES.GALLERY) {
            currentMode = MODES.GALLERY;
            updateTargetShape();
        }
    } else if (gesture === 'FIST') {
        if (currentMode !== MODES.SHAPE) {
            currentMode = MODES.SHAPE;
            updateTargetShape();
        }
    }

    // Pointing 选择逻辑
    if (gesture === 'POINTING' && currentMode === MODES.GALLERY) {
        const indexTip = landmarks[8];
        // 映射坐标：MediaPipe (0,0)左上 -> (1,1)右下
        // 屏幕中心 (0,0)
        // 注意镜像：如果视频是镜像的，x 需要翻转
        // 假设 CSS transform: scaleX(-1)
        const ndcX = (1 - indexTip.x) * 2 - 1; // 翻转 x
        const ndcY = -(indexTip.y * 2 - 1);    // 翻转 y

        // 简单的距离检测
        let minD = 999;
        let closest = -1;

        const cols = Math.ceil(Math.sqrt(loadedImages.length));
        const cellW = 2.5, cellH = 2.5;

        // 投射每个图片的中心到屏幕空间
        const vec = new THREE.Vector3();

        for (let i = 0; i < loadedImages.length; i++) {
            const col = i % cols;
            const row = Math.floor(i / cols);
            const x = (col - (cols - 1) / 2) * cellW;
            const y = ((Math.ceil(loadedImages.length / cols) - 1) / 2 - row) * cellH;

            vec.set(x, y, 0);
            vec.project(camera);

            const d = Math.hypot(vec.x - ndcX, vec.y - ndcY);
            if (d < 0.2) { // 阈值
                if (d < minD) {
                    minD = d;
                    closest = i;
                }
            }
        }

        if (closest !== -1) {
            if (closest === lastHoverIndex) {
                if (performance.now() - hoverStartTime > 1000) {
                    selectedPhotoIndex = closest;
                    currentMode = MODES.VIEW_PHOTO;
                    updateTargetShape();
                    lastHoverIndex = -1;
                }
            } else {
                lastHoverIndex = closest;
                hoverStartTime = performance.now();
            }
        } else {
            lastHoverIndex = -1;
        }
    }

    return gesture;
}

// --- 动画循环 ---
function animate() {
    requestAnimationFrame(animate);

    // 粒子插值
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

// --- MediaPipe ---
async function setupHandTracking() {
    const video = document.getElementById('webcam');
    const canvas = document.getElementById('gesture-canvas');
    const ctx = canvas.getContext('2d');

    const vision = await FilesetResolver.forVisionTasks(MEDIAPIPE_WASM_URL);
    handLandmarker = await HandLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: HAND_LANDMARKER_MODEL_URL, delegate: 'GPU' },
        runningMode: 'VIDEO',
        numHands: 1
    });

    const drawingUtils = new DrawingUtils(ctx);

    async function predict() {
        if (video.currentTime !== 0) {
            const results = handLandmarker.detectForVideo(video, performance.now());

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;

            if (results.landmarks && results.landmarks.length > 0) {
                const landmarks = results.landmarks[0];
                drawingUtils.drawConnectors(landmarks, HandLandmarker.HAND_CONNECTIONS, { color: '#00FF00' });
                drawingUtils.drawLandmarks(landmarks, { color: '#FF0000', radius: 1 });

                const gesture = handleInteraction(landmarks);

                ctx.fillStyle = 'white';
                ctx.font = '24px Arial';
                ctx.fillText(`Gesture: ${gesture}`, 10, 30);

                if (lastHoverIndex !== -1 && currentMode === MODES.GALLERY) {
                    ctx.fillStyle = 'yellow';
                    ctx.fillText(`Hovering: ${lastHoverIndex}`, 10, 60);
                    const p = Math.min(1, (performance.now() - hoverStartTime) / 1000);
                    ctx.fillRect(10, 70, 100 * p, 10);
                }
            }
        }
        requestAnimationFrame(predict);
    }

    navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        video.srcObject = stream;
        video.addEventListener('loadeddata', predict);
    });
}

// --- UI Setup ---
function setupUI() {
    const pane = new Pane();
    pane.addBinding(PARAMS, 'model', {
        options: { Heart: 'Heart', Sphere: 'Sphere', Firework: 'Firework' }
    }).on('change', updateTargetShape);

    pane.addBinding(PARAMS, 'color', { view: 'color' }).on('change', updateTargetShape);
    pane.addBinding(PARAMS, 'particleSize', { min: 0.1, max: 2.0 }).on('change', v => {
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
animate();