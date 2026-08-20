'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function WorkStrip() {
  const [activeIndex, setActiveIndex] = useState(0);

  const projects = [
    {
      idx: '01',
      title: 'Disaster Recovery & Active-Active Failover',
      category: 'Infrastructure',
      year: '2026',
      desc: 'Designed dual-site active-active automated failover architecture for SWIFT Alliance Access (SAA) ensuring zero data loss during core network outages.',
      stats: '99.999% Uptime Achieved',
    },
    {
      idx: '02',
      title: 'Anti-Fraud RMA & Transaction Surveillance',
      category: 'Security',
      year: '2025',
      desc: 'Implemented strict Relationship Management Application (RMA) controls and real-time transaction monitoring to prevent fraudulent payment flows.',
      stats: '100% Fraud Interception',
    },
    {
      idx: '03',
      title: 'SIL & IPLA Automated Middleware Migration',
      category: 'Middleware',
      year: '2026',
      desc: 'Modernized legacy SWIFT Integration Layer (SIL) with AutoClient automated file transfer pipeline connecting Temenos T24 to Alliance Gateway.',
      stats: '100% STP Processing',
    },
    {
      idx: '04',
      title: 'Tier-1 Commercial Bank CSP v2026 Assessment',
      category: 'Compliance',
      year: '2026',
      desc: 'Conducted authorized independent CISA audit against 32 mandatory CSCF controls with full KYC Registry submission and zero compliance flags.',
      stats: 'Passed Audit on First Filing',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-24 relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto floating-surface p-8 md:p-14 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 home-reveal">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono text-electric-500 font-bold uppercase tracking-widest">
              <span>(02) Selected Case Studies & Deployments</span>
              <span className="w-8 h-px bg-electric-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Proven Architecture in Production.
            </h2>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-slate-500">
              <strong className="text-navy-900 text-sm">0{activeIndex + 1}</strong> / 0{projects.length}
            </span>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-xl bg-slate-100/90 hover:bg-navy-900 hover:text-white transition-colors flex items-center justify-center border border-slate-200"
                aria-label="Previous project"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-xl bg-slate-100/90 hover:bg-navy-900 hover:text-white transition-colors flex items-center justify-center border border-slate-200"
                aria-label="Next project"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Strip Track */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between space-y-6 home-reveal ${
                idx === activeIndex
                  ? 'bg-slate-900 text-white border-slate-800 shadow-2xl scale-[1.02]'
                  : 'bg-slate-50/80 text-navy-900 border-slate-200 hover:border-electric-500/50'
              }`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className={idx === activeIndex ? 'text-electric-400 font-bold' : 'text-slate-400 font-bold'}>
                    {proj.idx}
                  </span>
                  <span className={`px-2.5 py-1 rounded text-[10px] font-bold ${
                    idx === activeIndex ? 'bg-slate-800 text-electric-300' : 'bg-white border border-slate-200 text-slate-600'
                  }`}>
                    {proj.category} • {proj.year}
                  </span>
                </div>

                <h3 className="text-lg font-bold leading-snug">{proj.title}</h3>
                <p className={`text-xs leading-relaxed ${idx === activeIndex ? 'text-slate-300' : 'text-slate-600'}`}>
                  {proj.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/20 space-y-2">
                <div className={`text-[11px] font-mono font-bold ${idx === activeIndex ? 'text-emerald-400' : 'text-electric-600'}`}>
                  ✓ {proj.stats}
                </div>
                <Link
                  href="/contact-us"
                  className={`inline-flex items-center gap-1 text-xs font-bold ${
                    idx === activeIndex ? 'text-white hover:text-electric-300' : 'text-navy-900 hover:text-electric-500'
                  }`}
                  data-cursor="view"
                >
                  <span>Request Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
