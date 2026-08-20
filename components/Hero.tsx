'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import CompanyHubMap from '@/components/CompanyHubMap';

export default function Hero() {
  const [website, setWebsite] = useState('');
  const router = useRouter();

  const handleAuditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (website.trim()) {
      router.push(`/contact-us?bic=${encodeURIComponent(website.trim())}&service=SWIFT+CSP+v2026+Assessment`);
    } else {
      router.push('/csp-assessment-v2026');
    }
  };

  return (
    <section className="relative min-h-screen flex items-start pt-28 pb-14 px-6 md:px-8 overflow-hidden bg-white">
      <div className="max-w-[1600px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* ── LEFT COLUMN (Span 6) ── */}
        <div className="lg:col-span-6 space-y-8 pt-4">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700 border border-slate-200 rounded-full px-4 py-2 bg-slate-50 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
            <span>SWIFT · ISO 20022 · COMPLIANCE</span>
            <span className="text-slate-300">/</span>
            <span className="text-[#0055ff] font-extrabold">CSP v2026</span>
          </div>

          <h1 className="text-[clamp(38px,4.8vw,68px)] font-extrabold leading-[1.06] tracking-tight text-slate-900">
            SWIFT Infrastructure<br />
            & Independent<br />
            CSP Assessments{' '}
            <span className="text-[#0055ff] font-extrabold">
              That Certify.
            </span>
          </h1>

          <p className="text-[clamp(15px,1.2vw,18px)] text-slate-600 leading-relaxed max-w-[540px] font-normal">
            SWIFT Certified Provider. CISA-certified auditors auditing your CSCF v2026 controls, then engineering the remediation — so you pass the KYC Registry attestation on the first submission.
          </p>

          {/* BIC Form */}
          <form onSubmit={handleAuditSubmit} className="flex items-center gap-3 max-w-[540px]">
            <div className="flex-1 flex items-center gap-3 bg-slate-50 border border-slate-300 focus-within:border-[#0055ff] rounded-full px-5 py-3.5 transition-colors shadow-sm">
              <input
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter your BIC or institution name…"
                className="flex-1 bg-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none font-mono"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-[#0055ff] hover:bg-slate-900 text-white font-bold text-[13px] px-7 py-3.5 rounded-full transition-all duration-200 whitespace-nowrap shadow-md hover:shadow-lg"
            >
              <span>Free Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
          <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest -mt-4 font-semibold">
            Free SWIFT CSP Gap Analysis & Audit Scope
          </p>

          {/* Metrics bar */}
          <div className="flex flex-wrap items-center gap-0 pt-4 border-t border-slate-200">
            {[
              { label: 'EXPERIENCE', val: '15+ Yrs Combined' },
              { label: 'FOCUS', val: 'SWIFT Compliance' },
              { label: 'TRACK RECORD', val: '100% Pass Rate' },
            ].map((m, i) => (
              <div key={i} className="flex items-center">
                <div className="pr-6 md:pr-10">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold">{m.label}</div>
                  <div className="text-[16px] font-extrabold text-slate-900 mt-0.5">{m.val}</div>
                </div>
                {i < 2 && <div className="w-px h-8 bg-slate-200 mr-6 md:mr-10 hidden sm:block" />}
              </div>
            ))}
            <Link
              href="/about-us"
              className="ml-auto text-[13px] text-slate-500 hover:text-[#0055ff] transition-colors font-semibold flex items-center gap-1"
            >
              Our story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* ── RIGHT COLUMN: Interactive Company Hub Map (Span 6) ── */}
        <div className="lg:col-span-6 w-full flex items-center justify-center">
          <CompanyHubMap />
        </div>
      </div>
    </section>
  );
}
