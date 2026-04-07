"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = ["About us", "Blog", "Download App"] as const;

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = 0;

    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 100 && y > lastY);
      lastY = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-[cubic-bezier(0.625,0.05,0,1)]"
      style={{ transform: hidden ? "translateY(-100%)" : "translateY(0)" }}
    >
      <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4 mt-6">
        <a href="#" className="font-heading relative z-10 text-2xl font-extrabold tracking-tight text-white">
          Lovify
        </a>

        <nav
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-white/20 bg-white/15 px-1 py-1 backdrop-blur-md transition-all duration-300 md:flex"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              className={`font-heading rounded-full text-base font-medium transition-colors ${
                link === "Download App"
                  ? "px-5.5 py-3"
                  : "px-6 py-3"
              } ${
                link === "Download App"
                  ? "bg-[#2223261A] text-white"
                  : "text-white/90 hover:bg-white/10 hover:text-white"
              }`}
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
