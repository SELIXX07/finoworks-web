'use client';

import { useEffect, useRef, useState } from 'react';

const stats = [
  { val: 15, suffix: '+', label: 'YEARS OF SWIFT EXPERIENCE', color: 'text-[#00e5ff]' },
  { val: 100, suffix: '%', label: 'CSCF v2026 PASS RATE', color: 'text-[#38bdf8]' },
  { val: 32, suffix: '', label: 'MANDATORY CSCF CONTROLS', color: 'text-white' },
  { val: 4, suffix: '', label: 'GLOBAL OPERATING HUBS', color: 'text-[#60a5fa]' },
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

function StatItem({ val, suffix, label, color, triggered }: typeof stats[0] & { triggered: boolean }) {
  const count = useCountUp(val, triggered);
  return (
    <div className="flex-1 text-left px-8 md:px-12 py-12 md:py-16">
      <div className="font-extrabold text-[clamp(54px,7vw,96px)] leading-none text-white tracking-tight">
        {count}<span className={color}>{suffix}</span>
      </div>
      <div className="font-mono text-[11px] text-blue-300 uppercase tracking-[0.16em] mt-5 font-bold">{label}</div>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true); },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="border-y border-blue-500/20 bg-[#051438]/80 backdrop-blur-md">
      {/* 4-col stat bar with solid numbers and | separators */}
      <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 divide-blue-500/20">
        {stats.map((s, i) => (
          <div key={i} className="flex flex-1 items-stretch">
            <StatItem {...s} triggered={triggered} />
            {i < stats.length - 1 && (
              <div className="hidden md:block w-px self-stretch bg-blue-500/20" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
