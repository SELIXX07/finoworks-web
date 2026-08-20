'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, Calendar } from 'lucide-react';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    institution: '',
    service: 'SWIFT CSP v2026 Assessment',
    timeSlot: '10:00 UTC',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-50 text-electric-600 text-xs font-mono font-bold">
            SCHEDULE A TECHNICAL CONSULTATION
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tight">
            Connect With SWIFT & Security Specialists.
          </h1>
          <p className="text-base text-slate-600 leading-relaxed">
            Whether you need an independent CSP v2026 assessment, ISO 20022 migration support, or penetration testing, our CISA-certified team is ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Interactive Booking Form (Span 7) */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold text-navy-900">
                  Book Technical Assessment Window
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Connor"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-electric-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="s.connor@bank.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-electric-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Financial Institution / Bank</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Apex Commercial Bank"
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-electric-500"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Service Required</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-electric-500 bg-white"
                    >
                      <option>SWIFT CSP v2026 Assessment</option>
                      <option>ISO 20022 MT to MX Migration</option>
                      <option>SWIFT Alliance Access Integration</option>
                      <option>Penetration Testing</option>
                      <option>Cyber Security Assessment</option>
                      <option>Payment Hub Enterprise Middleware</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Preferred Time Slot (UTC)</label>
                    <select
                      value={formData.timeSlot}
                      onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-electric-500 bg-white"
                    >
                      <option>10:00 UTC</option>
                      <option>12:00 UTC</option>
                      <option>14:00 UTC</option>
                      <option>16:00 UTC</option>
                      <option>18:00 UTC</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">Project / Inquiry Details</label>
                  <textarea
                    rows={4}
                    placeholder="Provide details regarding your SWIFT BIC, current architecture, or assessment timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-electric-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-900 hover:bg-electric-500 text-white font-bold py-4 rounded-xl transition-all text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Technical Request</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                <h3 className="text-2xl font-bold text-navy-900">Request Submitted Successfully</h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Thank you, <strong className="text-navy-900">{formData.name}</strong>. Our CISA-certified team will review your institution&apos;s request ({formData.institution}) and confirm your consultation for {formData.timeSlot}.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs text-electric-500 font-bold hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Global Office Details (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-navy-900">Global Hub Direct Contacts</h3>

              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block">Kenya Corporate HQ</strong>
                    <span className="text-slate-600">
                      P.O. Box 933, 00606 Woodvale Grove, Mayfair Suites, Westlands, Nairobi, Kenya
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block">Bangalore Development Center</strong>
                    <span className="text-slate-600">
                      Clayworks, Vaishnavi BVS Senate, 178/2 Bannerghatta Rd, Bengaluru 560078
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-electric-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-navy-900 block">USA Support Hub</strong>
                    <span className="text-slate-600">2550 Meridian Blvd, Suite 200, Franklin, TN 37067</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Phone className="w-4 h-4 text-electric-500 flex-shrink-0" />
                  <a href="tel:+254782004961" className="text-navy-900 font-bold hover:text-electric-500">
                    +254 782004961
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-electric-500 flex-shrink-0" />
                  <a href="mailto:info@finoworks.com" className="text-navy-900 font-bold hover:text-electric-500">
                    info@finoworks.com
                  </a>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-navy-900 text-white space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-electric-400 font-bold">
                <Clock className="w-4 h-4" />
                <span>24/7 EMERGENCY RESPONSE</span>
              </div>
              <p className="text-xs text-slate-300">
                SWIFT Alliance Access down or undergoing urgent audit remediation? Call our priority technical helpdesk for immediate intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
