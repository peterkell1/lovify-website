import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { FaqAccordion } from "@/components/pages/FaqAccordion";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `FAQ — ${site.brand.name}`,
  description: site.pages.faq.subtitle,
};

export default function FaqPage() {
  const p = site.pages.faq;
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
      <FaqAccordion items={p.items} />
    </PageShell>
  );
}
