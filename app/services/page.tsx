import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span>ALL 11 SPECIALIZED PRACTICES</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">
            Financial Messaging & Security Practice.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed font-normal">
            From core SWIFT connectivity and ISO 20022 cutover to independent CISA assessments, explore our specialized service catalog built for tier-1 financial institutions.
          </p>
        </div>

        {/* 11 Services Grid — each linking to its own dedicated subpage */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((svc) => (
            <Link
              key={svc.slug}
              href={`/services/${svc.slug}`}
              className="p-8 rounded-3xl border border-slate-200 bg-slate-50 hover:bg-white hover:border-[#0055ff]/40 hover:shadow-lg transition-all flex flex-col justify-between space-y-6 group"
            >
              <div className="space-y-4">
                <div className="flex justify-between items-center text-xs font-mono pb-3 border-b border-slate-200">
                  <span className="font-bold text-[#0055ff]">{svc.num}</span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-white border border-slate-200 text-slate-700 uppercase">
                    {svc.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold leading-snug text-slate-900 group-hover:text-[#0055ff] transition-colors">
                  {svc.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {svc.heroDesc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs font-bold text-slate-900 group-hover:text-[#0055ff] transition-colors">
                <span>View Full Specifications & Deliverables</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-10 md:p-14 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold">Need Custom SWIFT Engineering?</h3>
            <p className="text-sm text-slate-400 font-normal">
              Speak directly with our principal solutions architect in Nairobi, Bangalore, or Franklin, USA.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-[#0055ff] hover:bg-white hover:text-slate-900 text-white font-bold px-8 py-4 rounded-full transition-all text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
