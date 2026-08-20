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
  },
];

export default function WorkStrip() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 md:px-8 py-8 max-w-[1600px] mx-auto">
      {/* Counter + Controls */}
      <div className="flex items-center justify-between mb-8 home-reveal">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <span>SELECTED DEPLOYMENTS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[13px] text-slate-500 font-bold">
            <strong className="text-slate-900 text-base font-extrabold">{String(active + 1).padStart(2, '0')}</strong> / {String(projects.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setActive((p) => (p - 1 + projects.length) % projects.length)}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all"
              aria-label="Previous project"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setActive((p) => (p + 1) % projects.length)}
              className="w-10 h-10 rounded-full border border-slate-300 bg-white shadow-sm flex items-center justify-center text-slate-700 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all"
              aria-label="Next project"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 home-reveal">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`p-8 rounded-3xl border flex flex-col justify-between min-h-[380px] transition-all duration-300 cursor-pointer ${
              i === active
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl -translate-y-1'
                : 'bg-slate-50 text-slate-900 border-slate-200 hover:border-[#0055ff]/40 hover:bg-white hover:shadow-md'
            }`}
            onClick={() => setActive(i)}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className={`font-mono text-[11px] font-bold ${i === active ? 'text-white/60' : 'text-slate-400'}`}>
                  {p.idx}
                </span>
                <span className={`font-mono text-[9px] font-bold px-2.5 py-1 rounded-md ${
                  i === active ? 'bg-white/20 text-white' : 'bg-white border border-slate-200 text-slate-700'
                }`}>
                  {p.category} · {p.year}
                </span>
              </div>

              <div className={`rounded-lg px-3 py-2 font-mono text-[11px] font-medium ${
                i === active ? 'bg-white/10 text-white/80' : 'bg-white border border-slate-200 text-slate-600'
              }`}>
                ● {p.client.toLowerCase().replace(/ /g, '')}.com
              </div>

              <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                i === active ? 'text-[#00d2ff]' : 'text-[#0055ff]'
              }`}>
                {p.type}
              </div>

              <h3 className="text-xl font-bold leading-snug tracking-tight">
                {p.title}
              </h3>

              <p className={`text-xs leading-relaxed font-normal ${i === active ? 'text-slate-300' : 'text-slate-600'}`}>
                {p.desc}
              </p>
            </div>

            {/* Bottom */}
            <div className="space-y-3 pt-6 border-t border-current/10">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className={`text-[9px] font-mono font-bold px-2 py-1 rounded ${
                      i === active ? 'bg-white/15 text-white' : 'bg-slate-200/80 text-slate-700'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`font-mono text-[11px] font-bold ${i === active ? 'text-[#00d2ff]' : 'text-[#0055ff]'}`}>
                ✓ {p.stat}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 home-reveal">
        <Link
          href="/contact-us"
          className="text-[13px] text-slate-600 hover:text-[#0055ff] transition-colors font-bold flex items-center gap-1.5"
        >
          <span>See all case studies & specifications</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
