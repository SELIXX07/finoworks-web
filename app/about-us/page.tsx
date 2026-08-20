import Link from 'next/link';
import { MapPin, ShieldCheck, Globe, Building } from 'lucide-react';

export default function AboutUsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 text-xs font-mono font-bold">
            ABOUT FINOWORKS TECHNOLOGIES
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tight">
            Securing the Backbone of Global Finance.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Established in Kenya in 2025, FinoWorks Technologies recognized a crucial market gap in elite SWIFT financial messaging, cybersecurity, and regulatory compliance. Today, drawing on 15+ years of combined engineering expertise across Africa, USA, Middle East, and South America, we operate a lean, highly connected global network.
          </p>
        </div>

        {/* Global Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 font-bold flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">Kenya Hub (Corporate HQ)</h3>
            <p className="text-xs text-slate-600">
              Nairobi, Kenya — Mayfair Suites, Westlands. Operational Headquarters and Regional Hub for East Africa.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 font-bold flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">India Hub (Development Center)</h3>
            <p className="text-xs text-slate-600">
              Bangalore, India — Clayworks, Bannerghatta Rd. Global Development & Engineering Center (New 2026 Facility).
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-electric-50 text-electric-600 font-bold flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-lg text-navy-900">USA Hub (Support & BizDev)</h3>
            <p className="text-xs text-slate-600">
              Franklin, Tennessee, USA — 2550 Meridian Blvd. Regional Support Hub ensuring 24/7 global coverage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
