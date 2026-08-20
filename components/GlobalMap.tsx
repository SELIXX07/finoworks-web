'use client';

import { MapPin, Building2, Globe2, Compass } from 'lucide-react';

export default function GlobalMap() {
  const hubs = [
    {
      city: 'Nairobi, Kenya',
      type: 'Corporate HQ & East Africa Regional Hub',
      detail: 'Mayfair Suites, Westlands, Nairobi',
      status: 'Established 2025',
    },
    {
      city: 'Bangalore, India',
      type: 'Global Dev & Engineering Center',
      detail: 'Clayworks, Bannerghatta Rd, Bengaluru',
      status: 'New 2026 Facility',
    },
    {
      city: 'Tennessee, USA',
      type: 'Regional Support & Business Dev Hub',
      detail: '2550 Meridian Blvd, Franklin, TN',
      status: '24/7 Global Coverage',
    },
    {
      city: 'Australia & Oceania',
      type: 'Strategic Regional Presence',
      detail: 'Oceania Banking Collaboration',
      status: 'Active Expansion',
    },
  ];

  const middleEast = ['Kuwait', 'Bahrain', 'Qatar', 'UAE (Dubai)', 'Saudi Arabia', 'Oman'];

  return (
    <section className="py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono text-electric-500 font-bold uppercase tracking-widest">
              <span>(03) Global Footprint & Expansion</span>
              <span className="w-8 h-px bg-electric-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Global Engineering Hubs & 24/7 Coverage.
            </h2>
            <p className="text-base text-slate-600">
              Operated across strategic global centers to deliver continuous SWIFT support and rapid software engineering.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700">
            <Globe2 className="w-4 h-4 text-electric-500" />
            <span>4 CONTINENTS • 24/7 SUPPORT</span>
          </div>
        </div>

        {/* Global Hub Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.map((hub, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-electric-500/50 transition-all duration-300 space-y-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-electric-500 shadow-sm">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-navy-900">{hub.city}</h3>
                <p className="text-xs font-semibold text-electric-500">{hub.type}</p>
              </div>
              <p className="text-xs text-slate-500">{hub.detail}</p>
              <span className="inline-block text-[11px] font-mono text-slate-400 bg-white px-2.5 py-1 rounded border border-slate-200">
                {hub.status}
              </span>
            </div>
          ))}
        </div>

        {/* Middle East Expansion Highlight Box */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-navy-900 to-slate-900 text-white space-y-6 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-electric-400 font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4" />
                <span>ACTIVE REGIONAL EXPANSION</span>
              </div>
              <h3 className="text-2xl font-bold">Middle East Banking Corridor</h3>
            </div>
            <p className="text-xs text-slate-400 max-w-md">
              Connecting our Kenya HQ, USA Support Hub, and Bangalore Dev Center directly into key GCC markets.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            {middleEast.map((country, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs font-semibold text-slate-200"
              >
                📍 {country}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
