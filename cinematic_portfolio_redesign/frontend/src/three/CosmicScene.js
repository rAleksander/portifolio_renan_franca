import * as THREE from 'three';
import { StarField } from './StarField';
import { Comets } from './Comets';
import { NebulaClouds } from './NebulaClouds';
import { ExplosionEffect } from './ExplosionEffect';
import { audioManager } from '../audio/AudioManager';

export class CosmicScene {
  constructor(canvasContainer) {
    this.container = canvasContainer;
    
    // Accurate initial bounding box
    const rect = canvasContainer.getBoundingClientRect();
    this.width = rect.width || window.innerWidth;
    this.height = rect.height || window.innerHeight;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();

    this.starField = null;
    this.comets = null;
    this.nebulaClouds = null;
    this.explosionEffect = null;

    this.scrollProgress = 0;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.animationFrameId = null;
    this.resizeObserver = null;
    this.isDestroyed = false;

    this.init();
  }

  init() {
    try {
      // 1. Scene
      this.scene = new THREE.Scene();
      // Use subtle exponential fog to maintain deep cosmic blacks without sharp cutoffs
      this.scene.fog = new THREE.FogExp2(0x03050a, 0.0008);

      // 2. Camera: Wide 65deg FOV for majestic cosmic expanse
      this.camera = new THREE.PerspectiveCamera(65, this.width / this.height, 0.1, 3000);
      this.camera.position.set(0, 0, 180);

      // 3. Renderer with high dynamic fidelity and exact pixel ratio
      this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      this.renderer.setSize(this.width, this.height, false);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = 1.15;

      // Force canvas styling to span 100% of container with zero left/right displacement
      const canvas = this.renderer.domElement;
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.display = 'block';

      // Clear container and append canvas
      this.container.innerHTML = '';
      this.container.appendChild(canvas);

      // 4. Subsystems
      this.starField = new StarField(4200);
      this.scene.add(this.starField.group);

      this.nebulaClouds = new NebulaClouds();
      this.scene.add(this.nebulaClouds.group);

      this.comets = new Comets(3);
      this.scene.add(this.comets.group);

      this.explosionEffect = new ExplosionEffect(this.scene);

      // 5. Event Listeners & ResizeObserver
      this.onResize = this.onResize.bind(this);
      this.onMouseMove = this.onMouseMove.bind(this);

      window.addEventListener('resize', this.onResize, { passive: true });
      window.addEventListener('mousemove', this.onMouseMove, { passive: true });

      if (window.ResizeObserver) {
        this.resizeObserver = new ResizeObserver(() => this.onResize());
        this.resizeObserver.observe(this.container);
      }

      // Initial dimension lock
      this.onResize();

      // Start render loop
      this.animate();
    } catch (err) {
      console.error('WebGL initialization error:', err);
    }
  }

  onResize() {
    if (!this.renderer || !this.camera || !this.container) return;
    
    const rect = this.container.getBoundingClientRect();
    const newWidth = rect.width || window.innerWidth;
    const newHeight = rect.height || window.innerHeight;

    if (newWidth <= 0 || newHeight <= 0) return;

    this.width = newWidth;
    this.height = newHeight;

    this.camera.aspect = this.width / this.height;
    this.camera.updateProjectionMatrix();

    // Pass false as third argument to preserve CSS style width/height 100%
    this.renderer.setSize(this.width, this.height, false);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  }

  onMouseMove(e) {
    // Subtle mouse parallax clamped to [-1, 1]
    const normX = (e.clientX / window.innerWidth - 0.5) * 2;
    const normY = -(e.clientY / window.innerHeight - 0.5) * 2;
    this.mouse.targetX = Math.max(-1, Math.min(1, normX));
    this.mouse.targetY = Math.max(-1, Math.min(1, normY));
  }

  setScrollProgress(progress) {
    this.scrollProgress = progress; // 0 to 1
  }

  triggerExplosion() {
    if (!this.explosionEffect) return;
    this.explosionEffect.start();
  }

  setExplosionProgress(p) {
    if (this.explosionEffect) {
      this.explosionEffect.setProgress(p);
    }
  }

  animate() {
    if (this.isDestroyed) return;
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // Smooth mouse lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    // Camera responds gently to mouse and vertical scroll without breaking symmetry
    this.camera.position.x = this.mouse.x * 8;
    this.camera.position.y = this.mouse.y * 6 - this.scrollProgress * 30;
    this.camera.lookAt(0, -this.scrollProgress * 15, 0);

    // Audio reactivity
    const bassEnergy = audioManager.getBassEnergy();

    // Update 3D systems
    if (this.starField) {
      this.starField.update(elapsedTime, bassEnergy, this.scrollProgress);
    }
    if (this.nebulaClouds) {
      this.nebulaClouds.update(elapsedTime, bassEnergy, this.scrollProgress);
    }
    if (this.comets) {
      this.comets.update(delta, elapsedTime);
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('resize', this.onResize);
    window.removeEventListener('mousemove', this.onMouseMove);

    if (this.renderer) {
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }
  }
}
