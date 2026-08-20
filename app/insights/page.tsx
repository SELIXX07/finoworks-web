import Link from 'next/link';
import { ArrowRight, Clock } from 'lucide-react';

export default function InsightsPage() {
  const articles = [
    {
      slug: 'swift-csp-v2026-mandatory-changes',
      title: 'SWIFT CSP v2026: The Complete Guide to Mandatory & Advisory Controls',
      desc: 'An exhaustive technical breakdown of the 32 CSCF v2026 controls, physical vs. logical Secure Zone separation, and common assessment pitfalls.',
      date: 'Aug 2026',
      readTime: '8 min read',
      tag: 'COMPLIANCE',
      theme: 'bg-[#061942] border-blue-500/30 text-white',
    },
    {
      slug: 'iso-20022-cbpr-plus-cutover-strategy',
      title: 'ISO 20022 MT ↔ MX Coexistence: Mitigating Data Truncation in pacs.008',
      desc: 'Architectural strategies for handling rich structured XML party identifiers and postal addresses without disrupting legacy core banking ledgers.',
      date: 'Jul 2026',
      readTime: '6 min read',
      tag: 'PAYMENT TECH',
      theme: 'bg-[#082156] border-blue-400/40 text-white',
    },
    {
      slug: 'active-active-dr-swift-alliance',
      title: 'Engineering Zero-Loss Active-Active Disaster Recovery for SWIFT Alliance Access',
      desc: 'How dual-site synchronous clustering and automatic message queue replication guarantee continuous payment processing during hardware failures.',
      date: 'Jun 2026',
      readTime: '10 min read',
      tag: 'INFRASTRUCTURE',
      theme: 'bg-[#0a2b6e] border-blue-400/40 text-white',
    },
  ];

  return (
    <div className="pt-36 pb-36 min-h-screen">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        
        {/* Header */}
        <div className="space-y-6 max-w-4xl home-reveal">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#082156] border border-blue-500/40 shadow-sm text-xs font-mono font-bold text-white">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00e5ff] animate-pulse" />
            <span>KNOWLEDGE BASE & RESEARCH</span>
          </div>

          <h1 className="text-[clamp(38px,5.4vw,76px)] font-extrabold text-white tracking-tight leading-[1.06]">
            Technical Insights &{' '}
            <span className="font-serif italic font-normal text-[#00e5ff] hover-highlight">Briefings.</span>
          </h1>

          <p className="text-[clamp(16px,1.35vw,20px)] text-slate-300 leading-relaxed font-normal">
            Deep technical analyses, regulatory guidance, and architecture runbooks written by practicing SWIFT infrastructure architects and CISA auditors.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 home-reveal">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className={`p-9 md:p-10 rounded-[32px] border ${art.theme} shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between space-y-8`}
            >
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-mono text-[10px] font-bold px-3 py-1 rounded-full border border-blue-400/40 bg-[#00e5ff]/10 text-[#00e5ff]">
                    {art.tag}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-blue-200 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{art.readTime}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-white">
                  {art.title}
                </h3>

                <p className="text-xs md:text-sm leading-relaxed text-slate-300 font-normal">
                  {art.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 flex justify-between items-center text-xs font-bold text-blue-200">
                <span className="opacity-60">{art.date}</span>
                <span className="flex items-center gap-1 hover:text-[#00e5ff] transition-colors">
                  <span>Read Briefing</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
