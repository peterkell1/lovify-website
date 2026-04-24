import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact — ${site.brand.name}`,
  description: site.pages.contact.subtitle,
};

export default function ContactPage() {
  const p = site.pages.contact;
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
      <div className="rounded-3xl border border-border bg-white p-8 text-center sm:p-12">
        <p className="font-heading text-sm font-semibold tracking-wide text-text-light uppercase">
          Email
        </p>
        <a
          href={`mailto:${site.contact.email}`}
          className="mt-3 inline-block font-heading text-2xl font-semibold text-black underline decoration-2 underline-offset-4 sm:text-3xl"
        >
          {site.contact.email}
        </a>
        <p className="mt-8 text-base leading-relaxed text-text-sub">
          We read every email. We try to reply within 2 business days.
        </p>
      </div>
    </PageShell>
  );
}
