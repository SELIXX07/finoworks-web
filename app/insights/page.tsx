import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function InsightsPage() {
  const articles = [
    { title: 'The 2026 SWIFT CSP Mandate: What CISOs Need to Know About Control 1.1 Segregation', date: 'August 2026', tag: 'CSCF v2026', read: '6 min read' },
    { title: 'Avoiding MT ↔ MX Data Truncation in pacs.008 Migration Pipelines', date: 'July 2026', tag: 'ISO 20022', read: '8 min read' },
    { title: 'Designing Dual-Site Active-Active Disaster Recovery for SWIFT Alliance Access', date: 'June 2026', tag: 'Architecture', read: '10 min read' },
    { title: 'Why Automated RMA Surveillance is the Frontline Against Cross-Border Payment Fraud', date: 'May 2026', tag: 'Security', read: '5 min read' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-black text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span>KNOWLEDGE & TECHNICAL PAPERS</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            Financial Engineering & Audit Insights.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Deep-dive technical perspectives from our SWIFT solution architects and CISA certified assessors.
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-6 max-w-4xl">
          {articles.map((art, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:bg-white hover:shadow-md transition-all">
              <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                <span className="px-2.5 py-1 rounded bg-black text-white text-[10px] font-bold">{art.tag}</span>
                <span>{art.date} · {art.read}</span>
              </div>

              <h3 className="font-serif italic text-2xl md:text-3xl text-black font-normal leading-snug">{art.title}</h3>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0055ff] hover:text-black transition-colors"
              >
                <span>Read Full Technical Brief</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
