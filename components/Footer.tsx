'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-16 pt-28 pb-16 max-w-[1720px] mx-auto border-t border-blue-500/20 relative z-10 bg-[#020919]/90">
      {/* 4-Column Links Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-12 pb-24">
        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#00e5ff] font-extrabold">
            PRACTICE AREAS
          </div>
          <ul className="space-y-3 text-xs md:text-sm text-slate-300 font-semibold">
            <li><Link href="/services/csp-assessment-v2026" className="hover:text-[#00e5ff] transition-colors">SWIFT CSP v2026 Audit</Link></li>
            <li><Link href="/services/iso-20022-migration" className="hover:text-[#00e5ff] transition-colors">ISO 20022 MT ↔ MX</Link></li>
            <li><Link href="/services/swift-integration" className="hover:text-[#00e5ff] transition-colors">SWIFT Integration (SAA/SAG)</Link></li>
            <li><Link href="/services/white-labeled-risk-software" className="hover:text-[#00e5ff] transition-colors">White-Labeled Risk Software</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#38bdf8] font-extrabold">
            GLOBAL HUBS
          </div>
          <ul className="space-y-3 text-xs md:text-sm text-slate-300 font-medium">
            <li><strong className="text-white">Nairobi HQ</strong> — Westlands</li>
            <li><strong className="text-white">Bangalore Hub</strong> — Clayworks</li>
            <li><strong className="text-white">USA Support</strong> — Franklin, TN</li>
            <li><strong className="text-white">Middle East</strong> — GCC Corridor</li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-blue-300 font-extrabold">
            COMPANY
          </div>
          <ul className="space-y-3 text-xs md:text-sm text-slate-300 font-semibold">
            <li><Link href="/about-us" className="hover:text-[#00e5ff] transition-colors">About FinoWorks</Link></li>
            <li><Link href="/services" className="hover:text-[#00e5ff] transition-colors">All 11 Practices</Link></li>
            <li><Link href="/insights" className="hover:text-[#00e5ff] transition-colors">Technical Insights</Link></li>
            <li><Link href="/contact-us" className="hover:text-[#00e5ff] transition-colors">Contact Engineering</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-emerald-400 font-extrabold">
            ACCREDITATIONS
          </div>
          <ul className="space-y-3 text-xs md:text-sm text-slate-300 font-semibold">
            <li>SWIFT Certified Provider 2026</li>
            <li>CISA Certified Lead Assessors</li>
            <li>ISO 27001 Lead Auditor Certified</li>
            <li>Oracle Banking Gold Partner</li>
          </ul>
        </div>
      </div>

      {/* Massive Display Watermark Typography: FinoWorks Technologies */}
      <div className="py-12 select-none overflow-hidden border-t border-blue-500/20">
        <h1 className="text-[clamp(40px,12.5vw,195px)] font-black tracking-tighter leading-none text-white/[0.08] hover:text-white/[0.18] transition-colors">
          FinoWorks <span className="font-serif italic font-normal text-[#00e5ff]/40">Technologies</span>
        </h1>
      </div>

      {/* Bottom Legal Bar */}
      <div className="pt-8 border-t border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400 font-bold">
        <div>
          © {new Date().getFullYear()} FinoWorks Technologies Ltd. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-blue-300">
          <span>SWIFT Alliance Access</span>
          <span>·</span>
          <span>ISO 20022 CBPR+</span>
          <span>·</span>
          <span>CSCF v2026</span>
        </div>
      </div>
    </footer>
  );
}
