'use client';

import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-b border-slate-200/80">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center space-y-8">
        <Quote className="w-12 h-12 text-electric-500/30 mx-auto" />

        <blockquote className="text-2xl md:text-4xl font-extrabold text-navy-900 leading-tight tracking-tight">
          &ldquo;The CSP assessment process can be stressful, but FinoWorks made it clear and manageable. They didn&apos;t just find gaps—their engineers actually fixed them.&rdquo;
        </blockquote>

        <div className="space-y-1">
          <div className="font-bold text-sm text-navy-900">IT Director</div>
          <div className="text-xs font-mono text-electric-500">
            International Investment & Banking Firm
          </div>
        </div>
      </div>
    </section>
  );
}
