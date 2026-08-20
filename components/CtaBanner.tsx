'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-32 md:py-44 max-w-[1720px] mx-auto border-t border-slate-200/80">
      <div className="max-w-5xl space-y-10 home-reveal">
        {/* Availability Badge: Secondary White base + Primary Blue highlight */}
        <div className="inline-flex items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-slate-700 border border-slate-200 rounded-full px-5 py-2.5 bg-white shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
          <span>BOOKING CSCF v2026 AUDITS</span>
          <span className="text-slate-300">·</span>
          <span className="text-[#0055ff] font-extrabold">LIMITED 2026 ENGAGEMENT SLOTS</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-[clamp(40px,5.8vw,80px)] font-extrabold leading-[1.04] tracking-tight text-[#0a0e1a]">
          Secure what your competitors{' '}
          <span className="font-serif italic font-normal text-[#0055ff] hover-highlight">
            can&apos;t risk.
          </span>
        </h2>

        <p className="text-[clamp(16px,1.4vw,20px)] text-slate-600 leading-relaxed max-w-2xl font-normal">
          Get your SWIFT infrastructure certified, migrate to ISO 20022 with zero downtime, and guarantee 100% compliance with CISA-certified assessors and specialized engineers.
        </p>

        {/* Dual Button Callout: Primary Blue + Secondary White */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2.5 bg-[#0055ff] hover:bg-[#0048e5] text-white font-bold text-[14px] px-9 py-4 rounded-full transition-all duration-300 shadow-[0_8px_24px_rgba(0,85,255,0.3)] hover:shadow-xl group"
          >
            <span>contact@finoworks.com</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/csp-assessment-v2026"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-[#0055ff] bg-white hover:bg-slate-50 text-slate-900 font-bold text-[14px] px-8 py-4 rounded-full transition-all shadow-sm"
          >
            <span>Request Assessment Scope</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
