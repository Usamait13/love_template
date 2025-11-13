import HeroSection from "@/components/HeroSection";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import QuotesSection from "@/components/QuotesSection";
import LoveLetterSection from "@/components/LoveLetterSection";
import FinalSection from "@/components/FinalSection";
import MusicPlayer from "@/components/MusicPlayer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <PhotoSlideshow />
      <QuotesSection />
      <LoveLetterSection />
      <FinalSection />
      <MusicPlayer />
    </div>
  );
}
