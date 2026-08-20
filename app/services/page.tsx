import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      num: '01',
      title: 'SWIFT Integration (SAA/SAG/AMH)',
      desc: 'Seamless deployment of Alliance Access, Gateway, and Lite2. We ensure 100% Straight-Through Processing (STP) for Oracle Flexcube, Temenos, and SAP core banking platforms.',
      tag: 'Infrastructure',
      theme: 'bg-[#FBF4E6] text-black border-slate-200',
    },
    {
      num: '02',
      title: 'ISO 20022 Migration (MT ↔ MX)',
      desc: 'Expert MT to MX message mapping and intelligent translation libraries. Zero downtime cutover with full CBPR+ compliance testing.',
      tag: 'Compliance',
      theme: 'bg-[#0C121E] text-white border-black',
    },
    {
      num: '03',
      title: 'SWIFT CSP Assessment v2026',
      desc: 'Authorized independent assessments against mandatory CSCF v2026 controls. Secure Zone segregation, penetration testing, and KYC Registry attestation.',
      tag: 'Audit',
      theme: 'bg-[#EAF2FF] text-black border-slate-200',
    },
    {
      num: '04',
      title: 'Cyber Security Assessment',
      desc: 'Deep-dive evaluation of network topology, firewall rules, active directory, and human processes against international banking security standards.',
      tag: 'Security',
      theme: 'bg-[#F6E2B8] text-black border-slate-200',
    },
    {
      num: '05',
      title: 'Penetration Testing & Red Teaming',
      desc: 'Simulated adversary attacks conducted by certified ethical hackers to uncover vulnerabilities in core banking entry points before real threats exploit them.',
      tag: 'Security',
      theme: 'bg-white text-black border-slate-200',
    },
    {
      num: '06',
      title: 'SIEM & SOC Threat Solutions',
      desc: 'Centralized, real-time threat monitoring and incident response logging tailored to central bank regulatory guidelines.',
      tag: 'Operations',
      theme: 'bg-[#FBF4E6] text-black border-slate-200',
    },
    {
      num: '07',
      title: 'IT Health & Performance Assessment',
      desc: 'Comprehensive review of hardware lifecycle, software license compliance, and disaster recovery automated failover readiness.',
      tag: 'Infrastructure',
      theme: 'bg-[#0C121E] text-white border-black',
    },
    {
      num: '08',
      title: 'Granular Data Integration (GDI)',
      desc: 'Direct extraction and integration of SWIFT transactional message streams into internal banking intelligence and BI data warehouses.',
      tag: 'Data',
      theme: 'bg-[#EAF2FF] text-black border-slate-200',
    },
    {
      num: '09',
      title: 'SIL / IPLA Migration & Replacement',
      desc: 'Upgrading and replacing deprecated SWIFT Integration Layer (SIL) and IPLA modules with modern AutoClient automated file transfer.',
      tag: 'Middleware',
      theme: 'bg-[#F6E2B8] text-black border-slate-200',
    },
    {
      num: '10',
      title: 'SWIFT Annual Managed Support',
      desc: 'Dedicated extended technical team for ongoing patch management, PKI cert updates, 24/7 standby helpdesk, and SLA response.',
      tag: 'Managed Care',
      theme: 'bg-white text-black border-slate-200',
    },
    {
      num: '11',
      title: 'White-Labeled Risk Software',
      desc: 'Custom-branded threat monitoring software and risk scorecards built for commercial bank enterprise deployment and executive reporting.',
      tag: 'Software',
      theme: 'bg-[#0C121E] text-white border-black',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-black text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span>ALL 11 SPECIALIZED SERVICES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            Financial Messaging & Security Practice.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            From core SWIFT connectivity to independent CISA assessments, explore our specialized service catalog built for tier-1 banks.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl border shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 ${svc.theme}`}
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono pb-3 border-b border-current/10">
                  <span className="font-bold opacity-50">{svc.num}</span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-black/5 text-current uppercase">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="font-serif italic text-2xl leading-snug font-normal">{svc.title}</h3>
                <p className="text-xs leading-relaxed opacity-75">{svc.desc}</p>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold pt-4 border-t border-current/10 hover:opacity-80 transition-opacity"
              >
                <span>Request Service Scope</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-10 md:p-14 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold">Need Custom SWIFT Engineering?</h3>
            <p className="text-sm text-slate-400">
              Speak directly with our principal solutions architect in Nairobi or Bangalore.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-[#0055ff] hover:bg-white hover:text-black text-white font-bold px-8 py-4 rounded-full transition-all text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
