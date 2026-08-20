import Link from 'next/link';
import { ArrowRight, AlertTriangle } from 'lucide-react';

export default function Iso20022Page() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-black text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
            <span>MANDATORY GLOBAL CUTOVER IN PROGRESS</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            ISO 20022 MT ↔ MX Migration & Interoperability.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            The global shift from legacy MT messages to XML-based MX messaging (CBPR+) is not just an IT upgrade—it is a total restructuring of cross-border payment data. FinoWorks guarantees zero operational downtime during your migration.
          </p>
        </div>

        {/* 3-Step Process Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-[#FBF4E6] border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-black text-white font-bold flex items-center justify-center font-mono text-sm">
              01
            </div>
            <h3 className="font-serif italic text-2xl text-black font-normal">Gap & Truncation Analysis</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              We audit your current MT payment flows to identify data truncation risks when mapping legacy 35-character fields into rich ISO 20022 XML hierarchies.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0C121E] text-white border border-black space-y-4 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-[#0055ff] text-white font-bold flex items-center justify-center font-mono text-sm">
              02
            </div>
            <h3 className="font-serif italic text-2xl text-white font-normal">Intelligent Converter Integration</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Implementation of automated translation engines between core banking adapters and SWIFT Alliance Access without altering underlying legacy databases.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#EAF2FF] border border-slate-200 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-black text-white font-bold flex items-center justify-center font-mono text-sm">
              03
            </div>
            <h3 className="font-serif italic text-2xl text-black font-normal">MyStandards Portal Testing</h3>
            <p className="text-xs text-slate-700 leading-relaxed">
              Full UAT simulation on the official SWIFT MyStandards testing portal to ensure 100% CBPR+ compliance before live cutover.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 md:p-14 rounded-3xl bg-black text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-extrabold">Is Your Core Banking System MX Ready?</h3>
            <p className="text-sm text-slate-400">
              Schedule a technical gap assessment with our SWIFT engineering team in Nairobi or Bangalore.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-[#0055ff] hover:bg-white hover:text-black text-white font-bold px-8 py-4 rounded-full transition-all text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Request ISO 20022 Demo</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
