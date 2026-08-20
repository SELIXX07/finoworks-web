'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('Initializing SWIFT Node Handshake...');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const phases = [
      'Initializing SWIFT Node Handshake...',
      'Verifying CSCF v2026 Protocols...',
      'Loading ISO 20022 MX Libraries...',
      'Connecting Global Hubs (Kenya • Bangalore • USA)...',
      'System Secure & Ready.'
    ];

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }

        const next = prev + 2;
        const phaseIndex = Math.min(
          Math.floor((next / 100) * phases.length),
          phases.length - 1
        );
        setPhase(phases[phaseIndex]);
        return next;
      });
    }, 25);

    return () => clearInterval(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[99999] bg-navy-900 text-white flex flex-col justify-between p-8 md:p-12 transition-opacity duration-700">
      <div className="flex justify-between items-center text-xs font-mono tracking-widest text-slate-400">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-electric-400 animate-ping" />
          FINOWORKS TECHNOLOGIES
        </span>
        <span>EST. 2025 • NAIROBI • BANGALORE • USA</span>
      </div>

      <div className="max-w-2xl mx-auto text-center space-y-4">
        <div className="inline-block text-4xl md:text-6xl font-extrabold tracking-tight">
          Fino<span className="text-electric-400">Works</span>
        </div>
        <p className="text-sm md:text-base font-mono text-electric-300 animate-pulse">
          {phase}
        </p>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs font-mono text-slate-400">
          <span>SWIFT CERTIFIED PARTNER & CSP ASSESSOR</span>
          <span className="text-electric-400 font-bold">{progress}%</span>
        </div>
        <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-electric-500 to-electric-200 transition-all duration-75"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
