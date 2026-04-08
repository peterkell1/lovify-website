import Image from "next/image";
import { StaggerButton } from "@/components/ui/buttons/StaggerButton";
import { AppleIcon } from "@/components/ui/icons/AppleIcon";

export const ReadyBanner = () => (
  <section className="w-full bg-white px-4 pt-12 md:pb-14">
    <div className="mx-auto max-w-6xl">
      {/* Text + Button */}
      <div className="flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
          Ready When You Are
        </h2>
        <p className="mt-4 max-w-xl text-base leading-normal font-medium text-text-sub sm:text-lg md:text-xl">
          Start with one step. One log at a time. Bevel meets you where you
          are and helps you move forward with clarity and confidence.
        </p>
        <div className="mt-8">
          <StaggerButton
            text="Download App"
            href="#start"
            icon={<AppleIcon size={18} />}
          />
        </div>
      </div>

      {/* Banner Image */}
      <div className="relative mt-12 w-full h-96 md:h-[37.5rem] -my-8 md:-my-0">
        <div
          className="absolute left-1/2 h-full -translate-x-1/2"
          style={{ aspectRatio: "1760 / 600" }}
        >
          <Image
            src="/assets/when-ready-banner.avif"
            alt="Ready When You Are"
            fill
            className="absolute inset-0 h-full w-full object-cover"
            sizes="(max-width: 768px) 100vw, 1760px"
          />
        </div>
      </div>
    </div>
  </section>
);
