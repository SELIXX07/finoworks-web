'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!isFinePointer) return;

    document.body.classList.add('has-custom-cursor');

    const handleMouseMove = (e: MouseEvent) => {
      setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      const cursorTarget = target.closest('[data-cursor]') as HTMLElement;

      if (cursorTarget) {
        setIsHovered(true);
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
      } else {
        setIsHovered(false);
        setCursorText('');
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.body.classList.remove('has-custom-cursor');
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-electric-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />

      {/* Outer Lag Ring Halo (DayNight style) */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-electric-500/60 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-out flex items-center justify-center text-[10px] font-mono tracking-widest text-electric-600 uppercase font-bold ${
          isHovered
            ? 'w-20 h-20 bg-electric-500/10 border-electric-500 scale-100 backdrop-blur-[2px] shadow-lg shadow-electric-500/10'
            : 'w-7 h-7 opacity-50'
        }`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        {isHovered && cursorText}
      </div>
    </>
  );
}
