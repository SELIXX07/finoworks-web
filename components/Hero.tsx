'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [website, setWebsite] = useState('');

  /* ─── Interactive Particle Orb (FinoWorks blue-cyan gradient) ─── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const SIZE = Math.min(600, window.innerWidth * 0.44);
    canvas.width = SIZE;
    canvas.height = SIZE;
    const CX = SIZE / 2;
    const CY = SIZE / 2;
    const R = SIZE * 0.44;

    /* Golden-ratio sphere point distribution */
    const N = 520;
    const pts = Array.from({ length: N }, (_, i) => {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / N);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        ox: Math.sin(theta) * Math.cos(phi),
        oy: Math.sin(theta) * Math.sin(phi),
        oz: Math.cos(theta),
        size: Math.random() * 2.5 + 0.8,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      /* Ambient glow */
      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 1.1);
      grd.addColorStop(0, 'rgba(0,102,255,0.18)');
      grd.addColorStop(0.5, 'rgba(0,210,255,0.06)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(CX, CY, R * 1.1, 0, Math.PI * 2);
      ctx.fill();

      /* Orbit rings */
      const rings = [
        { r: R * 1.05, rot: t * 0.006, tilt: 0.3, dash: [6, 8], opacity: 0.18 },
        { r: R * 1.2,  rot: -t * 0.004, tilt: 0.7, dash: [3, 12], opacity: 0.1 },
        { r: R * 1.38, rot: t * 0.003,  tilt: 0.15, dash: [10, 14], opacity: 0.06 },
      ];

      rings.forEach(({ r, rot, tilt, dash, opacity }) => {
        ctx.save();
        ctx.translate(CX, CY);
        ctx.rotate(rot);
        ctx.scale(1, Math.abs(Math.sin(tilt)));
        ctx.strokeStyle = `rgba(0,210,255,${opacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash(dash);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      /* Mouse influence */
      const mx = (mouseRef.current.x - 0.5) * 0.3;
      const my = (mouseRef.current.y - 0.5) * 0.3;

      /* Render points */
      const sorted = pts
        .map((p) => {
          /* Y-axis rotation */
          const cosY = Math.cos(t * 0.004 + mx);
          const sinY = Math.sin(t * 0.004 + mx);
          let x = p.ox * cosY - p.oz * sinY;
          let z = p.ox * sinY + p.oz * cosY;
          let y = p.oy;

          /* X-axis rotation */
          const cosX = Math.cos(my * 0.5);
          const sinX = Math.sin(my * 0.5);
          const y2 = y * cosX - z * sinX;
          const z2 = y * sinX + z * cosX;

          return { sx: CX + x * R, sy: CY + y2 * R, z: z2, size: p.size };
        })
        .sort((a, b) => a.z - b.z);

      sorted.forEach(({ sx, sy, z, size }) => {
        const norm = (z + 1) / 2;
        /* Color: deep navy (back) → blue → cyan (front) */
        const r = Math.round(0 + norm * 0);
        const g = Math.round(50 + norm * 160);
        const bl = Math.round(200 + norm * 55);
        const alpha = 0.18 + norm * 0.82;
        const s = size * (0.4 + norm * 0.8);
        ctx.fillStyle = `rgba(${r},${g},${bl},${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s, 0, Math.PI * 2);
        ctx.fill();
      });

      /* TAP ME label */
      ctx.font = `bold 11px 'Geist Mono', monospace`;
      ctx.fillStyle = 'rgba(0,210,255,0.5)';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '0.15em';
      ctx.fillText('TAP ME', CX, CY + 6);

      t++;
      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    const handleMouse = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener('mousemove', handleMouse);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mousemove', handleMouse);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-start pt-28 pb-12 px-6 md:px-8 overflow-hidden">

      {/* Hero 2-column grid */}
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,44vw)] gap-8 items-start">

        {/* ── LEFT COLUMN ── */}
        <div className="space-y-8 pt-4">

          {/* Eyebrow pill — DayNight style */}
          <div className="inline-flex items-center gap-2.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-white/50 border border-white/10 rounded-full px-4 py-2 bg-white/[0.03]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse" />
            <span>SWIFT · ISO 20022 · COMPLIANCE</span>
            <span className="text-white/25">/</span>
            <span className="text-[#0066ff] font-bold">CSP v2026</span>
          </div>

          {/* H1 — DayNight size and mixed serif */}
          <h1 className="font-sans text-[clamp(36px,5.5vw,72px)] font-extrabold leading-[1.06] tracking-tight text-white/95">
            SWIFT Infrastructure<br />
            & Independent<br />
            CSP Assessments{' '}
            <em className="font-serif font-normal italic text-[#00d2ff] not-italic">
              That Certify.
            </em>
          </h1>

          {/* Subtitle */}
          <p className="text-[clamp(15px,1.4vw,18px)] text-white/50 leading-relaxed max-w-[500px]">
            SWIFT Certified Provider. CISA-certified auditors auditing your CSCF v2026 controls, then engineering the remediation — so you pass the KYC Registry attestation on the first submission.
          </p>

          {/* URL Input Bar — DayNight audit input */}
          <div className="flex items-center gap-3 max-w-[520px]">
            <div className="flex-1 flex items-center gap-3 bg-white/[0.05] border border-white/10 rounded-full px-5 py-3.5 backdrop-blur-sm">
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your BIC or institution name…"
                className="flex-1 bg-transparent text-sm text-white/80 placeholder:text-white/25 outline-none font-mono"
              />
            </div>
            <Link
              href="/csp-assessment-v2026"
              className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0055dd] text-white font-bold text-[13px] px-6 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap"
            >
              Free Audit <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <p className="font-mono text-[10px] text-white/25 uppercase tracking-widest -mt-4">
            Free SWIFT CSP Gap Analysis
          </p>

          {/* Metrics bar — DayNight style */}
          <div className="flex flex-wrap items-center gap-0 pt-4">
            {[
              { label: 'SINCE', val: '2009' },
              { label: 'FOCUS', val: 'SWIFT Compliance' },
              { label: 'TRACK RECORD', val: '100% Pass Rate' },
            ].map((m, i) => (
              <div key={i} className="flex items-center">
                <div className="pr-6 md:pr-10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/30">{m.label}</div>
                  <div className="text-[15px] font-bold text-white/80 mt-0.5">{m.val}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-white/10 mr-6 md:mr-10 hidden sm:block" />}
              </div>
            ))}
            <Link
              href="/about-us"
              className="ml-auto text-[13px] text-white/35 hover:text-white/70 transition-colors font-medium flex items-center gap-1"
            >
              Our story <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN — Particle Orb ── */}
        <div className="relative flex items-center justify-center lg:justify-end pt-0 lg:-mt-8">
          <canvas
            ref={canvasRef}
            className="select-none"
            style={{ maxWidth: '100%', height: 'auto' }}
            data-cursor="spin"
          />
        </div>
      </div>
    </section>
  );
}
