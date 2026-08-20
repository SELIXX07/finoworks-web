'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="px-6 md:px-8 py-32 max-w-[1600px] mx-auto border-t border-slate-200">
      <div className="max-w-4xl space-y-8 home-reveal">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 border border-slate-200 rounded-full px-4 py-2 bg-slate-50 shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
          <span>BOOKING CSP v2026 AUDITS</span>
          <span className="text-slate-300">·</span>
          <span className="text-[#0055ff] font-extrabold">LIMITED SLOTS AVAILABLE</span>
        </div>

        {/* Big Headline in Black */}
        <h2 className="font-sans text-[clamp(36px,5.5vw,76px)] font-extrabold leading-[1.06] tracking-tight text-black">
          Secure what your competitors{' '}
          <em className="font-serif font-normal italic text-[#0055ff]">
            can&apos;t risk.
          </em>
        </h2>

        <p className="text-[clamp(15px,1.4vw,18px)] text-slate-600 leading-relaxed max-w-xl">
          Get your SWIFT infrastructure certified, migrate to ISO 20022 with zero downtime, and ensure 100% compliance with CISA-certified assessors.
        </p>

        {/* Dual Button Callout */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#0055ff] hover:bg-black text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
          >
            <span>contact@finoworks.com</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/csp-assessment-v2026"
            className="inline-flex items-center gap-2 border border-slate-300 hover:border-black bg-white text-black font-bold text-[14px] px-8 py-4 rounded-full transition-all shadow-sm"
          >
            <span>Request Assessment Scope</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
