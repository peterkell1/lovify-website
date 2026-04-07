import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PhoneShowcase } from "@/components/PhoneShowcase";
import { SmoothScroll } from "@/components/SmoothScroll";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <PhoneShowcase />
      </main>
    </>
  );
}
