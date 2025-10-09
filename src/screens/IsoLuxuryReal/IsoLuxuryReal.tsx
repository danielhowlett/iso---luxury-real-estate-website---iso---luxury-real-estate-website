import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FooterSection } from "./sections/FooterSection";
import { HeroSection } from "./sections/HeroSection";
import { LodgingSection } from "./sections/LodgingSection";
import { StatisticsSection } from "./sections/StatisticsSection";
import { SubscriptionSection } from "./sections/SubscriptionSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { VideoSection } from "./sections/VideoSection";

export const IsoLuxuryReal = (): JSX.Element => {
  return (
    <main
      className="bg-[#090909] overflow-hidden w-full min-w-[1920px] min-h-[6865px] relative"
      data-model-id="1:2"
    >
      <HeroSection />
      <LodgingSection />
      <AboutUsSection />
      <TestimonialsSection />
      <StatisticsSection />
      <VideoSection />
      <SubscriptionSection />
      <FooterSection />
    </main>
  );
};
