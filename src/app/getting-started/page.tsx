import type { Metadata } from "next";
import { ComingSoon } from "@/components/pages/ComingSoon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Getting started — ${site.brand.name}`,
  description: "Your first song, vision, and mind movie in Lovify.",
};

export default function GettingStartedPage() {
  return (
    <ComingSoon
      eyebrow="Getting started"
      title="A guide is on the way"
      subtitle="A walkthrough of your first Lovify session — from the first prompt to your first mind movie. For now, download the app and start exploring."
    />
  );
}
