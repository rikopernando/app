export const revalidate = 60;

import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Stats } from "@/components/sections/Stats";
import { VisiMisi } from "@/components/sections/VisiMisi";
import { Programs } from "@/components/sections/Programs";
import { PPDB } from "@/components/sections/PPDB";
import { NewsPreview } from "@/components/sections/NewsPreview";
import { AchievementsPreview } from "@/components/sections/AchievementsPreview";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main data-testid="landing-page" className="min-h-screen bg-cream-50">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <VisiMisi />
      <Programs />
      <PPDB />
      <NewsPreview />
      <AchievementsPreview />
      <Footer />
    </main>
  );
}
