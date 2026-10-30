import * as THREE from 'three';

/**
 * StarField with full 360-degree spherical celestial distribution.
 * Eliminates any lateral voids or empty strips on any viewport width or aspect ratio.
 */
export class StarField {
  constructor(count = 4200) {
    this.count = count;
    this.group = new THREE.Group();

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const twinklePhases = new Float32Array(count);

    const baseColors = [
      new THREE.Color(0xffffff), // Pure white
      new THREE.Color(0xdbeafe), // Icy blue
      new THREE.Color(0x38bdf8), // Electric cyan
      new THREE.Color(0xc084fc), // Soft violet
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xfef08a), // Warm distant star
    ];

    for (let i = 0; i < count; i++) {
      // Uniform spherical coordinates for complete 360-degree coverage
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      // Radius stratified between 250 and 1600 units
      const radius = 250 + Math.pow(Math.random(), 0.6) * 1350;

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Color assignment
      const color = baseColors[Math.floor(Math.random() * baseColors.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;

      // Scale variation
      sizes[i] = Math.random() * 2.5 + 0.8;
      twinklePhases[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    this.twinklePhases = twinklePhases;
    this.baseSizes = Float32Array.from(sizes);

    this.material = new THREE.PointsMaterial({
      size: 2.4,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true,
    });

    this.points = new THREE.Points(geometry, this.material);
    this.group.add(this.points);
  }

  update(time, bassEnergy = 0.2, scrollProgress = 0) {
    // Symmetrical rotation around celestial polar axis (never introduces lateral voids)
    this.group.rotation.y = time * 0.01;
    this.group.rotation.x = Math.sin(time * 0.006) * 0.02 + scrollProgress * 0.12;
    this.group.position.y = scrollProgress * 60;

    // React gently to bass energy
    this.material.opacity = 0.82 + bassEnergy * 0.18;
    this.material.size = 2.2 + bassEnergy * 0.8;
  }
}
