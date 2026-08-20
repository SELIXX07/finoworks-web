'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-32 md:py-44 max-w-[1720px] mx-auto border-t border-blue-500/20">
      <div className="max-w-5xl space-y-10 home-reveal">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-3 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-white border border-blue-500/40 rounded-full px-5 py-2.5 bg-[#082156] shadow-[0_0_20px_rgba(0,85,255,0.3)]">
          <span className="w-2 h-2 rounded-full bg-[#00e5ff] animate-pulse" />
          <span>BOOKING CSCF v2026 AUDITS</span>
          <span className="text-blue-400">·</span>
          <span className="text-[#00e5ff] font-extrabold">LIMITED 2026 ENGAGEMENT SLOTS</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="text-[clamp(40px,5.8vw,80px)] font-extrabold leading-[1.04] tracking-tight text-white">
          Secure what your competitors{' '}
          <span className="font-serif italic font-normal text-[#00e5ff] hover-highlight">
            can&apos;t risk.
          </span>
        </h2>

        <p className="text-[clamp(16px,1.4vw,20px)] text-slate-300 leading-relaxed max-w-2xl font-normal">
          Get your SWIFT infrastructure certified, migrate to ISO 20022 with zero downtime, and guarantee 100% compliance with CISA-certified assessors and specialized engineers.
        </p>

        {/* Dual Button Callout: Secondary White + Primary Blue */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-100 text-[#030d22] font-extrabold text-[14px] px-9 py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.3)] hover:shadow-2xl group"
          >
            <span>contact@finoworks.com</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/csp-assessment-v2026"
            className="inline-flex items-center gap-2 border border-blue-400/50 hover:border-white bg-[#0055ff] hover:bg-[#0040c1] text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all shadow-[0_0_20px_rgba(0,85,255,0.4)]"
          >
            <span>Request Assessment Scope</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
