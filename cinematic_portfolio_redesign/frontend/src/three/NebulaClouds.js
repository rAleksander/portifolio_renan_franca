import * as THREE from 'three';

/**
 * Creates subtle, volumetric cosmic nebulae with wide 360-degree cylindrical coverage.
 * Ensures the entire screen (left, center, right) has continuous atmospheric depth.
 */
export class NebulaClouds {
  constructor() {
    this.group = new THREE.Group();

    // Procedural soft glowing sprite texture
    const canvas = document.createElement('canvas');
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.6)');
    gradient.addColorStop(0.7, 'rgba(139, 92, 246, 0.25)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 128, 128);

    const texture = new THREE.CanvasTexture(canvas);

    const nebulaCount = 80;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nebulaCount * 3);
    const colors = new Float32Array(nebulaCount * 3);

    const colorPalette = [
      new THREE.Color(0x0284c7), // Cyan/Blue
      new THREE.Color(0x6366f1), // Indigo
      new THREE.Color(0x7c3aed), // Violet
      new THREE.Color(0x0369a1), // Deep Ocean
      new THREE.Color(0x9333ea), // Purple Accent
    ];

    for (let i = 0; i < nebulaCount; i++) {
      // Cylindrical coordinates covering wide horizontal view angle
      const angle = (i / nebulaCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.5;
      const radius = 400 + Math.random() * 800;
      
      positions[i * 3] = radius * Math.cos(angle);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 900;
      positions[i * 3 + 2] = -Math.abs(radius * Math.sin(angle)) * 0.8 - 100;

      const col = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    this.material = new THREE.PointsMaterial({
      size: 240,
      map: texture,
      vertexColors: true,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.points = new THREE.Points(geometry, this.material);
    this.group.add(this.points);
  }

  update(time, bassEnergy = 0.2, scrollProgress = 0) {
    this.group.rotation.y = time * 0.004;
    this.group.position.y = scrollProgress * 40;
    
    // Gentle pulse with audio energy
    this.material.opacity = 0.18 + bassEnergy * 0.12;
    this.material.size = 230 + bassEnergy * 40;
  }
}
