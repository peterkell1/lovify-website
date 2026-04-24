import { PageShell } from "@/components/layout/PageShell";
import { StaggerButton } from "@/components/ui/buttons/StaggerButton";
import { AppleIcon } from "@/components/ui/icons/AppleIcon";
import { site } from "@/content/site";

type ComingSoonProps = {
  /** Override the default eyebrow/title/subtitle from site.pages.comingSoon. */
  eyebrow?: string;
  title?: string;
  subtitle?: string;
};

export const ComingSoon = ({ eyebrow, title, subtitle }: ComingSoonProps) => {
  const p = site.pages.comingSoon;
  return (
    <PageShell
      eyebrow={eyebrow ?? p.eyebrow}
      title={title ?? p.title}
      subtitle={subtitle ?? p.subtitle}
    >
      <div className="flex justify-center">
        <StaggerButton
          text={site.cta.downloadLabel}
          href={site.cta.downloadHref}
          icon={<AppleIcon size={18} />}
        />
      </div>
    </PageShell>
  );
};
