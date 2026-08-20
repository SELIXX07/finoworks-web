import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    { title: 'Senior SWIFT Integration Engineer', loc: 'Nairobi / Hybrid', type: 'Full-Time', exp: '5+ Yrs SAA/SAG' },
    { title: 'Lead CISA Cyber Security Auditor', loc: 'Nairobi / Remote', type: 'Full-Time', exp: 'CISA / ISO 27001' },
    { title: 'ISO 20022 XML Solutions Architect', loc: 'Bangalore Clayworks', type: 'Full-Time', exp: 'CBPR+ pacs.008' },
    { title: 'Core Banking Middleware Engineer', loc: 'Bangalore Clayworks', type: 'Full-Time', exp: 'Oracle / Temenos' },
    { title: 'Senior Penetration Tester (Financial Systems)', loc: 'Remote / Nairobi', type: 'Full-Time', exp: 'OSCP / CEH' },
    { title: 'SWIFT Technical Support Specialist (24/7)', loc: 'Franklin, TN / USA', type: 'Full-Time', exp: '3+ Yrs FinTech' },
    { title: 'Client Engagement Director (GCC)', loc: 'Dubai / Remote', type: 'Full-Time', exp: 'Middle East Banking' },
    { title: 'DevSecOps & SIEM Log Engineer', loc: 'Bangalore Clayworks', type: 'Full-Time', exp: 'Splunk / ELK' },
    { title: 'Quality Assurance Lead (Payment Rails)', loc: 'Nairobi / Remote', type: 'Full-Time', exp: 'MyStandards Portal' },
    { title: 'Junior Security Analyst (CSP Programme)', loc: 'Nairobi / Westlands', type: 'Full-Time', exp: '1-2 Yrs IT Audit' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1600px] mx-auto px-6 md:px-8 space-y-16">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-black text-xs font-mono font-bold">
            <span className="w-2 h-2 rounded-full bg-[#0055ff]" />
            <span>JOIN OUR PRACTICE</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            10 Open Roles in Financial Infrastructure.
          </h1>

          <p className="text-base text-slate-600 leading-relaxed">
            Work at the core intersection of cross-border financial messaging, tier-1 banking integrations, and cybersecurity auditing.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono text-slate-500">
                  <span className="font-bold text-[#0055ff]">{job.loc}</span>
                  <span className="px-2.5 py-1 rounded bg-black text-white text-[10px] font-bold">{job.type}</span>
                </div>
                <h3 className="font-serif italic text-2xl text-black font-normal">{job.title}</h3>
                <p className="text-xs text-slate-600 font-mono">Requirements: {job.exp}</p>
              </div>

              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-[#0055ff] pt-4 border-t border-slate-200 transition-colors"
              >
                <span>Apply for Position</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
