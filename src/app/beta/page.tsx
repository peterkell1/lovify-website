import type { Metadata } from "next";
import { ComingSoon } from "@/components/pages/ComingSoon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Beta — ${site.brand.name}`,
  description: "Join the Lovify beta.",
};

export default function BetaPage() {
  return (
    <ComingSoon
      eyebrow="Beta"
      title="Beta access, coming soon"
      subtitle="We're polishing an early-access program for users who want to try new features first. Download the app to be notified when it opens."
    />
  );
}
