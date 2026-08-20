'use client';

import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const el = barRef.current;
      if (!el) return;

      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = Math.min(1, Math.max(0, window.scrollY / totalScroll));
        el.style.transform = `scaleX(${progress})`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    updateProgress();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[999999] pointer-events-none bg-slate-200/40">
      <div
        ref={barRef}
        className="h-full bg-gradient-to-r from-[#0055ff] via-[#00d2ff] to-[#0055ff] origin-left shadow-[0_0_8px_rgba(0,85,255,0.6)]"
        style={{
          transform: 'scaleX(0)',
          willChange: 'transform',
        }}
      />
    </div>
  );
}
