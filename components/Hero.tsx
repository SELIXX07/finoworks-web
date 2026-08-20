'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const [website, setWebsite] = useState('');
  const router = useRouter();

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (website.trim()) {
      router.push(`/contact-us?bic=${encodeURIComponent(website.trim())}&service=SWIFT+CSP+v2026+Assessment`);
    } else {
      router.push('/csp-assessment-v2026');
    }
  };

  /* ─── Interactive Particle Orb for Light Theme ─── */
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
    const R = SIZE * 0.42;

    const N = 560;
    const pts = Array.from({ length: N }, (_, i) => {
      const theta = Math.acos(1 - (2 * (i + 0.5)) / N);
      const phi = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        ox: Math.sin(theta) * Math.cos(phi),
        oy: Math.sin(theta) * Math.sin(phi),
        oz: Math.cos(theta),
        size: Math.random() * 2.4 + 0.8,
      };
    });

    const render = () => {
      ctx.clearRect(0, 0, SIZE, SIZE);

      const grd = ctx.createRadialGradient(CX, CY, 0, CX, CY, R * 1.15);
      grd.addColorStop(0, 'rgba(0, 85, 255, 0.12)');
      grd.addColorStop(0.5, 'rgba(0, 180, 216, 0.05)');
      grd.addColorStop(1, 'rgba(255, 255, 255, 0)');
      ctx.fillStyle = grd;
      ctx.beginPath();
      ctx.arc(CX, CY, R * 1.15, 0, Math.PI * 2);
      ctx.fill();

      const rings = [
        { r: R * 1.06, rot: t * 0.005, tilt: 0.35, dash: [6, 8], opacity: 0.22 },
        { r: R * 1.22, rot: -t * 0.004, tilt: 0.7, dash: [3, 12], opacity: 0.14 },
        { r: R * 1.4,  rot: t * 0.003, tilt: 0.2, dash: [8, 14], opacity: 0.08 },
      ];

      rings.forEach(({ r, rot, tilt, dash, opacity }) => {
        ctx.save();
        ctx.translate(CX, CY);
        ctx.rotate(rot);
        ctx.scale(1, Math.abs(Math.sin(tilt)));
        ctx.strokeStyle = `rgba(0, 85, 255, ${opacity})`;
        ctx.lineWidth = 1;
        ctx.setLineDash(dash);
        ctx.beginPath();
        ctx.arc(0, 0, r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      });

      const mx = (mouseRef.current.x - 0.5) * 0.35;
      const my = (mouseRef.current.y - 0.5) * 0.35;

      const sorted = pts
        .map((p) => {
          const cosY = Math.cos(t * 0.004 + mx);
          const sinY = Math.sin(t * 0.004 + mx);
          let x = p.ox * cosY - p.oz * sinY;
          let z = p.ox * sinY + p.oz * cosY;
          let y = p.oy;

          const cosX = Math.cos(my * 0.5);
          const sinX = Math.sin(my * 0.5);
          const y2 = y * cosX - z * sinX;
          const z2 = y * sinX + z * cosX;

          return { sx: CX + x * R, sy: CY + y2 * R, z: z2, size: p.size };
        })
        .sort((a, b) => a.z - b.z);

      sorted.forEach(({ sx, sy, z, size }) => {
        const norm = (z + 1) / 2;
        const red = Math.round(15 * (1 - norm));
        const green = Math.round(25 * (1 - norm) + 85 * norm);
        const blue = Math.round(50 * (1 - norm) + 255 * norm);
        const alpha = 0.2 + norm * 0.8;
        const s = size * (0.5 + norm * 0.75);

        ctx.fillStyle = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(sx, sy, s, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.font = `700 11px 'JetBrains Mono', monospace`;
      ctx.fillStyle = '#0055ff';
      ctx.textAlign = 'center';
      ctx.letterSpacing = '0.15em';
      ctx.fillText('NODE ORB', CX, CY + 5);

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
    <section className="relative min-h-screen flex items-start pt-28 pb-14 px-6 md:px-8 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,44vw)] gap-12 items-start">
        {/* ── LEFT COLUMN ── */}
        <div className="space-y-8 pt-4">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 border border-slate-200 rounded-full px-4 py-2 bg-slate-50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
            <span>SWIFT · ISO 20022 · COMPLIANCE</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#0055ff] font-extrabold">CSP v2026</span>
          </div>

          <h1 className="text-[clamp(38px,5.5vw,72px)] font-extrabold leading-[1.06] tracking-tight text-slate-900">
            SWIFT Infrastructure<br />
            & Independent<br />
            CSP Assessments{' '}
            <span className="text-[#0055ff] font-extrabold">
              That Certify.
            </span>
          </h1>

          <p className="text-[clamp(15px,1.4vw,18px)] text-slate-600 leading-relaxed max-w-[540px] font-normal">
            SWIFT Certified Provider. CISA-certified auditors auditing your CSCF v2026 controls, then engineering the remediation — so you pass the KYC Registry attestation on the first submission.
          </p>

          {/* BIC Form */}
          <form onSubmit={handleAuditSubmit} className="flex items-center gap-3 max-w-[540px]">
            <div className="flex-1 flex items-center gap-3 bg-slate-50 border border-slate-300 focus-within:border-[#0055ff] rounded-full px-5 py-3.5 transition-colors shadow-sm">
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your BIC or institution name…"
                className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#0055ff] hover:bg-slate-900 text-white font-bold text-[13px] px-7 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg"
            >
              <span>Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest -mt-4 font-semibold">
            Free SWIFT CSP Gap Analysis & Audit Scope
          </p>

          {/* Metrics bar */}
          <div className="flex flex-wrap items-center gap-0 pt-4 border-t border-slate-200">
            {[
              { label: 'EXPERIENCE', val: '15+ Yrs Combined' },
              { label: 'FOCUS', val: 'SWIFT Compliance' },
              { label: 'TRACK RECORD', val: '100% Pass Rate' },
            ].map((m, i) => (
              <div key={i} className="flex items-center">
                <div className="pr-6 md:pr-10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">{m.label}</div>
                  <div className="text-[16px] font-extrabold text-slate-900 mt-0.5">{m.val}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-slate-200 mr-6 md:mr-10 hidden sm:block" />}
              </div>
            ))}
            <Link
              href="/about-us"
              className="ml-auto text-[13px] text-slate-500 hover:text-[#0055ff] transition-colors font-semibold flex items-center gap-1"
            >
              Our story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN — 3D Node Orb ── */}
        <div className="relative flex items-center justify-center lg:justify-end pt-0 lg:-mt-6">
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
