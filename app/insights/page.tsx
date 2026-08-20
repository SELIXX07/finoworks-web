import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function InsightsPage() {
  const articles = [
    {
      title: 'Cloud vs. On-Premise: The Future of SWIFT Connectivity',
      category: 'Infrastructure',
      date: 'October 8, 2025',
      excerpt:
        'Should you host your own SWIFT Alliance Access or move to a cloud-based Service Bureau? We weigh TCO, agility, and data sovereignty concerns.',
    },
    {
      title: 'Navigating SWIFT CSP v2026: Key Changes Every CISO Must Know',
      category: 'Security',
      date: 'October 8, 2025',
      excerpt:
        'The SWIFT CSP v2026 framework introduces stricter controls for Secure Zone segmentation and MFA. Here is the mandatory checklist for your independent audit.',
    },
    {
      title: 'The ISO 20022 Deadline: Is Your Core Banking System Ready?',
      category: 'Compliance',
      date: 'October 8, 2025',
      excerpt:
        'Exploring the top 5 challenges banks face during MT to MX migration—from data truncation to AML filtering adjustments.',
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-50 text-electric-600 text-xs font-mono font-bold">
            TECHNICAL INSIGHTS & REGULATORY ANALYSIS
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tight">
            Payment Modernization Insights.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between space-y-4 hover:border-electric-500/50 transition-all"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-electric-600 font-bold uppercase">{art.category}</span>
                  <span className="text-slate-400">{art.date}</span>
                </div>
                <h3 className="text-xl font-bold text-navy-900 leading-snug">{art.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{art.excerpt}</p>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-electric-500 transition-colors pt-4"
              >
                <span>Read Insight Article</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
