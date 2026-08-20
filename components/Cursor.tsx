'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [hovered, setHovered] = useState(false);
  const [cursorText, setCursorText] = useState('');
  const [isFinePointer, setIsFinePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsFinePointer(mediaQuery.matches);
    if (mediaQuery.matches) {
      document.body.classList.add('has-custom-cursor');
    }

    const handlePointerMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('a, button, [data-cursor], input');

      if (interactiveEl) {
        setHovered(true);
        const customType = interactiveEl.getAttribute('data-cursor');
        if (customType === 'view') setCursorText('VIEW');
        else if (customType === 'spin') setCursorText('SPIN');
        else if (customType === 'go') setCursorText('GO');
        else setCursorText('');
      } else {
        setHovered(false);
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handlePointerMove);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  useEffect(() => {
    if (!isFinePointer) return;
    let animId: number;

    const follow = () => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.16,
        y: prev.y + (pos.y - prev.y) * 0.16,
      }));
      animId = requestAnimationFrame(follow);
    };

    animId = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(animId);
  }, [pos, isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Center Dot */}
      <div
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[2000001] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{
          transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
          opacity: hovered && cursorText ? 0 : 1,
        }}
      />

      {/* Kinetic Halo Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-[2000000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-all duration-200 ${
          cursorText
            ? 'w-16 h-16 bg-[#0055ff] text-white shadow-xl'
            : hovered
            ? 'w-12 h-12 bg-black/10 border border-black/30'
            : 'w-8 h-8 border border-black/25'
        }`}
        style={{
          transform: `translate3d(${trail.x}px, ${trail.y}px, 0)`,
        }}
      >
        {cursorText && (
          <span className="font-mono text-[9px] font-bold tracking-widest leading-none">
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
