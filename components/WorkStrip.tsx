'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowLeft } from 'lucide-react';

const projects = [
  {
    idx: '01',
    category: 'CLIENT WORK',
    type: 'SWIFT INFRASTRUCTURE',
    year: '2026',
    client: 'Kenya Commercial Bank',
    title: 'Active-Active Disaster Recovery for SWIFT Alliance Access',
    desc: 'Dual-site failover architecture achieving 99.999% uptime during core banking outages.',
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
    desc: 'Full cutover from legacy MT messaging to structured XML with STP pipeline validation.',
    tags: ['PACS.008', 'MT103', 'ZERO DOWNTIME'],
    stat: '100% STP Processing',
  },
  {
    idx: '04',
    category: 'STUDIO WORK',
    type: 'MIDDLEWARE',
    year: '2026',
    client: 'Pan-African Financial Group',
    title: 'Enterprise Payment Hub — SIL to AutoClient Migration',
    desc: 'Automated file transfer pipeline modernizing legacy SWIFT Integration Layer to Alliance Gateway.',
    tags: ['AUTOLIENT', 'SIL', 'T24 INTEGRATION'],
    stat: '4 Banks Onboarded',
  },
];

export default function WorkStrip() {
  const [active, setActive] = useState(0);

  return (
    <section className="px-6 md:px-8 py-8 max-w-[1600px] mx-auto">

      {/* Counter + Controls — DayNight top-right pattern */}
      <div className="flex items-center justify-between mb-8 home-reveal">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <span>RESULTS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[13px] text-white/35">
            <strong className="text-white/80 text-base">{String(active + 1).padStart(2, '0')}</strong> / {String(projects.length).padStart(2, '0')}
          </span>
          <div className="flex gap-2">
            <button
              onClick={() => setActive((p) => (p - 1 + projects.length) % projects.length)}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setActive((p) => (p + 1) % projects.length)}
              className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-all"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Italic teaser — DayNight sub-label */}
      <p className="font-serif italic text-[15px] text-white/35 mb-10 home-reveal">
        Live client deployments first — SWIFT, ISO 20022, CSP — then studio pilot programmes.
      </p>

      {/* Cards grid — DayNight browser-screenshot style */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[1px] bg-white/[0.07] rounded-2xl overflow-hidden home-reveal">
        {projects.map((p, i) => (
          <div
            key={i}
            className={`p-7 flex flex-col justify-between min-h-[360px] transition-all duration-300 cursor-pointer ${
              i === active
                ? 'bg-[#0066ff] text-white'
                : 'bg-[#0a1929] text-white/75 hover:bg-[#0c1f35]'
            }`}
            onClick={() => setActive(i)}
          >
            <div className="space-y-4">
              {/* Top meta */}
              <div className="flex justify-between items-start">
                <span className={`font-mono text-[10px] font-bold ${i === active ? 'text-white/60' : 'text-white/30'}`}>
                  {p.idx}
                </span>
                <span className={`font-mono text-[9px] font-bold px-2 py-1 rounded ${
                  i === active ? 'bg-white/15 text-white' : 'bg-white/5 text-white/40'
                }`}>
                  {p.category} · {p.year}
                </span>
              </div>

              {/* Client domain bar (simulates browser screenshot) */}
              <div className={`rounded-lg px-3 py-2 font-mono text-[10px] ${
                i === active ? 'bg-white/10 text-white/70' : 'bg-white/5 text-white/30'
              }`}>
                ● {p.client.toLowerCase().replace(/ /g, '')}.com
              </div>

              <div className={`text-[10px] font-mono font-bold uppercase tracking-widest ${
                i === active ? 'text-[#00d2ff]' : 'text-white/30'
              }`}>
                {p.type}
              </div>

              <h3 className="font-serif italic text-[clamp(16px,1.6vw,20px)] leading-snug font-normal">
                {p.title}
              </h3>

              <p className={`text-[12px] leading-relaxed ${i === active ? 'text-white/70' : 'text-white/40'}`}>
                {p.desc}
              </p>
            </div>

            {/* Bottom */}
            <div className="space-y-3 pt-4">
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((tag, ti) => (
                  <span
                    key={ti}
                    className={`text-[9px] font-mono font-bold px-2 py-1 rounded ${
                      i === active ? 'bg-white/15 text-white' : 'bg-white/5 text-white/40'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className={`font-mono text-[10px] font-bold ${i === active ? 'text-[#00d2ff]' : 'text-white/25'}`}>
                ✓ {p.stat}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 home-reveal">
        <Link
          href="/contact-us"
          className="text-[13px] text-white/35 hover:text-white/70 transition-colors font-medium flex items-center gap-1.5"
        >
          See all case studies <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
