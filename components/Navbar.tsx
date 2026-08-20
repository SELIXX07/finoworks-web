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
    <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      {/* Centered Floating Glassmorphic Pill Container */}
      <nav className="pointer-events-auto flex items-center justify-between gap-4 md:gap-8 px-6 py-2.5 rounded-full bg-white/90 border border-slate-200/90 shadow-[0_12px_36px_rgba(0,0,0,0.07)] backdrop-blur-xl max-w-[1100px] w-full transition-all duration-300">
        
        {/* Left: Brand Logo */}
        <Link
          href="/"
          className="font-mono text-[14px] font-extrabold text-slate-900 tracking-tight hover:text-[#0055ff] transition-colors shrink-0"
        >
          finoworks<span className="text-[#0055ff]">.</span>
        </Link>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-1 sm:gap-2">
          {navLinks.map((l) => {
            const isActive = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[13px] font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/80'
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        {/* Right: Live UTC Clock + CTA Button */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <span className="font-mono text-[11px] text-slate-400 tracking-wider font-bold">
            {clock}
          </span>
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-1.5 bg-[#0055ff] hover:bg-slate-900 text-white font-bold text-[12px] px-4 py-2 rounded-full transition-all shadow-sm"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-slate-900 p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-900" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="pointer-events-auto fixed top-20 left-4 right-4 bg-white/98 backdrop-blur-2xl border border-slate-200 rounded-3xl p-6 shadow-2xl flex flex-col gap-4 z-50 md:hidden animate-in fade-in zoom-in-95 duration-200">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[15px] font-bold px-4 py-2.5 rounded-2xl transition-colors ${
                pathname === l.href
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center gap-2 bg-[#0055ff] text-white font-bold text-[14px] px-5 py-3 rounded-2xl mt-2 shadow-md"
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
