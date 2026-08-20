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
    <div className="w-full overflow-hidden border-y border-white/[0.08] py-5 bg-transparent">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span
              className="font-serif italic text-[clamp(28px,3.5vw,44px)] text-white/80 whitespace-nowrap leading-none"
            >
              {item}
            </span>
            <span className="text-[#0066ff] text-2xl leading-none select-none">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
