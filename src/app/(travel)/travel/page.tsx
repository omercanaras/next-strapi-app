"use client";

import { TravelSection } from "@/components/sections/travel/TravelSection";
import { TravelAboutSection } from "@/components/sections/travel/TravelAboutSection";

export default function TravelPage() {
  return (
    <div className="bg-white text-black">
      <TravelSection />
      <TravelAboutSection />
    </div>
  );
}