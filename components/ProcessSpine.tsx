'use client';

export default function ProcessSpine() {
  const steps = [
    {
      num: '01',
      phase: 'Phase 1: Gap Analysis',
      title: 'Audit Simulation & Review',
      desc: 'We perform a "mock audit" of your local SWIFT SAA/SAG setup against CSCF v2026 controls to identify non-compliance risks before official attestation.',
    },
    {
      num: '02',
      phase: 'Phase 2: Remediation',
      title: 'Hardening & MFA Config',
      desc: 'Unlike standard auditors, our engineers configure firewalls, harden OS parameters, implement MFA, and patch Alliance Access PKI.',
    },
    {
      num: '03',
      phase: 'Phase 3: Attestation',
      title: 'KYC Registry Submission',
      desc: 'Our CISA-certified team files your official independent assessment report on the SWIFT KYC Registry with full evidence documentation.',
    },
    {
      num: '04',
      phase: 'Phase 4: Support',
      title: '24/7 Managed Care',
      desc: 'Ongoing patch management, version upgrades, and 24/7 emergency response so your BIC license remains 100% compliant.',
    },
  ];

  return (
    <section className="py-24 relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto floating-surface p-8 md:p-14 space-y-16">
        <div className="space-y-4 max-w-2xl home-reveal">
          <div className="flex items-center gap-3 text-xs font-mono text-electric-500 font-bold uppercase tracking-widest">
            <span>(06) Engagement Lifecycle</span>
            <span className="w-8 h-px bg-electric-500" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
            The Assessment & Remediation Lifecycle.
          </h2>
        </div>

        {/* Process Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-electric-500/50 transition-all flex flex-col justify-between home-reveal"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                  <span className="font-bold text-electric-500">{step.num}</span>
                  <span>{step.phase}</span>
                </div>
                <h3 className="text-base font-bold text-navy-900 leading-snug">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
