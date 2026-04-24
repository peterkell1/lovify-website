import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Careers — ${site.brand.name}`,
  description: site.pages.careers.subtitle,
};

export default function CareersPage() {
  const p = site.pages.careers;
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
      {p.openings.length > 0 ? (
        <div className="flex flex-col gap-4">
          {p.openings.map((job) => (
            <a
              key={job.role}
              href={job.href}
              className="group flex items-center justify-between rounded-3xl border border-border bg-white p-6 transition-colors hover:bg-cream sm:p-8"
            >
              <div>
                <p className="font-heading text-xl font-semibold text-black">
                  {job.role}
                </p>
                <p className="mt-1 text-sm font-medium text-text-light">
                  {job.location}
                </p>
              </div>
              <span className="text-text-sub transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-border bg-white p-8 text-center sm:p-12">
          <p className="text-lg leading-relaxed text-text-sub md:text-xl">
            {p.emailCta}
          </p>
          <a
            href={`mailto:${site.contact.email}?subject=Careers at Lovify`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-black px-8 py-4 font-heading text-base font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Email {site.contact.email}
          </a>
        </div>
      )}
    </PageShell>
  );
}
