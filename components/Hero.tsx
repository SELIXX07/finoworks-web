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
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center pt-28 sm:pt-32 pb-10 px-6 md:px-12 lg:px-16 overflow-hidden">
      <div className="max-w-[1720px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* ── LEFT COLUMN: Editorial Headline & Form (Span 6) ── */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Eyebrow Pill (Secondary White base + Primary Blue accents) */}
          <div className="anim-badge inline-flex items-center gap-2.5 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-slate-700 border border-slate-200/90 rounded-full px-4 py-2 bg-white shadow-sm backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
            <span className="hover-highlight">SWIFT ALLIANCE</span>
            <span className="text-slate-300">/</span>
            <span className="hover-highlight">ISO 20022</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#0055ff] font-extrabold hover-highlight">CSP v2026</span>
          </div>

          {/* Staggered Entrance Lines for Headline */}
          <h1 className="text-[clamp(34px,4.2vw,62px)] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0a0e1a]">
            <span className="anim-line-1 block">SWIFT Infrastructure</span>
            <span className="anim-line-2 block">& Independent</span>
            <span className="anim-line-3 block">
              CSP Assessments{' '}
              <span className="font-serif italic font-normal text-[#0055ff] tracking-tight hover-highlight">
                That Certify.
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="anim-desc text-[clamp(15px,1.15vw,18px)] text-slate-600 leading-relaxed max-w-[540px] font-normal">
            Authorized CISA-certified auditors assessing your mandatory CSCF v2026 controls, engineering the technical remediation, and submitting your attestation to the SWIFT KYC Security Registry with{' '}
            <strong className="text-slate-900 font-bold hover-highlight">guaranteed first-pass approval</strong>.
          </p>

          {/* BIC Form: Secondary White container + Primary Blue CTA button */}
          <div className="anim-form space-y-3 pt-1">
            <form onSubmit={handleAuditSubmit} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 max-w-[540px]">
              <div className="flex-1 flex items-center gap-3 bg-white border border-slate-300 focus-within:border-[#0055ff] focus-within:ring-4 focus-within:ring-[#0055ff]/15 rounded-full px-5 py-3 transition-all shadow-sm">
                <input
                  type="text"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="Enter institution BIC or name…"
                  className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none font-mono"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 bg-[#0055ff] hover:bg-[#0048e5] text-white font-bold text-[13px] px-8 py-3.5 rounded-full transition-all duration-300 whitespace-nowrap shadow-[0_4px_16px_rgba(0,85,255,0.35)] hover:shadow-lg group"
              >
                <span>Free Audit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 uppercase tracking-widest pl-1">
              <span className="flex items-center gap-1.5 text-[#0055ff] font-bold hover-highlight">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0055ff]" />
                CSCF v2026 Audit Ready
              </span>
              <span>·</span>
              <span className="hover-highlight">Zero-Downtime Guarantee</span>
            </div>
          </div>

          {/* Metrics bar: Secondary White background cards with Primary Blue accents */}
          <div className="anim-stats flex flex-wrap items-center gap-0 pt-5 border-t border-slate-200/80 max-w-[580px]">
            {[
              { label: 'TRACK RECORD', val: '100% Pass Rate', color: 'text-[#0055ff]' },
              { label: 'EXPERIENCE', val: '15+ Years Active', color: 'text-slate-900' },
              { label: 'GLOBAL HUBS', val: '4 Regional Hubs', color: 'text-[#0055ff]' },
            ].map((m, i) => (
              <div key={i} className="flex items-center">
                <div className="pr-5 md:pr-8">
                  <div className="text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400 font-bold">{m.label}</div>
                  <div className={`text-[15px] font-extrabold mt-0.5 tracking-tight hover-highlight ${m.color}`}>{m.val}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-slate-200/80 mr-5 md:mr-8 hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Interactive Company Hub Map (Span 6) ── */}
        <div className="anim-map lg:col-span-6 w-full flex items-center justify-center">
          <CompanyHubMap />
        </div>
      </div>
    </section>
  );
}
