import Link from "next/link";
import { site } from "@/content/site";

const FOOTER_COLUMNS = site.footer.columns;

const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: site.footer.socials.instagram,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: site.footer.socials.x,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Reddit",
    href: site.footer.socials.reddit,
    icon: (
      <svg width=" 100%" height=" 100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-6">
        <path d="M9.33871 14.4194C8.66129 14.4194 8.12903 13.8871 8.12903 13.2097C8.12903 12.5806 8.66129 12 9.33871 12C10.0161 12 10.5484 12.5806 10.5484 13.2097C10.5484 13.8871 10.0161 14.4194 9.33871 14.4194ZM24 12C24 18.629 18.629 24 12 24C5.37097 24 0 18.629 0 12C0 5.37097 5.37097 0 12 0C18.629 0 24 5.37097 24 12ZM17.5645 10.0161C17.129 10.0161 16.7419 10.2097 16.4032 10.5C15.3387 9.77419 13.8871 9.29032 12.2419 9.24194L13.1129 5.41935L15.7742 6.04839C15.7742 6.67742 16.3065 7.20968 16.9839 7.20968C17.6613 7.20968 18.1935 6.67742 18.1935 6.04839C18.1935 5.37097 17.6613 4.83871 16.9839 4.83871C16.5 4.83871 16.1129 5.08065 15.9194 5.46774L12.9194 4.83871C12.7742 4.79032 12.629 4.8871 12.629 5.03226L11.6613 9.24194C10.0645 9.29032 8.6129 9.77419 7.54839 10.5C7.25806 10.2097 6.82258 10.0161 6.3871 10.0161C4.69355 10.0161 4.16129 12.2903 5.66129 13.0645C5.6129 13.3065 5.6129 13.5484 5.6129 13.8387C5.6129 16.3548 8.46774 18.4355 12 18.4355C15.5323 18.4355 18.3871 16.3548 18.3871 13.8387C18.3871 13.5484 18.3387 13.3065 18.2903 13.0645C19.7903 12.2903 19.2581 10.0161 17.5645 10.0161ZM14.2258 15.629C13.3548 16.5484 10.5484 16.5 9.72581 15.629C9.62903 15.5323 9.43548 15.5323 9.29032 15.629C9.19355 15.7742 9.19355 15.9677 9.29032 16.0645C10.4032 17.1774 13.5484 17.1774 14.6613 16.0645C14.7581 15.9677 14.7581 15.7742 14.6613 15.629C14.5161 15.5323 14.371 15.5323 14.2258 15.629ZM14.6129 12C13.9355 12 13.4032 12.5806 13.4032 13.2097C13.4032 13.8871 13.9839 14.4194 14.6129 14.4194C15.2903 14.4194 15.8226 13.8871 15.8226 13.2097C15.8226 12.5806 15.2903 12 14.6129 12Z" fill="currentColor"></path>
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: site.footer.socials.youtube,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: site.footer.socials.facebook,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-6">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
] as const;

export const Footer = () => {
  return (
    <footer className="bg-white lg:pb-10">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-0 grid grid-cols-2 gap-8 md:grid-cols-5 text-center md:text-left">
        {/* Brand column */}
        <div className="ps-9 col-span-2">
          <Link href="/" className="flex items-center justify-center md:justify-start gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={site.brand.logo} alt={site.brand.name} className="size-7" />
            <span className="text-xl font-bold text-text">{site.brand.name}</span>
          </Link>
          <p className="mt-1 text-xs text-text-sub font-medium">
            {site.brand.copyright}
          </p>

          {/* Social icons */}
          <div className="flex items-center justify-center md:justify-start gap-8 md:mt-16 mt-12">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-text hover:text-text-sub transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="col-span-3 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {/* Link columns */}
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-semibold text-[#8b8c8f]">
                {column.title}
              </h3>
              <ul className="md:mt-3 mt-2 md:space-y-1.5 space-y-1">
                {column.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  const linkClass =
                    "footer_link text-base font-medium text-text transition-colors";
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={linkClass}
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href} className={linkClass}>
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
