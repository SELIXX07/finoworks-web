import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function AboutUsPage() {
  const hubs = [
    { city: 'Nairobi, Kenya', role: 'Global Corporate HQ & East Africa Hub', address: 'Mayfair Suites, Parklands Rd / Mpaka Rd, Westlands, Nairobi' },
    { city: 'Bangalore, India', role: 'Global Dev & Engineering Facility', address: 'Clayworks, Bannerghatta Rd, Bengaluru (New 2026 Facility)' },
    { city: 'Tennessee, USA', role: 'Regional Support & Client Hub', address: '2550 Meridian Blvd, Suite 200, Franklin, TN' },
    { city: 'GCC Corridor', role: 'Middle East Regional Practice', address: 'Kuwait, Bahrain, Qatar, UAE (Dubai), Saudi Arabia, Oman' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-20">
        {/* Header */}
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-black text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span>ORIGIN & MISSION</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            Specialized Financial Infrastructure Specialists.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            FinoWorks was founded in Nairobi, Kenya with a clear mandate: provide tier-1 financial institutions with deep, uncompromised SWIFT messaging engineering and independent cybersecurity audit services.
          </p>
        </div>

        {/* Global Hubs Grid */}
        <div className="space-y-8">
          <div className="section-head">
            <span className="section-num">(01)</span>
            <span>GLOBAL HUBS & FACILITIES</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hubs.map((hub, idx) => (
              <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:bg-white hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-black">{hub.city}</h3>
                <p className="text-xs font-bold text-[#0055ff]">{hub.role}</p>
                <p className="text-xs text-slate-500 leading-relaxed font-normal">{hub.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Card */}
        <div className="p-10 md:p-14 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-extrabold">Connect With Our Technical Practice</h3>
            <p className="text-sm text-slate-400 font-normal">
              Engage our CISA auditors, SWIFT integration specialists, and core banking middleware engineers.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-[#0055ff] hover:bg-white hover:text-slate-900 text-white font-bold px-8 py-4 rounded-full transition-all text-xs flex items-center gap-2 whitespace-nowrap shadow-md"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
