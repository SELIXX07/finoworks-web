import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { ArrowRight, CheckCircle2, ArrowLeft } from 'lucide-react';

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
            className="inline-flex items-center gap-2.5 text-xs font-mono font-bold text-blue-300 hover:text-[#00e5ff] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>ALL 11 SPECIALIZED PRACTICES</span>
          </Link>

          <div className="space-y-6 max-w-5xl">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#082156] border border-blue-500/40 shadow-sm text-xs font-mono font-bold text-white">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse" />
              <span>PRACTICE {service.num}</span>
              <span className="text-blue-400">·</span>
              <span className="text-[#00e5ff] hover-highlight">{service.badge}</span>
            </div>

            <h1 className="text-[clamp(36px,5vw,72px)] font-extrabold text-white tracking-tight leading-[1.06]">
              {service.title}{' '}
              <span className="font-serif italic font-normal text-[#00e5ff] hover-highlight">
                Specifications.
              </span>
            </h1>

            <p className="text-[clamp(17px,1.4vw,22px)] text-slate-300 font-normal leading-relaxed max-w-3xl">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* ── Problem vs Solution Dual Blue Cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 home-reveal">
          {/* Box 1: The Challenge */}
          <div className="p-10 md:p-14 rounded-[32px] bg-[#061942] border border-blue-500/30 text-white space-y-5 shadow-xl">
            <div className="font-mono text-xs font-bold text-[#38bdf8] uppercase tracking-[0.16em]">
              [ 01 • THE INDUSTRY CHALLENGE ]
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Operational Risk & Non-Compliance Exposure
            </h3>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-normal">
              {service.problem}
            </p>
          </div>

          {/* Box 2: The Solution */}
          <div className="p-10 md:p-14 rounded-[32px] bg-[#0b2558] border border-blue-400/40 text-white space-y-5 shadow-2xl">
            <div className="font-mono text-xs font-bold text-[#00e5ff] uppercase tracking-[0.16em]">
              [ 02 • THE FINOWORKS SOLUTION ]
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
              Engineered Resilience & Certified Compliance
            </h3>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed font-normal">
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
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-9 md:p-10 rounded-[28px] bg-[#05183d] border border-blue-500/20 hover:border-blue-400/50 hover:bg-[#082156] transition-all duration-300 hover:-translate-y-1 shadow-lg space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-black text-[#00e5ff]">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold text-white">{feat.title}</h4>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed font-normal pl-7">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Deliverables & Technical Specifications Matrix ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch home-reveal">
          {/* Left: What We Deliver */}
          <div className="lg:col-span-7 p-10 md:p-14 rounded-[32px] bg-[#061942] border border-blue-500/30 text-white space-y-8 shadow-xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="section-head">
                <span className="section-num">(02)</span>
                <span>CLIENT DELIVERABLES & AUDIT ARTIFACTS</span>
              </div>
              <h3 className="text-3xl font-extrabold tracking-tight text-white">What Your Team Receives</h3>

              <div className="space-y-4 pt-2">
                {service.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-[#082156] border border-blue-500/20 shadow-xs">
                    <CheckCircle2 className="w-5 h-5 text-[#00e5ff] shrink-0 mt-0.5" />
                    <span className="text-sm font-bold text-white">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 font-mono text-xs text-blue-300 font-bold border-t border-blue-500/20">
              Guaranteed passing attestation documentation for SWIFT & Regulators.
            </div>
          </div>

          {/* Right: Technical Specifications */}
          <div className="lg:col-span-5 p-10 md:p-14 rounded-[32px] bg-[#020919] border border-blue-500/30 text-white space-y-8 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="font-mono text-xs font-bold text-[#00e5ff] uppercase tracking-[0.18em]">
                TECHNICAL SPECIFICATIONS
              </div>
              <h3 className="text-3xl font-extrabold text-white">Standard & Architecture Profile</h3>

              <div className="space-y-4 pt-2">
                {service.specs.map((spec, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-[#051438] border border-blue-500/20 space-y-1.5">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-blue-300 font-bold">
                      {spec.label}
                    </div>
                    <div className="font-mono text-xs md:text-sm font-bold text-[#00e5ff]">
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
        <div className="p-12 md:p-16 rounded-[36px] bg-[#082156] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-blue-400/40 home-reveal">
          <div className="space-y-3 max-w-2xl">
            <div className="font-mono text-xs font-bold text-[#00e5ff] uppercase tracking-widest">
              ENGAGE OUR PRACTICE
            </div>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Ready to Scope {service.title}?
            </h3>
            <p className="text-sm md:text-base text-slate-200 font-normal">
              Schedule a direct consultation with our principal solutions architect in Nairobi, Bangalore, or Franklin, USA.
            </p>
          </div>

          <Link
            href={`/contact-us?service=${encodeURIComponent(service.title)}`}
            className="bg-white hover:bg-slate-100 text-[#030d22] font-extrabold px-9 py-4 rounded-full transition-all duration-300 text-xs md:text-sm flex items-center gap-2.5 whitespace-nowrap shadow-xl group"
          >
            <span>Request Service Scope</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
