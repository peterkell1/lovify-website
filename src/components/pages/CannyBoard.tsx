import { site } from "@/content/site";

type CannyBoardProps = {
  /** Canny sub-path: "feature-requests", "roadmap", etc. Defaults to root board. */
  path?: string;
};

export const CannyBoard = ({ path = "" }: CannyBoardProps) => {
  const src = `${site.canny.url}${path ? `/${path}` : ""}`;
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_6px_24px_#00000010]">
      <iframe
        src={src}
        title="Lovify feedback"
        loading="lazy"
        className="block h-[75vh] w-full"
      />
      <noscript>
        <p className="p-6 text-center text-text-sub">
          Visit our feedback board at{" "}
          <a href={src} className="underline">
            {src.replace(/^https?:\/\//, "")}
          </a>
          .
        </p>
      </noscript>
    </div>
  );
};
