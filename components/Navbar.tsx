'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [clock, setClock] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'ISO 20022', href: '/iso-20022-migration' },
    { label: 'CSP v2026', href: '/csp-assessment-v2026' },
    { label: 'About', href: '/about-us' },
    { label: 'Contact', href: '/contact-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200/80 backdrop-blur-xl bg-white/90 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-[14px] font-extrabold text-black tracking-tight hover:text-[#0055ff] transition-colors"
        >
          finoworks<span className="text-[#0055ff]">.</span>
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-slate-600 hover:text-black transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: Clock + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span className="font-mono text-[11px] text-slate-400 tracking-wider font-semibold">{clock}</span>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-black text-white font-bold text-[13px] px-5 py-2.5 rounded-full hover:bg-[#0055ff] transition-all shadow-sm"
          >
            Book Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-black"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-t border-slate-200 px-6 py-6 flex flex-col gap-5 shadow-xl">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-slate-700 hover:text-black transition-colors font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-black text-white font-bold text-[14px] px-5 py-3 rounded-full w-fit mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Book Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
