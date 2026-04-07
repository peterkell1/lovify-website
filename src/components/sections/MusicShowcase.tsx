"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

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

export const MusicShowcase = () => {
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
          grabCursor
          centeredSlides
          loop
          slideToClickedSlide
          initialSlide={1}
          slidesPerView={1.25}
          spaceBetween={12}
          breakpoints={{
            480: { slidesPerView: 1.4, spaceBetween: 16 },
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
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              {({ isActive }) => (
                <div className="pb-4">
                  {/* Image card */}
                  <div
                    className={`relative overflow-hidden rounded-2xl transition-all duration-500 sm:rounded-3xl ${
                      isActive ? "scale-100 opacity-100" : "scale-90 opacity-45"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={800}
                      height={533}
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 33vw"
                      className="aspect-3/2 w-full object-cover"
                    />
                  </div>

                  {/* Text below card */}
                  <div
                    className={`mt-5 text-center transition-all duration-500 ${
                      isActive
                        ? "translate-y-0 opacity-100"
                        : "translate-y-2 opacity-0"
                    }`}
                  >
                    <h3 className="font-heading text-[22px] font-bold text-text sm:text-[28px] md:text-[32px]">
                      {slide.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-text-sub sm:text-base md:text-xl md:leading-relaxed">
                      {slide.description}
                    </p>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
