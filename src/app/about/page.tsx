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
        {p.intro.map((para, i) => (
          <p key={i}>{para}</p>
        ))}
      </div>

      <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-24">
        {p.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-heading text-2xl font-semibold text-black md:text-4xl">
              {section.heading}
            </h2>
            <div className="mt-6 flex flex-col gap-6 text-lg leading-relaxed text-text-sub md:text-xl">
              {section.body.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-20 border-t border-border pt-10 text-lg leading-relaxed text-text-sub md:text-xl">
        <p>{p.signoff.closing}</p>
        <p className="mt-4 font-heading text-xl font-semibold text-black md:text-2xl">
          {p.signoff.name}
        </p>
        <p className="mt-1 text-base text-text-light">{p.signoff.role}</p>
      </div>
    </PageShell>
  );
}
