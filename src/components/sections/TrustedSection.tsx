"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = {
  yoga: "https://images.unsplash.com/photo-1529693662653-9d480530a697?w=300&q=80",
  meditation: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&q=80",
  running: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300&q=80",
  nature: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=300&q=80",
  stretch: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=300&q=80",
  mindful: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&q=80",
  peace: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&q=80",
  beach: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=300&q=80",
  sunset: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=300&q=80",
  concert: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&q=80",
  splash: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=300&q=80",
  fitness: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&q=80",
  landscape: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=300&q=80",
  calm: "https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?w=300&q=80",
  ocean: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&q=80",
};

const columns: { mt: number; cards: { aspect: string; src: string }[] }[] = [
  { mt: 100, cards: [{ aspect: "3/4", src: images.yoga }, { aspect: "4/5", src: images.meditation }] },
  { mt: 50, cards: [{ aspect: "3/4", src: images.running }, { aspect: "1/1", src: images.nature }, { aspect: "3/4", src: images.stretch }] },
  { mt: 10, cards: [{ aspect: "3/5", src: images.mindful }, { aspect: "3/5", src: images.peace }] },
  { mt: -20, cards: [{ aspect: "2/5", src: images.beach }] },
  { mt: -20, cards: [{ aspect: "2/5", src: images.sunset }] },
  { mt: 10, cards: [{ aspect: "3/5", src: images.concert }, { aspect: "3/5", src: images.splash }] },
  { mt: 50, cards: [{ aspect: "3/4", src: images.fitness }, { aspect: "1/1", src: images.landscape }, { aspect: "3/4", src: images.calm }] },
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
    className={`overflow-hidden rounded-2xl ${className ?? ""}`}
    style={aspect ? { aspectRatio: aspect } : undefined}
  >
    <Image
      src={src}
      alt=""
      width={300}
      height={400}
      sizes="(max-width: 768px) 30vw, 12vw"
      className="h-full w-full object-cover"
    />
  </div>
);

const TextBlock = ({ ref }: { ref?: React.Ref<HTMLDivElement> }) => (
  <div ref={ref} className="px-5 text-center">
    <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-4xl md:leading-[1.2]">
      Crafted with Care.
      <br />
      Loved Everywhere.
    </h2>
    <p className="mt-4 text-[15px] leading-relaxed text-text-sub">
      Don&apos;t take our words for it. See why Lovify is trusted and loved by
      people around the world who want to feel better, grow stronger, and live
      with purpose.
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
        <div className="relative pb-44 lg:pb-32">
          <div className="mx-auto flex max-w-5xl items-start justify-center gap-2.5">
            {columns.map((col, ci) => (
              <div
                key={ci}
                ref={(el) => { colRefs.current[ci] = el; }}
                className={`flex flex-1 flex-col gap-2.5${ci === 0 || ci === 7 ? " hidden lg:flex" : ""}`}
                style={{ marginTop: col.mt }}
              >
                {col.cards.map((card, ii) => (
                  <MosaicImage key={ii} src={card.src} className="w-full" aspect={card.aspect} />
                ))}
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-lg">
            <TextBlock ref={textRef} />
          </div>
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
