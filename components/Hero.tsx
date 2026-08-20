'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import CompanyHubMap from '@/components/CompanyHubMap';

export default function Hero() {
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

  return (
    <section className="relative min-h-[92vh] flex items-center pt-40 pb-24 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1720px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
        
        {/* ── LEFT COLUMN: High-End Editorial Manifesto (Span 6) ── */}
        <div className="lg:col-span-6 space-y-10">
          
          {/* Eyebrow Pill */}
          <div className="hero-anim-1 inline-flex items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-[0.18em] text-slate-700 border border-slate-200/90 rounded-full px-5 py-2.5 bg-white/80 shadow-[0_4px_16px_rgba(0,0,0,0.03)] backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
            <span>SWIFT ALLIANCE</span>
            <span className="text-slate-300">/</span>
            <span>ISO 20022</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#0055ff] font-extrabold">CSP v2026</span>
          </div>

          {/* Massive Editorial Headline with Italic Serif Accents */}
          <h1 className="hero-anim-2 text-[clamp(44px,5.6vw,84px)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#0a0e1a]">
            SWIFT Infrastructure<br />
            & Independent<br />
            CSP Assessments{' '}
            <span className="font-serif italic font-normal text-[#0055ff] tracking-tight">
              That Certify.
            </span>
          </h1>

          {/* Subheading Body */}
          <p className="hero-anim-3 text-[clamp(16px,1.35vw,20px)] text-slate-600 leading-relaxed max-w-[580px] font-normal">
            Authorized CISA-certified auditors assessing your mandatory CSCF v2026 controls, engineering the technical remediation, and submitting your attestation to the SWIFT KYC Security Registry with{' '}
            <strong className="text-slate-900 font-bold">guaranteed approval</strong>.
          </p>

          {/* BIC Form */}
          <div className="hero-anim-4 space-y-4 pt-2">
            <form onSubmit={handleAuditSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 max-w-[580px]">
              <div className="flex-1 flex items-center gap-3 bg-white border border-slate-300 focus-within:border-[#0055ff] focus-within:ring-4 focus-within:ring-[#0055ff]/10 rounded-full px-6 py-4 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter institution BIC or code…"
                  className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none font-mono"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#0a0e1a] hover:bg-[#0055ff] text-white font-bold text-[13px] px-8 py-4 rounded-full transition-all duration-300 whitespace-nowrap shadow-[0_8px_24px_rgba(10,14,26,0.12)] hover:shadow-xl group"
              >
                <span>Free Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="flex items-center gap-4 text-[11px] font-mono text-slate-400 uppercase tracking-widest pl-2">
              <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                CSCF v2026 Audit Ready
              </span>
              <span>·</span>
              <span>Zero-Downtime Guarantee</span>
            </div>
          </div>

          {/* Metrics bar */}
          <div className="hero-anim-4 flex flex-wrap items-center gap-0 pt-8 border-t border-slate-200/80 max-w-[620px]">
            {[
              { label: 'TRACK RECORD', val: '100% Pass Rate', color: 'text-[#0055ff]' },
              { label: 'EXPERIENCE', val: '15+ Years Active', color: 'text-slate-900' },
              { label: 'GLOBAL HUBS', val: '4 Regional Hubs', color: 'text-[#d97706]' },
            ].map((m, i) => (
              <div key={i} className="flex items-center">
                <div className="pr-6 md:pr-10">
                  <div className="text-[10px] font-mono uppercase tracking-[0.18em] text-slate-400 font-bold">{m.label}</div>
                  <div className={`text-[17px] font-extrabold mt-1 tracking-tight ${m.color}`}>{m.val}</div>
                </div>
                {i < 2 && <div className="w-px h-10 bg-slate-200/80 mr-6 md:mr-10 hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Interactive Company Hub Map (Span 6) ── */}
        <div className="hero-anim-map lg:col-span-6 w-full flex items-center justify-center">
          <CompanyHubMap />
        </div>
      </div>
    </section>
  );
}
