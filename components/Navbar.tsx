'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [clock, setClock] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const h = String(now.getUTCHours()).padStart(2, '0');
      const m = String(now.getUTCMinutes()).padStart(2, '0');
      const s = String(now.getUTCSeconds()).padStart(2, '0');
      setClock(`${h}:${m}:${s} UTC`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Insights', href: '/insights' },
    { label: 'About Us', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 flex items-center justify-center px-4 sm:px-6 pointer-events-none">
      {/* ── Apple Liquid Glass Pill Container (Deep Sapphire Blue Glass) ── */}
      <nav
        className="pointer-events-auto relative w-full max-w-[1060px] h-[54px] rounded-full px-4 sm:px-6 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center transition-all duration-300"
        style={{
          background: 'rgba(5, 20, 56, 0.85)',
          backdropFilter: 'blur(28px) saturate(200%)',
          WebkitBackdropFilter: 'blur(28px) saturate(200%)',
          border: '1px solid rgba(0, 85, 255, 0.45)',
          boxShadow:
            '0 20px 50px -10px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 85, 255, 0.2), inset 0 1px 1px 0 rgba(255, 255, 255, 0.25)',
        }}
      >
        {/* ── LEFT: Logo ── */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-mono text-[14px] font-extrabold text-white tracking-tight hover:text-[#00e5ff] transition-colors"
          >
            finoworks<span className="text-[#00e5ff]">.</span>
          </Link>
        </div>

        {/* ── CENTER: Blue Active Nav Pill ── */}
        <div className="hidden md:flex items-center justify-center gap-1.5 px-2 py-1 rounded-full bg-white/[0.06] border border-white/[0.08]">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[13px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0055ff] text-white shadow-[0_0_16px_rgba(0,85,255,0.7)]'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* ── RIGHT: Live Clock + Secondary White CTA Button ── */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <span className="font-mono text-[11px] text-slate-300 font-bold tracking-wider opacity-80">
            {clock}
          </span>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-1.5 bg-white hover:bg-slate-100 text-[#030d22] font-extrabold text-[12px] px-4 py-2 rounded-full transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-lg"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── MOBILE: Hamburger Toggle ── */}
        <div className="flex justify-end md:hidden">
          <button
            className="text-white p-1 rounded-lg hover:bg-white/10"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE: Blue Glass Drawer ── */}
      {mobileOpen && (
        <div
          className="pointer-events-auto fixed top-20 left-4 right-4 rounded-3xl p-6 shadow-2xl flex flex-col gap-3 z-50 md:hidden animate-in fade-in zoom-in-95 duration-200"
          style={{
            background: 'rgba(5, 20, 56, 0.95)',
            backdropFilter: 'blur(30px) saturate(200%)',
            WebkitBackdropFilter: 'blur(30px) saturate(200%)',
            border: '1px solid rgba(0, 85, 255, 0.4)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] font-bold px-4 py-3 rounded-2xl transition-colors ${
                pathname === l.href
                  ? 'bg-[#0055ff] text-white shadow-md'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-white text-[#030d22] font-extrabold text-[14px] px-5 py-3.5 rounded-2xl mt-2 shadow-lg"
            onClick={() => setMobileOpen(false)}
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}
