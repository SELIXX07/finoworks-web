import Hero from '@/components/Hero';
import Marquee from '@/components/Marquee';
import PositionStatement from '@/components/PositionStatement';
import ProductsMosaic from '@/components/ProductsMosaic';
import GlobalMap from '@/components/GlobalMap';
import StatsSection from '@/components/StatsSection';
import Partnerships from '@/components/Partnerships';
import ProcessSpine from '@/components/ProcessSpine';
import Testimonials from '@/components/Testimonials';
import CtaBanner from '@/components/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <PositionStatement />
      <ProductsMosaic />
      <GlobalMap />
      <StatsSection />
      <Partnerships />
      <ProcessSpine />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
