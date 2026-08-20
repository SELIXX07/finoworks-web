'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 md:px-8 pt-20 pb-12 max-w-[1600px] mx-auto border-t border-white/[0.08] relative z-10">
      {/* 2-Column Links Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pb-20">
        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 font-bold">
            SOLUTIONS
          </div>
          <ul className="space-y-2.5 text-xs text-white/55">
            <li><Link href="/csp-assessment-v2026" className="hover:text-white transition-colors">SWIFT CSP v2026</Link></li>
            <li><Link href="/iso-20022-migration" className="hover:text-white transition-colors">ISO 20022 MT ↔ MX</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">Payment Hub Middleware</Link></li>
            <li><Link href="/services" className="hover:text-white transition-colors">White-Labeled Risk Software</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 font-bold">
            GLOBAL HUBS
          </div>
          <ul className="space-y-2.5 text-xs text-white/55">
            <li><span className="text-white/80 font-medium">Nairobi HQ</span> — Westlands</li>
            <li><span className="text-white/80 font-medium">Bangalore Hub</span> — Clayworks</li>
            <li><span className="text-white/80 font-medium">USA Support</span> — Franklin, TN</li>
            <li><span className="text-white/80 font-medium">Middle East</span> — GCC Corridor</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 font-bold">
            COMPANY
          </div>
          <ul className="space-y-2.5 text-xs text-white/55">
            <li><Link href="/about-us" className="hover:text-white transition-colors">About FinoWorks</Link></li>
            <li><Link href="/careers" className="hover:text-white transition-colors">Careers (10 Roles)</Link></li>
            <li><Link href="/insights" className="hover:text-white transition-colors">Technical Insights</Link></li>
            <li><Link href="/contact-us" className="hover:text-white transition-colors">Contact Engineering</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 font-bold">
            ACCREDITATIONS
          </div>
          <ul className="space-y-2.5 text-xs text-white/55">
            <li>SWIFT Certified Provider Label 2026</li>
            <li>CISA Certified Assessors</li>
            <li>ISO Lead Auditor Certified</li>
            <li>Oracle Gold Partner</li>
          </ul>
        </div>
      </div>

      {/* Massive Display Watermark Typography (DayNight style) */}
      <div className="py-10 select-none overflow-hidden">
        <h1 className="text-[clamp(44px,13vw,190px)] font-bold tracking-tighter leading-none text-white/[0.08] hover:text-white/[0.12] transition-colors">
          FinoWorks <span className="font-serif italic font-normal text-[#0066ff]/20">Technologies</span>
        </h1>
      </div>

      {/* Bottom Legal Bar */}
      <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/35">
        <div>
          © {new Date().getFullYear()} FinoWorks Technologies Ltd. All rights reserved.
        </div>
        <div className="flex items-center gap-6">
          <span>SWIFT Alliance</span>
          <span>·</span>
          <span>ISO 20022</span>
          <span>·</span>
          <span>CSCF v2026</span>
        </div>
      </div>
    </footer>
  );
}
