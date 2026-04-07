import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { ReadyShowcase } from "@/components/ReadyShowcase";
import { MusicShowcase } from "@/components/MusicShowcase";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <PhoneShowcase />
        <ReadyShowcase />
        <MusicShowcase />
      </main>
    </>
  );
}
