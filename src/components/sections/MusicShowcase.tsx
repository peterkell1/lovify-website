"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { site } from "@/content/site";

const { heading, slides } = site.musicShowcase;

export const MusicShowcase = () => {
  return (
    <section className="w-full overflow-hidden bg-white">
      {/* Header */}
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
          {heading}
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
