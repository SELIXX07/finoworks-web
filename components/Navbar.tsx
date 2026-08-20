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
          ? 'border-b border-white/[0.08] backdrop-blur-xl bg-[#05101f]/80'
          : 'bg-transparent'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="h-[2px] w-full bg-transparent absolute top-0 left-0 right-0 z-10">
        <div id="scroll-bar" className="h-full bg-gradient-to-r from-[#0066ff] via-[#00d2ff] to-[#0066ff] w-0 transition-all duration-75" />
      </div>

      <nav className="max-w-[1600px] mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-mono text-[13px] font-bold text-white/90 tracking-tight hover:text-white transition-colors"
        >
          finoworks
        </Link>

        {/* Center Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] text-white/55 hover:text-white/90 transition-colors font-medium"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right: Clock + CTA */}
        <div className="hidden md:flex items-center gap-5">
          <span className="font-mono text-[11px] text-white/35 tracking-wider">{clock}</span>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-[#05101f] font-bold text-[13px] px-5 py-2.5 rounded-full hover:bg-white/90 transition-all"
          >
            Book Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#05101f]/95 backdrop-blur-xl border-t border-white/[0.08] px-6 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[15px] text-white/70 hover:text-white transition-colors font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 bg-white text-[#05101f] font-bold text-[14px] px-5 py-3 rounded-full w-fit mt-2"
            onClick={() => setMobileOpen(false)}
          >
            Book Assessment <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      )}
    </header>
  );
}
