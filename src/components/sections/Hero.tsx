"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { AppleIcon } from "@/components/ui/icons/AppleIcon";
import { StaggerButton } from "@/components/ui/buttons/StaggerButton";
import { LaurelBadge } from "@/components/ui/badges/LaurelBadge";
import { site } from "@/content/site";

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
      className="relative flex min-h-screen w-full flex-col items-center justify-start overflow-hidden px-6 pt-28 pb-24 md:pt-40 md:pb-0"
    >
      <Image src={site.hero.backgroundImage} alt="" fill priority className="object-cover object-[center_65%]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl text-center">
        <h1
          data-hero="heading"
          className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {site.hero.heading}
        </h1>

        <p
          data-hero="subtitle"
          className="mx-auto mt-6 max-w-4xl text-lg leading-relaxed text-white/80"
        >
          {site.hero.subtitle}
        </p>

        <div data-hero="cta" className="mt-8">
          <StaggerButton
            text={site.cta.downloadLabel}
            href={site.cta.downloadHref}
            icon={<AppleIcon size={18} />}
          />
        </div>

        <div
          data-hero="badges"
          className="mt-10 flex items-center justify-center gap-4 text-white sm:gap-8"
        >
          {site.hero.badges.map((b) => (
            <LaurelBadge key={b.title + b.subtitle} title={b.title} subtitle={b.subtitle} />
          ))}
        </div>
      </div>
    </section>
  );
};
