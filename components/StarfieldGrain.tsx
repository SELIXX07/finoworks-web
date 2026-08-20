'use client';

import { useEffect, useRef } from 'react';

export default function StarfieldGrain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Subtle micro particles in light cobalt
    const particleCount = 45;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 0.08 + 0.02,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.alpha += p.speed;
        const currentAlpha = Math.abs(Math.sin(p.alpha)) * 0.25 + 0.05;
        ctx.fillStyle = `rgba(0, 85, 255, ${currentAlpha})`;
        ctx.fillRect(p.x, p.y, p.size, p.size);
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0 h-screen w-screen"
        aria-hidden="true"
      />
      <div className="grain" aria-hidden="true" />
    </>
  );
}
