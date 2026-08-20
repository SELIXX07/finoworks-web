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

    // Static Stars
    const starCount = 60;
    const stars = Array.from({ length: starCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.1 + 0.02,
    }));

    // Shooting Star (DayNight pattern)
    let shootingStar: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      len: number;
      life: number;
      dur: number;
    } | null = null;
    let nextShoot = performance.now() + 2500;

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Render micro stars
      stars.forEach((s) => {
        s.alpha += s.speed;
        const currentAlpha = Math.abs(Math.sin(s.alpha)) * 0.4 + 0.1;
        ctx.fillStyle = `rgba(0, 102, 255, ${currentAlpha})`;
        ctx.fillRect(s.x, s.y, s.size, s.size);
      });

      // Render shooting star
      if (!shootingStar && time >= nextShoot) {
        const angle = ((Math.random() * 20 + 25) * Math.PI) / 180;
        shootingStar = {
          x: Math.random() * width * 0.8,
          y: Math.random() * height * 0.3,
          vx: Math.cos(angle) * 2.2,
          vy: Math.sin(angle) * 2.2,
          len: Math.random() * 100 + 100,
          life: 0,
          dur: Math.random() * 400 + 500,
        };
      }

      if (shootingStar) {
        shootingStar.life += 16;
        shootingStar.x += shootingStar.vx * 16;
        shootingStar.y += shootingStar.vy * 16;
        const progress = shootingStar.life / shootingStar.dur;

        if (progress >= 1) {
          shootingStar = null;
          nextShoot = time + 5000 + Math.random() * 6000;
        } else {
          const fade = Math.sin(progress * Math.PI);
          const tailX = shootingStar.x - shootingStar.vx * shootingStar.len;
          const tailY = shootingStar.y - shootingStar.vy * shootingStar.len;

          const grad = ctx.createLinearGradient(tailX, tailY, shootingStar.x, shootingStar.y);
          grad.addColorStop(0, 'rgba(0, 102, 255, 0)');
          grad.addColorStop(1, `rgba(0, 210, 255, ${fade * 0.8})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 1.5;
          ctx.beginPath();
          ctx.moveTo(tailX, tailY);
          ctx.lineTo(shootingStar.x, shootingStar.y);
          ctx.stroke();
        }
      }

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
      <div className="grain-overlay" aria-hidden="true" />
    </>
  );
}
