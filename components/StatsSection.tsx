'use client';

export default function StatsSection() {
  const stats = [
    { label: 'Financial Messages Processed', value: '65,000+' },
    { label: 'ISO 20022 Migration Success Rate', value: '100%' },
    { label: 'SWIFT Domain Experience', value: '15+ Yrs' },
    { label: 'Threat Prevention Rate', value: '99.9%' },
  ];

  return (
    <section className="py-20 bg-navy-900 text-white border-y border-navy-700">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-6 md:pt-0 md:px-4 space-y-2">
              <div className="text-4xl md:text-5xl font-extrabold text-electric-400 font-mono tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs font-medium text-slate-300 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
