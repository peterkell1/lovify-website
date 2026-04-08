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
    <section className="w-full overflow-hidden bg-white">
      {/* Header */}
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
          Everything You Need to Grow
        </h2>
      </div>

      {/* Swiper */}
      <div className="mt-14">
        <Swiper
          grabCursor
          centeredSlides
          loop
          slideToClickedSlide
          initialSlide={1}
          slidesPerView={1.15}
          spaceBetween={16}
          breakpoints={{
            480: { slidesPerView: 1.2, spaceBetween: 20 },
            640: { slidesPerView: 1.3, spaceBetween: 24 },
            1024: { slidesPerView: 1.5, spaceBetween: 32 },
            1280: { slidesPerView: 2.125, spaceBetween: 40 },
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
                <div className={`pb-4 ${isActive ? "opacity-100" : "opacity-40"}`}>
                  {/* Image card */}
                  <div
                    className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-500`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      width={800}
                      height={533}
                      sizes="(max-width: 640px) 70vw, (max-width: 1024px) 45vw, 33vw"
                      className="aspect-[7.74/5.22] w-full object-cover"
                    />
                  </div>

                  {/* Text below card */}
                  <div
                    className={`mt-8 text-center transition-all duration-500 ${isActive
                      ? ""
                      : ""
                      }`}
                  >
                    <h3 className="font-heading text-2xl font-semibold text-black sm:text-[2.5rem] md:text-[32px]">
                      {slide.title}
                    </h3>
                    <p className="mx-auto mt-2 max-w-2xl text-xl leading-relaxed text-text-sub font-medium">
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
