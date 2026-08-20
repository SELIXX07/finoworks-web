'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="px-6 md:px-8 py-32 max-w-[1600px] mx-auto border-t border-white/[0.08]">
      <div className="max-w-4xl space-y-8 home-reveal">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-white/50 border border-white/10 rounded-full px-4 py-2 bg-white/[0.03]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#00d2ff] animate-pulse" />
          <span>BOOKING CSP v2026 AUDITS</span>
          <span className="text-white/25">·</span>
          <span className="text-[#0066ff] font-bold">LIMITED SLOTS AVAILABLE</span>
        </div>

        {/* Big Headline */}
        <h2 className="font-sans text-[clamp(36px,5.5vw,76px)] font-extrabold leading-[1.06] tracking-tight text-white/95">
          Secure what your competitors{' '}
          <em className="font-serif font-normal italic text-[#00d2ff] not-italic">
            can&apos;t risk.
          </em>
        </h2>

        <p className="text-[clamp(15px,1.4vw,18px)] text-white/50 leading-relaxed max-w-xl">
          Get your SWIFT infrastructure certified, migrate to ISO 20022 with zero downtime, and ensure 100% compliance with CISA-certified assessors.
        </p>

        {/* Dual Button Callout */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0055dd] text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all duration-200"
          >
            <span>contact@finoworks.com</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/csp-assessment-v2026"
            className="inline-flex items-center gap-2 border border-white/20 hover:border-white/50 text-white/90 hover:text-white font-semibold text-[14px] px-8 py-4 rounded-full transition-all"
          >
            <span>Request Assessment Scope</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
