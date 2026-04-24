import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { CannyBoard } from "@/components/pages/CannyBoard";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Feedback — ${site.brand.name}`,
  description: "Share what you love, what's missing, and what's next.",
};

export default function FeedbackPage() {
  return (
    <PageShell
      eyebrow="Feedback"
      title="What would make Lovify better?"
      subtitle="Upvote ideas, add your own, and watch what we're building next."
    >
      <CannyBoard />
    </PageShell>
  );
}
