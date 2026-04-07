"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
    title: "Music That Moves You",
    description:
      "Go beyond playlists. Lovify matches music to your mood and goals, so every track fuels your focus, energy, or calm exactly when you need it.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
    title: "See It Before You Live It",
    description:
      "Guided visualizations help you picture your ideal life with vivid clarity. Train your mind daily and watch your actions start to follow.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    title: "Speak Your Truth",
    description:
      "Personalized affirmations that evolve with you. Lovify builds a daily practice that rewires your inner dialogue and strengthens self-belief.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1200&q=80",
    title: "Set Intentions That Stick",
    description:
      "Manifestation works when you stay consistent. Log your intentions, track your progress, and let Lovify keep you aligned with what matters most.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    title: "Your Daily Reset",
    description:
      "Wind down with curated soundscapes and breathing exercises. Lovify helps you close each day with peace so you wake up ready for the next.",
  },
];

export function MusicShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section className="w-full overflow-hidden bg-white py-24">
      {/* Header */}
      <div className="mx-auto flex max-w-3xl flex-col items-center px-6 text-center">
        <div
          className="mb-6 inline-flex items-center justify-center gap-2 rounded-full bg-white px-4 py-3 text-lg font-medium"
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
            <path
              d="M14 2v8.5a2.5 2.5 0 1 1-2-2.45V4.7L6 5.9v6.6a2.5 2.5 0 1 1-2-2.45V3l10-1Z"
              fill="#616265"
            />
          </svg>
          <span className="text-sm font-medium text-text-sub">Explore</span>
        </div>

        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl">
          Everything You Need to Grow
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-text-sub sm:text-lg">
          Music, visualization, affirmations, and manifestation — all in one
          place, personalized to help you become who you want to be.
        </p>
      </div>

      {/* Swiper */}
      <div className="mt-16">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          grabCursor
          centeredSlides
          loop
          initialSlide={1}
          slidesPerView={1.4}
          spaceBetween={16}
          breakpoints={{
            640: { slidesPerView: 1.8, spaceBetween: 24 },
            1024: { slidesPerView: 2.6, spaceBetween: 32 },
            1280: { slidesPerView: 3, spaceBetween: 40 },
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          className="music-swiper"
        >
          {slides.map((slide, i) => (
            <SwiperSlide key={slide.title}>
              <div
                className="cursor-pointer pb-4"
                onClick={() => swiperRef.current?.slideToLoop(i)}
              >
                {/* Image card */}
                <div
                  className="relative overflow-hidden rounded-2xl transition-all duration-500 sm:rounded-3xl"
                  style={{
                    transform: activeIndex === i ? "scale(1)" : "scale(0.9)",
                    opacity: activeIndex === i ? 1 : 0.45,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="aspect-3/2 w-full object-cover"
                  />
                </div>

                {/* Text below card */}
                <div
                  className="mt-5 text-center transition-all duration-500"
                  style={{
                    opacity: activeIndex === i ? 1 : 0,
                    transform:
                      activeIndex === i
                        ? "translateY(0)"
                        : "translateY(8px)",
                  }}
                >
                  <h3 className="text-[22px] font-bold text-[#222326] sm:text-[28px] md:text-[32px]"
                    style={{ fontFamily: "Archivo, sans-serif" }}
                  >
                    {slide.title}
                  </h3>
                  <p
                    className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#616265] sm:text-base md:text-[20px] md:leading-relaxed"
                    style={{ fontFamily: "Archivo, sans-serif" }}
                  >
                    {slide.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .music-swiper {
          padding-bottom: 50px !important;
        }
        .music-swiper .swiper-pagination {
          bottom: 0 !important;
        }
        .music-swiper .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
          margin: 0 5px !important;
        }
        .music-swiper .swiper-pagination-bullet-active {
          background: #9ca3af;
        }
      `}</style>
    </section>
  );
}
