'use client';

export default function PositionStatement() {
  return (
    <section className="px-6 md:px-8 py-28 max-w-[1600px] mx-auto">
      <div className="section-head mb-10 home-reveal">
        <span className="section-num">(01)</span>
        <span>POSITION</span>
      </div>

      {/* Big text directly on clean white background */}
      <div className="max-w-[960px] space-y-8">
        <p className="font-sans text-[clamp(28px,4.2vw,54px)] font-extrabold leading-[1.14] text-black home-reveal">
          Banks trust us with their SWIFT infrastructure. Not because we&apos;re generalist IT consultants —
          because we&apos;re the only team that both{' '}
          <em className="font-serif font-normal italic text-[#0055ff]">audits and engineers</em>{' '}
          your CSCF v2026 controls in a single engagement.
        </p>

        <div className="section-divider home-reveal" />

        <p className="text-[clamp(15px,1.3vw,18px)] text-slate-600 leading-relaxed max-w-[680px] home-reveal">
          Most CSP assessors hand you a gap report and walk away. Our CISA-certified auditors find the gap, then our engineers close it — so your BIC licence stays active and your attestation lands in the KYC Registry on the first submission.
        </p>
      </div>

      {/* Section footer */}
      <div className="mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4 home-reveal pt-8 border-t border-slate-200">
        <div className="section-head">
          <span className="section-num">(02)</span>
          <span>CASE STUDIES & DEPLOYMENTS</span>
        </div>
        <p className="text-[13px] italic font-serif text-slate-500">
          Live client work first — SWIFT, ISO 20022, risk software<br className="hidden sm:block" /> — then studio pilot programmes.
        </p>
      </div>
    </section>
  );
}
