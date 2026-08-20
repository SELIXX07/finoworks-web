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
      {/* ── Apple Liquid Glass Pill Container (Secondary White Base) ── */}
      <nav
        className="pointer-events-auto relative w-full max-w-[1060px] h-[54px] rounded-full px-4 sm:px-6 grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.85)',
          backdropFilter: 'blur(28px) saturate(190%)',
          WebkitBackdropFilter: 'blur(28px) saturate(190%)',
          border: '1px solid rgba(255, 255, 255, 0.95)',
          boxShadow:
            '0 20px 45px -12px rgba(0, 85, 255, 0.08), 0 1px 3px 0 rgba(0, 0, 0, 0.04), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95), inset 0 -1px 1px 0 rgba(0, 0, 0, 0.03)',
        }}
      >
        {/* ── LEFT: Logo ── */}
        <div className="flex items-center">
          <Link
            href="/"
            className="font-mono text-[14px] font-extrabold text-slate-900 tracking-tight hover:text-[#0055ff] transition-colors"
          >
            finoworks<span className="text-[#0055ff]">.</span>
          </Link>
        </div>

        {/* ── CENTER: Primary Blue Active Nav Pill ── */}
        <div className="hidden md:flex items-center justify-center gap-1.5 px-2 py-1 rounded-full bg-slate-900/[0.04] border border-black/[0.03]">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative text-[13px] font-bold px-4 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-[#0055ff] text-white shadow-[0_2px_10px_rgba(0,85,255,0.35)]'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* ── RIGHT: Live Clock + Primary Blue Book CTA ── */}
        <div className="hidden md:flex items-center justify-end gap-4">
          <span className="font-mono text-[11px] text-slate-500 font-bold tracking-wider opacity-80">
            {clock}
          </span>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-1.5 bg-[#0055ff] hover:bg-[#0048e5] text-white font-bold text-[12px] px-4 py-2 rounded-full transition-all duration-200 shadow-[0_4px_14px_rgba(0,85,255,0.35)] hover:shadow-md"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── MOBILE: Hamburger Toggle ── */}
        <div className="flex justify-end md:hidden">
          <button
            className="text-slate-900 p-1 rounded-lg hover:bg-black/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* ── MOBILE: Apple Glass Drawer ── */}
      {mobileOpen && (
        <div
          className="pointer-events-auto fixed top-20 left-4 right-4 rounded-3xl p-6 shadow-2xl flex flex-col gap-3 z-50 md:hidden animate-in fade-in zoom-in-95 duration-200"
          style={{
            background: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(30px) saturate(200%)',
            WebkitBackdropFilter: 'blur(30px) saturate(200%)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            boxShadow:
              '0 25px 50px -12px rgba(0, 85, 255, 0.15), inset 0 1px 2px rgba(255, 255, 255, 0.95)',
          }}
        >
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] font-bold px-4 py-3 rounded-2xl transition-colors ${
                pathname === l.href
                  ? 'bg-[#0055ff] text-white shadow-md'
                  : 'text-slate-700 hover:bg-white/80'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-[#0055ff] text-white font-bold text-[14px] px-5 py-3.5 rounded-2xl mt-2 shadow-[0_4px_16px_rgba(0,85,255,0.35)]"
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
