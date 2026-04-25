import Hero from "@/components/sections/Hero";
import Navbar from "@/components/sections/Navbar";
import Ads from "@/components/shared/Ads";
import TitleSection from "@/components/shared/TitleSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Ads />
      <Hero />

      <TitleSection title="BEST OF SI" linkText="MORE MMQB" link="#" />


    </div>
  );
}
