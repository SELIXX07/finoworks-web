'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { val: 15, suffix: '+', label: 'YEARS OF SWIFT EXPERIENCE' },
  { val: 100, suffix: '%', label: 'CSP PASS RATE' },
  { val: 32, suffix: '', label: 'CSCF v2026 CONTROLS COVERED' },
  { val: 4, suffix: '', label: 'GLOBAL ENGINEERING HUBS' },
];

function useCountUp(target: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const step = target / 60;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [target, triggered]);
  return count;
}

function StatItem({ val, suffix, label, triggered }: typeof stats[0] & { triggered: boolean }) {
  const count = useCountUp(val, triggered);
  return (
    <div className="flex-1 text-center md:text-left px-6 md:px-10 py-8">
      <div className="font-sans text-[clamp(48px,6vw,88px)] font-extrabold leading-none text-black tracking-tight">
        {count}<span className="text-[#0055ff]">{suffix}</span>
      </div>
      <div className="font-mono text-[11px] text-slate-500 uppercase tracking-widest mt-4 font-bold">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-slate-200 bg-slate-50/40">
      {/* 4-col stat bar with solid black numbers and | separators */}
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 divide-slate-200">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-1 items-stretch">
            <StatItem {...s} triggered={triggered} />
            {i < stats.length - 1 && (
              <div className="hidden md:block w-px self-stretch bg-slate-200" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
