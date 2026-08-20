'use client';

export default function PositionStatement() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-32 md:py-44 max-w-[1720px] mx-auto">
      {/* Section Number Header */}
      <div className="section-head mb-12 home-reveal">
        <span className="section-num">(01)</span>
        <span>POSITION STATEMENT & MANIFESTO</span>
      </div>

      <div className="max-w-[1240px] space-y-12">
        {/* Massive Editorial Headline with Serif Italic Emphasis */}
        <p className="text-[clamp(30px,4.4vw,60px)] font-normal leading-[1.14] text-[#0a0e1a] tracking-tight home-reveal">
          Tier-1 financial institutions trust us with their SWIFT connectivity and compliance.{' '}
          <span className="text-slate-400 font-light">Not because we&apos;re generalist consultants — because we&apos;re the only specialized practice that both </span>
          <span className="font-serif italic font-normal text-[#0055ff] underline decoration-[#0055ff]/30 underline-offset-[12px] hover-highlight">
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
            <p className="text-[clamp(15px,1.3vw,19px)] text-slate-600 leading-relaxed font-normal">
              Most CSP audit firms simply hand you a checklist of non-compliance issues and walk away. Our CISA-certified auditors uncover the exact vulnerability, and our specialized SWIFT infrastructure engineers immediately implement the remediation — configuring firewalls, deploying MFA, hardening Alliance Access PKI, and filing your official attestation on the SWIFT KYC Security Analytics Registry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
