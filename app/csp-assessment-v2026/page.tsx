import Link from 'next/link';
import { ShieldCheck, ArrowRight, CheckCircle2, Lock } from 'lucide-react';

export default function CspAssessmentPage() {
  const controls = [
    'Control 1.1: SWIFT Secure Zone Architecture & Network Segmentation',
    'Control 2.1: Operating System & Application Hardening',
    'Control 4.1: Multi-Factor Authentication (MFA) Enforcement',
    'Control 5.1: Real-time Incident Detection & Log Auditing',
    'Control 6.4: PKI Infrastructure & Tokenization Management',
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>OFFICIAL SWIFT CERTIFIED CSP PROVIDER LABEL 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tight">
            SWIFT CSP v2026 Independent Assessment.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Every SWIFT-connected financial institution is legally mandated to complete an annual independent assessment. As a certified provider with CISA-accredited auditors, we don&apos;t just audit your environment—we remediate the gaps.
          </p>
        </div>

        {/* Control Focus */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl border border-slate-200 space-y-8">
          <h2 className="text-2xl font-bold text-navy-900">
            CSCF v2026 Mandatory Control Checklist
          </h2>

          <div className="space-y-4">
            {controls.map((ctrl, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 text-sm font-semibold text-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-electric-500 flex-shrink-0" />
                <span>{ctrl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-2xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Book Your 2026 Assessment Window</h3>
            <p className="text-xs text-slate-400">
              Authorized independent attestation report ready for filing on the SWIFT KYC Registry.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-electric-500 hover:bg-electric-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs flex items-center gap-2 whitespace-nowrap"
          >
            <span>Book Official CISA Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
