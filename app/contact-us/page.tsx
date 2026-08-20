'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

function ContactFormInner() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    service: 'SWIFT CSP v2026 Assessment',
    timeSlot: '10:00 UTC (EMEA / East Africa)',
    message: '',
  });

  useEffect(() => {
    const bicParam = searchParams.get('bic');
    const serviceParam = searchParams.get('service');
    if (bicParam || serviceParam) {
      setFormData((prev) => ({
        ...prev,
        institution: bicParam ? `BIC / Institution: ${bicParam}` : prev.institution,
        service: serviceParam || prev.service,
      }));
    }
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="lg:col-span-7 bg-slate-50 p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm space-y-6">
      {!submitted ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="font-serif italic text-2xl md:text-3xl text-black font-normal">
            Book Technical Assessment Window
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800">Full Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Connor"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-[#0055ff] transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800">Work Email</label>
              <input
                type="email"
                required
                placeholder="s.connor@bank.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-[#0055ff] transition-colors"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800">Financial Institution / Bank / BIC</label>
            <input
              type="text"
              required
              placeholder="e.g. Apex Commercial Bank or BIC: APEXKENAXXX"
              value={formData.institution}
              onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-[#0055ff] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800">Service Required</label>
              <select
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-[#0055ff] transition-colors"
              >
                <option>SWIFT CSP v2026 Assessment</option>
                <option>ISO 20022 MT to MX Migration</option>
                <option>SWIFT Alliance Access Integration</option>
                <option>Penetration Testing</option>
                <option>Cyber Security Assessment</option>
                <option>Payment Hub Enterprise Middleware</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-800">Preferred Time Slot (UTC)</label>
              <select
                value={formData.timeSlot}
                onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-[#0055ff] transition-colors"
              >
                <option>08:00 UTC (EMEA / APAC)</option>
                <option>10:00 UTC (EMEA / East Africa)</option>
                <option>14:00 UTC (US East / Americas)</option>
                <option>16:00 UTC (US West)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-800">Brief Infrastructure Context</label>
            <textarea
              rows={4}
              placeholder="Tell us about your core banking system, SWIFT architecture (SAA/SAG), or upcoming audit deadlines..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3.5 rounded-2xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-[#0055ff] transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0055ff] hover:bg-black text-white font-bold py-4 rounded-full text-xs flex items-center justify-center gap-2 transition-all shadow-md"
          >
            <Send className="w-4 h-4" />
            <span>Confirm Assessment Booking</span>
          </button>
        </form>
      ) : (
        <div className="py-12 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="font-serif italic text-3xl text-black">Consultation Confirmed</h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Thank you, <strong>{formData.name}</strong>. A calendar invite for <strong>{formData.timeSlot}</strong> and an introductory SWIFT scoping checklist have been dispatched to <strong>{formData.email}</strong>.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-bold text-[#0055ff] hover:underline"
          >
            Book another session
          </button>
        </div>
      )}
    </div>
  );
}

export default function ContactUsPage() {
  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-black text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span>SCHEDULE A TECHNICAL CONSULTATION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            Connect With SWIFT & Security Specialists.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Whether you need an independent CSP v2026 assessment, ISO 20022 migration support, or penetration testing, our CISA-certified team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Suspense fallback={<div className="lg:col-span-7 bg-slate-50 p-12 rounded-3xl border border-slate-200 font-mono text-xs">Loading form...</div>}>
            <ContactFormInner />
          </Suspense>

          {/* Right Column: Global Office Direct Directory (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-black text-white space-y-6 shadow-xl">
              <h3 className="font-serif italic text-2xl font-normal">Global Contact Directory</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Direct contact channels for technical emergencies, audit inquiries, and strategic banking alliances.
              </p>

              <div className="space-y-4 pt-2 text-xs">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-slate-400 text-[10px] uppercase">Official Inquiries</div>
                    <div className="font-bold text-white">contact@finoworks.com</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-slate-400 text-[10px] uppercase">East Africa HQ Direct</div>
                    <div className="font-bold text-white">+254 20 523 0000</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#00d2ff] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono text-slate-400 text-[10px] uppercase">Support Coverage</div>
                    <div className="font-bold text-white">24/7 Global NOC & Standby Engineers</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4 Office Locations */}
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-6">
              <h4 className="font-serif italic text-xl text-black">Global Hubs & Facilities</h4>

              <div className="space-y-4 text-xs">
                <div className="space-y-1">
                  <div className="font-bold text-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0055ff]" />
                    <span>Nairobi Corporate HQ</span>
                  </div>
                  <p className="text-slate-500 pl-5 leading-relaxed">
                    Mayfair Suites, Parklands / Mpaka Rd, Westlands, Nairobi, Kenya
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-200">
                  <div className="font-bold text-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0055ff]" />
                    <span>Bangalore Global Dev Hub</span>
                  </div>
                  <p className="text-slate-500 pl-5 leading-relaxed">
                    Clayworks, Bannerghatta Rd, Bengaluru, Karnataka, India (New 2026 Hub)
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-200">
                  <div className="font-bold text-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0055ff]" />
                    <span>USA Client Support Hub</span>
                  </div>
                  <p className="text-slate-500 pl-5 leading-relaxed">
                    2550 Meridian Blvd, Suite 200, Franklin, TN 37067, USA
                  </p>
                </div>

                <div className="space-y-1 pt-2 border-t border-slate-200">
                  <div className="font-bold text-black flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#0055ff]" />
                    <span>Middle East GCC Corridor</span>
                  </div>
                  <p className="text-slate-500 pl-5 leading-relaxed">
                    Kuwait, Bahrain, Qatar, UAE (Dubai), Saudi Arabia, Oman
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
