'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 md:px-8 pt-20 pb-12 max-w-[1600px] mx-auto border-t border-slate-200 relative z-10 bg-white">
      {/* 4-Column Links Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 pb-20">
        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-slate-400 font-bold">
            SOLUTIONS
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600 font-semibold">
            <li><Link href="/services/csp-assessment-v2026" className="hover:text-[#0055ff] transition-colors">SWIFT CSP v2026</Link></li>
            <li><Link href="/services/iso-20022-migration" className="hover:text-[#0055ff] transition-colors">ISO 20022 MT ↔ MX</Link></li>
            <li><Link href="/services/swift-integration" className="hover:text-[#0055ff] transition-colors">SWIFT Integration (SAA/SAG)</Link></li>
            <li><Link href="/services/white-labeled-risk-software" className="hover:text-[#0055ff] transition-colors">White-Labeled Risk Software</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-slate-400 font-bold">
            GLOBAL HUBS
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
            <li><strong className="text-slate-900">Nairobi HQ</strong> — Westlands</li>
            <li><strong className="text-slate-900">Bangalore Hub</strong> — Clayworks</li>
            <li><strong className="text-slate-900">USA Support</strong> — Franklin, TN</li>
            <li><strong className="text-slate-900">Middle East</strong> — GCC Corridor</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-slate-400 font-bold">
            COMPANY
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600 font-semibold">
            <li><Link href="/about-us" className="hover:text-[#0055ff] transition-colors">About FinoWorks</Link></li>
            <li><Link href="/services" className="hover:text-[#0055ff] transition-colors">All 11 Practices</Link></li>
            <li><Link href="/insights" className="hover:text-[#0055ff] transition-colors">Technical Insights</Link></li>
            <li><Link href="/contact-us" className="hover:text-[#0055ff] transition-colors">Contact Engineering</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-widest text-slate-400 font-bold">
            ACCREDITATIONS
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600 font-semibold">
            <li>SWIFT Certified Provider Label 2026</li>
            <li>CISA Certified Assessors</li>
            <li>ISO Lead Auditor Certified</li>
            <li>Oracle Gold Partner</li>
          </ul>
        </div>
      </div>

      {/* Massive Display Watermark Typography */}
      <div className="py-10 select-none overflow-hidden border-t border-slate-100">
        <h1 className="text-[clamp(44px,13vw,190px)] font-black tracking-tighter leading-none text-slate-900/[0.06] hover:text-slate-900/[0.12] transition-colors">
          FinoWorks <span className="text-[#0055ff]/30 font-extrabold">Technologies</span>
        </h1>
      </div>

      {/* Bottom Legal Bar */}
      <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400 font-bold">
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
