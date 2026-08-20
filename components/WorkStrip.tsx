'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';

const projects = [
  {
    idx: '01',
    category: 'CLIENT WORK',
    type: 'SWIFT INFRASTRUCTURE',
    year: '2026',
    client: 'Kenya Commercial Bank',
    title: 'Active-Active Disaster Recovery for SWIFT Alliance Access',
    desc: 'Dual-site failover architecture achieving 99.999% uptime during core banking network outages.',
    tags: ['ACTIVE FAILOVER', 'SAA v7.5', 'DR RUNBOOK'],
    stat: '99.999% Uptime',
    theme: 'bg-[#fbf6ec] text-[#18130c] border-[#f0e6d2] shadow-sm',
    accentTag: 'text-[#d97706] bg-[#fef3c7] border-[#fde68a]',
    accentStat: 'text-[#d97706]',
  },
  {
    idx: '02',
    category: 'CLIENT WORK',
    type: 'CSP v2026 ASSESSMENT',
    year: '2026',
    client: 'Tier-1 Commercial Bank',
    title: 'CSCF v2026 Independent Audit — 32 Controls, Zero Flags',
    desc: 'Full CISA-certified audit with KYC Registry submission and mandatory remediation engineering.',
    tags: ['32 CSCF CONTROLS', 'CISA CERTIFIED', 'KYC REGISTRY'],
    stat: 'Passed on First Filing',
    theme: 'bg-[#0b0f19] text-[#f9fafb] border-[#1f293d] shadow-xl',
    accentTag: 'text-[#00e5ff] bg-[#00e5ff]/10 border-[#00e5ff]/30',
    accentStat: 'text-[#00e5ff]',
  },
  {
    idx: '03',
    category: 'CLIENT WORK',
    type: 'ISO 20022 MIGRATION',
    year: '2025',
    client: 'Regional Development Bank',
    title: 'MT103 → pacs.008 MX Migration with Zero Downtime',
    desc: 'Full cutover from legacy MT messaging to structured XML with automated STP pipeline validation.',
    tags: ['PACS.008', 'MT103', 'ZERO DOWNTIME'],
    stat: '100% STP Processing',
    theme: 'bg-[#eff6ff] text-[#081120] border-[#dbeafe] shadow-sm',
    accentTag: 'text-[#0055ff] bg-[#0055ff]/10 border-[#0055ff]/20',
    accentStat: 'text-[#0055ff]',
  },
  {
    idx: '04',
    category: 'MIDDLEWARE',
    type: 'ENTERPRISE INTEGRATION',
    year: '2026',
    client: 'Pan-African Financial Group',
    title: 'Enterprise Payment Hub — SIL to AutoClient Migration',
    desc: 'Automated file transfer pipeline modernizing legacy SWIFT Integration Layer to Alliance Gateway.',
    tags: ['AUTOCLIENT', 'SIL', 'T24 INTEGRATION'],
    stat: '4 Banks Onboarded',
    theme: 'bg-[#f0fdf4] text-[#052e16] border-[#dcfce7] shadow-sm',
    accentTag: 'text-[#059669] bg-[#059669]/10 border-[#059669]/20',
    accentStat: 'text-[#059669]',
  },
];

export default function WorkStrip() {
  const [active, setActive] = useState(1);

  return (
    <section className="px-6 md:px-12 lg:px-16 py-20 md:py-28 max-w-[1720px] mx-auto">
      {/* Counter + Controls */}
      <div className="flex items-center justify-between mb-12 home-reveal">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <span>SELECTED DEPLOYMENTS</span>
        </div>
        <div className="flex items-center gap-5">
          <span className="font-mono text-sm text-slate-400 font-bold">
            <strong className="text-slate-900 text-lg font-extrabold">{String(active + 1).padStart(2, '0')}</strong> / {String(projects.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2.5">
            <button
              onClick={() => setActive((p) => (p - 1 + projects.length) % projects.length)}
              className="w-11 h-11 rounded-full border border-slate-300 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActive((p) => (p + 1) % projects.length)}
              className="w-11 h-11 rounded-full border border-slate-300 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards 4-Color Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 home-reveal">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`p-9 md:p-10 rounded-[30px] border flex flex-col justify-between min-h-[420px] transition-all duration-300 cursor-pointer ${p.theme} ${
              i === active
                ? 'ring-2 ring-[#0055ff] -translate-y-2 shadow-2xl scale-[1.02]'
                : 'hover:-translate-y-1 hover:shadow-lg opacity-95 hover:opacity-100'
            }`}
            onClick={() => setActive(i)}
          >
            <div className="space-y-5">
              <div className="flex justify-between items-start">
                <span className="font-mono text-xs font-black opacity-60">
                  {p.idx}
                </span>
                <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full border ${p.accentTag}`}>
                  {p.category} · {p.year}
                </span>
              </div>

              <div className="text-[11px] font-mono font-bold uppercase tracking-widest opacity-70">
                {p.type}
              </div>

              <h3 className="text-2xl font-extrabold leading-[1.2] tracking-tight">
                {p.title}
              </h3>

              <p className="text-xs md:text-sm leading-relaxed opacity-80 font-normal">
                {p.desc}
              </p>
            </div>

            {/* Bottom */}
            <div className="space-y-4 pt-8 border-t border-current/10 mt-6">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className="text-[10px] font-mono font-bold px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/10 opacity-90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`font-mono text-xs font-extrabold flex items-center gap-1.5 ${p.accentStat}`}>
                <CheckCircle2 className="w-4 h-4 inline" />
                <span>{p.stat}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 home-reveal">
        <Link
          href="/contact-us"
          className="text-sm text-slate-700 hover:text-[#0055ff] transition-colors font-bold flex items-center gap-2"
        >
          <span>See all case studies & production audit reports</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}
