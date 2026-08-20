'use client';

export default function Marquee() {
  const items = [
    'SWIFT Alliance Access (SAA)',
    'ISO 20022 MX Migration',
    'SWIFT CSP v2026 Assessment',
    'Oracle Gold Partner',
    'Fedwire Certification',
    'CISA Certified Auditors',
    'Payment Hub Enterprise Middleware',
    'White-Labeled Risk Software',
    'Axletree USA Alliance',
    'Seqato Partnership',
    'SWIFT User Group Kenya',
  ];

  return (
    <div className="bg-navy-900 text-white py-4 overflow-hidden border-y border-navy-700 select-none">
      <div className="flex w-max animate-marquee space-x-8 text-xs font-mono tracking-widest uppercase text-slate-300">
        {[...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center space-x-8">
            <span>{item}</span>
            <span className="text-electric-400 font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
