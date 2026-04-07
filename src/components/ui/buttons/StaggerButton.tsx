"use client";

import type { ReactNode } from "react";

interface StaggerButtonProps {
  text: string;
  href: string;
  icon?: ReactNode;
  className?: string;
}

const StaggerChar = ({ char, index }: { char: string; index: number }) => (
  <span className="inline-block overflow-hidden" style={{ lineHeight: "1.2em", height: "1.2em" }}>
    <span
      className="relative inline-block transition-transform duration-[0.4s] ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:-translate-y-full"
      style={{ transitionDelay: `${index * 0.01}s` }}
    >
      {char === " " ? "\u00A0" : char}
      <span className="absolute left-0 top-full inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    </span>
  </span>
);

export const StaggerButton = ({
  text,
  href,
  icon,
  className = "",
}: StaggerButtonProps) => (
  <a
    href={href}
    className={`font-heading group inline-flex items-center gap-2.5 rounded-full border border-black/8 bg-white px-8 py-4 text-lg font-semibold text-text shadow-md transition-shadow hover:shadow-lg ${className}`}
  >
    {icon}
    <span className="inline-flex">
      {text.split("").map((char, i) => (
        <StaggerChar key={i} char={char} index={i} />
      ))}
    </span>
  </a>
);
