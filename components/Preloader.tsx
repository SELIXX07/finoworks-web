'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('Initializing SWIFT Node Handshake...');
  const [mounted, setMounted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Only run on the very first page load in a session
    if (typeof window !== 'undefined') {
      const alreadyLoaded = sessionStorage.getItem('finoworks_preloader_seen');
      if (alreadyLoaded) {
        return;
      }
      setMounted(true);
      sessionStorage.setItem('finoworks_preloader_seen', 'true');
    }

    const phases = [
      'Initializing SWIFT Node Handshake...',
      'Verifying CSCF v2026 Protocols...',
      'Loading ISO 20022 MX Libraries...',
      'Connecting Global Hubs (Kenya • India • USA • GCC)...',
      'System Secure & Ready.'
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setFadeOut(true);
          setTimeout(() => setMounted(false), 600);
          return 100;
        }

        const next = prev + 3;
        const phaseIndex = Math.min(
          Math.floor((next / 100) * phases.length),
          phases.length - 1
        );
        setPhase(phases[phaseIndex]);
        return next;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-white text-black flex flex-col justify-between p-8 md:p-12 transition-all duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100 pointer-events-auto'
      }`}
    >
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-slate-500 font-bold">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-ping" />
          FINOWORKS TECHNOLOGIES
        </span>
        <span>EST. 2025 • NAIROBI • BANGALORE • USA • GCC</span>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-block text-4xl md:text-6xl font-extrabold tracking-tight text-black">
          finoworks<span className="text-[#0055ff]">.</span>
        </div>
        <p className="text-xs md:text-sm font-mono text-[#0055ff] font-semibold">
          {phase}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono text-slate-500 font-bold">
          <span>SWIFT CERTIFIED PROVIDER & CSP ASSESSOR</span>
          <span className="text-[#0055ff]">{progress}%</span>
        </div>
        <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0055ff] to-[#00d2ff] transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
