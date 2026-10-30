import React, { useState, useRef } from 'react';
import { CinematicCanvas } from './components/CinematicCanvas';
import { IntroScreen } from './components/IntroScreen';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ContactSection } from './sections/ContactSection';
import { useScrollSpy } from './hooks/useScrollSpy';
import { audioManager } from './audio/AudioManager';
import { createCosmicExplosionTimeline } from './animations/cosmicExplosion';

export default function App() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isExploding, setIsExploding] = useState(false);
  const [phase, setPhase] = useState('singularity'); // 'singularity' | 'expansion' | 'birth' | 'transition'
  
  const canvasRef = useRef(null);
  const timelineRef = useRef(null);

  const sectionIds = ['hero', 'about', 'projects', 'skills', 'experience', 'contact'];
  const { activeSection, scrollProgress } = useScrollSpy(sectionIds);

  const handleStartExperience = (soundEnabled) => {
    setIsExploding(true);
    setPhase('singularity');

    // Handle audio start
    if (soundEnabled) {
      audioManager.isEnabled = true;
      audioManager.play();
    } else {
      audioManager.isEnabled = false;
    }

    // Trigger 3D explosion setup
    if (canvasRef.current) {
      canvasRef.current.triggerExplosion();
    }

    // Run GSAP timeline
    timelineRef.current = createCosmicExplosionTimeline({
      onUpdate: (progress) => {
        if (canvasRef.current) {
          canvasRef.current.setExplosionProgress(progress);
        }
      },
      onPhaseChange: (currentPhase) => {
        setPhase(currentPhase);
      },
      onComplete: () => {
        setIsExploding(false);
        setHasStarted(true);
      }
    });

    timelineRef.current.play();
  };

  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.skip();
    } else {
      setIsExploding(false);
      setHasStarted(true);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#03050a] text-zinc-100 selection:bg-cosmic-purple selection:text-white font-sans">
      
      {/* 3D Background Space Engine */}
      <CinematicCanvas ref={canvasRef} scrollProgress={scrollProgress} />

      {/* Intro Cinematographic Screen */}
      {!hasStarted && (
        <IntroScreen
          onStart={handleStartExperience}
          isExploding={isExploding}
          phase={phase}
          onSkip={handleSkip}
        />
      )}

      {/* Main Portfolio Content */}
      <div className={`relative z-10 transition-opacity duration-1000 ${
        hasStarted ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <Navbar activeSection={activeSection} />

        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
      </div>

    </div>
  );
}
