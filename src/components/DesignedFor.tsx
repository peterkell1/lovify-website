const cards = [
  {
    label: "Music",
    title: "Tune into\nyour emotions",
    image:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200&q=80",
  },
  {
    label: "Visualization",
    title: "See your goals\ncome to life",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=80",
  },
  {
    label: "Affirmations",
    title: "Reprogram your\ninner dialogue",
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
  },
  {
    label: "Manifestation",
    title: "Track and build\npowerful habits",
    image:
      "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?w=1200&q=80",
  },
];

export const DesignedFor = () => (
  <section className="w-full bg-white px-6 py-24">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-text sm:text-4xl md:text-5xl">
        Designed for Daily Life
      </h2>
      <p className="mt-4 text-base leading-relaxed text-text-sub sm:text-lg">
        From music and mindset to habits and manifestation, Lovify helps you
        stay in sync with yourself and build routines that support your growth.
      </p>
    </div>

    {/* 2×2 Grid */}
    <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2">
      {cards.map((card) => (
        <div
          key={card.label}
          className="relative flex aspect-3/4 flex-col items-center overflow-hidden rounded-3xl sm:aspect-4/5"
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
          <div className="relative z-10 flex flex-col items-center pt-10 text-center sm:pt-14">
            <span className="text-sm font-medium tracking-wide text-white/80 sm:text-base">
              {card.label}
            </span>
            <h3
              className="mt-2 whitespace-pre-line font-heading text-2xl font-extrabold leading-tight text-white sm:text-3xl md:text-4xl"
              style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
            >
              {card.title}
            </h3>
          </div>
        </div>
      ))}
    </div>
  </section>
);
