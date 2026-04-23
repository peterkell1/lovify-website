"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { site } from "@/content/site";

gsap.registerPlugin(ScrollTrigger);

const { badge, heading, description, cards } = site.readyShowcase;

export const ReadyShowcase = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const cardEls = container.querySelectorAll<HTMLDivElement>("[data-card]");

    const mm = gsap.matchMedia();

    mm.add("(min-width: 773px)", () => {
      const ctx = gsap.context(() => {
        cardEls.forEach((card, i) => {
          gsap.set(card, { zIndex: i + 1 });

          if (i < cardEls.length - 1) {
            ScrollTrigger.create({
              trigger: card,
              start: "top 80px",
              endTrigger: cardEls[cardEls.length - 1],
              end: "top 80px",
              pin: true,
              pinSpacing: false,
            });
          }
        });
      }, container);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="relative z-10 w-full bg-white px-6 py-28">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <div
          className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-3 py-1 text-lg font-medium"
          style={{
            boxShadow:
              "0 0.0625rem 2rem #be362626, 0 0.1875rem 0.75rem #be362633",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_ready)">
              <path
                d="M3.45512 13.5283C3.72074 13.7939 4.51762 14.0928 6.14457 13.5283C6.57621 13.3955 7.04105 13.1963 7.5059 12.9638C6.87504 12.4658 6.24418 11.9345 5.64652 11.3369C5.04887 10.7392 4.51762 10.1084 4.01957 9.47752C3.78715 9.94236 3.58793 10.4072 3.45512 10.8388C2.89066 12.4658 3.18949 13.2627 3.45512 13.5283ZM3.02348 7.98338C1.39652 5.26072 1.03129 2.63767 2.32621 1.34275C3.62113 0.0478295 6.24418 0.413064 9.00004 2.04002C11.7227 0.413064 14.3457 0.0478295 15.6407 1.34275C16.9356 2.63767 16.5704 5.26072 14.9434 7.98338C16.5704 10.7392 16.9356 13.3623 15.6407 14.6572C14.3457 15.9521 11.7227 15.5869 9.00004 13.9599C6.24418 15.5869 3.62113 15.9521 2.32621 14.6572C1.03129 13.3623 1.39652 10.7392 3.02348 7.98338ZM4.05277 6.52244C4.51762 5.89158 5.04887 5.26072 5.64652 4.66306C6.27738 4.06541 6.87504 3.53416 7.5059 3.03611C7.04105 2.80369 6.57621 2.60447 6.14457 2.43845C4.51762 1.9072 3.72074 2.20603 3.45512 2.47166C3.18949 2.73728 2.89066 3.50095 3.45512 5.12791C3.58793 5.59275 3.78715 6.0576 4.05277 6.52244ZM9.00004 3.9326C8.23637 4.46385 7.5059 5.0947 6.77543 5.79197C6.07816 6.52244 5.4473 7.25291 4.94926 7.98338C5.4473 8.74705 6.07816 9.47752 6.77543 10.208C7.5059 10.9053 8.23637 11.5361 9.00004 12.0342C9.73051 11.5361 10.461 10.9053 11.1914 10.208C11.8887 9.47752 12.5196 8.74705 13.0508 7.98338C12.5196 7.25291 11.8887 6.52244 11.1914 5.79197C10.461 5.0947 9.73051 4.46385 9.00004 3.9326ZM13.9473 6.52244C14.1797 6.0576 14.3789 5.59275 14.5118 5.16111C15.0762 3.53416 14.7774 2.73728 14.5118 2.47166C14.2461 2.20603 13.4493 1.9072 11.8223 2.47166C11.3907 2.60447 10.9258 2.80369 10.461 3.03611C11.0918 3.53416 11.7227 4.06541 12.3204 4.66306C12.918 5.26072 13.4493 5.89158 13.9473 6.52244ZM13.9473 9.47752C13.4493 10.1084 12.918 10.7392 12.3204 11.3369C11.7227 11.9345 11.0918 12.4658 10.461 12.9638C10.9258 13.1963 11.3907 13.3955 11.8223 13.5283C13.4493 14.0928 14.2461 13.7939 14.5118 13.5283C14.7774 13.2627 15.0762 12.4658 14.5118 10.8388C14.3789 10.4072 14.1797 9.94236 13.9473 9.47752ZM7.93754 7.98338C7.93754 7.41892 8.40238 6.92088 9.00004 6.92088C9.56449 6.92088 10.0625 7.41892 10.0625 7.98338C10.0625 8.58103 9.56449 9.04588 9.00004 9.04588C8.40238 9.04588 7.93754 8.58103 7.93754 7.98338Z"
                fill="#616265"
              />
            </g>
            <defs>
              <clipPath id="clip0_ready">
                <rect
                  width="16"
                  height="16"
                  fill="white"
                  transform="translate(0.983398)"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="text-lg font-medium text-black">{badge}</span>
        </div>

        <h2 className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-[2.5rem] md:text-[32px]">
          {heading}
        </h2>

        <p className="mt-4 max-w-xl text-xl leading-relaxed font-medium text-text-sub">
          {description}
        </p>
      </div>

      {/* Cards */}
      <div ref={containerRef} className="mx-auto mt-16 flex max-w-[76rem] flex-col gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            data-card
            className="relative flex aspect-[2048/1632] w-full flex-col justify-between overflow-hidden rounded-[2.5rem] min-[773px]:aspect-auto min-[773px]:h-[85vh] min-[773px]:max-h-170"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 h-full w-full rounded-[2.5rem] object-contain object-center"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
