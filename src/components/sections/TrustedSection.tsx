"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

const images = site.trusted.images;

const columns: { mt: number; cards: { aspect: string; src: string }[] }[] = [
  { mt: 100, cards: [{ aspect: "3/4", src: images.yoga }, { aspect: "4/5", src: images.meditation }] },
  { mt: 50, cards: [{ aspect: "1/1", src: images.running }, { aspect: "1/1", src: images.nature }, { aspect: "1/1", src: images.stretch }] },
  { mt: 90, cards: [{ aspect: "2/5", src: images.mindful }] },
  { mt: -20, cards: [{ aspect: "2/5", src: images.beach }] },
  { mt: -20, cards: [{ aspect: "2/5", src: images.sunset }] },
  { mt: 90, cards: [{ aspect: "2/5", src: images.concert }] },
  { mt: 50, cards: [{ aspect: "1/1", src: images.fitness }, { aspect: "1/1", src: images.landscape }, { aspect: "1/1", src: images.calm }] },
  { mt: 100, cards: [{ aspect: "3/4", src: images.calm }, { aspect: "4/5", src: images.ocean }] },
];

const mobileImages = {
  top: [images.running, images.nature, images.stretch, images.beach, images.mindful, images.sunset],
  bottom: [images.fitness, images.splash, images.calm, images.yoga, images.landscape, images.ocean],
};

const ANIM_ORDER = [0, 7, 1, 6, 2, 5, 3, 4];

const MosaicImage = ({
  src,
  className,
  aspect,
}: {
  src: string;
  className?: string;
  aspect?: string;
}) => (
  <div
    className={`overflow-hidden rounded-4xl ${className ?? ""}`}
    style={aspect ? { aspectRatio: aspect } : undefined}
  >
    <Image
      src={src}
      alt=""
      width={600}
      height={900}
      sizes="(max-width: 768px) 33vw, 20vw"
      className="h-full w-full object-cover"
    />
  </div>
);

const TextBlock = ({ ref }: { ref?: React.Ref<HTMLDivElement> }) => (
  <div ref={ref} className="text-center">
    <h2 className="font-heading whitespace-pre-line text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl md:leading-[1.2]">
      {site.trusted.heading}
    </h2>
    <p className="mt-4 text-xl leading-normal text-text-sub font-medium">
      {site.trusted.description}
    </p>
  </div>
);

export const TrustedSection = () => {
  const colRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cols = colRefs.current.filter(Boolean) as HTMLDivElement[];
    const text = textRef.current;
    if (!cols.length || !text) return;

    gsap.set(cols, { opacity: 0, y: 60 });
    gsap.set(text, { opacity: 0, y: 30 });

    const orderedRefs = ANIM_ORDER.map((i) => cols[i]).filter(Boolean);

    const ctx = gsap.context(() => {
      gsap.to(orderedRefs, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        onComplete: () => {
          gsap.to(text, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="w-full overflow-hidden bg-white px-4 py-24">
      {/* Desktop */}
      <div className="hidden md:block" ref={containerRef}>
        <div className="mx-auto flex max-w-7xl xl:px-2 items-start justify-center gap-2.5">
          {columns.map((col, ci) => (
            <div
              key={ci}
              ref={(el) => { colRefs.current[ci] = el; }}
              className={`flex flex-1 flex-col gap-2.5 ${ci === 0 || ci === 7 ? " hidden lg:flex" : ""}`}
              style={{ marginTop: col.mt }}
            >
              {col.cards.map((card, ii) => (
                <MosaicImage key={ii} src={card.src} className="w-full" aspect={card.aspect} />
              ))}
            </div>
          ))}
        </div>
        <div className="mx-auto mt-16 max-w-lg">
          <TextBlock ref={textRef} />
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="grid grid-cols-3 gap-2.5">
          {mobileImages.top.map((src, i) => (
            <MosaicImage key={i} src={src} className="aspect-square" />
          ))}
        </div>

        <div className="my-10">
          <TextBlock />
        </div>

        <div className="grid grid-cols-3 gap-2.5">
          {mobileImages.bottom.map((src, i) => (
            <MosaicImage key={i} src={src} className="aspect-square" />
          ))}
        </div>
      </div>
    </section>
  );
};
