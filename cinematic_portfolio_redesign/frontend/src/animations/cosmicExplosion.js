import gsap from 'gsap';

/**
 * Creates and runs the GSAP timeline for the 4-phase Cosmic Explosion.
 *
 * @param {Object} options
 * @param {Function} options.onUpdate - receives progress from 0.0 to 1.0
 * @param {Function} options.onPhaseChange - notifies phase ('singularity', 'expansion', 'birth', 'transition')
 * @param {Function} options.onComplete - called when transition is complete
 * @returns {Object} timeline controller with kill() and skip() methods
 */
export function createCosmicExplosionTimeline({
  onUpdate = () => {},
  onPhaseChange = () => {},
  onComplete = () => {}
}) {
  const state = { progress: 0 };

  const tl = gsap.timeline({
    paused: true,
    onComplete: () => {
      onComplete();
    }
  });

  // Check for prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    onPhaseChange('transition');
    onUpdate(1);
    onComplete();
    return {
      play: () => onComplete(),
      skip: () => onComplete(),
      kill: () => {}
    };
  }

  // Phase A: Singularity (0 to 1.2s)
  tl.call(() => onPhaseChange('singularity'), null, 0);
  tl.to(state, {
    progress: 0.25,
    duration: 1.2,
    ease: 'power2.in',
    onUpdate: () => onUpdate(state.progress)
  }, 0);

  // Phase B: Expansion (1.2s to 2.6s)
  tl.call(() => onPhaseChange('expansion'), null, 1.2);
  tl.to(state, {
    progress: 0.65,
    duration: 1.4,
    ease: 'expo.out',
    onUpdate: () => onUpdate(state.progress)
  }, 1.2);

  // Phase C: Birth of Universe (2.6s to 3.6s)
  tl.call(() => onPhaseChange('birth'), null, 2.6);
  tl.to(state, {
    progress: 0.88,
    duration: 1.0,
    ease: 'power1.inOut',
    onUpdate: () => onUpdate(state.progress)
  }, 2.6);

  // Phase D: Transition (3.6s to 4.4s)
  tl.call(() => onPhaseChange('transition'), null, 3.6);
  tl.to(state, {
    progress: 1.0,
    duration: 0.8,
    ease: 'power2.out',
    onUpdate: () => onUpdate(state.progress)
  }, 3.6);

  return {
    play: () => tl.play(),
    skip: () => {
      tl.progress(1);
      onUpdate(1);
      onComplete();
    },
    kill: () => tl.kill()
  };
}
