import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import Preloader from '@/components/Preloader';
import StarfieldGrain from '@/components/StarfieldGrain';
import ScrollProgress from '@/components/ScrollProgress';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FinoWorks Technologies • SWIFT Integration & Independent CSP Assessor',
  description:
    'SWIFT Certified Provider & Independent CSP Assessor. SWIFT Alliance Integration, ISO 20022 Migration, Cyber Security Assessments & Enterprise Payment Hub Middleware.',
  keywords: [
    'SWIFT CSP v2026',
    'ISO 20022 Migration',
    'SWIFT Integration',
    'Core Banking System Integration',
    'CISA Certified Auditors',
    'SWIFT Alliance Access',
    'Nairobi Kenya Banking Tech',
    'Bangalore Dev Center',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#0055ff] selection:text-white bg-white text-slate-900">
        <Preloader />
        <ScrollProgress />
        <StarfieldGrain />
        <LenisProvider>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
