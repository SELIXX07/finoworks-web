import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { ArrowRight, CheckCircle2, ArrowLeft, ShieldCheck, Zap, Lock, Database } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData[params.slug];

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-36 pb-36 min-h-screen">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
        
        {/* Back Link & Header Block */}
        <div className="space-y-8 home-reveal">
          <Link
            href="/services"
            className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-slate-500 hover:text-[#0055ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL 11 SPECIALIZED PRACTICES</span>
          </Link>

          <div className="space-y-6 max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0055ff] animate-pulse" />
              <span>PRACTICE {service.num}</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#0055ff] hover-highlight">{service.badge}</span>
            </div>

            <h1 className="text-[clamp(36px,5vw,72px)] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.06]">
              {service.title}{' '}
              <span className="font-serif italic font-normal text-[#0055ff] hover-highlight">
                Specifications.
              </span>
            </h1>

            <p className="text-[clamp(17px,1.4vw,22px)] text-slate-600 font-normal leading-relaxed max-w-3xl">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* ── DayNight Multi-Color Contrast Cards (Problem vs Solution) ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 home-reveal">
          {/* Box 1: Warm Cream The Challenge */}
          <div className="p-10 md:p-14 rounded-[32px] bg-[#fbf6ec] border border-[#f0e6d2] text-[#18130c] space-y-5 shadow-sm">
            <div className="font-mono text-xs font-bold text-[#d97706] uppercase tracking-[0.16em]">
              [ 01 • THE INDUSTRY CHALLENGE ]
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#18130c] tracking-tight">
              Operational Risk & Non-Compliance Exposure
            </h3>
            <p className="text-sm md:text-base text-[#18130c]/80 leading-relaxed font-normal">
              {service.problem}
            </p>
          </div>

          {/* Box 2: Obsidian Midnight The FinoWorks Solution */}
          <div className="p-10 md:p-14 rounded-[32px] bg-[#0b0f19] border border-[#1f293d] text-[#f9fafb] space-y-5 shadow-2xl">
            <div className="font-mono text-xs font-bold text-[#00e5ff] uppercase tracking-[0.16em]">
              [ 02 • THE FINOWORKS SOLUTION ]
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Engineered Resilience & Certified Compliance
            </h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-normal">
              {service.solution}
            </p>
          </div>
        </div>

        {/* ── Core Capabilities 4-Grid ── */}
        <div className="space-y-12 home-reveal">
          <div className="section-head">
            <span className="section-num">(01)</span>
            <span>CORE TECHNICAL CAPABILITIES & METHODOLOGY</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {service.features.map((feat, idx) => {
              const bgColors = [
                'bg-white border-slate-200/90',
                'bg-[#eff6ff] border-[#dbeafe]',
                'bg-[#fef3c7] border-[#fde68a]',
                'bg-[#f0fdf4] border-[#dcfce7]',
              ];
              return (
                <div
                  key={idx}
                  className={`p-9 md:p-10 rounded-[28px] border transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md space-y-4 ${bgColors[idx % 4]}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-black text-[#0055ff]">
                      0{idx + 1}
                    </span>
                    <h4 className="text-xl font-bold text-[#0a0e1a]">{feat.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal pl-7">
                    {feat.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Deliverables & Technical Specifications Matrix ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch home-reveal">
          {/* Left: What We Deliver (Span 7, Ice Blue) */}
          <div className="lg:col-span-7 p-10 md:p-14 rounded-[32px] bg-[#eff6ff] border border-[#dbeafe] text-[#081120] space-y-8 shadow-sm flex flex-col justify-between">
            <div className="space-y-6">
              <div className="section-head">
                <span className="section-num">(02)</span>
                <span>CLIENT DELIVERABLES & AUDIT ARTIFACTS</span>
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight">What Your Team Receives</h3>

              <div className="space-y-4 pt-2">
                {service.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/90 border border-blue-100 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#0055ff] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-slate-900">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 font-mono text-xs text-slate-500 font-bold border-t border-blue-200/60">
              Guaranteed passing attestation documentation for SWIFT & Regulators.
            </div>
          </div>

          {/* Right: Technical Specifications (Span 5, Obsidian Noir) */}
          <div className="lg:col-span-5 p-10 md:p-14 rounded-[32px] bg-[#0b0f19] border border-[#1f293d] text-white space-y-8 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="font-mono text-xs font-bold text-[#00e5ff] uppercase tracking-[0.18em]">
                TECHNICAL SPECIFICATIONS
              </div>
              <h3 className="text-3xl font-extrabold">Standard & Architecture Profile</h3>

              <div className="space-y-4 pt-2">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1.5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                      {spec.label}
                    </div>
                    <div className="font-mono text-xs md:text-sm font-bold text-[#00d2ff]">
                      {spec.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 font-mono text-xs text-slate-400 border-t border-slate-800">
              ISO 20022 / CSCF v2026 Certified Practice
            </div>
          </div>
        </div>

        {/* ── Bottom CTA Banner ── */}
        <div className="p-12 md:p-16 rounded-[36px] bg-[#0a0e1a] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-slate-800 home-reveal">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-xs font-bold text-[#00d2ff] uppercase tracking-widest">
              ENGAGE OUR PRACTICE
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Ready to Scope {service.title}?
            </h3>
            <p className="text-sm md:text-base text-slate-400 font-normal">
              Schedule a direct consultation with our principal solutions architect in Nairobi, Bangalore, or Franklin, USA.
            </p>
          </div>

          <Link
            href={`/contact-us?service=${encodeURIComponent(service.title)}`}
            className="bg-[#0055ff] hover:bg-white hover:text-[#0a0e1a] text-white font-bold px-9 py-4 rounded-full transition-all duration-300 text-xs md:text-sm flex items-center gap-2.5 whitespace-nowrap shadow-lg group"
          >
            <span>Request Service Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
