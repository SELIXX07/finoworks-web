'use client';

import Link from 'next/link';
import { ShieldCheck, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white pt-20 pb-12 border-t border-navy-700 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-slate-800">
          {/* Col 1: Brand & Identity */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-electric-500 text-white flex items-center justify-center font-extrabold text-xl shadow-lg">
                F
              </div>
              <span className="font-extrabold text-xl tracking-tight">
                Fino<span className="text-electric-400">Works</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              SWIFT Certified Provider & Independent CSP Assessor. Empowering financial institutions with secure, compliant, and efficient global messaging infrastructure.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-slate-800/80 border border-slate-700 text-[11px] font-mono text-electric-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SWIFT CSP Provider Label 2026</span>
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Core Solutions
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li>
                <Link href="/services" className="hover:text-electric-400 transition-colors">
                  SWIFT Alliance Integration (SAA/SAG)
                </Link>
              </li>
              <li>
                <Link href="/iso-20022-migration" className="hover:text-electric-400 transition-colors">
                  ISO 20022 MT ↔ MX Converter
                </Link>
              </li>
              <li>
                <Link href="/csp-assessment-v2026" className="hover:text-electric-400 transition-colors">
                  SWIFT CSP v2026 Assessment
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-electric-400 transition-colors">
                  White-Labeled Risk Software
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-electric-400 transition-colors">
                  Enterprise Payment Hub Middleware
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Hubs */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Global Hubs
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <strong className="text-white block">Nairobi, Kenya (HQ)</strong>
                <span className="text-slate-400">Mayfair Suites, Westlands</span>
              </li>
              <li>
                <strong className="text-white block">Bangalore, India (Dev Center)</strong>
                <span className="text-slate-400">Clayworks, Bannerghatta Rd</span>
              </li>
              <li>
                <strong className="text-white block">Tennessee, USA</strong>
                <span className="text-slate-400">Franklin, TN 37067</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Direct */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400">
              Get In Touch
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <a
                href="mailto:info@finoworks.com"
                className="flex items-center gap-2 hover:text-electric-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-electric-400" />
                <span>info@finoworks.com</span>
              </a>
              <a
                href="tel:+254782004961"
                className="flex items-center gap-2 hover:text-electric-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-electric-400" />
                <span>+254 782004961</span>
              </a>
            </div>
            <div className="pt-2">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-1 text-xs font-bold text-electric-400 hover:underline"
              >
                <span>Schedule Technical Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Massive Typographic Brand Footer (DayNight style) */}
        <div className="py-12 border-b border-slate-800/60 text-center select-none">
          <span className="text-5xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-slate-800/80 hover:text-electric-500/20 transition-colors duration-700">
            FINOWORKS
          </span>
        </div>

        {/* Base Copyright */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <div>© 2026 FinoWorks Technologies Ltd. All Rights Reserved.</div>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-400">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-400">
              Terms & Conditions
            </Link>
            <span>ISO Lead Auditor • CISA Certified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
