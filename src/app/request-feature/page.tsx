import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CannyBoard } from "@/components/pages/CannyBoard";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Request a feature — ${site.brand.name}`,
  description: "Tell us what you want to see next in Lovify.",
};

export default function RequestFeaturePage() {
  return (
    <PageShell
      eyebrow="Feature requests"
      title="Tell us what to build next"
      subtitle="Every request is read by the team. Upvote what you love, or add your own."
    >
      <CannyBoard path="feature-requests" />
    </PageShell>
  );
}
