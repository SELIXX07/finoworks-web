'use client';

export default function Marquee() {
  const items = [
    'SWIFT Alliance Access',
    'ISO 20022 CBPR+',
    'CSCF v2026 Mandate',
    'Payment Hub Middleware',
    'CISA Certified Auditors',
    'Oracle Gold Partner',
    'MT ↔ MX Conversion',
    'Zero Downtime Cutover',
    'SWIFT Alliance Access',
    'ISO 20022 CBPR+',
    'CSCF v2026 Mandate',
    'Payment Hub Middleware',
    'CISA Certified Auditors',
    'Oracle Gold Partner',
    'MT ↔ MX Conversion',
    'Zero Downtime Cutover',
  ];

  return (
    <div className="w-full overflow-hidden border-y border-blue-500/20 py-6 bg-[#051438]/80 backdrop-blur-md">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span
              className="text-[clamp(22px,2.8vw,36px)] font-extrabold text-white whitespace-nowrap leading-none tracking-tight"
            >
              {item}
            </span>
            <span className="text-[#00e5ff] text-xl leading-none select-none font-mono">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
