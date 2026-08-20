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
  slug: string;
}

const services: ServiceQuadrant[] = [
  {
    num: '01',
    tag: 'MANDATORY AUDIT',
    title: 'SWIFT CSP v2026 Independent Assessments',
    desc: 'Authorized CISA-certified attestation across all 32 mandatory CSCF controls with KYC Registry submission and direct remediation engineering.',
    bullets: ['32 Mandatory CSCF Controls', 'Mock Audit & Penetration Testing', 'KYC Registry Evidence Pack', '100% Attestation Approval'],
    pricing: 'Fixed Scope Audit',
    themeClass: 'qc-cream',
    slug: 'csp-assessment-v2026',
  },
  {
    num: '02',
    tag: 'PAYMENT MODERNIZATION',
    title: 'ISO 20022 MT ↔ MX Message Converter',
    desc: 'Automated translation engine converting legacy MT103/202 messages to structured XML (pacs.008 / CBPR+) with 100% STP and zero truncation.',
    bullets: ['Zero Data Truncation Guarantee', 'CBPR+ & MyStandards Validation', 'Core Banking Adapter Pipeline', 'Real-Time Schema Validation'],
    pricing: 'Software & Integration',
    themeClass: 'qc-dark',
    slug: 'iso-20022-migration',
  },
  {
    num: '03',
    tag: 'MIDDLEWARE & SAA',
    title: 'Payment Hub & Enterprise Integration Layer',
    desc: 'Unified transaction router connecting Oracle Flexcube, Temenos T24, and SAP directly to SWIFT Alliance Access and Fedwire rails.',
    bullets: ['SIL to AutoClient Modernization', 'Active-Active DR Failover', 'Real-Time RMA Surveillance', 'Multi-Rail Core Adapter'],
    pricing: 'Enterprise Middleware',
    themeClass: 'qc-ice',
    slug: 'swift-integration',
  },
  {
    num: '04',
    tag: 'CYBERSECURITY & RISK',
    title: 'White-Labeled Banking Risk & Threat Software',
    desc: 'Custom-engineered threat monitoring, SIEM log forwarding, and automated risk scoring built specifically for commercial banking compliance.',
    bullets: ['Real-Time SAA Log Auditing', 'Automated Vulnerability Scanner', 'Central Bank Export Reports', 'Custom Bank White-Labeling'],
    pricing: 'Annual License',
    themeClass: 'qc-amber',
    slug: 'white-labeled-risk-software',
  },
];

export default function ServiceQuadrantGrid() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-32 md:py-44 max-w-[1720px] mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 home-reveal">
        <div className="space-y-4 max-w-3xl">
          <div className="section-head">
            <span className="section-num">(02)</span>
            <span>SOLUTIONS & SYSTEMS ARCHITECTURE</span>
          </div>
          <h2 className="text-[clamp(32px,4.5vw,60px)] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.08]">
            Infrastructure & Audit Systems{' '}
            <span className="font-serif italic font-normal text-[#0055ff] hover-highlight">Built for Scale.</span>
          </h2>
        </div>
        <div className="space-y-3 max-w-md">
          <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed">
            Enterprise systems engineered for financial institutions: SWIFT CSP audits, ISO 20022 message conversion, payment middleware, and threat risk software.
          </p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#0055ff] hover:underline"
          >
            <span>View all 11 individual practice pages</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>

      {/* 2x2 Quadrant Grid */}
      <div className="quad-grid home-reveal shadow-xl">
        {services.map((svc, idx) => (
          <Link
            key={idx}
            href={`/services/${svc.slug}`}
            className={`quad-card ${svc.themeClass} group cursor-pointer block`}
          >
            <div>
              <div className="flex justify-between items-center pb-5 border-b border-current/10">
                <span className="qc-num">{svc.num}</span>
                <span className="qc-tag">{svc.tag}</span>
              </div>

              <h3 className="qc-title group-hover:text-[#0055ff] transition-colors">{svc.title}</h3>
              <p className="text-sm leading-relaxed qc-soft mb-8 font-normal max-w-[500px]">
                {svc.desc}
              </p>

              <ul className="space-y-2.5 text-xs md:text-sm qc-soft font-semibold">
                {svc.bullets.map((b, bi) => (
                  <li key={bi} className="flex items-center gap-2.5">
                    <span className="opacity-60">•</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-10 mt-8 border-t border-current/10 flex justify-between items-center">
              <span className="text-xs font-mono font-extrabold tracking-wider">{svc.pricing}</span>
              <div className="w-11 h-11 rounded-full border border-current/20 flex items-center justify-center group-hover:bg-[#0055ff] group-hover:border-[#0055ff] group-hover:text-white transition-all shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
