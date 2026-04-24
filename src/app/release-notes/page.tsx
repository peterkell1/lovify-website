import type { Metadata } from "next";
import { ComingSoon } from "@/components/pages/ComingSoon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Release notes — ${site.brand.name}`,
  description: "What's new in Lovify.",
};

export default function ReleaseNotesPage() {
  return (
    <ComingSoon
      eyebrow="Release notes"
      title="What's new, coming soon"
      subtitle="We ship updates every week. The public changelog lands here shortly — in the meantime, head to the roadmap to see what's next."
    />
  );
}
