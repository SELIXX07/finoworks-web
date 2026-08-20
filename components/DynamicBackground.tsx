'use client';

export default function DynamicBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* ── Deep Cobalt Ambient Canvas Gradients ── */}
      <div className="absolute inset-0 bg-[#030d22]" />

      {/* ── Subtle Blue Architectural Grid Seams ── */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #3b82f6 1px, transparent 1px),
            linear-gradient(to bottom, #3b82f6 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Intense Royal/Sapphire Blue Glow (Top Hero) ── */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[90vw] max-w-[1300px] h-[650px] rounded-full bg-gradient-to-b from-[#0055ff]/40 via-[#0040c1]/20 to-transparent blur-[140px]" />

      {/* ── Radiant Electric Cyan/Cobalt Glow (Mid Page) ── */}
      <div className="absolute top-[35%] -right-[15%] w-[60vw] max-w-[800px] h-[600px] rounded-full bg-gradient-to-l from-[#0055ff]/30 via-[#00d2ff]/15 to-transparent blur-[160px]" />

      {/* ── Deep Sapphire Radial Glow (Bottom Page) ── */}
      <div className="absolute bottom-[2%] -left-[10%] w-[65vw] max-w-[900px] h-[650px] rounded-full bg-gradient-to-r from-[#0040c1]/35 via-[#0055ff]/20 to-transparent blur-[170px]" />

      {/* ── Fine Film Grain ── */}
      <div className="grain" />
    </div>
  );
}
