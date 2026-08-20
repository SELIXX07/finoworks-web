import Link from 'next/link';
import { ArrowRight, ShieldCheck, CheckCircle2, Lock, FileText, CheckSquare } from 'lucide-react';

export default function CspAssessmentPage() {
  const controls = [
    { id: '1.1', title: 'SWIFT Environment Protection (Secure Zone)', status: 'Mandatory', desc: 'Strict logical & physical segregation of SAA/SAG infrastructure.' },
    { id: '1.2', title: 'Operating System Privileged Access Control', status: 'Mandatory', desc: 'Enforcing zero standing privileges and MFA for local administrators.' },
    { id: '2.1', title: 'Internal Data Flow Security', status: 'Mandatory', desc: 'TLS 1.3 encryption and certificate pinning across all middleware routes.' },
    { id: '2.2', title: 'Security Updates & Patch Management', status: 'Mandatory', desc: 'Critical CVE remediation and mandatory Alliance patches applied within 30 days.' },
    { id: '5.1', title: 'Logical Access Control & MFA', status: 'Mandatory', desc: 'Hardware token MFA enforced for all operators logging into SWIFT tools.' },
    { id: '7.1', title: 'Authorized Independent Assessment', status: 'Mandatory', desc: 'Mandatory annual attestation completed by certified external CISA assessors.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-black text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span>SWIFT CSCF v2026 MANDATORY FRAMEWORK</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            SWIFT CSP v2026 Independent Assessments.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            SWIFT requires all connected financial institutions to conduct an annual independent assessment of their Customer Security Controls Framework (CSCF v2026) and submit attestations directly to the SWIFT KYC Security Analytics Registry.
          </p>
        </div>

        {/* 6 Key Controls Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {controls.map((ctrl) => (
            <div key={ctrl.id} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:bg-white hover:shadow-md transition-all">
              <div className="flex justify-between items-center text-xs font-mono pb-2 border-b border-slate-200">
                <span className="font-bold text-[#0055ff]">CONTROL {ctrl.id}</span>
                <span className="px-2.5 py-1 rounded bg-black text-white text-[10px] font-bold">
                  {ctrl.status}
                </span>
              </div>
              <h3 className="font-serif italic text-2xl text-black font-normal">{ctrl.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{ctrl.desc}</p>
            </div>
          ))}
        </div>

        {/* Audit Guarantee Card */}
        <div className="p-10 md:p-14 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold">Ready for CSCF v2026 Filing?</h3>
            <p className="text-sm text-slate-400">
              Schedule your mock audit simulation and official CISA independent assessment today.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-[#0055ff] hover:bg-white hover:text-black text-white font-bold px-8 py-4 rounded-full transition-all text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Book Official Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
