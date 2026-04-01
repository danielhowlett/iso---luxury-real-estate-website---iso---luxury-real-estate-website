import { AboutUsSection } from "./sections/AboutUsSection";
import { FooterSection } from "./sections/FooterSection";
import { GalleryPreviewSection } from "./sections/GalleryPreviewSection/GalleryPreviewSection";
import { HeroSection } from "./sections/HeroSection";
import { LodgingSection } from "./sections/LodgingSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { SubscriptionSection } from "./sections/SubscriptionSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";

export const IsoLuxuryReal = (): JSX.Element => {
  return (
    <main
      className="bg-[#090909] overflow-x-hidden w-full min-h-screen relative"
      data-model-id="1:2"
    >
      <HeroSection />
      <LodgingSection />
      <AboutUsSection />
      <TestimonialsSection />
      <StatisticsSection />
      <GalleryPreviewSection />
      <SubscriptionSection />
      <FooterSection />
    </main>
  );
};
