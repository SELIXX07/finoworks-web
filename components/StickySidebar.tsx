'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function StickySidebar() {
  const steps = [
    {
      num: '01',
      tag: 'GAP ANALYSIS',
      title: 'Mock Audit & Scope Definition',
      desc: 'Simulating full CSCF v2026 audit parameters across Alliance Access, Gateway, and Secure Zone architecture.',
      themeClass: 'qc-ice',
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
      themeClass: 'qc-cyan',
    },
    {
      num: '04',
      tag: '24/7 CARE',
      title: 'Continuous Compliance & Patching',
      desc: 'Ongoing vulnerability monitoring, emergency zero-day patch deployments, and SLA-backed standby engineering.',
      themeClass: 'qc-blue',
    },
  ];

  return (
    <section className="px-6 md:px-8 py-28 max-w-[1600px] mx-auto">
      <div className="sticky-split">
        {/* Left Sticky Column */}
        <div className="sticky-aside space-y-6 home-reveal">
          <div className="section-head">
            <span className="section-num">(04)</span>
            <span>ENGAGEMENT LIFECYCLE</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-white/95 leading-[1.1]">
            Evidence first. <br />
            <em className="font-serif italic font-normal text-[#00d2ff]">Then engineering.</em>
          </h2>

          <p className="text-sm text-white/50 leading-relaxed max-w-sm">
            Most consultancies stop at discovering vulnerabilities. We engineer the fixes, update firewall configs, harden access zones, and sign off the official attestation.
          </p>

          <div className="space-y-3 pt-2 text-xs font-mono text-white/60">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#0066ff]" />
              <span>Full CISA-certified attestation report</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#0066ff]" />
              <span>Direct SWIFT KYC Registry upload</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-3.5 h-3.5 text-[#0066ff]" />
              <span>Zero-downtime cutover guarantee</span>
            </div>
          </div>

          <div className="pt-4">
            <Link
              href="/csp-assessment-v2026"
              className="inline-flex items-center gap-2 font-mono text-xs font-bold text-[#00d2ff] hover:text-white transition-colors"
            >
              <span>SCHEDULE AUDIT SIMULATION</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Right 2x2 Scrolling Grid */}
        <div className="quad-grid home-reveal shadow-2xl">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className={`quad-card ${step.themeClass}`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-current/10">
                  <span className="qc-num">{step.num}</span>
                  <span className="qc-tag">{step.tag}</span>
                </div>
                <h3 className="qc-title !my-3">{step.title}</h3>
                <p className="text-xs md:text-sm qc-soft leading-relaxed">
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
