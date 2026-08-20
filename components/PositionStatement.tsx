'use client';

export default function PositionStatement() {
  return (
    <section className="px-6 md:px-8 py-28 max-w-[1600px] mx-auto">
      <div className="section-head mb-10 home-reveal">
        <span className="section-num">(01)</span>
        <span>POSITION</span>
      </div>

      {/* DayNight-style: big text floats directly on dark bg, NO card box */}
      <div className="max-w-[900px] space-y-6">
        <p className="font-sans text-[clamp(28px,4.2vw,52px)] font-bold leading-[1.15] text-white/90 home-reveal">
          Banks trust us with their SWIFT infrastructure. Not because we're generalist IT consultants —
          because we're the only team that both{' '}
          <em className="font-serif font-normal italic text-[#00d2ff]">audits and engineers</em>{' '}
          your CSCF v2026 controls in a single engagement.
        </p>

        <div className="section-divider home-reveal" />

        <p className="text-[clamp(14px,1.3vw,17px)] text-white/45 leading-relaxed max-w-[640px] home-reveal">
          Most CSP assessors hand you a gap report and walk away. Our CISA-certified auditors find the gap, then our engineers close it — so your BIC licence stays active and your attestation lands in the KYC Registry on the first submission.
        </p>
      </div>

      {/* Section footer — DayNight case studies teaser */}
      <div className="mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4 home-reveal">
        <div className="section-head">
          <span className="section-num">(02G</span>
          <span>CASE STUDIES & DEPLOYMENTS</span>
        </div>
        <p className="text-[13px] italic font-serif text-white/35">
          Live client work first — SWIFT, ISO 20022, risk software<br className="hidden sm:block" /> — then studio pilot programmes.
        </p>
      </div>
    </section>
  );
}
