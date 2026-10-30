import React, { useEffect, useRef, useState, useImperativeHandle, forwardRef } from 'react';
import { CosmicScene } from '../three/CosmicScene';

export const CinematicCanvas = forwardRef(function CinematicCanvas({ scrollProgress = 0 }, ref) {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const [webGLError, setWebGLError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    try {
      sceneRef.current = new CosmicScene(containerRef.current);
    } catch (err) {
      console.warn('WebGL initialization failed, falling back to CSS cosmic gradient:', err);
      setWebGLError(true);
    }

    return () => {
      if (sceneRef.current) {
        sceneRef.current.destroy();
        sceneRef.current = null;
      }
    };
  }, []);

  // Update scroll progress
  useEffect(() => {
    if (sceneRef.current) {
      sceneRef.current.setScrollProgress(scrollProgress);
    }
  }, [scrollProgress]);

  // Expose explosion controls to parent
  useImperativeHandle(ref, () => ({
    triggerExplosion: () => {
      if (sceneRef.current) {
        sceneRef.current.triggerExplosion();
      }
    },
    setExplosionProgress: (p) => {
      if (sceneRef.current) {
        sceneRef.current.setExplosionProgress(p);
      }
    }
  }));

  if (webGLError) {
    return (
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0e172e] via-[#060a14] to-[#03050a]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.06)_0%,_transparent_70%)]" />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden"
      style={{ left: 0, top: 0, right: 0, bottom: 0, width: '100vw', height: '100vh' }}
      aria-hidden="true"
    />
  );
});
