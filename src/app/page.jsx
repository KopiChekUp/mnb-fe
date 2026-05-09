import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { StatsRow } from "@/components/landing/StatsRow";
import { SplitFeature } from "@/components/landing/SplitFeature";
import { CollectionMosaic } from "@/components/landing/CollectionMosaic";
import { LandingFooter } from "@/components/landing/LandingFooter";
import ModernMinimalistCard from "@/components/landing/ModernMinimalistCard";

export const metadata = {
  title: "Match n Build — Wujudkan Ruang Impian Anda",
  description: "Platform terbaik yang menghubungkan Anda dengan desainer interior dan arsitek terpercaya.",
};

export default function Home() {
  return (
    <div style={{ backgroundColor: "#F5F0E8", minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <main>
        <Hero />
        <FeatureGrid />
        <StatsRow />
        <ModernMinimalistCard />
        <SplitFeature />
        <CollectionMosaic />
      </main>
      <LandingFooter />
    </div>
  );
}
