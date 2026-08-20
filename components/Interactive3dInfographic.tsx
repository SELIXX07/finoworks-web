'use client';

import { useState, useRef, useEffect } from 'react';
import { ShieldCheck, Activity, Database, Server, Lock, Layers, Cpu, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

interface NodeDetail {
  id: string;
  name: string;
  layer: string;
  status: string;
  metrics: string;
  desc: string;
}

export default function Interactive3dInfographic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 14, y: -12 });
  const [activeNode, setActiveNode] = useState<string>('swift-zone');
  const [isHovered, setIsHovered] = useState(false);

  const nodes: Record<string, NodeDetail> = {
    'core-banking': {
      id: 'core-banking',
      name: 'Core Banking Adapters',
      layer: 'Layer 01 • Application Ingress',
      status: 'ACTIVE • 99.999% UPTIME',
      metrics: 'Oracle Flexcube • Temenos T24 • SAP',
      desc: 'High-throughput bi-directional connectors capturing payment instructions directly from core accounting ledgers with zero transaction loss.',
    },
    'iso-engine': {
      id: 'iso-engine',
      name: 'ISO 20022 MT ↔ MX Converter',
      layer: 'Layer 02 • Transformation & STP',
      status: 'CBPR+ VALIDATED • 0% TRUNCATION',
      metrics: '14,200 msgs/min • Real-Time XML Schema',
      desc: 'In-flight translation pipeline transforming legacy MT103/202 messages into structured pacs.008/009 XML hierarchies with schema validation.',
    },
    'swift-zone': {
      id: 'swift-zone',
      name: 'SWIFT Secure Zone (SAA/SAG)',
      layer: 'Layer 03 • CSCF v2026 Architecture',
      status: 'SEGREGATED • CISA ATTESTED',
      metrics: 'Alliance Access v7.6+ • HSM • PKI Token',
      desc: 'Strictly segregated physical and logical security boundary protecting SWIFT Alliance Access, Gateway, and Hardware Security Modules (HSM).',
    },
    'siem-vault': {
      id: 'siem-vault',
      name: '24/7 Threat SIEM & SOC Surveillance',
      layer: 'Layer 04 • Real-Time Telemetry',
      status: 'ZERO CVE FLAGS • IMMUTABLE AUDIT',
      metrics: 'Splunk • Sentinel • Automated RMA Watch',
      desc: 'Centralized security monitoring engine tracking lateral movement, unauthorized operator logins, and anomalous cross-border transaction amounts.',
    },
  };

  // 3D Mouse Parallax Tracking
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      // Smooth subtle tilt
      setRotate({
        x: 14 - y * 18,
        y: -12 + x * 22,
      });
    };

    const handleMouseLeave = () => {
      setRotate({ x: 14, y: -12 });
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  const selected = nodes[activeNode] || nodes['swift-zone'];

  return (
    <div className="w-full max-w-[620px] space-y-6">
      {/* 3D Infographic Canvas Stage */}
      <div
        ref={containerRef}
        className="relative h-[380px] sm:h-[420px] w-full rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-white to-blue-50/40 p-6 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing select-none"
        style={{ perspective: '1100px' }}
      >
        {/* Ambient Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#0055ff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.12] pointer-events-none" />

        {/* 3D Floating Isometric Stack */}
        <div
          className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) rotateZ(-2deg)`,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* ── TIER 1: Core Banking Layer (Top) ── */}
          <div
            onClick={() => setActiveNode('core-banking')}
            className={`absolute w-[280px] sm:w-[340px] h-[72px] sm:h-[80px] rounded-2xl border transition-all duration-300 flex items-center justify-between px-5 cursor-pointer shadow-lg backdrop-blur-md ${
              activeNode === 'core-banking'
                ? 'bg-slate-900 text-white border-[#0055ff] shadow-[0_15px_35px_rgba(0,85,255,0.25)] scale-105'
                : 'bg-white/95 text-slate-800 border-slate-300/80 hover:border-[#0055ff]/60 hover:bg-slate-50'
            }`}
            style={{
              transform: 'translateZ(90px) translateY(-85px)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                activeNode === 'core-banking' ? 'bg-[#0055ff] text-white' : 'bg-slate-100 text-[#0055ff]'
              }`}>
                <Server className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase font-bold tracking-wider opacity-60">
                  TIER 01 • INGRESS
                </div>
                <div className="text-xs sm:text-sm font-extrabold tracking-tight">
                  Core Banking Connectors
                </div>
              </div>
            </div>

            <div className="w-3 h-3 rounded-full bg-[#0055ff] animate-ping" />
          </div>

          {/* Animated Connecting Data Pulse 1 -> 2 */}
          <div
            className="absolute w-0.5 h-10 bg-gradient-to-b from-[#0055ff] to-cyan-400 opacity-60 pointer-events-none"
            style={{ transform: 'translateZ(55px) translateY(-38px)' }}
          />

          {/* ── TIER 2: ISO 20022 MT ↔ MX Transformation (Middle) ── */}
          <div
            onClick={() => setActiveNode('iso-engine')}
            className={`absolute w-[300px] sm:w-[360px] h-[72px] sm:h-[80px] rounded-2xl border transition-all duration-300 flex items-center justify-between px-5 cursor-pointer shadow-lg backdrop-blur-md ${
              activeNode === 'iso-engine'
                ? 'bg-slate-900 text-white border-[#0055ff] shadow-[0_15px_35px_rgba(0,85,255,0.25)] scale-105'
                : 'bg-white/95 text-slate-800 border-slate-300/80 hover:border-[#0055ff]/60 hover:bg-slate-50'
            }`}
            style={{
              transform: 'translateZ(10px) translateY(0px)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${
                activeNode === 'iso-engine' ? 'bg-[#0055ff] text-white' : 'bg-slate-100 text-[#0055ff]'
              }`}>
                <Activity className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase font-bold tracking-wider opacity-60">
                  TIER 02 • MIDDLEWARE
                </div>
                <div className="text-xs sm:text-sm font-extrabold tracking-tight">
                  ISO 20022 MT ↔ MX Engine
                </div>
              </div>
            </div>

            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 border border-emerald-500/30">
              CBPR+
            </span>
          </div>

          {/* Animated Connecting Data Pulse 2 -> 3 */}
          <div
            className="absolute w-0.5 h-10 bg-gradient-to-b from-cyan-400 to-[#0055ff] opacity-60 pointer-events-none"
            style={{ transform: 'translateZ(-35px) translateY(45px)' }}
          />

          {/* ── TIER 3: SWIFT Secure Zone Architecture (Bottom) ── */}
          <div
            onClick={() => setActiveNode('swift-zone')}
            className={`absolute w-[320px] sm:w-[380px] h-[76px] sm:h-[84px] rounded-2xl border transition-all duration-300 flex items-center justify-between px-5 cursor-pointer shadow-xl backdrop-blur-md ${
              activeNode === 'swift-zone'
                ? 'bg-slate-900 text-white border-[#0055ff] shadow-[0_20px_45px_rgba(0,85,255,0.3)] scale-105'
                : 'bg-white/95 text-slate-800 border-slate-300/80 hover:border-[#0055ff]/60 hover:bg-slate-50'
            }`}
            style={{
              transform: 'translateZ(-75px) translateY(88px)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                activeNode === 'swift-zone' ? 'bg-[#0055ff] text-white' : 'bg-slate-100 text-[#0055ff]'
              }`}>
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase font-bold tracking-wider text-[#00d2ff]">
                  TIER 03 • CSCF v2026
                </div>
                <div className="text-xs sm:text-sm font-extrabold tracking-tight">
                  SWIFT Alliance Secure Zone
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <Lock className="w-3 h-3" />
              <span>ISOLATED</span>
            </div>
          </div>
        </div>

        {/* 3D Interaction Prompt Badge */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between pointer-events-none text-[11px] font-mono text-slate-400 font-bold">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0055ff] animate-pulse" />
            <span>INTERACTIVE 3D MESH ARCHITECTURE</span>
          </div>
          <span className="hidden sm:inline">DRAG & HOVER TO ROTATE</span>
        </div>
      </div>

      {/* Selected Node Live Telemetry Card */}
      <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4 shadow-sm transition-all duration-300">
        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-200">
          <div>
            <div className="font-mono text-[10px] uppercase font-bold text-slate-400">
              {selected.layer}
            </div>
            <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
              {selected.name}
            </h3>
          </div>

          <div className="text-right">
            <span className="font-mono text-[10px] font-bold text-[#0055ff] bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
              {selected.status}
            </span>
          </div>
        </div>

        <p className="text-xs text-slate-600 leading-relaxed font-normal">
          {selected.desc}
        </p>

        <div className="pt-2 flex items-center justify-between text-xs font-mono">
          <span className="font-bold text-slate-500">Architecture Profile:</span>
          <span className="font-bold text-slate-900">{selected.metrics}</span>
        </div>
      </div>
    </div>
  );
}
