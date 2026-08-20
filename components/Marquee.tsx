'use client';

export default function Marquee() {
  const items = [
    'SWIFT Alliance',
    'ISO 20022',
    'CSP v2026',
    'Middleware',
    'CISA Certified',
    'Oracle Gold Partner',
    'MT ↔ MX',
    'Zero Downtime',
    'SWIFT Alliance',
    'ISO 20022',
    'CSP v2026',
    'Middleware',
    'CISA Certified',
    'Oracle Gold Partner',
    'MT ↔ MX',
    'Zero Downtime',
  ];

  return (
    <div className="w-full overflow-hidden border-y border-slate-200 py-6 bg-slate-50/50">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span
              className="font-serif italic text-[clamp(28px,3.5vw,46px)] text-black whitespace-nowrap leading-none font-normal"
            >
              {item}
            </span>
            <span className="text-[#0055ff] text-2xl leading-none select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
