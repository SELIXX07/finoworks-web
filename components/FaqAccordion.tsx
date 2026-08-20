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
    <section className="px-6 md:px-8 py-28 max-w-[1600px] mx-auto">
      <div className="section-head mb-10 home-reveal">
        <span className="section-num">(05)</span>
        <span>QUESTIONS, ANSWERED</span>
      </div>

      <div className="max-w-4xl home-reveal">
        {faqs.map((faq, idx) => (
          <details key={idx} className="faq-item group">
            <summary className="faq-summary">
              <span>{faq.q}</span>
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
