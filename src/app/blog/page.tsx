import type { Metadata } from "next";
import { ComingSoon } from "@/components/pages/ComingSoon";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Blog — ${site.brand.name}`,
  description: "Stories, ideas, and updates from the Lovify team.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      eyebrow="Blog"
      title="Our blog is coming soon"
      subtitle="We're cooking up posts on music, mindset, manifestation, and the tech behind Lovify. Subscribe in the app to hear when it's live."
    />
  );
}
