import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `About us — ${site.brand.name}`,
  description: site.pages.about.subtitle,
};

export default function AboutPage() {
  const p = site.pages.about;
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
      <div className="flex flex-col gap-6 text-lg leading-relaxed text-text-sub md:text-xl">
        {p.story.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      {p.founders.length > 0 && (
        <div className="mt-20">
          <h2 className="font-heading text-2xl font-semibold text-black md:text-3xl">
            The team
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {p.founders.map((f) => (
              <div
                key={f.name}
                className="rounded-3xl border border-border bg-white p-8"
              >
                <p className="font-heading text-xl font-semibold text-black">
                  {f.name}
                </p>
                <p className="mt-1 text-sm font-medium text-text-light">{f.role}</p>
                <p className="mt-4 leading-relaxed text-text-sub">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </PageShell>
  );
}
