'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, RefreshCw, Layers, Lock, Cpu } from 'lucide-react';

export default function ProductsMosaic() {
  // State for MT-to-MX Converter Interactive Demo
  const [mtConverted, setMtConverted] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  // State for CSP Readiness Checklist Widget
  const [checklist, setChecklist] = useState({
    secureZone: true,
    mfaEnforced: true,
    pkiUpdated: false,
    independentAudit: false,
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const completedCount = Object.values(checklist).filter(Boolean).length;
  const readinessPercent = (completedCount / 4) * 100;

  const handleTranslate = () => {
    setIsTranslating(true);
    setTimeout(() => {
      setMtConverted(true);
      setIsTranslating(false);
    }, 800);
  };

  return (
    <section className="py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-xs font-mono text-electric-500 font-bold uppercase tracking-widest">
              <span>(02) Flagship Software & Services</span>
              <span className="w-8 h-px bg-electric-500" />
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-navy-900 tracking-tight">
              Engineered for Modern Banking Infrastructure.
            </h2>
            <p className="text-base text-slate-600">
              Interactive demos of our core products and compliance frameworks.
            </p>
          </div>

          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-electric-500 hover:text-navy-900 transition-colors"
          >
            <span>View All 11 Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mosaic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Live MT ↔ MX ISO 20022 Interactive Converter Demo (Span 7) */}
          <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-electric-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-electric-500 font-bold uppercase tracking-wider">
                    FLAGSHIP PRODUCT 01
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900">
                    ISO 20022 MT ↔ MX Message Converter
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full bg-electric-50 text-electric-600 font-mono text-xs font-bold">
                  LIVE DEMO
                </span>
              </div>
              <p className="text-sm text-slate-600">
                Automated mapping engine translating legacy MT103 text formats into rich, structured XML (pacs.008) messages without data truncation.
              </p>

              {/* Interactive Demo Box */}
              <div className="bg-slate-900 rounded-xl p-5 text-white font-mono text-xs space-y-4 relative overflow-hidden">
                <div className="flex justify-between items-center text-[11px] text-slate-400 border-b border-slate-800 pb-3">
                  <span>INPUT: MT103 SINGLE CUSTOMER CREDIT</span>
                  <button
                    onClick={handleTranslate}
                    disabled={isTranslating}
                    className="bg-electric-500 hover:bg-electric-400 text-white font-bold px-3 py-1.5 rounded flex items-center gap-1.5 transition-all text-[11px]"
                  >
                    <RefreshCw className={`w-3 h-3 ${isTranslating ? 'animate-spin' : ''}`} />
                    <span>{mtConverted ? 'Reset Demo' : 'Translate to MX'}</span>
                  </button>
                </div>

                {!mtConverted ? (
                  <div className="text-slate-300 space-y-1 leading-relaxed">
                    <div>:20:REF2026082001</div>
                    <div>:32A:260820USD1500000,00</div>
                    <div>:50K:/12345678 KENYA COMMERCIAL BANK NAIROBI</div>
                    <div>:59:/87654321 GLOBAL TREASURY LTD</div>
                    <div className="text-slate-500 pt-2">// Unstructured MT format — vulnerability to truncation</div>
                  </div>
                ) : (
                  <div className="text-emerald-400 space-y-1 leading-relaxed animate-fade-in">
                    <div>&lt;Document xmlns=&quot;urn:iso:std:iso:20022:tech:xsd:pacs.008.001.08&quot;&gt;</div>
                    <div className="pl-4">&lt;FIToFICstmrCdtTrf&gt;</div>
                    <div className="pl-8">&lt;GrpHdr&gt;&lt;MsgId&gt;FINOWORKS-2026-MX&lt;/MsgId&gt;&lt;/GrpHdr&gt;</div>
                    <div className="pl-8 text-electric-300">&lt;CdtTrfTxInf&gt;&lt;IntrBkSttlmAmt Ccy=&quot;USD&quot;&gt;1500000.00&lt;/IntrBkSttlmAmt&gt;</div>
                    <div className="pl-4">&lt;/FIToFICstmrCdtTrf&gt;</div>
                    <div className="text-slate-400 pt-2">// 100% Structured MX message generated. Zero data loss.</div>
                  </div>
                )}
              </div>
            </div>

            <Link
              href="/iso-20022-migration"
              className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 hover:text-electric-500 transition-colors pt-2"
            >
              <span>Learn More About ISO 20022 Cutover</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 2: SWIFT CSP v2026 Audit Readiness Checklist (Span 5) */}
          <div className="lg:col-span-5 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-electric-500/40 transition-all duration-300 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-electric-500 font-bold uppercase tracking-wider">
                FLAGSHIP PRODUCT 02
              </div>
              <h3 className="text-2xl font-bold text-navy-900">
                CSP v2026 Audit Readiness Gauge
              </h3>
              <p className="text-sm text-slate-600">
                Interactive CISO self-assessment against the latest mandatory SWIFT Customer Security Controls Framework (CSCF).
              </p>

              {/* Progress Ring & Checklist */}
              <div className="space-y-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-navy-900 uppercase font-mono">
                    Audit Readiness Score
                  </span>
                  <span className="text-lg font-extrabold text-electric-500 font-mono">
                    {readinessPercent}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-electric-500 transition-all duration-500"
                    style={{ width: `${readinessPercent}%` }}
                  />
                </div>

                {/* Toggles */}
                <div className="space-y-2 text-xs">
                  <button
                    onClick={() => toggleCheck('secureZone')}
                    className="w-full flex items-center justify-between p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-left"
                  >
                    <span>1. Mandatory Secure Zone Segregation</span>
                    <CheckCircle2 className={`w-4 h-4 ${checklist.secureZone ? 'text-emerald-500' : 'text-slate-300'}`} />
                  </button>
                  <button
                    onClick={() => toggleCheck('mfaEnforced')}
                    className="w-full flex items-center justify-between p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-left"
                  >
                    <span>2. MFA & Endpoint Hardening</span>
                    <CheckCircle2 className={`w-4 h-4 ${checklist.mfaEnforced ? 'text-emerald-500' : 'text-slate-300'}`} />
                  </button>
                  <button
                    onClick={() => toggleCheck('pkiUpdated')}
                    className="w-full flex items-center justify-between p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-left"
                  >
                    <span>3. Alliance Access PKI & Patch Level</span>
                    <CheckCircle2 className={`w-4 h-4 ${checklist.pkiUpdated ? 'text-emerald-500' : 'text-slate-300'}`} />
                  </button>
                  <button
                    onClick={() => toggleCheck('independentAudit')}
                    className="w-full flex items-center justify-between p-2 rounded bg-white border border-slate-200 hover:border-slate-300 text-left"
                  >
                    <span>4. Authorized Independent Assessment</span>
                    <CheckCircle2 className={`w-4 h-4 ${checklist.independentAudit ? 'text-emerald-500' : 'text-slate-300'}`} />
                  </button>
                </div>
              </div>
            </div>

            <Link
              href="/csp-assessment-v2026"
              className="inline-flex items-center justify-center bg-navy-900 hover:bg-electric-500 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 text-xs gap-2"
            >
              <span>Book Official CISA Independent Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Card 3: White-Labeled Risk & Cybersecurity Software (Span 6) */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-electric-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-electric-50 flex items-center justify-center text-electric-500">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              White-Labeled Banking Risk Software
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Custom-branded threat monitoring & risk assessment tools engineered specifically for commercial bank IT infrastructure and central bank reporting.
            </p>
            <div className="pt-2 text-xs font-semibold text-electric-500">
              Features: Automated vulnerability scanning, Real-time SIEM feeds, Executive reporting.
            </div>
          </div>

          {/* Card 4: Enterprise Payment Hub & Middleware (Span 6) */}
          <div className="lg:col-span-6 bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:border-electric-500/40 transition-all space-y-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-navy-900">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-navy-900">
              Payment Hub & Enterprise Middleware
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Unified integration layer consolidating multiple domestic and cross-border payment rails (SWIFT, Fedwire, ACH) into a single core banking adapter.
            </p>
            <div className="pt-2 text-xs font-semibold text-navy-900">
              Compatible with: Oracle Flexcube, Temenos T24, SAP Banking, Custom APIs.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
