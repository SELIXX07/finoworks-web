import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  return (
    <div className="pt-36 pb-36 min-h-screen">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        
        {/* Header */}
        <div className="space-y-6 max-w-4xl home-reveal">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#082156] border border-blue-500/40 shadow-sm text-xs font-mono font-bold text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse" />
            <span>ALL 11 SPECIALIZED PRACTICES</span>
          </div>

          <h1 className="text-[clamp(38px,5.4vw,76px)] font-extrabold text-white tracking-tight leading-[1.06]">
            Financial Messaging & Security{' '}
            <span className="font-serif italic font-normal text-[#00e5ff] hover-highlight">Practice.</span>
          </h1>

          <p className="text-[clamp(16px,1.35vw,20px)] text-slate-300 leading-relaxed font-normal">
            From core SWIFT Alliance connectivity and ISO 20022 cutover to independent CISA assessments, explore our specialized service catalog built for tier-1 financial institutions.
          </p>
        </div>

        {/* 11 Services Blue Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 home-reveal">
          {servicesList.map((svc, idx) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="p-9 md:p-10 rounded-[30px] border border-blue-500/25 bg-[#05183d] text-white hover:bg-[#082156] hover:border-blue-400/60 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-8 group cursor-pointer"
            >
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-mono text-sm font-extrabold text-[#00e5ff]">{svc.num}</span>
                  <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-blue-400/30 bg-[#00e5ff]/10 text-[#00e5ff]">
                    {svc.tag}
                  </span>
                </div>

                <h3 className="text-2xl font-extrabold leading-snug group-hover:text-[#00e5ff] transition-colors">
                  {svc.title}
                </h3>

                <p className="text-xs md:text-sm leading-relaxed text-slate-300 font-normal">
                  {svc.heroDesc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-white/10 text-xs font-bold text-blue-200 group-hover:text-[#00e5ff] transition-colors">
                <span>View Full Specifications & Scope</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-12 md:p-16 rounded-[36px] bg-[#082156] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-blue-400/40 home-reveal">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Need Custom SWIFT Engineering?</h3>
            <p className="text-sm md:text-base text-slate-200 font-normal">
              Speak directly with our principal solutions architect in Nairobi, Bangalore, or Franklin, USA.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-white hover:bg-slate-100 text-[#030d22] font-extrabold px-9 py-4 rounded-full transition-all duration-300 text-xs md:text-sm flex items-center gap-2.5 whitespace-nowrap shadow-xl group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
