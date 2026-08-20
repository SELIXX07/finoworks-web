import { notFound } from 'next/navigation';
import Link from 'next/link';
import { servicesData } from '@/lib/servicesData';
import { ArrowRight, CheckCircle2, ShieldCheck, ArrowLeft, Layers, Server } from 'lucide-react';

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
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        {/* Back Link & Eyebrow */}
        <div className="space-y-6">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-slate-500 hover:text-[#0055ff] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>ALL 11 SERVICES</span>
          </Link>

          <div className="space-y-4 max-w-4xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono font-bold">
              <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
              <span>SERVICE {service.num}</span>
              <span className="text-slate-300">·</span>
              <span className="text-[#0055ff]">{service.badge}</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.08]">
              {service.title}
            </h1>

            <p className="text-lg md:text-xl text-slate-600 font-normal leading-relaxed">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Problem vs Solution Split Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="font-mono text-xs font-bold text-rose-600 uppercase tracking-wider">
              [ THE INDUSTRY CHALLENGE ]
            </div>
            <h3 className="text-xl font-bold text-slate-900">Operational Risk & Compliance Vulnerability</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {service.problem}
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#0055ff] text-white space-y-4 shadow-xl">
            <div className="font-mono text-xs font-bold text-[#00d2ff] uppercase tracking-wider">
              [ THE FINOWORKS SOLUTION ]
            </div>
            <h3 className="text-xl font-bold text-white">Engineered Reliability & Guaranteed Compliance</h3>
            <p className="text-sm text-white/90 leading-relaxed font-normal">
              {service.solution}
            </p>
          </div>
        </div>

        {/* Core Technical Capabilities (4-Grid) */}
        <div className="space-y-8">
          <div className="section-head">
            <span className="section-num">01</span>
            <span>CORE TECHNICAL CAPABILITIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:bg-white hover:shadow-md transition-all space-y-3"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#0055ff]">
                    0{idx + 1}
                  </span>
                  <h4 className="text-lg font-bold text-slate-900">{feat.title}</h4>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal pl-7">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Deliverables & Technical Specifications Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: What We Deliver (Span 7) */}
          <div className="lg:col-span-7 p-8 md:p-10 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
            <div className="section-head">
              <span className="section-num">02</span>
              <span>CLIENT DELIVERABLES & ARTIFACTS</span>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">What Your Team Receives</h3>

            <div className="space-y-4">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-[#0055ff] shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm font-bold text-slate-800">{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Technical Specifications (Span 5) */}
          <div className="lg:col-span-5 p-8 md:p-10 rounded-3xl bg-slate-900 text-white space-y-6 shadow-xl">
            <div className="font-mono text-xs font-bold text-[#00d2ff] uppercase tracking-wider">
              TECHNICAL SPECIFICATIONS
            </div>
            <h3 className="text-2xl font-bold">Standard & Architecture Profile</h3>

            <div className="space-y-4 pt-2">
              {service.specs.map((spec, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-1">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-slate-400 font-bold">
                    {spec.label}
                  </div>
                  <div className="font-mono text-xs font-bold text-[#00d2ff]">
                    {spec.val}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="p-10 md:p-14 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <div className="font-mono text-xs font-bold text-[#00d2ff] uppercase">
              ENGAGE OUR PRACTICE
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold">Ready to Scope {service.title}?</h3>
            <p className="text-xs md:text-sm text-slate-400 font-normal">
              Schedule a direct consultation with our principal solutions architect in Nairobi, Bangalore, or Franklin, USA.
            </p>
          </div>

          <Link
            href={`/contact-us?service=${encodeURIComponent(service.title)}`}
            className="bg-[#0055ff] hover:bg-white hover:text-slate-900 text-white font-bold px-8 py-4 rounded-full transition-all text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Request Service Scope</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
