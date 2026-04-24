import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ContactForm } from "@/components/pages/ContactForm";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: `Contact — ${site.brand.name}`,
  description: site.pages.contact.subtitle,
};

export default function ContactPage() {
  const p = site.pages.contact;
  return (
    <PageShell eyebrow={p.eyebrow} title={p.title} subtitle={p.subtitle}>
      <div className="rounded-3xl border border-border bg-white p-6 sm:p-10">
        <ContactForm />
      </div>
      <p className="mt-6 text-center text-sm text-text-light">
        Prefer email? Write us at{" "}
        <a
          href={`mailto:${site.contact.email}`}
          className="text-text underline decoration-2 underline-offset-4"
        >
          {site.contact.email}
        </a>
      </p>
    </PageShell>
  );
}
