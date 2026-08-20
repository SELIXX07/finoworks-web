'use client';

import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollPct((window.scrollY / totalScroll) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[99999] pointer-events-none bg-slate-200/20">
      <div
        className="h-full bg-gradient-to-r from-electric-500 via-electric-300 to-electric-200 transition-all duration-75 ease-out shadow-[0_0_12px_rgba(0,102,255,0.8)]"
        style={{ width: `${scrollPct}%` }}
      />
    </div>
  );
}
