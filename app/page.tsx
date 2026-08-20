import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import PositionStatement from '@/components/PositionStatement';
import WorkStrip from '@/components/WorkStrip';
import StatsSection from '@/components/StatsSection';
import ServiceQuadrantGrid from '@/components/ServiceQuadrantGrid';
import StickySidebar from '@/components/StickySidebar';
import FaqAccordion from '@/components/FaqAccordion';
import CtaBanner from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <PositionStatement />
      <WorkStrip />
      <StatsSection />
      <ServiceQuadrantGrid />
      <StickySidebar />
      <FaqAccordion />
      <CtaBanner />
    </>
  );
}
