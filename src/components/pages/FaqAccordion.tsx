"use client";

import { useState } from "react";

type Item = { q: string; a: string };

export const FaqAccordion = ({ items }: { items: readonly Item[] }) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div
            key={i}
            className="overflow-hidden rounded-3xl border border-border bg-white"
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream sm:px-8 sm:py-6"
            >
              <span className="font-heading text-lg font-semibold text-black sm:text-xl">
                {item.q}
              </span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className={`shrink-0 text-text-sub transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  d="M5 7.5 10 12.5 15 7.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-base leading-relaxed text-text-sub sm:px-8 sm:text-lg">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
