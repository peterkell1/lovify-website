"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { AppleIcon } from "@/components/ui/AppleIcon";
import { StaggerButton } from "@/components/ui/StaggerButton";
import { LaurelBadge } from "@/components/ui/LaurelBadge";

export const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero='heading']", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power2.out",
      });
      gsap.from("[data-hero='subtitle']", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.3,
      });
      gsap.from("[data-hero='cta']", {
        opacity: 0,
        y: 20,
        duration: 0.6,
        delay: 0.5,
      });
      gsap.from("[data-hero='badges']", {
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-6 py-24 md:justify-end md:pb-18 md:pt-0"
    >
      <Image src="/assets/bg.avif" alt="" fill priority className="object-cover" />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <h1
          data-hero="heading"
          className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Transform Your Life Through Music
        </h1>

        <p
          data-hero="subtitle"
          className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/80"
        >
          The first app that uses personalized music and visualization to
          reprogram your subconscious mind and create the life you want.
        </p>

        <div data-hero="cta" className="mt-8">
          <StaggerButton
            text="Download App"
            href="#start"
            icon={<AppleIcon size={18} />}
          />
        </div>

        <div
          data-hero="badges"
          className="mt-10 flex items-center justify-center gap-4 text-white sm:gap-8"
        >
          <LaurelBadge title="Apple Watch" subtitle="Spotlight" />
          <LaurelBadge title="New and" subtitle="Noteworthy" />
        </div>
      </div>
    </section>
  );
};
