"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const reviews = [
  {
    stars: 5,
    title: "This is the Health app you are looking for",
    author: "the real wayne",
    date: "Aug 12, 2025",
    quote:
      "Truly wellness at mind is what this app is for. Metrics to back it up. Are you recovered? Recovery over time? Stress over time. It\u2019s got it all. The best health and wellness app that Apple should\u2019ve had built right into the Apple Watch all along.",
  },
  {
    stars: 5,
    title: "Fantastic App",
    author: "CFHW",
    date: "Aug 12, 2025",
    quote:
      "This app does exactly what it needs to do. If you wear the Apple Watch, the data is not processed, shown in an appropriate way in Apple health and is basically useless. With this app you can get a fantastic overview of sleep, recovery and strain.",
  },
  {
    stars: 5,
    title: "Never leaving",
    author: "Isaac_andy97",
    date: "Sep 09, 2025",
    quote:
      "24 hours into using Lovify! Absolutely incredible. It is beautifully designed, easy to use, easy to understand. Such a new app too so I\u2019m so excited to see how it grows!",
  },
  {
    stars: 5,
    title: "Great and Useful App",
    author: "Chinatiger0000",
    date: "Sep 01, 2025",
    quote:
      "This app is incredibly useful for tracking my sleep and workouts! I think that the numbers are incredibly accurate compared to other apps and it really helps me plan my day.",
  },
  {
    stars: 5,
    title: "Amazing slick app with a great roadmap",
    author: "Ghosal",
    date: "Aug 31, 2025",
    quote:
      "This app is superb. It\u2019s not long been released but is very polished. Great interface and the developer has a great roadmap that aspires to be the best of its kind.",
  },
  {
    stars: 5,
    title: "Life changing experience",
    author: "MindfulMike",
    date: "Oct 15, 2025",
    quote:
      "Lovify has completely transformed my daily routine. The music and visualization features are unlike anything I\u2019ve tried. I feel more focused and at peace every single day.",
  },
];

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 25 25" fill="none">
    <path
      d="M12.02 2.46c.21-.67 1.16-.67 1.37 0l1.85 5.67a1 1 0 0 0 .93.5h5.97c.7 0 .99.9.42 1.31l-4.83 3.51a1 1 0 0 0-.36.8l1.84 5.68c.22.66-.54 1.22-1.1.8l-4.83-3.5a1 1 0 0 0-1.17 0l-4.83 3.5c-.57.42-1.33-.14-1.11-.8l1.84-5.68a1 1 0 0 0-.36-.8L2.1 9.94c-.57-.41-.28-1.31.42-1.31h5.97a1 1 0 0 0 .93-.5l1.84-5.67Z"
      fill="#FF9500"
    />
  </svg>
);

const ReviewCard = ({ review }: { review: (typeof reviews)[0] }) => (
  <div className="w-full max-w-[384px] shrink-0 rounded-3xl bg-white p-7 shadow-[0_6px_24px_#00000014]">
    <div>
      <div className="flex gap-0.5">
        {Array.from({ length: review.stars }).map((_, i) => (
          <StarIcon key={i} />
        ))}
      </div>
      <h3 className="mt-2 font-heading text-lg font-bold text-text">
        {review.title}
      </h3>
      <p className="mt-1 text-base font-medium text-text-light">
        {review.author}, {review.date}
      </p>
    </div>
    <p className="mt-4 text-lg leading-normal font-medium" style={{ color: "#222326" }}>
      &ldquo;{review.quote}&rdquo;
    </p>
  </div>
);

export const ReviewsMarquee = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Measure half width (since items are duplicated)
    const halfWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: -halfWidth,
      duration: 40,
      ease: "none",
      repeat: -1,
    });

    const slow = () => gsap.to(tweenRef.current!, { timeScale: 0.3, duration: 0.5 });
    const fast = () => gsap.to(tweenRef.current!, { timeScale: 1, duration: 0.5 });

    track.addEventListener("mouseenter", slow);
    track.addEventListener("mouseleave", fast);

    return () => {
      track.removeEventListener("mouseenter", slow);
      track.removeEventListener("mouseleave", fast);
      tweenRef.current?.kill();
    };
  }, []);

  const items = [...reviews, ...reviews];

  return (
    <section className="w-full overflow-hidden bg-white pb-20 pt-4">
      <div ref={trackRef} className="flex w-max gap-5">
        {items.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </section>
  );
};
