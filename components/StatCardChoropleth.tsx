'use client';

import { useState } from 'react';
import { Globe, Server, Activity, ShieldCheck, Zap, MapPin } from 'lucide-react';

interface CountryNode {
  id: string;
  name: string;
  region: string;
  role: string;
  nodes: number;
  status: string;
  latency: string;
  coords: { x: number; y: number }; // SVG percentage coordinate
}

const countryNodes: CountryNode[] = [
  {
    id: 'KE',
    name: 'Kenya (Nairobi HQ)',
    region: 'East Africa',
    role: 'Global Corporate HQ & SAA Infrastructure Center',
    nodes: 18,
    status: 'Operational (Primary)',
    latency: '12ms',
    coords: { x: 58, y: 58 },
  },
  {
    id: 'IN',
    name: 'India (Bangalore Hub)',
    region: 'South Asia / APAC',
    role: 'Global Dev & ISO 20022 Engineering Hub (Clayworks)',
    nodes: 24,
    status: 'Operational (Dev Hub)',
    latency: '18ms',
    coords: { x: 72, y: 48 },
  },
  {
    id: 'US',
    name: 'United States (Franklin, TN)',
    region: 'North America',
    role: 'Americas Client Support & NOC Center',
    nodes: 14,
    status: 'Operational (Americas)',
    latency: '14ms',
    coords: { x: 24, y: 36 },
  },
  {
    id: 'AE',
    name: 'United Arab Emirates (Dubai)',
    region: 'Middle East / GCC',
    role: 'GCC Regional Payment Hub & SWIFT Corridor',
    nodes: 12,
    status: 'Operational (GCC)',
    latency: '16ms',
    coords: { x: 63.5, y: 44.5 },
  },
  {
    id: 'SA',
    name: 'Saudi Arabia (Riyadh)',
    region: 'Middle East / GCC',
    role: 'SAMA Compliance & Core Banking Gateway',
    nodes: 8,
    status: 'Operational (GCC)',
    latency: '19ms',
    coords: { x: 61.5, y: 46 },
  },
  {
    id: 'QA',
    name: 'Qatar (Doha)',
    region: 'Middle East / GCC',
    role: 'Cross-Border SWIFT Messaging Rail',
    nodes: 6,
    status: 'Operational (GCC)',
    latency: '15ms',
    coords: { x: 63.8, y: 45.5 },
  },
  {
    id: 'KW',
    name: 'Kuwait',
    region: 'Middle East / GCC',
    role: 'Alliance Gateway Monitoring Node',
    nodes: 5,
    status: 'Operational (GCC)',
    latency: '17ms',
    coords: { x: 62.5, y: 43.5 },
  },
  {
    id: 'BH',
    name: 'Bahrain',
    region: 'Middle East / GCC',
    role: 'Banking Risk & SIEM Surveillance Node',
    nodes: 4,
    status: 'Operational (GCC)',
    latency: '16ms',
    coords: { x: 63.2, y: 45.2 },
  },
  {
    id: 'OM',
    name: 'Oman',
    region: 'Middle East / GCC',
    role: 'Disaster Recovery Standby Node',
    nodes: 5,
    status: 'Operational (GCC)',
    latency: '20ms',
    coords: { x: 65, y: 48 },
  },
];

