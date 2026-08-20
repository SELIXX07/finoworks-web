'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Central Cursor Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-electric-500 rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      />
      {/* Outer Lag Ring Halo */}
      <div
        className={`fixed top-0 left-0 rounded-full border border-electric-500/50 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all duration-300 flex items-center justify-center text-[10px] font-mono tracking-widest text-electric-500 uppercase font-semibold ${
          isHovered
            ? 'w-16 h-16 bg-electric-500/10 border-electric-500 scale-110 backdrop-blur-[2px]'
            : 'w-8 h-8 opacity-40'
        }`}
        style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      >
        {isHovered && cursorText}
      </div>
    </>
  );
}
