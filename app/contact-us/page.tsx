'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, ShieldCheck } from 'lucide-react';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const initialBic = searchParams.get('bic') || '';
  const initialService = searchParams.get('service') || 'SWIFT CSP v2026 Assessment';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    bic: initialBic,
    service: initialService,
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      {/* Contact Info (Span 5) */}
      <div className="lg:col-span-5 space-y-8 p-10 md:p-12 rounded-[36px] bg-[#0b0f19] text-white border border-[#1f293d] shadow-2xl">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/30 text-[#00e5ff] text-xs font-mono font-bold">
            <ShieldCheck className="w-4 h-4" />
            <span>CONFIDENTIAL ENGAGEMENT</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight">
            Direct Principal Access.
          </h2>

          <p className="text-sm text-slate-300 leading-relaxed font-normal">
            Your inquiry routes directly to our senior SWIFT solution architects and CISA lead auditors with complete NDA protection.
          </p>
        </div>

        <div className="space-y-6 pt-4 border-t border-slate-800 text-sm">
          <div className="flex items-start gap-4">
            <Mail className="w-5 h-5 text-[#00e5ff] shrink-0 mt-1" />
            <div>
              <div className="font-mono text-xs text-slate-400 font-bold uppercase">Direct Email</div>
              <div className="font-bold text-white mt-0.5">contact@finoworks.com</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-[#00e5ff] shrink-0 mt-1" />
            <div>
              <div className="font-mono text-xs text-slate-400 font-bold uppercase">Global HQ</div>
              <div className="font-bold text-white mt-0.5">Mayfair Suites, Westlands, Nairobi, Kenya</div>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <MapPin className="w-5 h-5 text-[#00e5ff] shrink-0 mt-1" />
            <div>
              <div className="font-mono text-xs text-slate-400 font-bold uppercase">Engineering Facility</div>
              <div className="font-bold text-white mt-0.5">Clayworks, Bannerghatta Rd, Bangalore, India</div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Form (Span 7) */}
      <div className="lg:col-span-7 p-10 md:p-14 rounded-[36px] bg-white border border-slate-200 shadow-xl space-y-6">
        {submitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-extrabold text-[#0a0e1a]">Inquiry Received.</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto">
              Our principal SWIFT architect will contact you within 24 business hours to deliver your preliminary scope and NDA.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. John Doe"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-[#0055ff] rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase">Corporate Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@bank.com"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-[#0055ff] rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase">Institution Name</label>
                <input
                  type="text"
                  required
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  placeholder="Commercial Bank / Central Bank"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-[#0055ff] rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-slate-700 uppercase">SWIFT BIC (Optional)</label>
                <input
                  type="text"
                  value={formData.bic}
                  onChange={(e) => setFormData({ ...formData, bic: e.target.value })}
                  placeholder="e.g. KCBLKENX"
                  className="w-full bg-slate-50 border border-slate-300 focus:border-[#0055ff] rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none font-mono transition-colors"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-700 uppercase">Practice Area of Interest</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 focus:border-[#0055ff] rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors"
              >
                <option value="SWIFT CSP v2026 Assessment">SWIFT CSP v2026 Independent Assessment</option>
                <option value="ISO 20022 MT to MX Migration">ISO 20022 MT ↔ MX Message Converter</option>
                <option value="SWIFT Alliance Access Integration">SWIFT Integration (SAA / SAG / AMH / Lite2)</option>
                <option value="Enterprise Cyber Security Assessment">Enterprise Banking Cyber Security Assessment</option>
                <option value="Penetration Testing & Red Teaming">Penetration Testing & Red Teaming</option>
                <option value="White-Labeled Risk Software">White-Labeled Banking Risk Software</option>
                <option value="Annual Managed Support SLA">SWIFT Annual Managed Support (24/7 SLA)</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono font-bold text-slate-700 uppercase">Scope Overview</label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Briefly describe your environment (e.g. SAA version, core banking system, target attestation date)..."
                className="w-full bg-slate-50 border border-slate-300 focus:border-[#0055ff] rounded-2xl px-4 py-3.5 text-sm text-slate-900 outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0a0e1a] hover:bg-[#0055ff] text-white font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg group"
            >
              <span>Submit Assessment Scope Request</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="pt-36 pb-36 min-h-screen">
      <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 space-y-20">
        <div className="space-y-6 max-w-4xl home-reveal">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-mono font-bold">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0055ff] animate-pulse" />
            <span>CONFIDENTIAL CONSULTATION</span>
          </div>

          <h1 className="text-[clamp(38px,5.4vw,76px)] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.06]">
            Initiate Assessment &{' '}
            <span className="font-serif italic font-normal text-[#0055ff] hover-highlight">Scope.</span>
          </h1>

          <p className="text-[clamp(16px,1.35vw,20px)] text-slate-600 leading-relaxed font-normal">
            Connect with our lead CISA assessors and principal SWIFT engineers for confidential scope definition and gap analysis.
          </p>
        </div>

        <Suspense fallback={<div className="text-center py-20 font-mono text-sm text-slate-400">Loading booking interface...</div>}>
          <ContactFormInner />
        </Suspense>
      </div>
    </div>
  );
}
