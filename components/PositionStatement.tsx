'use client';

export default function PositionStatement() {
  return (
    <section className="py-24 relative z-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto floating-surface p-8 md:p-16 space-y-8">
        <div className="flex items-center gap-3 text-xs font-mono text-electric-500 font-bold uppercase tracking-widest home-reveal">
          <span>(01) Position Statement</span>
          <span className="w-8 h-px bg-electric-500" />
        </div>

        <div className="max-w-4xl space-y-6">
          <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 leading-tight home-reveal">
            We are the silent engine behind secure banking operations. Not generalist IT consultants—<em className="font-serif italic font-normal text-electric-500">SWIFT specialists</em>.
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed home-reveal">
            For over 15 years, FinoWorks has bridged the complex gap between internal Core Banking Systems (Oracle, Temenos, SAP) and global payment networks. When central banks issue new mandates or SWIFT updates its CSCF v2026 framework, we design, harden, and attest your infrastructure so your cross-border rails never fail.
          </p>

          <div className="flex flex-wrap gap-3 pt-2 home-reveal">
            <span className="px-4 py-2 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-semibold">
              🔒 Zero-Trust Architecture
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-semibold">
              ⚡ 100% Straight-Through Processing
            </span>
            <span className="px-4 py-2 rounded-xl bg-slate-100/80 border border-slate-200 text-slate-700 text-xs font-semibold">
              📜 Authorized Independent Assessment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
