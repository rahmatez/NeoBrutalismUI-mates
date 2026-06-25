import { CtaSection } from "@/components/home/cta-section";
import { FeaturesSection } from "@/components/home/features-section";
import { HeroSection } from "@/components/home/hero-section";
import { InstallSection } from "@/components/home/install-section";
import { MarqueeSection } from "@/components/home/marquee-section";
import { PopularComponents } from "@/components/home/popular-components";
import { ShowcaseSection } from "@/components/home/showcase-section";
import { StatsSection } from "@/components/home/stats-section";
import { componentDocs } from "@/lib/components";

export default function HomePage() {
  return (
    <div>
      <HeroSection componentCount={componentDocs.length} />
      <MarqueeSection />
      <StatsSection />
      <FeaturesSection />
      <ShowcaseSection />
      <PopularComponents />
      <InstallSection />
      <CtaSection />
    </div>
  );
}
