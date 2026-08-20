'use client';

import Link from 'next/link';
import { ArrowRight, Mail, Phone } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-28 bg-gradient-to-br from-navy-900 via-navy-800 to-slate-900 text-white relative overflow-hidden">
      {/* Glow Ambient Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-electric-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-electric-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>SCHEDULE CSP v2026 AUDIT TODAY</span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Ready to Secure Your SWIFT Messaging Infrastructure?
        </h2>

        <p className="text-slate-300 max-w-2xl mx-auto text-base leading-relaxed">
          Don&apos;t wait for compliance deadlines. Speak directly to our certified CISA auditors and SWIFT engineers in Nairobi, Bangalore, or USA.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/contact-us"
            className="w-full sm:w-auto bg-electric-500 hover:bg-electric-400 text-white font-bold px-8 py-4 rounded-xl shadow-xl hover:shadow-electric-500/30 transition-all flex items-center justify-center gap-3 text-sm"
            data-cursor="go"
          >
            <span>Book Assessment Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <a
            href="mailto:info@finoworks.com"
            className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 font-bold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 text-sm"
          >
            <Mail className="w-4 h-4 text-electric-400" />
            <span>info@finoworks.com</span>
          </a>
        </div>
      </div>
    </section>
  );
}
