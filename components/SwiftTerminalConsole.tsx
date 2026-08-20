'use client';

import { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, Activity, Terminal, RefreshCw, Lock, CheckCircle2, Globe, Cpu } from 'lucide-react';

export default function SwiftTerminalConsole() {
  const [activeTab, setActiveTab] = useState<'audit' | 'converter' | 'network'>('audit');
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(100);
  const [txCount, setTxCount] = useState(48291);
  const [activeControlIndex, setActiveControlIndex] = useState(0);

  // Live transaction counter ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setTxCount((prev) => prev + Math.floor(Math.random() * 7 + 1));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Automated control ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveControlIndex((prev) => (prev + 1) % 6);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleRunAudit = () => {
    if (isScanning) return;
    setIsScanning(true);
    setScanProgress(0);

    let curr = 0;
    const timer = setInterval(() => {
      curr += 5;
      setScanProgress(curr);
      if (curr >= 100) {
        clearInterval(timer);
        setIsScanning(false);
      }
    }, 60);
  };

  const controls = [
    { code: '1.1', name: 'SWIFT Environment Protection (Secure Zone)', status: 'COMPLIANT', latency: '4ms' },
    { code: '1.2', name: 'Operating System Privileged Access', status: 'HARDENED', latency: '6ms' },
    { code: '2.1', name: 'Internal Data Flow Encryption (TLS 1.3)', status: 'VERIFIED', latency: '3ms' },
    { code: '2.2', name: 'Alliance Patch & CVE Lifecycle', status: 'UP-TO-DATE', latency: '12ms' },
    { code: '5.1', name: 'Hardware Token Multi-Factor Auth (MFA)', status: 'ENFORCED', latency: '2ms' },
    { code: '7.1', name: 'Independent Assessor CISA Certification', status: 'PASSED', latency: '0ms' },
  ];

  const hubs = [
    { name: 'Nairobi HQ Core', role: 'Alliance Access (SAA)', ping: '12ms', status: 'ONLINE • ACTIVE' },
    { name: 'Bangalore Dev Hub', role: 'ISO 20022 Engine', ping: '24ms', status: 'ONLINE • ACTIVE' },
    { name: 'Franklin USA Hub', role: '24/7 Security NOC', ping: '38ms', status: 'ONLINE • STANDBY' },
    { name: 'GCC Corridor Hub', role: 'Payment Routing Gateway', ping: '18ms', status: 'ONLINE • ACTIVE' },
  ];

  return (
    <div className="w-full max-w-[620px] rounded-3xl border border-slate-200/90 bg-white/95 shadow-2xl overflow-hidden backdrop-blur-xl transition-all duration-300">
      {/* Terminal Header Bar */}
      <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/90 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/90 inline-block" />
          </div>
          <span className="font-mono text-[11px] font-bold tracking-wider text-slate-300">
            FINOWORKS // SAA ALLIANCE PROTOCOL CONSOLE
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>CSCF v2026 ACTIVE</span>
        </div>
      </div>

      {/* Mode Selector Tabs */}
      <div className="grid grid-cols-3 border-b border-slate-200 bg-slate-50/80 text-xs font-mono font-bold">
        <button
          onClick={() => setActiveTab('audit')}
          className={`py-3.5 px-4 flex items-center justify-center gap-2 border-r border-slate-200 transition-all ${
            activeTab === 'audit'
              ? 'bg-white text-[#0055ff] border-b-2 border-b-[#0055ff]'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>CSCF v2026 Audit</span>
        </button>

        <button
          onClick={() => setActiveTab('converter')}
          className={`py-3.5 px-4 flex items-center justify-center gap-2 border-r border-slate-200 transition-all ${
            activeTab === 'converter'
              ? 'bg-white text-[#0055ff] border-b-2 border-b-[#0055ff]'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
          }`}
        >
          <Activity className="w-3.5 h-3.5" />
          <span>MT ↔ MX Engine</span>
        </button>

        <button
          onClick={() => setActiveTab('network')}
          className={`py-3.5 px-4 flex items-center justify-center gap-2 transition-all ${
            activeTab === 'network'
              ? 'bg-white text-[#0055ff] border-b-2 border-b-[#0055ff]'
              : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100/60'
          }`}
        >
          <Globe className="w-3.5 h-3.5" />
          <span>4 Global Hubs</span>
        </button>
      </div>

      {/* Tab 1: Live CSCF v2026 Audit Simulator */}
      {activeTab === 'audit' && (
        <div className="p-6 md:p-8 space-y-6">
          {/* Top Score Banner */}
          <div className="flex items-center justify-between p-5 rounded-2xl bg-slate-50 border border-slate-200">
            <div className="space-y-1">
              <div className="font-mono text-[10px] uppercase font-bold text-slate-500">
                Independent Assessment Score
              </div>
              <div className="text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                <span>32 / 32 Controls Passed</span>
                <CheckCircle2 className="w-5 h-5 text-emerald-600 inline" />
              </div>
              <p className="text-xs text-slate-500">Zero Mandatory Flags • KYC Registry Attestation Ready</p>
            </div>

            <div className="text-right">
              <div className="text-3xl font-black text-[#0055ff] font-mono">100%</div>
              <div className="text-[10px] font-mono text-slate-400 font-bold">CISA APPROVED</div>
            </div>
          </div>

          {/* Controls Live Stream List */}
          <div className="space-y-2 font-mono text-xs">
            <div className="flex justify-between text-[10px] text-slate-400 uppercase font-bold px-1">
              <span>CSCF Control Parameter</span>
              <span>Audit Status</span>
            </div>

            {controls.map((ctrl, i) => (
              <div
                key={ctrl.code}
                className={`flex items-center justify-between p-3 rounded-xl border transition-all ${
                  i === activeControlIndex
                    ? 'bg-blue-50/70 border-[#0055ff] shadow-sm'
                    : 'bg-slate-50/60 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2.5 truncate max-w-[340px]">
                  <span className="font-bold text-[#0055ff] text-[11px]">[{ctrl.code}]</span>
                  <span className="text-slate-800 truncate text-[11px] font-medium">{ctrl.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {ctrl.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Simulation Button */}
          <div className="pt-2">
            <button
              onClick={handleRunAudit}
              disabled={isScanning}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-[#0055ff] text-white font-bold py-3.5 rounded-2xl text-xs font-mono transition-all shadow-md"
            >
              <RefreshCw className={`w-4 h-4 ${isScanning ? 'animate-spin' : ''}`} />
              <span>{isScanning ? `SIMULATING PEN-TEST & AUDIT SWEEP (${scanProgress}%)...` : 'RUN LIVE CSCF v2026 AUDIT SIMULATION'}</span>
            </button>
          </div>
        </div>
      )}

      {/* Tab 2: Live ISO 20022 MT ↔ MX Stream */}
      {activeTab === 'converter' && (
        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900 text-white font-mono text-xs">
            <div className="space-y-0.5">
              <div className="text-[10px] text-slate-400 font-bold uppercase">STP Message Throughput</div>
              <div className="text-lg font-bold text-[#00d2ff]">
                {txCount.toLocaleString()} Messages Converted
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] text-emerald-400 font-bold">0% TRUNCATION</div>
              <div className="text-[10px] text-slate-400">CBPR+ / pacs.008</div>
            </div>
          </div>

          {/* Live Code Transformer Box */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-4 font-mono text-[11px]">
            <div className="space-y-1.5">
              <div className="text-[10px] font-bold text-slate-500 uppercase flex justify-between">
                <span>Incoming MT103 (Legacy Text)</span>
                <span className="text-amber-600 font-bold">35-CHAR LIMIT</span>
              </div>
              <div className="p-3 bg-white rounded-xl border border-slate-200 text-slate-700 leading-relaxed text-[11px]">
                :20:FT26082001994<br />
                :32A:260820USD1500000,<br />
                :50K:/1234567890<br />
                APEX COMMERCIAL BANK NAIROBI
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#0055ff] text-white flex items-center justify-center shadow-md">
                <ArrowRight className="w-4 h-4 rotate-90 md:rotate-0" />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="text-[10px] font-bold text-[#0055ff] uppercase flex justify-between">
                <span>Outgoing pacs.008.001.08 (ISO 20022 XML)</span>
                <span className="text-emerald-600 font-bold">VALIDATED CBPR+</span>
              </div>
              <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-emerald-400 leading-relaxed text-[11px] overflow-x-auto">
                &lt;FIToFICstmrCdtTrf&gt;<br />
                &nbsp;&nbsp;&lt;GrpHdr&gt;&lt;MsgId&gt;FINO-2026-MX&lt;/MsgId&gt;&lt;/GrpHdr&gt;<br />
                &nbsp;&nbsp;&lt;CdtTrfTxInf&gt;&lt;IntrBkSttlmAmt Ccy=&quot;USD&quot;&gt;1500000.00&lt;/IntrBkSttlmAmt&gt;
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Global Hubs Network Telemetry */}
      {activeTab === 'network' && (
        <div className="p-6 md:p-8 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-slate-200 text-xs font-mono">
            <span className="text-slate-500 font-bold uppercase">Engineering Facility</span>
            <span className="text-slate-500 font-bold uppercase">Status & Ping</span>
          </div>

          <div className="space-y-3">
            {hubs.map((h, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-200"
              >
                <div className="space-y-1">
                  <div className="font-bold text-sm text-slate-900">{h.name}</div>
                  <div className="font-mono text-xs text-slate-500">{h.role}</div>
                </div>
                <div className="text-right font-mono text-xs space-y-1">
                  <div className="text-[#0055ff] font-bold">{h.ping}</div>
                  <div className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-block">
                    {h.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom Console Footer */}
      <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-[11px] font-mono text-slate-500 font-semibold">
        <div className="flex items-center gap-2">
          <Lock className="w-3.5 h-3.5 text-[#0055ff]" />
          <span>SWIFT Secure Zone Segregation Verified</span>
        </div>
        <span className="text-slate-400">SAA v7.6+ Certified</span>
      </div>
    </div>
  );
}
