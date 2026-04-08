"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CDN = "https://cdn.prod.website-files.com/64dcc8c57b43bbf105fd381f";

const sections = [
  {
    id: 1,
    title: "Smarter Recovery",
    description:
      "Know when to push, when to pause, and when you're ready to perform, backed by real-time metrics and biomarkers.",
    screen: `${CDN}/68bc1a457e73b0da2a032a1f_Recovery.avif`,
    screenAlt:
      "Recovery overview showing 73% recovery, resting heart rate of 49.1 bpm, and HRV of 65.1 ms.",
    items: [
      { src: `${CDN}/68bc1a457e73b0da2a032a3d_phone%20item%2001%2001.svg`, alt: "Green sprout icon", className: "top-[10%] left-[19%] -rotate-[10deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a3f_phone%20item%2001%2005.svg`, alt: "HRV monitor showing 50.4ms", className: "top-[30%] left-[8%] -rotate-[4deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a3e_phone%20item%2001%2003.svg`, alt: "Lungs icon", className: "bottom-[7%] left-[18%] rotate-[4deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a41_phone%20item%2001%2002.svg`, alt: "Heartbeat icon", className: "top-0 right-[20%] rotate-[6deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a40_phone%20item%2001%2006.svg`, alt: "Resting heart rate 52.5 bpm", className: "top-[23%] right-[10%] rotate-[10deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a43_phone%20item%2001%2004.svg`, alt: "Heart logo", className: "bottom-[8%] right-[24%] rotate-[7deg]" },
    ],
    mobileItems: [
      { src: `${CDN}/68bd3509212540550b3cce50_Phone%20Mobile%20Item%2001%2002.avif`, alt: "Lungs icon" },
      { src: `${CDN}/68bd350a3dcc23923f34a7ef_Phone%20Mobile%20Item%2001%2004.avif`, alt: "Heart rate 52.5 bpm" },
      { src: `${CDN}/68bd350bd2a2cfbea3c14325_Phone%20Mobile%20Item%2001%2003.avif`, alt: "HRV 50.4ms" },
      { src: `${CDN}/68bd3509f0c25110620cf894_Phone%20Mobile%20Item%2001%2001.avif`, alt: "Pulse icon" },
    ],
  },
  {
    id: 2,
    title: "Fuel That Moves You Forward",
    description:
      "Track what you eat and get actionable feedback that helps you build a better relationship with food.",
    screen: `${CDN}/68bc1a457e73b0da2a032a27_Nutrition.avif`,
    screenAlt:
      "Nutrition app showing a score of 93, with food quality, glucose impact, and macro goals.",
    items: [
      { src: `${CDN}/68bc1a457e73b0da2a032a4a_phone%2002%2006.avif`, alt: "Chicken and veggie soup listing", className: "top-[-5%] left-[16%] -rotate-[6deg] max-w-[14.5rem]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a46_phone%2002%2003.svg`, alt: "Macro balance display", className: "top-[35%] left-[6%] rotate-[4deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a47_phone%2002%2002.svg`, alt: "Plus minus icon", className: "bottom-[4%] left-[19%] -rotate-[11deg]" },
      { src: `${CDN}/6926cc45859729c1a69a7007_ad6039db3f109f2fe0b464d175ddade4_phone%2002%2001.avif`, alt: "Pie chart icon", className: "top-[-4%] right-[27%] rotate-[6deg] w-[6.0625rem]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a45_phone%2002%2004.svg`, alt: "Caloric intake 2325 kcal", className: "top-[15%] right-[12%] rotate-[10deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a50_phone%2002%2005.avif`, alt: "Breakfast waffle with berries", className: "bottom-[-2%] right-[15%] -rotate-[3deg] max-w-[15.5rem]" },
    ],
    mobileItems: [
      { src: `${CDN}/68bd3d6b98c7147394e57661_Phone%20Mobile%20Items%2002%2001.avif`, alt: "Pie chart icon" },
      { src: `${CDN}/68bd3d6b0cc400a6b093b505_Phone%20Mobile%20Items%2002%2004.avif`, alt: "Nutritional goals display" },
      { src: `${CDN}/68bd3d6b4e207f61a28e2d4c_Phone%20Mobile%20Items%2002%2003.avif`, alt: "Macro balance" },
      { src: `${CDN}/68bd3d6b558e9c33b7c7559b_Phone%20Mobile%20Items%2002%2002.avif`, alt: "Food tracking" },
    ],
  },
  {
    id: 3,
    title: "Dial In Your Sleep",
    description:
      "Improve your sleep by understanding patterns, identifying disruptions, and building habits that support deeper rest.",
    screen: `${CDN}/68bc1a457e73b0da2a032a37_Sleep.avif`,
    screenAlt:
      "Sleep summary showing 75% sleep quality, 8h 2m in bed, and 7h 52m asleep.",
    items: [
      { src: `${CDN}/68bc1a457e73b0da2a032a55_phone%2003%2002.svg`, alt: "", className: "top-[-5%] left-[25%] -rotate-[6deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a56_phone%2003%2003.svg`, alt: "", className: "top-[9%] left-[10%] -rotate-[10deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a54_phone%2003%2006.svg`, alt: "", className: "bottom-[-3%] left-[12%] rotate-[6deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a68_phone%2003%2005.svg`, alt: "", className: "top-[-7%] right-[9%] rotate-[6deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a69_phone%2003%2004.svg`, alt: "", className: "top-[42%] right-[6%] -rotate-[4deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a6a_phone%2003%2001.svg`, alt: "", className: "bottom-0 right-[18%] rotate-[10deg]" },
    ],
    mobileItems: [
      { src: `${CDN}/68bd3ecf0e5485bb6d999d32_Phone%20Mobile%20Items%2003%2001.avif`, alt: "" },
      { src: `${CDN}/68bd3ecf0df74d5bdf163212_Phone%20Mobile%20Items%2003%2003.avif`, alt: "" },
      { src: `${CDN}/68bd3ecfe4df332308c13e8d_Phone%20Mobile%20Items%2003%2004.avif`, alt: "" },
      { src: `${CDN}/68bd3ecfb82e6ba6402fc9b3_Phone%20Mobile%20Items%2003%2002.avif`, alt: "" },
    ],
  },
  {
    id: 4,
    title: "Push With Purpose",
    description:
      "Understand how much strain you're under, how it affects your body, and how to adjust for progress without burnout.",
    screen: `${CDN}/68bc1a457e73b0da2a032a2f_6d8f8652f5c0d9b9313582f746abc1ad_Strain.avif`,
    screenAlt:
      "Fitness stats showing 65% strain, 55 min duration, and 654 kCal energy.",
    items: [
      { src: `${CDN}/68bc1a457e73b0da2a032a6d_phone%2004%2006.avif`, alt: "", className: "top-[-5%] left-[10%] -rotate-[6deg] max-w-[16rem]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a72_phone%2004%2005.svg`, alt: "", className: "top-[40%] left-[3%] rotate-[4deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a73_phone%2004%2002.svg`, alt: "", className: "bottom-0 left-[12%] -rotate-[10deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a75_phone%2004%2001.svg`, alt: "", className: "top-[-6%] right-[20%] rotate-[6deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a74_phone%2004%2003.svg`, alt: "", className: "top-[14%] right-[6%] rotate-[10deg]" },
      { src: `${CDN}/68bc1a457e73b0da2a032a71_phone%2004%2004.svg`, alt: "", className: "bottom-0 right-[12%] -rotate-[3deg]" },
    ],
    mobileItems: [
      { src: `${CDN}/68bd3f7c05de00e06b4026ab_Phone%20Mobile%20Items%2004%2002.avif`, alt: "" },
      { src: `${CDN}/68bd3f7cb70c6bf9ec3112c9_Phone%20Mobile%20Items%2004%2003.avif`, alt: "" },
      { src: `${CDN}/68bd3f7cfacc89f34cffa609_Phone%20Mobile%20Items%2004%2004.avif`, alt: "" },
      { src: `${CDN}/68bd3f7c1bcd863f212b2927_Phone%20Mobile%20Items%2004%2001.avif`, alt: "" },
    ],
  },
];

/** Parse rotation value from a Tailwind class like "-rotate-[10deg]" or "rotate-[6deg]" */
function parseRotation(className: string): number {
  const match = className.match(/-?rotate-\[(-?\d+)deg\]/);
  if (!match) return 0;
  const val = Number(match[1]);
  return className.includes("-rotate-") ? -val : val;
}

/** Read computed CSS position values from a rendered element */
function capturePosition(el: HTMLElement) {
  const cs = getComputedStyle(el);
  return {
    top: cs.top,
    left: cs.left,
    right: cs.right,
    bottom: cs.bottom,
  };
}

export const PhoneShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const headers = el.querySelectorAll<HTMLDivElement>("[data-phone-header]");
    const screenTrack = el.querySelector<HTMLDivElement>("[data-screen-track]");
    const triggers = el.querySelectorAll<HTMLDivElement>("[data-phone-trigger]");

    if (!screenTrack || !triggers.length) return;

    const triggerMap = new Map<number, HTMLDivElement>();
    triggers.forEach((t) => triggerMap.set(Number(t.dataset.phoneTrigger), t));

    const mm = gsap.matchMedia();

    // ── Desktop animations (768px+) ──
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        let currentStep = 0;

        // Screen slide + header toggle (trigger-based, not scrub)
        for (let i = 2; i <= 4; i++) {
          const trigger = triggerMap.get(i);
          if (!trigger) continue;

          const prevHeader = el.querySelector<HTMLDivElement>(
            `[data-phone-header="${i - 1}"]`
          );
          const nextHeader = el.querySelector<HTMLDivElement>(
            `[data-phone-header="${i}"]`
          );

          ScrollTrigger.create({
            trigger,
            start: "top top",
            onEnter: () => {
              currentStep = i - 1;
              gsap.to(screenTrack, {
                yPercent: -25 * currentStep,
                duration: 0.75,
                ease: "power2.out",
              });
              headers.forEach((h) => h.classList.remove("active"));
              nextHeader?.classList.add("active");
            },
            onEnterBack: () => {
              currentStep = i - 2;
              gsap.to(screenTrack, {
                yPercent: -25 * currentStep,
                duration: 0.5,
                ease: "power2.out",
              });
              headers.forEach((h) => h.classList.remove("active"));
              prevHeader?.classList.add("active");
            },
          });
        }

        // Floating UI items — scrub-linked fan-out from center, hold, then fade-out
        for (let i = 1; i <= 4; i++) {
          const startTrigger = triggerMap.get(i);
          const endTrigger = triggerMap.get(i + 1);
          if (!startTrigger || !endTrigger) continue;

          const items = el.querySelectorAll<HTMLElement>(
            `[data-phone-items-wrap="${i}"] [data-phone-item]`
          );
          if (!items.length) continue;

          // Capture each item's final CSS position and rotation before animating
          const states = Array.from(items).map((item) => {
            const rotation = parseRotation(item.className);
            const pos = capturePosition(item);
            return { el: item, rotation, ...pos };
          });

          // Set initial state: centered, invisible
          states.forEach((s) => {
            gsap.set(s.el, {
              position: "absolute",
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              xPercent: -50,
              yPercent: -50,
              x: 0,
              y: 0,
              rotation: 0,
              opacity: 0,
            });
          });

          // Build scrub timeline: fan-out → hold → fade-out
          const tl = gsap.timeline({
            defaults: { duration: 1.1, ease: "power3.out" },
          });

          // Fan out to final positions
          states.forEach((s, idx) => {
            tl.to(
              s.el,
              {
                xPercent: 0,
                yPercent: 0,
                x: 0,
                y: 0,
                rotation: s.rotation,
                opacity: 1,
                top: s.top,
                left: s.left,
                right: s.right,
                bottom: s.bottom,
              },
              idx === 0 ? 0 : "<+=0.06"
            );
          });

          // Hold visible
          tl.to({}, { duration: 0.6 });

          // Fade out
          tl.to(
            Array.from(items),
            { opacity: 0, duration: 0.6, stagger: 0.06 },
            "+=0"
          );

          // Link timeline to scroll
          ScrollTrigger.create({
            animation: tl,
            trigger: startTrigger,
            start: "top top",
            endTrigger: endTrigger,
            end: "top top",
            scrub: 1,
          });
        }
      }, el);

      return () => ctx.revert();
    });

    // ── Mobile animations (below 768px) ──
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        let currentStep = 0;

        // Screen slide + header toggle
        for (let i = 2; i <= 4; i++) {
          const trigger = triggerMap.get(i);
          if (!trigger) continue;

          const prevHeader = el.querySelector<HTMLDivElement>(
            `[data-phone-header="${i - 1}"]`
          );
          const nextHeader = el.querySelector<HTMLDivElement>(
            `[data-phone-header="${i}"]`
          );

          ScrollTrigger.create({
            trigger,
            start: "top top",
            onEnter: () => {
              currentStep = i - 1;
              gsap.to(screenTrack, {
                yPercent: -25 * currentStep,
                duration: 0.75,
                ease: "power2.out",
              });
              headers.forEach((h) => h.classList.remove("active"));
              nextHeader?.classList.add("active");
            },
            onEnterBack: () => {
              currentStep = i - 2;
              gsap.to(screenTrack, {
                yPercent: -25 * currentStep,
                duration: 0.5,
                ease: "power2.out",
              });
              headers.forEach((h) => h.classList.remove("active"));
              prevHeader?.classList.add("active");
            },
          });
        }

        // Mobile floating items — simple fade in/out scrub
        for (let i = 1; i <= 4; i++) {
          const startTrigger = triggerMap.get(i);
          const endTrigger = triggerMap.get(i + 1);
          if (!startTrigger || !endTrigger) continue;

          const items = el.querySelectorAll<HTMLElement>(
            `[data-phone-mobile-item-wrap="${i}"] [data-phone-mobile-item]`
          );
          if (!items.length) continue;

          gsap.set(Array.from(items), { opacity: 0 });

          const tl = gsap.timeline({
            defaults: { duration: 0.6, ease: "power3.out" },
          });

          // Fade in
          tl.to(Array.from(items), { opacity: 1, stagger: 0.06 });
          // Hold
          tl.to({}, { duration: 0.6 });
          // Fade out
          tl.to(Array.from(items), { opacity: 0, stagger: 0.06 });

          ScrollTrigger.create({
            animation: tl,
            trigger: startTrigger,
            start: "top top",
            endTrigger: endTrigger,
            end: "top top",
            scrub: 1,
          });
        }
      }, el);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full">
      <div className="px-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          {/* Tall scroll track */}
          <div className="relative" style={{ height: "830vh" }}>
            {/* Sticky phone frame */}
            <div className="sticky top-0 h-screen">
              <div className="flex h-full flex-col gap-12 pt-22">
                {/* ── Header text (stacked grid) ── */}
                <div
                  className="mx-auto grid max-w-2xl"
                  style={{ gridTemplate: "'stack' / 1fr" }}
                >
                  {sections.map((s) => (
                    <div
                      key={s.id}
                      data-phone-header={s.id}
                      className={`phone-header flex flex-col gap-5 text-center${s.id === 1 ? " active" : ""}`}
                      style={{ gridArea: "stack" }}
                    >
                      <h2 className="font-heading text-3xl font-semibold leading-[1.1] tracking-tight text-black md:text-5xl">
                        {s.title}
                      </h2>
                      <p className="mx-auto max-w-[52ch] text-lg font-medium text-text-sub md:text-xl">
                        {s.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* ── Phone visual area ── */}
                <div className="relative flex flex-1 items-center justify-center">
                  {/* Phone mockup wrapper */}
                  <div
                    className="absolute left-1/2 top-0 z-20 -translate-x-1/2"
                    style={{
                      aspectRatio: "1427 / 1642",
                      height: "110%",
                    }}
                  >
                    {/* Hand + phone frame overlay */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${CDN}/68c0826fd3988ffc8592fcc1_93173bd40d2fe4c447493e87edc46b17_Group%2020685.avif`}
                      alt="Hand holding phone"
                      className="pointer-events-none relative z-10 block h-full w-full"
                    />

                    {/* Screen window */}
                    <div
                      className="absolute z-5 overflow-hidden rounded-[5%] bg-white"
                      style={{
                        width: "39%",
                        height: "75.8%",
                        top: "1.40073%",
                        left: "30.4%",
                      }}
                    >
                      <div
                        data-screen-track
                        className="h-[400%]"
                        style={{ transform: "translate(0px, 0px)" }}
                      >
                        {sections.map((s) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={s.id}
                            src={s.screen}
                            alt={s.screenAlt}
                            className="h-1/4 w-full object-cover"
                          />
                        ))}
                      </div>

                      {/* Bottom blur */}
                      <div
                        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 translate-y-1/2 bg-white"
                        style={{
                          width: "150%",
                          height: "5rem",
                          filter: "blur(1rem)",
                        }}
                      />

                      {/* Dynamic island */}
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`${CDN}/68bf20bfe5ada2afa3926ff3_dynamic%20island.avif`}
                        alt=""
                        className="absolute z-100"
                        style={{
                          width: "11.375%",
                          top: "2.35%",
                          left: "44.25%",
                        }}
                      />
                    </div>
                  </div>

                  {/* ── Floating UI items (desktop) ── */}
                  <div className="absolute inset-0 z-1 hidden md:block">
                    {sections.map((s) => (
                      <div
                        key={s.id}
                        data-phone-items-wrap={s.id}
                        className="absolute inset-0 flex flex-col items-center justify-center"
                      >
                        {s.items.map((item, i) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={i}
                            data-phone-item={i + 1}
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className={`absolute z-1 ${item.className}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* ── Floating UI items (mobile) ── */}
                  <div className="absolute inset-0 z-1 md:hidden">
                    {sections.map((s) => (
                      <div
                        key={s.id}
                        data-phone-mobile-item-wrap={s.id}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        {s.mobileItems.map((item, i) => (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            key={i}
                            data-phone-mobile-item={i + 1}
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className={`absolute ${getMobilePosition(i)}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>

                  {/* Background radial graphic */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${CDN}/68bc1a457e73b0da2a032a3c_phone%20bg.svg`}
                    alt=""
                    className="absolute -z-1 w-full min-w-260 max-w-none"
                    style={{
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -37%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ── Invisible scroll trigger points ── */}
            <div
              data-phone-trigger="1"
              className="pointer-events-none absolute inset-x-0 h-px"
              style={{ top: "30vh" }}
            />
            <div
              data-phone-trigger="2"
              className="pointer-events-none absolute inset-x-0 h-px"
              style={{ top: "230vh" }}
            />
            <div
              data-phone-trigger="3"
              className="pointer-events-none absolute inset-x-0 h-px"
              style={{ top: "430vh" }}
            />
            <div
              data-phone-trigger="4"
              className="pointer-events-none absolute inset-x-0 h-px"
              style={{ top: "630vh" }}
            />
            <div
              data-phone-trigger="5"
              className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

function getMobilePosition(index: number): string {
  const positions = [
    "top-[15%] left-[5%]",
    "top-[10%] right-[5%]",
    "bottom-[20%] right-[5%]",
    "bottom-[15%] left-[5%]",
  ];
  return positions[index] || positions[0];
}
