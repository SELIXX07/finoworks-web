import Link from 'next/link';
import { ShieldCheck, ArrowRight, Layers, Lock, Cpu, Server, Activity, Database, Key } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'SWIFT Integration (SAA/SAG/AMH)',
      desc: 'Seamless deployment of Alliance Access, Gateway, and Lite2. We ensure 100% STP for Oracle Flexcube, Temenos, and SAP core banking platforms.',
      tag: 'Infrastructure',
    },
    {
      title: 'ISO 20022 Migration (MT ↔ MX)',
      desc: 'Expert MT to MX message mapping and intelligent translation libraries. Zero downtime cutover with full CBPR+ compliance testing.',
      tag: 'Compliance',
    },
    {
      title: 'SWIFT CSP Assessment v2026',
      desc: 'Authorized independent assessments against mandatory CSCF v2026 controls. Secure Zone segregation and KYC Registry attestation.',
      tag: 'Audit',
    },
    {
      title: 'Cyber Security Assessment',
      desc: 'Deep-dive evaluation of network topology, firewall rules, active directory, and human processes against international standards.',
      tag: 'Security',
    },
    {
      title: 'Penetration Testing',
      desc: 'Simulated adversary attacks conducted by certified ethical hackers to uncover vulnerabilities in core banking entry points.',
      tag: 'Security',
    },
    {
      title: 'SIEM Solutions',
      desc: 'Centralized, real-time threat monitoring and incident response logging tailored to central bank security guidelines.',
      tag: 'Operations',
    },
    {
      title: 'IT Health & Performance Assessment',
      desc: 'Comprehensive review of hardware lifecycle, software license compliance, and disaster recovery failover readiness.',
      tag: 'Infrastructure',
    },
    {
      title: 'Granular Data Integration (GDI)',
      desc: 'Direct extraction and integration of SWIFT transactional message streams into internal banking intelligence warehouses.',
      tag: 'Data',
    },
    {
      title: 'SIL / IPLA Migration & Replacement',
      desc: 'Upgrading and replacing deprecated SWIFT Integration Layer (SIL) and IPLA modules with modern AutoClient file automation.',
      tag: 'Middleware',
    },
    {
      title: 'SWIFT Annual Managed Support',
      desc: 'Dedicated extended technical team for ongoing patch management, PKI cert updates, and 24/7 helpdesk support.',
      tag: 'Managed Care',
    },
    {
      title: 'White-Labeled Risk Software',
      desc: 'Custom-branded threat monitoring software and risk scorecards built for commercial bank enterprise deployment.',
      tag: 'Software',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-50 text-electric-600 text-xs font-mono font-bold">
            ALL 11 SPECIALIZED SERVICES
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tight">
            Financial Messaging & Security Practice.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            From core SWIFT connectivity to independent CISA assessments, explore our specialized service catalog.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-electric-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">0{idx + 1}</span>
                  <span className="px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-bold">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-snug">{svc.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{svc.desc}</p>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-electric-500 hover:text-navy-900 transition-colors pt-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
