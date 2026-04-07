import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { ReadyShowcase } from "@/components/ReadyShowcase";
import { MusicShowcase } from "@/components/MusicShowcase";
import { DesignedFor } from "@/components/DesignedFor";
import { SmoothScroll } from "@/components/SmoothScroll";

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
      </main>
    </>
  );
};

export default Home;