export default function StatCardChoropleth() {
  const [selected, setSelected] = useState<CountryNode | null>(null);
  const [hovered, setHovered] = useState<CountryNode | null>(null);

  const activeNode = hovered || selected || null;
  const totalNodes = countryNodes.reduce((acc, c) => acc + c.nodes, 0);

  return (
    <div className="relative w-full rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
      {/* Top Card Header */}
      <div className="p-6 md:p-8 border-b border-slate-100 bg-gradient-to-b from-slate-50/90 to-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500">
              GLOBAL SWIFT NODES & OPERATIONS
            </span>
          </div>

          <div className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            {activeNode ? activeNode.name : '4 Global Engineering Hubs & 9 Operating Countries'}
          </div>

          <p className="text-xs text-slate-500 font-medium">
            {activeNode
              ? `${activeNode.role} • ${activeNode.latency} Latency`
              : `${totalNodes} Active SAA/SAG Instances Monitored Across Kenya, India, USA & Middle East GCC`}
          </p>
        </div>

        <div className="inline-flex items-center gap-2 bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/20 px-3.5 py-1.5 rounded-full font-mono text-xs font-bold shrink-0 self-start sm:self-auto">
          <ShieldCheck className="w-4 h-4" />
          <span>100% Attestation Pass</span>
        </div>
      </div>

      {/* World Map SVG Canvas Area */}
      <div className="relative w-full aspect-[2/1] min-h-[320px] md:min-h-[380px] bg-slate-900 p-4 md:p-6 overflow-hidden flex items-center justify-center select-none">
        {/* Subtle Map Grid Lines */}
        <div
          className="absolute inset-0 opacity-15 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)',
            backgroundSize: '24px 24px',
          }}
        />

        {/* Global Map Silhouette SVG */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-contain pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* World Continents Simplified Poly / Path */}
          <g fill="#1e293b" stroke="#334155" strokeWidth="0.75" opacity="0.6">
            {/* North America */}
            <path d="M120,80 L280,70 L340,110 L310,180 L250,220 L210,190 L180,240 L120,180 Z" />
            {/* South America */}
            <path d="M260,260 L340,280 L360,380 L300,460 L280,410 L250,320 Z" />
            {/* Europe */}
            <path d="M460,70 L580,60 L570,140 L500,160 L450,120 Z" />
            {/* Africa */}
            <path d="M460,180 L580,180 L620,260 L590,380 L530,420 L480,320 L450,220 Z" />
            {/* Middle East & Central Asia */}
            <path d="M590,160 L690,150 L680,240 L600,240 Z" />
            {/* India & South Asia */}
            <path d="M680,190 L760,190 L740,300 L690,260 Z" />
            {/* East Asia & China */}
            <path d="M740,110 L880,120 L860,240 L760,220 Z" />
            {/* Australia */}
            <path d="M780,340 L890,330 L880,420 L790,410 Z" />
          </g>

          {/* Connection Arc Lines Between Global Hubs */}
          <g stroke="#0055ff" strokeWidth="1.5" fill="none" opacity="0.7" strokeDasharray="4 4">
            {/* USA to Kenya HQ */}
            <path d="M 240,180 Q 400,120 580,290" />
            {/* Kenya HQ to India Hub */}
            <path d="M 580,290 Q 640,220 720,240" />
            {/* Kenya HQ to Dubai GCC */}
            <path d="M 580,290 Q 600,240 635,222" />
            {/* Dubai GCC to India Hub */}
            <path d="M 635,222 Q 670,210 720,240" />
          </g>

          {/* Glowing Hub Nodes */}
          {countryNodes.map((c) => {
            const isTarget = activeNode?.id === c.id;
            const cx = (c.coords.x / 100) * 1000;
            const cy = (c.coords.y / 100) * 500;

            return (
              <g key={c.id}>
                {/* Ping ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isTarget ? 14 : 7}
                  fill="none"
                  stroke={isTarget ? '#00d2ff' : '#0055ff'}
                  strokeWidth="1.5"
                  opacity={isTarget ? 0.9 : 0.5}
                />
                {/* Core dot */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isTarget ? 6 : 3.5}
                  fill={isTarget ? '#00d2ff' : '#ffffff'}
                />
              </g>
            );
          })}
        </svg>

        {/* Interactive Floating Hotspots */}
        {countryNodes.map((c) => {
          const isTarget = activeNode?.id === c.id;

          return (
            <button
              key={c.id}
              type="button"
              onClick={() => setSelected(c)}
              onMouseEnter={() => setHovered(c)}
              onMouseLeave={() => setHovered(null)}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group focus:outline-none"
              style={{
                left: `${c.coords.x}%`,
                top: `${c.coords.y}%`,
              }}
              aria-label={`Select ${c.name}`}
            >
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                  isTarget ? 'scale-125 bg-[#0055ff]/40' : 'hover:scale-110'
                }`}
              >
                <div
                  className={`w-3 h-3 rounded-full transition-all ${
                    isTarget
                      ? 'bg-[#00d2ff] ring-4 ring-[#0055ff]'
                      : 'bg-white ring-2 ring-[#0055ff]'
                  }`}
                />
              </div>

              {/* Floating label pill */}
              <div
                className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] font-mono font-bold transition-all pointer-events-none ${
                  isTarget
                    ? 'opacity-100 bg-[#0055ff] text-white shadow-lg -translate-y-1'
                    : 'opacity-0 group-hover:opacity-100 bg-slate-900 text-white border border-slate-700'
                }`}
              >
                {c.name}
              </div>
            </button>
          );
        })}
      </div>

      {/* Bottom Country Quick-Selector Chips */}
      <div className="p-4 md:p-6 bg-slate-50 border-t border-slate-100 space-y-3">
        <div className="flex justify-between items-center text-[11px] font-mono text-slate-500 font-bold">
          <span>SELECT OPERATING REGION:</span>
          <span>{countryNodes.length} COUNTRIES ACTIVE</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {countryNodes.map((c) => {
            const isSelected = activeNode?.id === c.id;

            return (
              <button
                key={c.id}
                onClick={() => setSelected(c)}
                onMouseEnter={() => setHovered(c)}
                onMouseLeave={() => setHovered(null)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#0055ff] text-white shadow-sm'
                    : 'bg-white border border-slate-200 text-slate-700 hover:border-[#0055ff] hover:text-[#0055ff]'
                }`}
              >
                <MapPin className="w-3 h-3" />
                <span>{c.name.split(' ')[0]}</span>
                <span className="font-mono text-[10px] opacity-60">({c.nodes})</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
