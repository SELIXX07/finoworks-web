import Link from 'next/link';
import { ArrowRight, CheckCircle2, RefreshCw, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function Iso20022Page() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono font-bold">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>MANDATORY GLOBAL CUTOVER IN PROGRESS</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tight">
            ISO 20022 MT ↔ MX Migration & Interoperability.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            The global shift from legacy MT messages to XML-based MX messaging (CBPR+) is not just an IT upgrade—it is a total restructuring of cross-border payment data. FinoWorks guarantees zero operational downtime during your migration.
          </p>
        </div>

        {/* 3-Step Process Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 font-bold flex items-center justify-center font-mono">
              01
            </div>
            <h3 className="font-bold text-lg text-navy-900">Gap & Truncation Analysis</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              We audit your current MT payment flows to identify data truncation risks when mapping legacy 35-character fields into rich ISO 20022 XML hierarchies.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 font-bold flex items-center justify-center font-mono">
              02
            </div>
            <h3 className="font-bold text-lg text-navy-900">Intelligent Converter Integration</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Implementation of automated translation engines between core banking adapters and SWIFT Alliance Access without altering underlying legacy databases.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 font-bold flex items-center justify-center font-mono">
              03
            </div>
            <h3 className="font-bold text-lg text-navy-900">MyStandards Portal Testing</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full UAT simulation on the official SWIFT MyStandards testing portal to ensure 100% CBPR+ compliance before live cutover.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 rounded-2xl bg-navy-900 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Is Your Core Banking System MX Ready?</h3>
            <p className="text-xs text-slate-400">
              Schedule a technical gap assessment with our SWIFT engineering team in Nairobi or Bangalore.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-electric-500 hover:bg-electric-400 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-xs flex items-center gap-2 whitespace-nowrap"
          >
            <span>Request ISO 20022 Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
