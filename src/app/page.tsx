import { Navbar } from "@/components/layout/header/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PhoneShowcase } from "@/components/sections/PhoneShowcase";
import { ReadyShowcase } from "@/components/sections/ReadyShowcase";
import { ReadyBanner } from "@/components/sections/ReadyBanner";
import { MusicShowcase } from "@/components/sections/MusicShowcase";
import { DesignedFor } from "@/components/sections/DesignedFor";
import { TrustedSection } from "@/components/sections/TrustedSection";
import { ReviewsMarquee } from "@/components/sections/ReviewsMarquee";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { Footer } from "@/components/layout/footer/Footer";

const Home = () => {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <PhoneShowcase />
        <ReadyShowcase />
        <MusicShowcase />
        <DesignedFor />
        <TrustedSection />
        <ReviewsMarquee />
        <ReadyBanner />
      </main>
      <Footer />
    </>
  );
};

export default Home;
