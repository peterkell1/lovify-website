import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `About us — ${site.brand.name}`,
  description: site.pages.about.subtitle,
};

type ImageItem = { src: string; alt: string };

const imageGridClasses = (count: number) => {
  if (count === 1) return "grid grid-cols-1";
  if (count === 2) return "grid grid-cols-1 gap-4 sm:grid-cols-2";
  return "grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3";
};

const SectionImages = ({ images }: { images: readonly ImageItem[] }) => (
  <div className={`mb-10 ${imageGridClasses(images.length)}`}>
    {images.map((img) => (
      <div
        key={img.src}
        className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-cream"
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>
    ))}
  </div>
);

export default function AboutPage() {
  const p = site.pages.about;
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title}>
      {p.heroImage && (
        <div className="-mt-4 mb-12 overflow-hidden rounded-3xl md:mb-16 md:-mt-6">
          <Image
            src={p.heroImage.src}
            alt={p.heroImage.alt}
            width={1200}
            height={972}
            priority
            className="h-auto w-full"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      )}

      <p className="mb-8 text-center font-heading text-xl font-semibold text-black md:text-2xl">
        {p.subtitle}
      </p>

      <div className="flex flex-col gap-6 text-lg leading-relaxed text-text-sub md:text-xl">
        {p.intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
        {p.sections.map((section) => {
          const images = "images" in section ? section.images : undefined;
          return (
            <section key={section.heading}>
              <h2 className="font-heading text-2xl font-semibold text-black md:text-4xl">
                {section.heading}
              </h2>
              {images && images.length > 0 && (
                <div className="mt-8">
                  <SectionImages images={images} />
                </div>
              )}
              <div className="mt-6 flex flex-col gap-6 text-lg leading-relaxed text-text-sub md:text-xl">
                {section.body.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>
          );
        })}
      </div>

      <div className="mt-20 border-t border-border pt-10 text-lg leading-relaxed text-text-sub md:text-xl">
        <p>{p.signoff.closing}</p>
        <p className="mt-4 font-heading text-xl font-semibold text-black md:text-2xl">
          {p.signoff.name}
        </p>
        <p className="mt-1 text-base text-text-light">{p.signoff.role}</p>
        {p.signoff.image && (
          <div className="mt-10 overflow-hidden rounded-3xl">
            <Image
              src={p.signoff.image.src}
              alt={p.signoff.image.alt}
              width={1000}
              height={1000}
              className="h-auto w-full"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}
      </div>
    </PageShell>
  );
}
