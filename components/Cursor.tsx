'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check for fine pointer (mouse/trackpad on desktop)
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('has-custom-cursor');

    let mouseX = -100;
    let mouseY = -100;
    let haloX = -100;
    let haloY = -100;
    let isHovered = false;
    let currentBadge = '';
    let animId: number;

    const handlePointerMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // 1. Instant 0ms response on center dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }

      // 2. Check interactive hover target
      const target = e.target as HTMLElement | null;
      const interactiveEl = target?.closest('a, button, [data-cursor], input, select, textarea');

      if (interactiveEl) {
        isHovered = true;
        const customType = interactiveEl.getAttribute('data-cursor');
        if (customType === 'view') currentBadge = 'VIEW';
        else if (customType === 'spin') currentBadge = 'SPIN';
        else if (customType === 'go') currentBadge = 'GO';
        else currentBadge = '';
      } else {
        isHovered = false;
        currentBadge = '';
      }

      // Update badge text if changed
      if (textRef.current) {
        textRef.current.textContent = currentBadge;
      }

      // Update halo styling classes directly on DOM
      if (haloRef.current) {
        if (currentBadge) {
          haloRef.current.className =
            'fixed top-0 left-0 rounded-full pointer-events-none z-[2000000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border] duration-150 w-14 h-14 bg-[#0055ff] text-white shadow-lg';
        } else if (isHovered) {
          haloRef.current.className =
            'fixed top-0 left-0 rounded-full pointer-events-none z-[2000000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border] duration-150 w-11 h-11 bg-black/10 border border-black/30';
        } else {
          haloRef.current.className =
            'fixed top-0 left-0 rounded-full pointer-events-none z-[2000000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center transition-[width,height,background-color,border] duration-150 w-8 h-8 border border-black/25';
        }
      }
    };

    // 3. Ultra-responsive 120Hz/60Hz physics loop for trailing halo
    const followLoop = () => {
      // Fast snappy follow rate (0.42 multiplier)
      haloX += (mouseX - haloX) * 0.42;
      haloY += (mouseY - haloY) * 0.42;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${haloX}px, ${haloY}px, 0)`;
      }

      animId = requestAnimationFrame(followLoop);
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });
    animId = requestAnimationFrame(followLoop);

    return () => {
      window.removeEventListener('mousemove', handlePointerMove);
      cancelAnimationFrame(animId);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);

  return (
    <>
      {/* Center Dot (Instant 0ms tracking) */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-black rounded-full pointer-events-none z-[2000001] -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
        }}
      />

      {/* Kinetic Halo Ring (Fast snappy lerp) */}
      <div
        ref={haloRef}
        className="fixed top-0 left-0 w-8 h-8 border border-black/25 rounded-full pointer-events-none z-[2000000] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
        style={{
          transform: 'translate3d(-100px, -100px, 0)',
          willChange: 'transform',
        }}
      >
        <span
          ref={textRef}
          className="font-mono text-[9px] font-bold tracking-widest leading-none"
        />
      </div>
    </>
  );
}
