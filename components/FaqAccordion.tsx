'use client';

export default function FaqAccordion() {
  const faqs = [
    {
      q: 'Why choose FinoWorks over standard IT audit firms?',
      a: 'Standard audit firms only deliver a spreadsheet of non-compliance issues and walk away. FinoWorks provides end-to-end service: our CISA-certified auditors assess your CSCF v2026 controls, and our specialized SWIFT engineers directly implement the technical remediation (MFA, firewall ACLs, PKI upgrades) to guarantee passing.',
    },
    {
      q: 'What is the mandatory cutover deadline for ISO 20022 MT to MX?',
      a: 'The cross-border coexistence period ends in November 2025/2026 depending on regional central bank mandates. Our MT ↔ MX converter enables banks to process structured XML (pacs.008 / CBPR+) immediately without requiring a full core banking system replacement.',
    },
    {
      q: 'How does the SWIFT CSP v2026 Independent Assessment work?',
      a: 'We perform an initial mock audit against all 32 mandatory and advisory controls, conduct simulated penetration testing in your secure zone, execute necessary configuration hardening, and file your official attestation on the SWIFT KYC Security Analytics Registry.',
    },
    {
      q: 'Which core banking systems are supported by your Payment Hub middleware?',
      a: 'Our middleware offers native, pre-built adapters for Oracle Flexcube, Temenos T24, Finacle, SAP Banking, and custom REST/SOAP core payment engines with automated straight-through processing (STP).',
    },
    {
      q: 'Where are your regional engineering and audit teams located?',
      a: 'Our corporate headquarters is in Nairobi, Kenya (Mayfair Suites, Westlands), our global development center is at Clayworks, Bangalore, India, and our 24/7 client support hub operates out of Franklin, Tennessee, USA with active Middle East deployment teams.',
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-16 py-32 md:py-44 max-w-[1720px] mx-auto">
      {/* Center Aligned Editorial Header */}
      <div className="text-center space-y-5 max-w-3xl mx-auto mb-20 home-reveal">
        <div className="section-head justify-center">
          <span className="section-num">(04)</span>
          <span>QUESTIONS, ANSWERED</span>
        </div>
        <h2 className="text-[clamp(34px,4.5vw,60px)] font-extrabold text-[#0a0e1a] tracking-tight leading-[1.08]">
          Frequently Asked{' '}
          <span className="font-serif italic font-normal text-[#0055ff] hover-highlight">Questions.</span>
        </h2>
        <p className="text-base text-slate-600 font-normal leading-relaxed">
          Clear, definitive answers regarding SWIFT CSP compliance, ISO 20022 cutover, and our independent assessment practice.
        </p>
      </div>

      {/* Center Aligned Accordion Container */}
      <div className="max-w-4xl mx-auto home-reveal">
        {faqs.map((faq, idx) => (
          <details key={idx} className="faq-item group">
            <summary className="faq-summary">
              <span className="pr-6 leading-snug">{faq.q}</span>
              <span className="faq-icon font-mono">
                +
              </span>
            </summary>
            <div className="faq-body">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
