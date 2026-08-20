'use client';

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* ── Subtle Architectural Grid Seams ── */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #000 1px, transparent 1px),
            linear-gradient(to bottom, #000 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Soft Warm Ambient Radial Glow (Top Hero) ── */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[85vw] max-w-[1200px] h-[550px] rounded-full bg-gradient-to-b from-[#0055ff]/[0.06] via-[#00d2ff]/[0.03] to-transparent blur-[120px]" />

      {/* ── Warm Ochre Ambient Glow (Mid Page) ── */}
      <div className="absolute top-[45%] -right-[10%] w-[50vw] max-w-[700px] h-[500px] rounded-full bg-gradient-to-l from-[#d97706]/[0.035] to-transparent blur-[140px]" />

      {/* ── Ice Blue Ambient Glow (Bottom Page) ── */}
      <div className="absolute bottom-[5%] -left-[10%] w-[55vw] max-w-[800px] h-[550px] rounded-full bg-gradient-to-r from-[#0055ff]/[0.04] to-transparent blur-[150px]" />

      {/* ── Fine Film Grain ── */}
      <div className="grain" />
    </div>
  );
}
