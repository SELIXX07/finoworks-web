'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ServiceQuadrant {
  num: string;
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  pricing: string;
  themeClass: string;
}

const services: ServiceQuadrant[] = [
  {
    num: '01',
    tag: 'MANDATORY COMPLIANCE',
    title: 'SWIFT CSP v2026 Independent Assessments',
    desc: 'Authorized CISA-certified attestation across all 32 mandatory CSCF controls with KYC Registry submission and direct remediation engineering.',
    bullets: ['32 Mandatory CSCF Controls', 'Mock Audit & Penetration Testing', 'KYC Registry Evidence Pack', '100% Attestation Approval'],
    pricing: 'Fixed Engagement',
    themeClass: 'qc-ice',
  },
  {
    num: '02',
    tag: 'PAYMENT MODERNIZATION',
    title: 'ISO 20022 MT ↔ MX Message Converter',
    desc: 'Automated translation engine converting legacy MT103/202 messages to structured XML (pacs.008 / CBPR+) with 100% STP and zero truncation.',
    bullets: ['Zero Data Truncation Guarantee', 'CBPR+ & MyStandards Validation', 'Core Banking Adapter Pipeline', 'Real-Time Schema Validation'],
    pricing: 'Software & Integration',
    themeClass: 'qc-dark',
  },
  {
    num: '03',
    tag: 'MIDDLEWARE & INTEGRATION',
    title: 'Payment Hub & Enterprise Integration Layer',
    desc: 'Unified transaction router connecting Oracle Flexcube, Temenos T24, and SAP directly to SWIFT Alliance Access and Fedwire rails.',
    bullets: ['SIL to AutoClient Modernization', 'Active-Active DR Failover', 'Real-Time RMA Surveillance', 'Multi-Rail Core Adapter'],
    pricing: 'Enterprise Middleware',
    themeClass: 'qc-blue',
  },
  {
    num: '04',
    tag: 'CYBERSECURITY & RISK',
    title: 'White-Labeled Banking Risk & Threat Software',
    desc: 'Custom-engineered threat monitoring, SIEM log forwarding, and automated risk scoring built specifically for commercial banking compliance.',
    bullets: ['Real-Time SAA Log Auditing', 'Automated Vulnerability Scanner', 'Central Bank Export Reports', 'Custom Bank White-Labeling'],
    pricing: 'Annual License',
    themeClass: 'qc-cyan',
  },
];

export default function ServiceQuadrantGrid() {
  return (
    <section className="px-6 md:px-8 py-28 max-w-[1600px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 home-reveal">
        <div className="space-y-3 max-w-2xl">
          <div className="section-head">
            <span className="section-num">(03)</span>
            <span>SOLUTIONS & SYSTEMS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white/95 tracking-tight">
            Infrastructure & Audit Systems Built for Scale.
          </h2>
        </div>
        <p className="font-serif italic text-sm text-white/40 max-w-md">
          Offers engineered for financial institutions: SWIFT CSP audit, ISO 20022 message conversion, payment middleware, and threat risk tools.
        </p>
      </div>

      {/* 2x2 Quadrant Grid with 1px seam */}
      <div className="quad-grid home-reveal shadow-2xl">
        {services.map((svc, idx) => (
          <div
            key={idx}
            className={`quad-card ${svc.themeClass}`}
          >
            <div>
              {/* Card Meta Top */}
              <div className="flex justify-between items-center pb-4 border-b border-current/10">
                <span className="qc-num">{svc.num}</span>
                <span className="qc-tag">{svc.tag}</span>
              </div>

              {/* Title & Desc */}
              <h3 className="qc-title">{svc.title}</h3>
              <p className="text-xs md:text-sm leading-relaxed qc-soft mb-6">
                {svc.desc}
              </p>

              {/* Bullet list */}
              <ul className="space-y-2 text-xs qc-soft">
                {svc.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-center gap-2">
                    <span className="opacity-60">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom pricing + link */}
            <div className="pt-8 mt-6 border-t border-current/10 flex justify-between items-center">
              <span className="text-xs font-mono font-bold tracking-wider">{svc.pricing}</span>
              <Link
                href="/services"
                className="w-8 h-8 rounded-full border border-current/20 flex items-center justify-center hover:bg-current/10 transition-colors"
                aria-label={`View ${svc.title}`}
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
