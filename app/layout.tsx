import type { Metadata } from 'next';
import './globals.css';
import LenisProvider from '@/components/LenisProvider';
import Cursor from '@/components/Cursor';
import Preloader from '@/components/Preloader';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'FinoWorks Technologies • SWIFT Integration & Independent CSP Assessor',
  description:
    'SWIFT Certified Provider & Independent CSP Assessor. SWIFT Integration, ISO 20022 Migration, Cyber Security Assessments & Payment Hub Middleware.',
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
      <body className="antialiased selection:bg-electric-500 selection:text-white">
        <Preloader />
        <Cursor />
        <LenisProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
      </body>
    </html>
  );
}
