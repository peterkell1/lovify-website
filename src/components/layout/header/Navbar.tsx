"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

export const Navbar = () => {
  const pathname = usePathname();
  const onHomePage = pathname === "/";
  const [hidden, setHidden] = useState(false);
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastY);
      setPastHero(y > window.innerHeight * 0.5);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only home page has a dark hero background. Everywhere else the bg is cream
  // from the top, so the nav needs dark text always.
  const onDarkBg = onHomePage && !pastHero;

  const textColor = onDarkBg ? "text-white" : "text-text";
  const linkColor = onDarkBg
    ? "text-white/90 hover:text-white"
    : "text-text/80 hover:text-text";
  const downloadBg = onDarkBg
    ? "bg-white/20 text-white backdrop-blur-md border border-white/30 hover:bg-white/30"
    : "bg-text text-white hover:bg-text/90";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)]"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 mt-6">
        {/* Logo — top left */}
        <Link
          href="/"
          className={`font-heading flex items-center gap-2 text-2xl font-extrabold tracking-tight transition-colors duration-300 ${textColor}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={site.brand.logo} alt="" className="size-8 shrink-0" />
          <span>{site.brand.name}</span>
        </Link>

        {/* Right side — nav links + download CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          {site.nav.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-base font-medium transition-colors duration-300 ${linkColor}`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={site.cta.downloadHref}
            className={`font-heading rounded-full px-5 py-2.5 text-base font-medium transition-colors duration-300 ${downloadBg}`}
          >
            {site.cta.downloadLabel}
          </Link>
        </div>
      </div>
    </header>
  );
};
