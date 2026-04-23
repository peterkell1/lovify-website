import Image from "next/image";
import { StaggerButton } from "@/components/ui/buttons/StaggerButton";
import { AppleIcon } from "@/components/ui/icons/AppleIcon";
import { site } from "@/content/site";

export const ReadyBanner = () => (
  <section className="w-full bg-white pt-12">
    <div className="mx-auto max-w-6xl px-4">
      {/* Text + Button */}
      <div className="flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
          {site.readyBanner.heading}
        </h2>
        <p className="mt-4 max-w-xl text-base leading-normal font-medium text-text-sub sm:text-lg md:text-xl">
          {site.readyBanner.description}
        </p>
        <div className="mt-8">
          <StaggerButton
            text={site.cta.downloadLabel}
            href={site.cta.downloadHref}
            icon={<AppleIcon size={18} />}
          />
        </div>
      </div>
    </div>

    {/* Banner Image — full bleed */}
    <div className="relative mt-12 w-full" style={{ aspectRatio: "2752 / 1536" }}>
      <Image
        src={site.readyBanner.image}
        alt={site.readyBanner.heading}
        fill
        className="object-cover"
        sizes="100vw"
      />
    </div>
  </section>
);
