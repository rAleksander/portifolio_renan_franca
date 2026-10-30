import * as THREE from 'three';

/**
 * Manages comets traveling diagonally from top-right to bottom-left
 * with glowing particle trails and spaced intervals.
 */
export class Comets {
  constructor(maxComets = 3) {
    this.group = new THREE.Group();
    this.comets = [];

    for (let i = 0; i < maxComets; i++) {
      const comet = this.createComet(i);
      this.comets.push(comet);
      this.group.add(comet.mesh);
    }
  }

  createComet(index) {
    // Head: glowing sphere
    const headGeo = new THREE.SphereGeometry(1.6, 16, 16);
    const headMat = new THREE.MeshBasicMaterial({
      color: 0x93c5fd,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });
    const headMesh = new THREE.Mesh(headGeo, headMat);

    // Trail: line geometry with fading vertices
    const trailSegments = 30;
    const trailPositions = new Float32Array(trailSegments * 3);
    const trailColors = new Float32Array(trailSegments * 3);

    for (let i = 0; i < trailSegments; i++) {
      const ratio = 1 - (i / trailSegments);
      trailPositions[i * 3] = 0;
      trailPositions[i * 3 + 1] = 0;
      trailPositions[i * 3 + 2] = 0;

      // Color fades from cyan/white to dark violet/transparent
      trailColors[i * 3] = 0.4 * ratio;
      trailColors[i * 3 + 1] = 0.7 * ratio;
      trailColors[i * 3 + 2] = 1.0 * ratio;
    }

    const trailGeo = new THREE.BufferGeometry();
    trailGeo.setAttribute('position', new THREE.BufferAttribute(trailPositions, 3));
    trailGeo.setAttribute('color', new THREE.BufferAttribute(trailColors, 3));

    const trailMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      linewidth: 2,
    });

    const trailMesh = new THREE.Line(trailGeo, trailMat);

    const cometGroup = new THREE.Group();
    cometGroup.add(headMesh);
    cometGroup.add(trailMesh);

    return {
      mesh: cometGroup,
      head: headMesh,
      trail: trailMesh,
      trailPositions,
      active: false,
      nextSpawnTime: Math.random() * 4 + index * 6 + 2, // spaced spawn times
      progress: 0,
      startX: 0,
      startY: 0,
      startZ: 0,
      endX: 0,
      endY: 0,
      endZ: 0,
      speed: 0.008,
      history: []
    };
  }

  spawn(comet) {
    comet.active = true;
    comet.progress = 0;
    comet.speed = 0.006 + Math.random() * 0.006;

    // Start in top-right region (+X, +Y) beyond viewport
    comet.startX = 400 + Math.random() * 400;
    comet.startY = 300 + Math.random() * 250;
    comet.startZ = -200 - Math.random() * 250;

    // End in bottom-left region (-X, -Y) beyond viewport
    comet.endX = -600 - Math.random() * 400;
    comet.endY = -400 - Math.random() * 250;
    comet.endZ = comet.startZ + (Math.random() - 0.5) * 80;

    comet.mesh.position.set(comet.startX, comet.startY, comet.startZ);
    comet.mesh.visible = true;
    comet.history = [];
  }

  update(delta, time) {
    for (const comet of this.comets) {
      if (!comet.active) {
        if (time >= comet.nextSpawnTime) {
          this.spawn(comet);
        }
        continue;
      }

      comet.progress += comet.speed;

      if (comet.progress >= 1) {
        comet.active = false;
        comet.mesh.visible = false;
        comet.nextSpawnTime = time + Math.random() * 10 + 6; // Tranquil gap between comets
        continue;
      }

      // Linear diagonal interpolation
      const currentX = THREE.MathUtils.lerp(comet.startX, comet.endX, comet.progress);
      const currentY = THREE.MathUtils.lerp(comet.startY, comet.endY, comet.progress);
      const currentZ = THREE.MathUtils.lerp(comet.startZ, comet.endZ, comet.progress);

      comet.mesh.position.set(currentX, currentY, currentZ);

      // Record history for particle trail
      comet.history.unshift({ x: currentX, y: currentY, z: currentZ });
      if (comet.history.length > 30) {
        comet.history.pop();
      }

      // Update trail geometry vertices relative to head
      const positions = comet.trail.geometry.attributes.position.array;
      for (let i = 0; i < 30; i++) {
        if (i < comet.history.length) {
          positions[i * 3] = comet.history[i].x - currentX;
          positions[i * 3 + 1] = comet.history[i].y - currentY;
          positions[i * 3 + 2] = comet.history[i].z - currentZ;
        } else {
          positions[i * 3] = 0;
          positions[i * 3 + 1] = 0;
          positions[i * 3 + 2] = 0;
        }
      }
      comet.trail.geometry.attributes.position.needsUpdate = true;
    }
  }
}
