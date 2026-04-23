import { site } from "@/content/site";

const { heading, description, cards } = site.designedFor;

export const DesignedFor = () => (
  <section className="w-full bg-white px-6 py-24">
    {/* Header */}
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl md:text-5xl">
        {heading}
      </h2>
      <p className="mt-4 text-xl leading-relaxed text-text-sub font-medium">
        {description}
      </p>
    </div>

    {/* 2×2 Grid */}
    <div className="mx-auto mt-14 grid max-w-6xl lg:px-4 grid-cols-1 gap-3 sm:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.label}
          className="relative flex aspect-3/4 flex-col items-center overflow-hidden rounded-[2.5rem] sm:aspect-2/3"
        >
          {/* Background image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-transparent" />

          {/* Text content */}
          <div className="relative z-10 flex flex-col items-center pt-5 text-center sm:pt-7">
            <span className="text-base font-semibold tracking-wide text-[#fff9] sm:text-lg">
              {card.label}
            </span>
            <h3
              className="mt-1 whitespace-pre-line font-heading text-lg font-extrabold leading-tight text-white sm:text-xl md:text-2xl"
              style={{ textShadow: "0 .25rem .5rem #00000026" }}
            >
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);
