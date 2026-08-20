import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';

export default function AboutUsPage() {
  const hubs = [
    { city: 'Nairobi, Kenya', role: 'Global Corporate HQ & East Africa Hub', address: 'Mayfair Suites, Parklands Rd / Mpaka Rd, Westlands, Nairobi', theme: 'bg-[#fbf6ec] border-[#f0e6d2] text-[#18130c]' },
    { city: 'Bangalore, India', role: 'Global Dev & Engineering Facility', address: 'Clayworks, Bannerghatta Rd, Bengaluru (New 2026 Facility)', theme: 'bg-[#0b0f19] border-[#1f293d] text-[#f9fafb]' },
    { city: 'Tennessee, USA', role: 'Regional Support & Client Hub', address: '2550 Meridian Blvd, Suite 200, Franklin, TN', theme: 'bg-[#eff6ff] border-[#dbeafe] text-[#081120]' },
    { city: 'GCC Corridor', role: 'Middle East Regional Practice', address: 'Kuwait, Bahrain, Qatar, UAE (Dubai), Saudi Arabia, Oman', theme: 'bg-[#fef3c7] border-[#fde68a] text-[#1e1408]' },
  ];

  return (
    <div className="pt-36 pb-36 min-h-screen">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 space-y-24">
        
        {/* Header */}
        <div className="max-w-4xl space-y-6 home-reveal">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0055ff] animate-pulse" />
            <span>ORIGIN & MISSION</span>
          </div>

          <h1 className="text-[clamp(38px,5.4vw,76px)] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.06]">
            Specialized Financial Infrastructure{' '}
            <span className="font-serif italic font-normal text-[#0055ff] hover-highlight">Specialists.</span>
          </h1>

          <p className="text-[clamp(16px,1.35vw,20px)] text-slate-600 leading-relaxed font-normal">
            FinoWorks was founded with a clear mandate: provide tier-1 financial institutions with deep, uncompromised SWIFT messaging engineering and independent cybersecurity audit services.
          </p>
        </div>

        {/* Global Hubs Grid with DayNight Color Cards */}
        <div className="space-y-10 home-reveal">
          <div className="section-head">
            <span className="section-num">(01)</span>
            <span>GLOBAL OPERATING FACILITIES & HUBS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {hubs.map((hub, idx) => (
              <div key={idx} className={`p-9 md:p-10 rounded-[30px] border space-y-5 hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl ${hub.theme}`}>
                <div className="w-12 h-12 rounded-2xl bg-black/10 dark:bg-white/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">{hub.city}</h3>
                <p className="text-xs font-bold font-mono tracking-wider opacity-90">{hub.role}</p>
                <p className="text-xs opacity-75 leading-relaxed font-normal">{hub.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Card */}
        <div className="p-12 md:p-16 rounded-[36px] bg-[#0a0e1a] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl border border-slate-800 home-reveal">
          <div className="space-y-3 max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">Connect With Our Technical Practice</h3>
            <p className="text-sm md:text-base text-slate-400 font-normal">
              Engage our CISA auditors, SWIFT integration specialists, and core banking middleware engineers.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="bg-[#0055ff] hover:bg-white hover:text-[#0a0e1a] text-white font-bold px-9 py-4 rounded-full transition-all duration-300 text-xs md:text-sm flex items-center gap-2.5 whitespace-nowrap shadow-lg group"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
