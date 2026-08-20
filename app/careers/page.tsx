import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';

export default function CareersPage() {
  const jobs = [
    { title: 'Cyber Security Analyst', location: 'Remote', type: 'Full-time' },
    { title: 'Penetration Tester', location: 'Hybrid', type: 'Contract' },
    { title: 'Incident Response Specialist', location: 'On-site (Nairobi)', type: 'Full-time' },
    { title: 'Security Operations Center (SOC) Manager', location: 'Hybrid', type: 'Full-time' },
    { title: 'Cyber Security Consultant', location: 'Remote', type: 'Contract' },
    { title: 'Cloud Security Engineer', location: 'Remote (Bangalore)', type: 'Full-time' },
    { title: 'Network Security Engineer', location: 'On-site', type: 'Full-time' },
    { title: 'Compliance & Risk Specialist', location: 'Hybrid', type: 'Full-time' },
    { title: 'Forensic Investigator', location: 'Contract', type: 'On-site' },
    { title: 'SWIFT Infrastructure Engineer', location: 'Bangalore / Nairobi', type: 'Full-time' },
  ];

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
        <div className="space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-electric-50 text-electric-600 text-xs font-mono font-bold">
            WE ARE HIRING GLOBAL TALENT
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-navy-900 tracking-tight">
            Build Your Career in FinTech & Security.
          </h1>
          <p className="text-base text-slate-600">
            Passionate about SWIFT payment infrastructure and banking security? Explore our 10 open positions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {jobs.map((job, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between hover:border-electric-500/50 transition-all"
            >
              <div className="space-y-1">
                <h3 className="font-bold text-lg text-navy-900">{job.title}</h3>
                <div className="flex gap-3 text-xs text-slate-500 font-mono">
                  <span>📍 {job.location}</span>
                  <span>•</span>
                  <span>💼 {job.type}</span>
                </div>
              </div>

              <Link
                href="/contact-us"
                className="bg-navy-900 hover:bg-electric-500 text-white font-bold px-4 py-2 rounded-lg text-xs transition-all flex items-center gap-1"
              >
                <span>Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
