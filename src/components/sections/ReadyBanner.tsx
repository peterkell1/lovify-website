import Image from "next/image";
import { StaggerButton } from "@/components/ui/buttons/StaggerButton";
import { AppleIcon } from "@/components/ui/icons/AppleIcon";

export const ReadyBanner = () => (
  <section className="w-full bg-white px-4 py-24">
    <div className="mx-auto max-w-6xl">
      {/* Text + Button */}
      <div className="flex flex-col items-center text-center">
        <h2 className="font-heading text-4xl font-extrabold tracking-tight text-text sm:text-5xl md:text-6xl">
          Ready When You Are
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-sub sm:text-lg">
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
      <div className="mt-12 w-full">
        <Image
          src="/assets/when-ready-banner.avif"
          alt="Ready When You Are"
          width={1920}
          height={800}
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 100vw, 1152px"
        />
      </div>
    </div>
  </section>
);
