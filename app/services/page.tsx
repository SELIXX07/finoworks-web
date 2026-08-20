import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { servicesData } from '@/lib/servicesData';

export default function ServicesPage() {
  const servicesList = Object.values(servicesData);

  const cardThemes = [
    { bg: 'bg-[#fbf6ec]', text: 'text-[#18130c]', border: 'border-[#f0e6d2]', tag: 'text-[#d97706] bg-[#fef3c7] border-[#fde68a]' },
    { bg: 'bg-[#0b0f19]', text: 'text-[#f9fafb]', border: 'border-[#1f293d]', tag: 'text-[#00e5ff] bg-[#00e5ff]/10 border-[#00e5ff]/30' },
    { bg: 'bg-[#eff6ff]', text: 'text-[#081120]', border: 'border-[#dbeafe]', tag: 'text-[#0055ff] bg-[#0055ff]/10 border-[#0055ff]/20' },
    { bg: 'bg-[#fef3c7]', text: 'text-[#1e1408]', border: 'border-[#fde68a]', tag: 'text-[#b45309] bg-[#fef3c7] border-[#fde68a]' },
    { bg: 'bg-[#f0fdf4]', text: 'text-[#052e16]', border: 'border-[#dcfce7]', tag: 'text-[#059669] bg-[#059669]/10 border-[#059669]/20' },
    { bg: 'bg-white', text: 'text-[#0a0e1a]', border: 'border-slate-200', tag: 'text-[#0055ff] bg-slate-100 border-slate-200' },
  ];

  return (
    <div className="pt-36 pb-36 min-h-screen">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        
        {/* Header */}
        <div className="space-y-6 max-w-4xl home-reveal">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0055ff] animate-pulse" />
            <span>ALL 11 SPECIALIZED PRACTICES</span>
          </div>

          <h1 className="text-[clamp(38px,5.4vw,76px)] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.06]">
            Financial Messaging & Security{' '}
            <span className="font-serif italic font-normal text-[#0055ff] hover-highlight">Practice.</span>
          </h1>

          <p className="text-[clamp(16px,1.35vw,20px)] text-slate-600 leading-relaxed font-normal">
            From core SWIFT Alliance connectivity and ISO 20022 cutover to independent CISA assessments, explore our specialized service catalog built for tier-1 financial institutions.
          </p>
        </div>

        {/* 11 Services Multi-Color Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 home-reveal">
          {servicesList.map((svc, idx) => {
            const theme = cardThemes[idx % cardThemes.length];
            return (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className={`p-9 md:p-10 rounded-[30px] border ${theme.bg} ${theme.text} ${theme.border} shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-8 group cursor-pointer`}
              >
                <div className="space-y-5">
                  <div className="flex justify-between items-center pb-4 border-b border-current/10">
                    <span className="font-mono text-sm font-extrabold opacity-60">{svc.num}</span>
                    <span className={`font-mono text-[10px] font-bold px-3 py-1 rounded-full border ${theme.tag}`}>
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold leading-snug group-hover:text-[#0055ff] transition-colors">
                    {svc.title}
                  </h3>

                  <p className="text-xs md:text-sm leading-relaxed opacity-80 font-normal">
                    {svc.heroDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-current/10 text-xs font-bold group-hover:text-[#0055ff] transition-colors">
                  <span>View Full Specifications & Scope</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="p-12 md:p-16 rounded-[36px] bg-[#0a0e1a] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-slate-800 home-reveal">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Need Custom SWIFT Engineering?</h3>
            <p className="text-sm md:text-base text-slate-400 font-normal">
              Speak directly with our principal solutions architect in Nairobi, Bangalore, or Franklin, USA.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-[#0055ff] hover:bg-white hover:text-[#0a0e1a] text-white font-bold px-9 py-4 rounded-full transition-all duration-300 text-xs md:text-sm flex items-center gap-2.5 whitespace-nowrap shadow-lg group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
