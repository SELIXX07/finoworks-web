'use client';

import { Award } from 'lucide-react';

export default function Partnerships() {
  const credentials = [
    { title: 'ISO Lead Auditor Certified', desc: 'Rigorous information security management & auditing' },
    { title: 'CISA Certified Assessors', desc: 'Certified Information Systems Auditor expertise' },
    { title: 'SWIFT Certified CSP Provider Label 2026', desc: 'Authorized independent assessments for banking sector' },
    { title: 'Fedwire Certified', desc: 'US Fedwire payment rail integration standard' },
  ];

  const partners = [
    { name: 'SWIFT', type: 'Certified Provider', detail: 'Authorized CSP Assessments & Customer Security Programme' },
    { name: 'Oracle', type: 'Gold Partner', detail: 'Direct Core Banking Middleware & Flexcube Integration' },
    { name: 'Axletree USA', type: 'Strategic NDA Partner', detail: 'Specialized SWIFT Domain Customer Support' },
    { name: 'Seqato', type: 'Strategic Alliance', detail: 'Global SWIFT Infrastructure Enhancement' },
    { name: 'SWIFT User Group Kenya', type: 'Official Partner', detail: 'Providing CSP Assessments to All Kenyan Banks' },
  ];

  return (
    <section className="py-24 relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto floating-surface p-8 md:p-14 space-y-16">
        <div className="space-y-4 max-w-2xl home-reveal">
          <div className="flex items-center gap-3 text-xs font-mono text-electric-500 font-bold uppercase tracking-widest">
            <span>(05) Trust, Credentials & Strategic Alliances</span>
            <span className="w-8 h-px bg-electric-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            Backed by Industry Certifications & Global Partners.
          </h2>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 home-reveal"
            >
              <Award className="w-6 h-6 text-electric-500" />
              <h3 className="font-bold text-sm text-navy-900">{cred.title}</h3>
              <p className="text-xs text-slate-500">{cred.desc}</p>
            </div>
          ))}
        </div>

        {/* Partnerships Grid */}
        <div className="pt-8 border-t border-slate-200 space-y-8 home-reveal">
          <h3 className="text-xs font-mono text-slate-500 uppercase tracking-widest font-bold">
            STRATEGIC PARTNERSHIPS & AGREEMENTS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-md transition-all space-y-3"
              >
                <div className="flex justify-between items-center">
                  <span className="font-extrabold text-lg text-navy-900">{partner.name}</span>
                  <span className="text-[10px] font-mono font-bold text-electric-500 bg-electric-50 px-2.5 py-1 rounded">
                    {partner.type}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">{partner.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
