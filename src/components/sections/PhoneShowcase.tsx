"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

const CDN = "https://cdn.prod.website-files.com/64dcc8c57b43bbf105fd381f";

const sections = [
  {
    id: 1,
    title: site.phoneShowcase[0]?.title ?? "Smarter Recovery",
    description:
      site.phoneShowcase[0]?.description ??
      "Know when to push, when to pause, and when you're ready to perform, backed by real-time metrics and biomarkers.",
    screen: site.phoneShowcase[0]?.screen ?? "/assets/brand/1.png",
    screenAlt: site.phoneShowcase[0]?.title ?? "",
    items: [
      { src: "/assets/phone-case/mock-1-1.png", alt: "Leaf icon", className: "top-[10%] left-[19%] -rotate-[10deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-1-2.png", alt: "Feel More Joy card", className: "top-[30%] left-[8%] -rotate-[4deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-1-3.png", alt: "Music notes icon", className: "bottom-[7%] left-[18%] rotate-[4deg] w-20 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-1-4.png", alt: "Heart icon", className: "top-0 right-[20%] rotate-[6deg] w-20 drop-shadow-lg" },
      { src: "/assets/phone-case/mock1-6.png", alt: "Favourite Songs card", className: "top-[23%] right-[10%] rotate-[10deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-1-5.png", alt: "Nature thumbnail", className: "bottom-[8%] right-[24%] rotate-[7deg] w-12 drop-shadow-lg" },
    ],
    mobileItems: [
      { src: "/assets/phone-case/mock-1-3.png", alt: "Music notes icon", className: "top-[8%] left-[2%] rotate-[6deg] !max-w-14 drop-shadow-lg" },
      { src: "/assets/phone-case/mock1-6.png", alt: "Favourite Songs card", className: "top-[2%] -right-[6%] rotate-[10deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-1-2.png", alt: "Feel More Joy card", className: "bottom-[8%] left-[0%] -rotate-[4deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-1-4.png", alt: "Heart icon", className: "bottom-[28%] right-[2%] -rotate-[4deg] !max-w-14 drop-shadow-lg" },
    ],
  },
  {
    id: 2,
    title: site.phoneShowcase[1]?.title ?? "Fuel That Moves You Forward",
    description:
      site.phoneShowcase[1]?.description ??
      "Track what you eat and get actionable feedback that helps you build a better relationship with food.",
    screen: site.phoneShowcase[1]?.screen ?? "/assets/brand/2.png",
    screenAlt: site.phoneShowcase[1]?.title ?? "",
    items: [
      { src: "/assets/phone-case/mock-2-6.png", alt: "Music note icon", className: "top-[10%] left-[19%] -rotate-[10deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-2-1.png", alt: "Create a similar vision", className: "top-[30%] left-[8%] -rotate-[4deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-2-2.png", alt: "Music thumbnail", className: "bottom-[7%] left-[18%] rotate-[4deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-2-5.png", alt: "Mountain music thumbnail", className: "top-0 right-[20%] rotate-[6deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-2-3.png", alt: "Pop playlist card", className: "top-[23%] right-[10%] rotate-[10deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-2-4.png", alt: "Hip-Hop playlist card", className: "bottom-[8%] right-[24%] rotate-[7deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
    ],
    mobileItems: [
      { src: "/assets/phone-case/mock-2-6.png", alt: "Music note icon", className: "top-[8%] left-[2%] rotate-[6deg] !max-w-14 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-2-3.png", alt: "Pop playlist card", className: "top-[2%] -right-[6%] rotate-[10deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-2-1.png", alt: "Create a similar vision", className: "bottom-[8%] left-[0%] -rotate-[4deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-2-5.png", alt: "Mountain music thumbnail", className: "bottom-[28%] right-[2%] -rotate-[4deg] !max-w-14 drop-shadow-lg" },
    ],
  },
  {
    id: 3,
    title: site.phoneShowcase[2]?.title ?? "Dial In Your Sleep",
    description:
      site.phoneShowcase[2]?.description ??
      "Improve your sleep by understanding patterns, identifying disruptions, and building habits that support deeper rest.",
    screen: site.phoneShowcase[2]?.screen ?? "/assets/brand/3.png",
    screenAlt: site.phoneShowcase[2]?.title ?? "",
    items: [
      { src: "/assets/phone-case/mock-3-1.png", alt: "Heart icon", className: "top-[10%] left-[19%] -rotate-[10deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-3-2.png", alt: "Lyrics preview", className: "top-[30%] left-[8%] -rotate-[4deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-3-5.png", alt: "Photo grid", className: "bottom-[7%] left-[18%] rotate-[4deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-3-3.png", alt: "Heart icon", className: "top-0 right-[20%] rotate-[6deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-3-6.png", alt: "Always Focus player", className: "top-[23%] right-[10%] rotate-[10deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-3-4.png", alt: "Photo grid", className: "bottom-[8%] right-[24%] rotate-[7deg] w-12 drop-shadow-lg" },
    ],
    mobileItems: [
      { src: "/assets/phone-case/mock-3-1.png", alt: "Heart icon", className: "top-[8%] left-[2%] rotate-[6deg] !max-w-14 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-3-6.png", alt: "Always Focus player", className: "top-[2%] -right-[6%] rotate-[10deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-3-2.png", alt: "Lyrics preview", className: "bottom-[8%] left-[0%] -rotate-[4deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-3-3.png", alt: "Heart icon", className: "bottom-[28%] right-[2%] -rotate-[4deg] !max-w-14 drop-shadow-lg" },
    ],
  },
  {
    id: 4,
    title: site.phoneShowcase[3]?.title ?? "Push With Purpose",
    description:
      site.phoneShowcase[3]?.description ??
      "Understand how much strain you're under, how it affects your body, and how to adjust for progress without burnout.",
    screen: site.phoneShowcase[3]?.screen ?? "/assets/brand/4.png",
    screenAlt: site.phoneShowcase[3]?.title ?? "",
    items: [
      { src: "/assets/phone-case/mock-4-1.png", alt: "Heart headphones icon", className: "top-[10%] left-[19%] -rotate-[10deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-4-3.png", alt: "Gift form card", className: "top-[30%] left-[8%] -rotate-[4deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-4-2.png", alt: "Start with a thought", className: "bottom-[7%] left-[18%] rotate-[4deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-4-6.png", alt: "Kaitlin avatar", className: "top-0 right-[20%] rotate-[6deg] w-12 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-4-4.png", alt: "Gift form card", className: "top-[23%] right-[10%] rotate-[10deg] max-w-[14.5rem] drop-shadow-xl rounded-2xl" },
      { src: "/assets/phone-case/mock-4-5.png", alt: "Photo grid", className: "bottom-[8%] right-[24%] rotate-[7deg] w-12 drop-shadow-lg" },
    ],
    mobileItems: [
      { src: "/assets/phone-case/mock-4-1.png", alt: "Heart headphones icon", className: "top-[8%] left-[2%] rotate-[6deg] !max-w-14 drop-shadow-lg" },
      { src: "/assets/phone-case/mock-4-4.png", alt: "Gift form card", className: "top-[2%] -right-[6%] rotate-[10deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-4-3.png", alt: "Gift form card", className: "bottom-[8%] left-[0%] -rotate-[4deg] !max-w-24 drop-shadow-xl rounded-lg" },
      { src: "/assets/phone-case/mock-4-6.png", alt: "Kaitlin avatar", className: "bottom-[28%] right-[2%] -rotate-[4deg] !max-w-14 drop-shadow-lg" },
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

    if (!screenTrack) return;

    const mm = gsap.matchMedia();

    // ── Desktop animations (768px+) ──
    mm.add("(min-width: 768px)", () => {
      const ctx = gsap.context(() => {
        // Set initial header states — only the first is visible
        headers.forEach((h, i) => {
          gsap.set(h, { autoAlpha: i === 0 ? 1 : 0 });
        });

        const master = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=800%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        for (let i = 0; i < 4; i++) {
          const sectionIdx = i + 1;
          const items = el.querySelectorAll<HTMLElement>(
            `[data-phone-items-wrap="${sectionIdx}"] [data-phone-item]`
          );

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

          // Fan out to final positions
          const fanIn = gsap.timeline({
            defaults: { duration: 1.1, ease: "power3.out" },
          });
          states.forEach((s, idx) => {
            fanIn.to(
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

          master.add(fanIn);

          // Hold visible
          master.to({}, { duration: 0.8 });

          // Transition to next section (fade out items + slide screen + swap header)
          if (i < 3) {
            const nextHeader = headers[i + 1];
            const currentHeader = headers[i];

            const transition = gsap.timeline();

            // Fade out floating items
            transition.to(Array.from(items), {
              opacity: 0,
              duration: 0.6,
              stagger: 0.06,
            });

            // Slide screen to next
            transition.to(
              screenTrack,
              {
                yPercent: -25 * (i + 1),
                duration: 0.75,
                ease: "power2.out",
              },
              "<0.1"
            );

            // Swap headers
            if (currentHeader) {
              transition.to(
                currentHeader,
                { autoAlpha: 0, duration: 0.3 },
                "<"
              );
            }
            if (nextHeader) {
              transition.fromTo(
                nextHeader,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.3 },
                "<0.15"
              );
            }

            master.add(transition);
          } else {
            // Last section: hold a bit longer at the end
            master.to({}, { duration: 0.4 });
          }
        }
      }, el);

      return () => ctx.revert();
    });

    // ── Mobile animations (below 768px) ──
    mm.add("(max-width: 767px)", () => {
      const ctx = gsap.context(() => {
        // Set initial header states
        headers.forEach((h, i) => {
          gsap.set(h, { autoAlpha: i === 0 ? 1 : 0 });
        });

        const master = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=800%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
          },
        });

        for (let i = 0; i < 4; i++) {
          const sectionIdx = i + 1;
          const items = el.querySelectorAll<HTMLElement>(
            `[data-phone-mobile-item-wrap="${sectionIdx}"] [data-phone-mobile-item]`
          );

          gsap.set(Array.from(items), { opacity: 0 });

          // Fade in
          const fadeIn = gsap.timeline({
            defaults: { duration: 0.6, ease: "power3.out" },
          });
          fadeIn.to(Array.from(items), { opacity: 1, stagger: 0.06 });
          master.add(fadeIn);

          // Hold
          master.to({}, { duration: 0.8 });

          // Transition
          if (i < 3) {
            const currentHeader = headers[i];
            const nextHeader = headers[i + 1];

            const transition = gsap.timeline();
            transition.to(Array.from(items), {
              opacity: 0,
              stagger: 0.06,
              duration: 0.5,
            });
            transition.to(
              screenTrack,
              {
                yPercent: -25 * (i + 1),
                duration: 0.7,
                ease: "power2.out",
              },
              "<0.1"
            );
            if (currentHeader) {
              transition.to(
                currentHeader,
                { autoAlpha: 0, duration: 0.3 },
                "<"
              );
            }
            if (nextHeader) {
              transition.fromTo(
                nextHeader,
                { autoAlpha: 0 },
                { autoAlpha: 1, duration: 0.3 },
                "<0.15"
              );
            }
            master.add(transition);
          } else {
            master.to({}, { duration: 0.4 });
          }
        }
      }, el);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full overflow-hidden">
      <div className="px-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex h-screen flex-col gap-12 pt-22">
            {/* ── Header text (stacked grid) ── */}
            <div
              className="mx-auto grid max-w-2xl"
              style={{ gridTemplate: "'stack' / 1fr" }}
            >
              {sections.map((s) => (
                <div
                  key={s.id}
                  data-phone-header={s.id}
                  className="phone-header flex flex-col gap-5 text-center"
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
            <div className="relative flex flex-1 items-center justify-center ">
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
              <div className="absolute inset-0 z-30 md:hidden">
                {sections.map((s) => (
                  <div
                    key={s.id}
                    data-phone-mobile-item-wrap={s.id}
                    className="absolute inset-0"
                  >
                    {s.mobileItems.map((item, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={i}
                        data-phone-mobile-item={i + 1}
                        src={item.src}
                        alt={item.alt}
                        loading="lazy"
                        className={`absolute max-w-50 ${item.className}`}
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
      </div>
      {/* Bottom blur */}
      <div
        className="absolute -bottom-14 left-1/2 z-40 -translate-x-1/2 translate-y-1/2 bg-white"
        style={{
          width: "150%",
          height: "5rem",
          filter: "blur(1rem)",
        }}
      />
    </section>
  );
};
