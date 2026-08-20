'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Lenis from 'lenis';

export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Initialize Lenis Inertia Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.8,
    });

    let animId: number;
    function raf(time: number) {
      lenis.raf(time);
      animId = requestAnimationFrame(raf);
    }
    animId = requestAnimationFrame(raf);

    // 2. Comprehensive IntersectionObserver for Smooth Staggered Reveals
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('did-enter');
          }
        });
      },
      {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.05,
      }
    );

    const observeElements = () => {
      const revealElements = document.querySelectorAll('.home-reveal:not(.did-enter)');
      revealElements.forEach((el, index) => {
        (el as HTMLElement).style.setProperty('--reveal-i', `${index % 6}`);
        observer.observe(el);
      });
    };

    observeElements();

    // Re-check on dynamic mutations / route changes
    const mutationObs = new MutationObserver(observeElements);
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(animId);
      lenis.destroy();
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, [pathname]);

  return <>{children}</>;
}
