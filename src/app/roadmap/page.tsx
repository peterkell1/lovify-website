import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CannyBoard } from "@/components/pages/CannyBoard";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Roadmap — ${site.brand.name}`,
  description: "What we're shipping next at Lovify.",
};

export default function RoadmapPage() {
  return (
    <PageShell
      eyebrow="Roadmap"
      title="What we're building next"
      subtitle="Planned, in progress, and shipped — straight from the team."
    >
      <CannyBoard path="changelog" />
    </PageShell>
  );
}
