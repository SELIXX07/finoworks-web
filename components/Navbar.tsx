'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [time, setTime] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'UTC',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-md border-b border-slate-200/80 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          data-cursor="home"
        >
          <div className="w-10 h-10 rounded-xl bg-navy-900 text-white flex items-center justify-center font-extrabold text-xl shadow-md group-hover:bg-electric-500 transition-colors">
            F
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-navy-900 leading-none">
              Fino<span className="text-electric-500">Works</span>
            </span>
            <span className="text-[10px] font-mono text-slate-500 tracking-wider">
              TECHNOLOGIES
            </span>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-slate-600">
          <Link
            href="/services"
            className="hover:text-electric-500 transition-colors"
            data-cursor="view"
          >
            Services
          </Link>
          <Link
            href="/iso-20022-migration"
            className="hover:text-electric-500 transition-colors"
            data-cursor="view"
          >
            ISO 20022
          </Link>
          <Link
            href="/csp-assessment-v2026"
            className="hover:text-electric-500 transition-colors"
            data-cursor="view"
          >
            CSP v2026
          </Link>
          <Link
            href="/about-us"
            className="hover:text-electric-500 transition-colors"
            data-cursor="view"
          >
            About Us
          </Link>
          <Link
            href="/careers"
            className="hover:text-electric-500 transition-colors"
            data-cursor="view"
          >
            Careers
          </Link>
          <Link
            href="/insights"
            className="hover:text-electric-500 transition-colors"
            data-cursor="view"
          >
            Insights
          </Link>
        </div>

        {/* Right CTA & UTC Clock */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>{time || '00:00:00 UTC'}</span>
          </div>

          <Link
            href="/contact-us"
            className="bg-navy-900 hover:bg-electric-500 text-white text-xs font-bold px-5 py-2.5 rounded-lg transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md hover:shadow-electric-500/20"
            data-cursor="go"
          >
            <span>Book Assessment</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-navy-900 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4">
          <Link
            href="/services"
            className="block text-sm font-semibold text-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/iso-20022-migration"
            className="block text-sm font-semibold text-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            ISO 20022 Migration
          </Link>
          <Link
            href="/csp-assessment-v2026"
            className="block text-sm font-semibold text-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            SWIFT CSP v2026 Assessment
          </Link>
          <Link
            href="/about-us"
            className="block text-sm font-semibold text-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us & Global Hubs
          </Link>
          <Link
            href="/careers"
            className="block text-sm font-semibold text-slate-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            Careers
          </Link>
          <Link
            href="/contact-us"
            className="block w-full bg-electric-500 text-white text-center font-bold py-3 rounded-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Assessment
          </Link>
        </div>
      )}
    </nav>
  );
}
