'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Activity, Globe, Lock, Sparkles } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [orbTapActive, setOrbTapActive] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = 650);
    let height = (canvas.height = 650);

    const nodes: { x: number; y: number; z: number; baseR: number; alphaOffset: number }[] = [];
    const numNodes = 110;

    for (let i = 0; i < numNodes; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const r = 230;
      nodes.push({
        x: r * Math.sin(phi) * Math.cos(theta),
        y: r * Math.sin(phi) * Math.sin(theta),
        z: r * Math.cos(phi),
        baseR: r,
        alphaOffset: Math.random() * Math.PI * 2,
      });
    }

    let angleY = 0.0035;
    let angleX = 0.002;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw inner glowing core
      const coreGrad = ctx.createRadialGradient(cx, cy, 30, cx, cy, 240);
      coreGrad.addColorStop(0, 'rgba(0, 210, 255, 0.25)');
      coreGrad.addColorStop(0.5, 'rgba(0, 102, 255, 0.1)');
      coreGrad.addColorStop(1, 'rgba(0, 102, 255, 0)');
      ctx.fillStyle = coreGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, 240, 0, Math.PI * 2);
      ctx.fill();

      const projected: { x: number; y: number; z: number; alphaOffset: number }[] = [];

      nodes.forEach((node) => {
        let x1 = node.x * Math.cos(angleY) - node.z * Math.sin(angleY);
        let z1 = node.z * Math.cos(angleY) + node.x * Math.sin(angleY);

        let y2 = node.y * Math.cos(angleX) - z1 * Math.sin(angleX);
        let z2 = z1 * Math.cos(angleX) + node.y * Math.sin(angleX);

        node.x = x1;
        node.y = y2;
        node.z = z2;

        const scale = 320 / (320 + z2);
        projected.push({
          x: cx + x1 * scale,
          y: cy + y2 * scale,
          z: z2,
          alphaOffset: node.alphaOffset,
        });
      });

      // Draw node connection lines
      ctx.lineWidth = 0.6;
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const dx = projected[i].x - projected[j].x;
          const dy = projected[i].y - projected[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 80) {
            const alpha = (1 - dist / 80) * 0.35;
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
        const radius = Math.max(1.5, ((p.z + 230) / 460) * 3.5);
        const pulse = (Math.sin(time + p.alphaOffset) + 1) / 2;
        const alpha = ((p.z + 230) / 460) * 0.6 + pulse * 0.4;

        ctx.fillStyle = p.z > 50 ? `rgba(0, 210, 255, ${alpha})` : `rgba(0, 102, 255, ${alpha})`;
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
    <header className="relative pt-32 pb-20 md:pt-48 md:pb-36 overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white">
      {/* Background Mesh Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Typography & CTAs (DayNight Style) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Status Eyebrow */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-mono text-slate-700 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SWIFT CERTIFIED CSP PROVIDER 2026</span>
              <span className="text-slate-300">/</span>
              <span className="text-electric-600 font-bold">100% STP COMPLIANT</span>
            </div>

            {/* Main Display Headline with Serif emphasis */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-navy-900 tracking-tight leading-[1.05]">
              Securing the Future of{' '}
              <em className="font-serif italic font-normal text-electric-500 underline decoration-electric-200 underline-offset-8">
                Global Financial
              </em>{' '}
              Messaging.
            </h1>

            {/* Subhead */}
            <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
              Expert-led SWIFT Alliance Integration, ISO 20022 MT-to-MX Migration, and Authorized Independent CSP Assessments for Tier-1 Banks & Financial Institutions.
            </p>

            {/* Fixed Offer & Action Bar */}
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
                <span>Test Live MX Converter</span>
              </Link>
            </div>

            {/* Trust Pill Badges */}
            <div className="pt-8 border-t border-slate-200/90 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <ShieldCheck className="w-4 h-4 text-electric-500 flex-shrink-0" />
                <span>CISA Certified Auditors</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Activity className="w-4 h-4 text-electric-500 flex-shrink-0" />
                <span>Zero Downtime Migration</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                <Globe className="w-4 h-4 text-electric-500 flex-shrink-0" />
                <span>24/7 Global Infrastructure</span>
              </div>
            </div>
          </div>

          {/* Right Column: DayNight Concentric Rotating Ring Orb Visualizer */}
          <div className="lg:col-span-5 relative flex items-center justify-center select-none">
            <div
              className={`relative w-full max-w-[480px] aspect-square flex items-center justify-center cursor-pointer transition-transform duration-300 ${
                orbTapActive ? 'scale-95' : 'hover:scale-105'
              }`}
              onClick={() => {
                setOrbTapActive(true);
                setTimeout(() => setOrbTapActive(false), 200);
              }}
              data-cursor="spin"
            >
              {/* Concentric Rotating Orbital Rings (DayNight pattern) */}
              <div className="orb-ring orb-ring-1" />
              <div className="orb-ring orb-ring-2" />
              <div className="orb-ring orb-ring-3" />

              {/* 3D Rotating Node Particle Canvas */}
              <canvas
                ref={canvasRef}
                className="w-full h-full object-contain pointer-events-none drop-shadow-2xl relative z-10"
              />

              {/* Floating Telemetry Badge */}
              <div className="absolute -bottom-4 left-4 bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200/90 shadow-xl space-y-1 text-left z-20">
                <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-600 font-bold">
                  <Lock className="w-3.5 h-3.5" />
                  <span>SECURE ZONE • CSCF v2026 ACTIVE</span>
                </div>
                <div className="text-xs text-slate-600 font-medium">
                  Nairobi HQ • Bangalore Dev Center • USA Hub
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
