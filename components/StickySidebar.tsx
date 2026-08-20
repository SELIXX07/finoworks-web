'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StickySidebar() {
  const steps = [
    {
      num: '01',
      tag: 'GAP ANALYSIS',
      title: 'Mock Audit & Scope Definition',
      desc: 'Simulating full CSCF v2026 audit parameters across Alliance Access, Gateway, and Secure Zone architecture.',
      themeClass: 'qc-cream',
    },
    {
      num: '02',
      tag: 'REMEDIATION',
      title: 'Infrastructure & MFA Hardening',
      desc: 'Direct hands-on engineering: firewall ACLs, PKI patch deployment, MFA implementation, and token rotation.',
      themeClass: 'qc-dark',
    },
    {
      num: '03',
      tag: 'ATTESTATION',
      title: 'CISA Certified KYC Registry Filing',
      desc: 'Submitting authorized independent assessment findings directly into the SWIFT KYC Security Analytics Portal.',
      themeClass: 'qc-ice',
    },
    {
      num: '04',
      tag: '24/7 STANDBY',
      title: 'Continuous Compliance & Patching',
      desc: 'Ongoing vulnerability monitoring, emergency zero-day patch deployments, and SLA-backed standby engineering.',
      themeClass: 'qc-amber',
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-16 py-36 md:py-48 max-w-[1720px] mx-auto">
      <div className="sticky-split">
        {/* Left Sticky Column */}
        <div className="sticky-aside space-y-8 home-reveal">
          <div className="section-head">
            <span className="section-num">(04)</span>
            <span>ENGAGEMENT LIFECYCLE</span>
          </div>

          <h2 className="text-[clamp(34px,4.5vw,58px)] font-extrabold text-[#0a0e1a] leading-[1.08] tracking-tight">
            Evidence first. <br />
            <span className="font-serif italic font-normal text-[#0055ff]">Then engineering.</span>
          </h2>

          <p className="text-base text-slate-600 leading-relaxed max-w-md font-normal">
            Most consultancies stop at discovering vulnerabilities. We engineer the fixes, update firewall configs, harden access zones, and sign off the official attestation.
          </p>

          <div className="space-y-3.5 pt-2 text-xs font-mono text-slate-700 font-bold">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0055ff]" />
              <span>Full CISA-certified attestation report</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0055ff]" />
              <span>Direct SWIFT KYC Registry upload</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0055ff]" />
              <span>Zero-downtime cutover guarantee</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/csp-assessment-v2026"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#0055ff] hover:text-[#0a0e1a] transition-colors"
            >
              <span>SCHEDULE AUDIT SIMULATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right 2x2 Scrolling Grid */}
        <div className="quad-grid home-reveal shadow-xl">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`quad-card ${step.themeClass}`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-current/10">
                  <span className="qc-num">{step.num}</span>
                  <span className="qc-tag">{step.tag}</span>
                </div>
                <h3 className="qc-title !my-4">{step.title}</h3>
                <p className="text-sm qc-soft leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
