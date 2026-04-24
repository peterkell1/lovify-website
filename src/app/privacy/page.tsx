import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Privacy Policy — ${site.brand.name}`,
  description: "How Lovify handles your data.",
};

export default function PrivacyPage() {
  const p = site.pages.privacy;
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
      <div className="rounded-3xl border border-border bg-cream p-6 text-sm leading-relaxed text-text-sub sm:p-8">
        {p.placeholder}
      </div>
      <div className="mt-12 flex flex-col gap-10">
        {p.body.map((section) => (
          <section key={section.heading}>
            <h2 className="font-heading text-xl font-semibold text-black md:text-2xl">
              {section.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-sub md:text-lg">
              {section.text}
            </p>
          </section>
        ))}
      </div>
    </PageShell>
  );
}
