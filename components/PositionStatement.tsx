'use client';

export default function PositionStatement() {
  return (
    <section className="px-6 md:px-8 py-28 max-w-[1600px] mx-auto">
      <div className="section-head mb-10 home-reveal">
        <span className="section-num">(01)</span>
        <span>POSITION STATEMENT</span>
      </div>

      <div className="max-w-[1000px] space-y-8">
        <p className="text-[clamp(28px,4.2vw,50px)] font-extrabold leading-[1.15] text-slate-900 tracking-tight home-reveal">
          Banks trust us with their SWIFT infrastructure. Not because we&apos;re generalist IT consultants —
          because we&apos;re the only specialized practice that both{' '}
          <span className="text-[#0055ff] underline decoration-[#0055ff]/30 underline-offset-8">audits and engineers</span>{' '}
          your CSCF v2026 controls in a single engagement.
        </p>

        <div className="section-divider home-reveal" />

        <p className="text-[clamp(15px,1.3vw,18px)] text-slate-600 leading-relaxed max-w-[720px] font-normal home-reveal">
          Most CSP assessors hand you a gap report and walk away. Our CISA-certified auditors find the gap, then our engineers close it — configuring firewalls, deploying MFA, hardening Alliance Access PKI, and filing your official attestation on the SWIFT KYC Registry.
        </p>
      </div>

      {/* Section footer */}
      <div className="mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4 home-reveal pt-8 border-t border-slate-200">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <span>PROVEN RESULTS IN PRODUCTION</span>
        </div>
        <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
          Live Banking Work · SAA Failover · CSCF v2026 · ISO 20022 Cutover
        </p>
      </div>
    </section>
  );
}
