'use client';

export default function PositionStatement() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-36 md:py-48 max-w-[1720px] mx-auto">
      {/* Section Number Header */}
      <div className="section-head mb-14 home-reveal">
        <span className="section-num">(01)</span>
        <span>POSITION STATEMENT & MANIFESTO</span>
      </div>

      <div className="max-w-[1240px] space-y-12">
        {/* Massive Editorial Headline with Serif Italic Emphasis */}
        <p className="text-[clamp(32px,4.6vw,64px)] font-normal leading-[1.12] text-[#0a0e1a] tracking-tight home-reveal">
          Tier-1 financial institutions trust us with their SWIFT connectivity and compliance.{' '}
          <span className="text-slate-400 font-light">Not because we&apos;re generalist consultants — because we&apos;re the only specialized practice that both </span>
          <span className="font-serif italic font-normal text-[#0055ff] underline decoration-[#0055ff]/30 underline-offset-[12px]">
            independently audits and directly remediates
          </span>{' '}
          <span className="font-extrabold text-[#0a0e1a]">
            your CSCF v2026 controls in a single engagement.
          </span>
        </p>

        <div className="section-divider home-reveal" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start home-reveal">
          <div className="md:col-span-4 font-mono text-xs uppercase font-bold tracking-[0.16em] text-[#d97706]">
            [ THE FINOWORKS METHODOLOGY ]
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-[clamp(16px,1.4vw,20px)] text-slate-600 leading-relaxed font-normal">
              Most CSP audit firms simply hand you a checklist of non-compliance issues and walk away. Our CISA-certified auditors uncover the exact vulnerability, and our specialized SWIFT infrastructure engineers immediately implement the remediation — configuring firewalls, deploying MFA, hardening Alliance Access PKI, and filing your official attestation on the SWIFT KYC Security Analytics Registry.
            </p>
          </div>
        </div>
      </div>

      {/* Transition to next section */}
      <div className="mt-28 flex flex-col sm:flex-row sm:items-end justify-between gap-6 home-reveal pt-10 border-t border-slate-200/80">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <span>PROVEN RESULTS IN PRODUCTION</span>
        </div>
        <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
          Active Production Deployments · SWIFT SAA · ISO 20022 CBPR+ · CSCF v2026
        </p>
      </div>
    </section>
  );
}
