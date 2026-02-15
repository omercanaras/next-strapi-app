"use client";

import { DeepDivesSection } from "@/components/sections/DeepDivesSection";
import { AboutSection } from "@/components/sections/AboutSection";

export default function TechPage() {
  return (
    <div className="bg-black text-white">
      <DeepDivesSection />
      <AboutSection />
    </div>
  );
}