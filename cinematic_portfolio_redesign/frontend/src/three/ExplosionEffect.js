import * as THREE from 'three';

/**
 * Manages the 4-phase Cosmic Explosion:
 * Phase A: Singularity (concentrated pulsing glow point)
 * Phase B: Expansion (explosive bursts, radial shockwaves & 3D filament particles)
 * Phase C: Universe Birth (dispersion into deep space, stars ignite)
 * Phase D: Transition (stabilization and fade into persistent cosmic background)
 */
export class ExplosionEffect {
  constructor(scene) {
    this.scene = scene;
    this.group = new THREE.Group();
    this.scene.add(this.group);

    this.particleCount = 1800;
    this.particles = null;
    this.shockwave = null;
    this.singularityMesh = null;

    this.progress = 0; // 0 to 1
    this.isActive = false;

    this.initSingularity();
    this.initParticles();
    this.initShockwave();

    this.group.visible = false;
  }

  initSingularity() {
    const geo = new THREE.SphereGeometry(2.5, 32, 32);
    const mat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0,
    });
    this.singularityMesh = new THREE.Mesh(geo, mat);
    this.group.add(this.singularityMesh);
  }

  initParticles() {
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(this.particleCount * 3);
    const velocities = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);

    const baseColors = [
      new THREE.Color(0xffffff),
      new THREE.Color(0x38bdf8),
      new THREE.Color(0x06b6d4),
      new THREE.Color(0xa855f7),
      new THREE.Color(0x6366f1)
    ];

    for (let i = 0; i < this.particleCount; i++) {
      // Start concentrated at origin
      positions[i * 3] = 0;
      positions[i * 3 + 1] = 0;
      positions[i * 3 + 2] = 0;

      // Spherical direction vector with varying speed for 3D depth
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const speed = Math.random() * 180 + 40;

      velocities[i * 3] = speed * Math.sin(phi) * Math.cos(theta);
      velocities[i * 3 + 1] = speed * Math.sin(phi) * Math.sin(theta);
      velocities[i * 3 + 2] = speed * Math.cos(phi) * 1.5; // push toward camera

      const color = baseColors[Math.floor(Math.random() * baseColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    this.particleMaterial = new THREE.PointsMaterial({
      size: 3.5,
      vertexColors: true,
      transparent: true,
      opacity: 0,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.particles = new THREE.Points(geo, this.particleMaterial);
    this.group.add(this.particles);
  }

  initShockwave() {
    const geo = new THREE.RingGeometry(1, 3, 64);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    this.shockwave = new THREE.Mesh(geo, mat);
    this.shockwave.position.z = 20;
    this.group.add(this.shockwave);
  }

  start() {
    this.isActive = true;
    this.group.visible = true;
    this.progress = 0;

    // Reset particle positions to zero
    const pos = this.particles.geometry.attributes.position.array;
    for (let i = 0; i < this.particleCount * 3; i++) {
      pos[i] = 0;
    }
    this.particles.geometry.attributes.position.needsUpdate = true;
  }

  /**
   * Sets current animation normalized progress (0.0 to 1.0)
   * Governed by GSAP timeline in animations/cosmicExplosion.js
   */
  setProgress(val) {
    this.progress = Math.max(0, Math.min(1, val));

    // Phase A: Singularity (0.0 to 0.25)
    if (this.progress <= 0.25) {
      const p = this.progress / 0.25;
      this.singularityMesh.visible = true;
      this.singularityMesh.scale.setScalar(0.2 + p * 1.8);
      this.singularityMesh.material.opacity = p;
      this.particleMaterial.opacity = 0;
      this.shockwave.material.opacity = 0;
    }
    // Phase B: Expansion Burst (0.25 to 0.65)
    else if (this.progress <= 0.65) {
      const p = (this.progress - 0.25) / 0.4;
      this.singularityMesh.visible = false;

      // Expand shockwave
      this.shockwave.material.opacity = (1 - p) * 0.9;
      this.shockwave.scale.setScalar(1 + p * 120);

      // Expand 3D particles along velocity vectors
      this.particleMaterial.opacity = 1.0;
      this.particleMaterial.size = 4.0 * (1 - p * 0.4);

      const positions = this.particles.geometry.attributes.position.array;
      const velocities = this.particles.geometry.attributes.velocity.array;
      for (let i = 0; i < this.particleCount; i++) {
        positions[i * 3] = velocities[i * 3] * p;
        positions[i * 3 + 1] = velocities[i * 3 + 1] * p;
        positions[i * 3 + 2] = velocities[i * 3 + 2] * p;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }
    // Phase C & D: Universe Birth & Dissipation (0.65 to 1.0)
    else {
      const p = (this.progress - 0.65) / 0.35;
      this.shockwave.material.opacity = 0;

      // Particles slow down and fade out
      this.particleMaterial.opacity = (1 - p);

      const baseP = 1.0 + p * 0.4;
      const positions = this.particles.geometry.attributes.position.array;
      const velocities = this.particles.geometry.attributes.velocity.array;
      for (let i = 0; i < this.particleCount; i++) {
        positions[i * 3] = velocities[i * 3] * baseP;
        positions[i * 3 + 1] = velocities[i * 3 + 1] * baseP;
        positions[i * 3 + 2] = velocities[i * 3 + 2] * baseP;
      }
      this.particles.geometry.attributes.position.needsUpdate = true;
    }

    if (this.progress >= 1.0) {
      this.group.visible = false;
      this.isActive = false;
    }
  }
}
