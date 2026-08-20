'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Activity, Globe, Lock } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 600);
    let height = (canvas.height = 600);

    const nodes: { x: number; y: number; z: number; baseR: number }[] = [];
    const numNodes = 90;

    for (let i = 0; i < numNodes; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 220;
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseR: r,
      });
    }

    let angleY = 0.003;
    let angleX = 0.002;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw outer glowing halo
      const grad = ctx.createRadialGradient(cx, cy, 50, cx, cy, 260);
      grad.addColorStop(0, 'rgba(0, 102, 255, 0.12)');
      grad.addColorStop(1, 'rgba(0, 102, 255, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(cx, cy, 260, 0, Math.PI * 2);
      ctx.fill();

      const projected: { x: number; y: number; z: number }[] = [];

      nodes.forEach((node) => {
        // Rotate around Y
        let x1 = node.x * Math.cos(angleY) - node.z * Math.sin(angleY);
        let z1 = node.z * Math.cos(angleY) + node.x * Math.sin(angleY);

        // Rotate around X
        let y2 = node.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = z1 * Math.cos(angleX) + node.y * Math.sin(angleX);

        node.x = x1;
        node.y = y2;
        node.z = z2;

        const scale = 300 / (300 + z2);
        projected.push({
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
        });
      });

      // Draw node connections
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 85) {
            const alpha = (1 - dist / 85) * 0.4;
            ctx.strokeStyle = `rgba(0, 102, 255, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projected[i].x, projected[i].y);
            ctx.lineTo(projected[j].x, projected[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw node points
      projected.forEach((p) => {
        const radius = Math.max(1.5, ((p.z + 220) / 440) * 3);
        const alpha = ((p.z + 220) / 440) * 0.8 + 0.2;

        ctx.fillStyle = `rgba(0, 102, 255, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-8">
            {/* Status Badge (DayNight Style) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SWIFT CERTIFIED CSP PROVIDER LABEL 2026</span>
              <span className="text-slate-300">/</span>
              <span className="text-electric-500 font-semibold">100% STP GUARANTEE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.08]">
              Securing the Future of{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-electric-500 to-electric-200">
                Global Financial Messaging.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Expert-led SWIFT Integration, ISO 20022 MT-to-MX Migration, and Authorized Independent CSP Assessments for Modern Banks & Financial Institutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/contact-us"
                className="bg-navy-900 hover:bg-electric-500 text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-electric-500/25 transition-all duration-300 flex items-center justify-center gap-3 group text-sm"
                data-cursor="go"
              >
                <span>Get Assessment Ready</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/iso-20022-migration"
                className="bg-white hover:bg-slate-100 text-navy-900 border border-slate-300 font-bold px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 text-sm shadow-sm"
                data-cursor="view"
              >
                <span>Explore ISO 20022 Converter</span>
              </Link>
            </div>

            {/* Trust Pill Indicators */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-electric-500" />
                <span>CISA Certified Assessors</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Activity className="w-4 h-4 text-electric-500" />
                <span>Zero Downtime Migration</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Globe className="w-4 h-4 text-electric-500" />
                <span>24/7 Global Support</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive 3D Node Sphere Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative w-full max-w-[480px] aspect-square flex items-center justify-center">
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain pointer-events-none drop-shadow-xl"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-slate-200/80 shadow-xl space-y-1 text-left">
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-600 font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>SECURE ZONE ACTIVE</span>
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Nairobi • Bangalore • USA • Middle East
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
