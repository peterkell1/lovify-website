"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["About us", "Blog", "Download App"] as const;
const MOBILE_LINKS = ["About us", "Blog"] as const;

export const Navbar = () => {
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

  const textColor = pastHero ? "text-text" : "text-white";
  const textColorMuted = pastHero ? "text-text/80 hover:text-text" : "text-white/90 hover:text-white";
  const pillBg = pastHero
    ? "border-border bg-white/80 backdrop-blur-md"
    : "border-white/20 bg-white/15 backdrop-blur-md";
  const downloadBg = pastHero ? "bg-[#2223261A] text-text" : "bg-[#2223261A] text-white";

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.625,0.05,0,1)]"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 mt-6">
        <a href="#" className={`font-heading relative z-10 text-2xl font-extrabold tracking-tight transition-colors duration-300 ${textColor}`}>
          Lovify
        </a>

        {/* Desktop — glassmorphic pill (md+) */}
        <nav className={`absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full px-1 py-1 transition-all duration-300 border md:flex ${pillBg}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-heading rounded-full text-base font-medium transition-colors duration-300 ${
                link === "Download App"
                  ? `px-5.5 py-3 ${downloadBg}`
                  : `px-6 py-3 ${textColorMuted} hover:bg-white/10`
              }`}
            >
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile — flat links right-aligned (<md) */}
        <nav className="flex items-center gap-6 md:hidden">
          {MOBILE_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-heading text-base font-medium transition-colors duration-300 ${textColor}`}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="relative z-10 hidden w-18 md:block" />
      </div>
    </header>
  );
};
