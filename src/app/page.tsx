import { Navbar } from "@/components/layout/header/Navbar";
import { Hero } from "@/components/sections/Hero";
import { PhoneShowcase } from "@/components/sections/PhoneShowcase";
import { ReadyShowcase } from "@/components/sections/ReadyShowcase";
import { MusicShowcase } from "@/components/sections/MusicShowcase";
import { DesignedFor } from "@/components/sections/DesignedFor";
import { TrustedSection } from "@/components/sections/TrustedSection";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

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
      </main>
    </>
  );
};

export default Home;
