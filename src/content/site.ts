/* =========================================================================
 *  LOVIFY SITE CONTENT — single source of truth
 *  -------------------------------------------------------------------------
 *  Everything a non-developer would want to change lives in this file:
 *  brand name, headlines, copy, CTA links, images, reviews, nav, footer.
 *
 *  To swap an image:
 *    1. Drop the new file in  public/assets/brand/  (or any public path)
 *    2. Change the path below, e.g.  "/assets/brand/your-image.jpg"
 *
 *  To change copy, just edit the strings.  Save → page hot-reloads.
 *  ========================================================================= */

export const site = {
  /* --------------------------------------------------------------------- */
  /*  BRAND — used in <title>, nav logo, footer, meta                      */
  /* --------------------------------------------------------------------- */
  brand: {
    name: "Lovify",
    logo: "/lovify-logo.png",
    tagline: "Press Play On The Life You Love",
    description:
      "Lovify turns your dreams into music you can feel and visions you can see. The easiest, most fun way to create a life you love.",
    copyright: "© Lovify Inc. 2026",
    /** Canonical domain used for absolute OG image URLs, sitemaps, etc. */
    url: "https://trylovify.com",
  },

  /* --------------------------------------------------------------------- */
  /*  GLOBAL CTAs — reused by Hero + ReadyBanner                           */
  /* --------------------------------------------------------------------- */
  cta: {
    downloadLabel: "Download App",
    downloadHref: "#start",
  },

  /* --------------------------------------------------------------------- */
  /*  NAVBAR                                                               */
  /* --------------------------------------------------------------------- */
  nav: {
    links: [
      { label: "About us", href: "/about" },
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  HERO — top of page                                                   */
  /* --------------------------------------------------------------------- */
  hero: {
    backgroundImage: "/assets/brand/hero.jpg",
    heading: "Press Play On The Life You Love",
    subtitle:
      "Lovify turns your dreams into music you can feel and visions you can see. It's the easiest, most fun way to create a life you love.",
    badges: [] as { title: string; subtitle: string }[],
  },

  /* --------------------------------------------------------------------- */
  /*  READY SHOWCASE — stacked image cards                                 */
  /* --------------------------------------------------------------------- */
  readyShowcase: {
    badge: "Preview",
    heading: "Ready When You Are",
    description:
      "Start with one step. One log at a time. Lovify meets you where you are and helps you move forward with clarity and confidence.",
    cards: [
      {
        image: "/assets/brand/S1.png",
        title: "",
        description:
          "Lovify helps you feel the life you want — not someday, but right now. Because the feeling is what makes it real.",
      },
      {
        image: "/assets/brand/S2.png",
        title: "",
        description:
          "Upload a selfie and Lovify shows you already living your dream. Because the more you see it, the faster you become it.",
      },
      {
        image: "/assets/brand/S3.png",
        title: "",
        description:
          "Listen daily to songs written about the version of you that already made it. Your mind learns the words. Then it starts to believe them.",
      },
      {
        image: "/assets/brand/S4.png",
        title: "",
        description:
          "Every song. Every vision. Every press of play. A small step toward a life that finally feels like yours.",
      },
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  MUSIC SHOWCASE — swiper carousel                                     */
  /* --------------------------------------------------------------------- */
  musicShowcase: {
    heading: "Everything You Need to Grow",
    slides: [
      {
        image: "/assets/brand/B2.png",
        title: "Made To Lift You Up",
        description:
          "No profanity. No negativity. Every Lovify song is written to raise your state, not lower it.",
      },
      {
        image: "/assets/brand/B3.png",
        title: "Watch Your Dream Move",
        description:
          "Turn any vision into a short cinematic loop of your future life — a mind movie you can watch anytime.",
      },
      {
        image: "/assets/brand/B1.png",
        title: "Take It Anywhere",
        description:
          "The right song for every part of your day — from morning reset to before bed, Lovify meets you there.",
      },
      {
        image: "/assets/brand/B4.png",
        title: "Gift A Song",
        description:
          "Write a personal song for someone you love. A birthday, a wedding, a healing moment — a gift they'll never forget.",
      },
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  DESIGNED FOR — 2x2 grid                                              */
  /* --------------------------------------------------------------------- */
  designedFor: {
    heading: "Designed for Every Moment",
    description:
      "From morning resets to hard moments to quiet nights — Lovify meets you where you are, all day long.",
    cards: [
      {
        label: "Mornings",
        title: "Start the day\nstrong",
        image: "/assets/brand/M1.png",
      },
      {
        label: "Hard Moments",
        title: "Feel better\nfast",
        image: "/assets/brand/M3.png",
      },
      {
        label: "Big Moments",
        title: "Walk in like\nyou own it",
        image: "/assets/brand/M2.png",
      },
      {
        label: "Evenings",
        title: "End the day\nat peace",
        image: "/assets/brand/M4.png",
      },
    ],
  },

  /* --------------------------------------------------------------------- */
  /*  TRUSTED SECTION — image mosaic                                       */
  /* --------------------------------------------------------------------- */
  trusted: {
    heading: "Crafted with Care.\nLoved Everywhere.",
    description:
      "Don't take our words for it. See why Lovify is trusted and loved by people around the world who want to feel better, grow stronger, and live with purpose.",
    images: {
      yoga: "/assets/people/p1.png",
      meditation: "/assets/people/p2.png",
      running: "/assets/people/p3.png",
      nature: "/assets/people/p4.png",
      stretch: "/assets/people/p5.png",
      mindful: "/assets/people/p6.png",
      peace: "/assets/people/p7.png",
      beach: "/assets/people/p8.png",
      sunset: "/assets/people/p9.png",
      concert: "/assets/people/p10.png",
      splash: "/assets/people/p1.png",
      fitness: "/assets/people/p2.png",
      landscape: "/assets/people/p3.png",
      calm: "/assets/people/p4.png",
      ocean: "/assets/people/p5.png",
    },
  },

  /* --------------------------------------------------------------------- */
  /*  REVIEWS MARQUEE — testimonials scroller                              */
  /* --------------------------------------------------------------------- */
  reviews: [
    {
      stars: 5,
      title: "This app changed my mornings",
      author: "sarahb_87",
      date: "Sep 14, 2025",
      quote:
        "I've tried every self-help thing out there and nothing stuck. Lovify is different because it actually feels good. My first song made me cry!!! in a good way. I play it every morning before work now. It's like having a best friend who writes the soundtrack to the life you're building.",
    },
    {
      stars: 5,
      title: "Obsessed is an understatement",
      author: "mikec.la",
      date: "Sep 09, 2025",
      quote:
        "I'm a 42 year old guy and I was skeptical. But after a breakup last year I needed something. My therapist mentioned manifestation and I found Lovify. Three months in this app has done more for me than a year of therapy. The songs are genuinely good. I have 40+ of them now.",
    },
    {
      stars: 5,
      title: "The vision feature is unreal",
      author: "jenna_rose_",
      date: "Sep 06, 2025",
      quote:
        "I uploaded a selfie and told Lovify I want to live by the ocean someday. It made me a song AND a vision of me at a beach house. I've watched the mind movie probably 50 times. I don't know how it works but something is shifting in me. Already looking at coastal rentals.",
    },
    {
      stars: 5,
      title: "My daughter loves hers too",
      author: "tamara_j",
      date: "Sep 03, 2025",
      quote:
        "I got this for myself and ended up making one for my 16-year-old who's been struggling with anxiety. Her song is called 'The Quiet Strength' and she plays it before school every day. Seeing her connect with something positive instead of doom-scrolling TikTok is worth everything.",
    },
    {
      stars: 5,
      title: "Finally, music with a purpose",
      author: "denverdad_3",
      date: "Aug 29, 2025",
      quote:
        "What I love most is the no-negativity thing. My kids listen in the car with me. No bad words, no dark energy, just real songs that actually mean something. It feels like a family app even though I use it for my own stuff too. Can't recommend enough.",
    },
    {
      stars: 5,
      title: "Gift a Song made me cry",
      author: "elena.m.r",
      date: "Aug 25, 2025",
      quote:
        "I wrote a song for my mom's 70th birthday about her life. I played it for her at dinner and our whole family was in tears. She has listened to it every day since. Money can't buy what Lovify just helped me give her. This app is special.",
    },
    {
      stars: 5,
      title: "Better than my morning coffee",
      author: "kelly.w.82",
      date: "Aug 21, 2025",
      quote:
        "I start every day with my song 'I Am The One Now.' It's 3 minutes and 18 seconds of pure reprogramming. By the time I finish my coffee I'm a different person than I was when I woke up. 30-day streak and counting.",
    },
    {
      stars: 5,
      title: "Worth every second",
      author: "marcus.t_",
      date: "Aug 17, 2025",
      quote:
        "I was going through a really hard time and my therapist actually recommended this. Three weeks in I've made 12 songs about who I want to become. I listen to them on the drive home from work instead of the news. Small shift, huge difference in how I feel.",
    },
  ],

  /* --------------------------------------------------------------------- */
  /*  READY BANNER — final CTA                                             */
  /* --------------------------------------------------------------------- */
  readyBanner: {
    heading: "Ready When You Are",
    description:
      "Start with one step. One log at a time. Lovify meets you where you are and helps you move forward with clarity and confidence.",
    image: "/assets/brand/floor2.png",
  },

  /* --------------------------------------------------------------------- */
  /*  PHONE SHOWCASE — the 4-step scroll-pinned feature tour               */
  /*  (Only titles, descriptions, and screen images are exposed here —     */
  /*   the floating UI item positions stay in the component because they   */
  /*   are tightly coupled to the animation.)                              */
  /* --------------------------------------------------------------------- */
  phoneShowcase: [
    {
      title: "Get Clear",
      description:
        "Tell Lovify what you're going through or who you want to become. It helps you shape the idea and imagine the best version of your life.",
      screen: "/assets/brand/visualize.png",
    },
    {
      title: "Make It A Song",
      description:
        "Lovify writes lyrics made just for you, then lets you pick the sound that fits your vibe. Your words. Your music. Your moment.",
      screen: "/assets/brand/3.png",
    },
    {
      title: "See Your Dream",
      description:
        "Lovify creates a custom vision of your dream life — and with one selfie, places you right inside it. Watch it come alive as a mind movie you can play anytime.",
      screen: "/assets/brand/dreams.png",
    },
    {
      title: "Feel It Daily",
      description:
        "Build a library of songs and visions you can press play on anywhere. In the car. On your walk. First thing in the morning. Wherever life happens.",
      screen: "/assets/brand/player.png",
    },
  ],

  /* --------------------------------------------------------------------- */
  /*  FOOTER                                                               */
  /* --------------------------------------------------------------------- */
  footer: {
    columns: [
      {
        title: "Company",
        links: [
          { label: "About us", href: "/about" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Product",
        links: [
          { label: "Download App", href: "/download" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Report a bug", href: "/report-bug" },
          { label: "Contact us", href: "/contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms of Service", href: "/terms" },
          { label: "Privacy Policy", href: "/privacy" },
        ],
      },
    ],
    socials: {
      instagram: "https://instagram.com",
      x: "https://x.com",
      reddit: "https://reddit.com",
      youtube: "https://youtube.com",
      facebook: "https://facebook.com",
    },
  },

  /* --------------------------------------------------------------------- */
  /*  CONTACT — reused by /contact, /report-bug, footer email links         */
  /* --------------------------------------------------------------------- */
  contact: {
    email: "support@trylovify.com",
  },

  /* --------------------------------------------------------------------- */
  /*  CANNY — board URL for /feedback, /request-feature, /roadmap          */
  /* --------------------------------------------------------------------- */
  canny: {
    url: "https://lovify.canny.io",
  },

  /* --------------------------------------------------------------------- */
  /*  SUB-PAGES — every footer route reads its copy from here               */
  /* --------------------------------------------------------------------- */
  pages: {
    about: {
      eyebrow: "About us",
      title: "Music is how we become ourselves",
      subtitle:
        "Lovify turns the life you dream about into songs you can feel and visions you can see — so the future isn't something you wait for, it's something you listen to.",
      story: [
        "Every one of us has a version of ourselves we can almost see — the one who wakes up early, speaks with confidence, moves through the world with ease. Lovify was built to shorten the distance between that version and the one you're living today.",
        "We believe music is the fastest path to change. A song you love bypasses the thinking mind and lands straight in the feeling one. That's why we built an app that writes songs about your life — the life you want, the one you're becoming — and lets you press play on it, every day, wherever you are.",
        "Paired with AI-generated visions of your dream life, Lovify makes the future feel close enough to touch. That's not manifestation theory. That's how your brain learns.",
      ],
      founders: [
        {
          name: "Peter Kell",
          role: "Founder & CEO",
          bio: "Builder. Believer. Currently becoming.",
        },
      ],
    },

    careers: {
      eyebrow: "Careers",
      title: "Help us build the soundtrack to someone's best life",
      subtitle:
        "We're a small team working on a big idea. If you want to build tools that make people feel better about their own future, we'd love to hear from you.",
      openings: [] as { role: string; location: string; href: string }[],
      emailCta:
        "We're not actively hiring yet — but we're always open to meeting extraordinary people. Send us a note and tell us what you want to build.",
    },

    faq: {
      eyebrow: "FAQ",
      title: "Questions, answered",
      subtitle:
        "Everything you need to know about how Lovify works, what's safe, what's paid, and what's coming.",
      items: [
        {
          q: "What is Lovify?",
          a: "Lovify is an app that writes personalized songs about the life you want to live — paired with AI-generated visions and mind movies of your future self. Think of it as a soundtrack and vision board for the version of you that's already on the way.",
        },
        {
          q: "How does it work?",
          a: "Tell Lovify what you're going through or who you want to become. It shapes the idea, writes lyrics just for you, and lets you pick the sound. Then it creates a vision of your dream life — and with one selfie, places you right inside it.",
        },
        {
          q: "Is the music explicit or negative?",
          a: "Never. Every Lovify song is written to raise your state, not lower it. No profanity. No dark energy. Just songs that sound like hope.",
        },
        {
          q: "Can I share or gift a song?",
          a: "Yes. Gift A Song lets you write a personal song for someone you love — a birthday, a wedding, a healing moment. A gift they'll never forget.",
        },
        {
          q: "How much does Lovify cost?",
          a: "Lovify offers a free tier with a limited number of songs and visions. Paid plans unlock unlimited creation, higher-quality audio, and priority processing. Pricing details are available inside the app.",
        },
        {
          q: "What devices is Lovify on?",
          a: "Lovify is available on iPhone. Android and web versions are on the roadmap — follow our feedback board to weigh in on what comes next.",
        },
        {
          q: "Is my data private?",
          a: "Yes. Your visions, your songs, and your selfies stay yours. We don't sell user data. Full details live in our Privacy Policy.",
        },
        {
          q: "Who's behind Lovify?",
          a: "Lovify is built by a small independent team that believes the future you're imagining deserves a soundtrack. Learn more on our About page.",
        },
      ],
    },

    contact: {
      eyebrow: "Contact",
      title: "Say hi",
      subtitle:
        "Questions, press, partnerships, or just want to tell us how Lovify is landing for you — we read every email.",
    },

    terms: {
      eyebrow: "Legal",
      title: "Terms of Service",
      subtitle: "Last updated April 23, 2026",
      body: [
        {
          heading: "1. Agreement",
          text: "By accessing or using Lovify, you agree to be bound by these Terms of Service and all applicable laws. If you do not agree, please do not use Lovify.",
        },
        {
          heading: "2. Your account",
          text: "You're responsible for keeping your account credentials secure and for all activity that happens under your account. Notify us immediately at support@trylovify.com if you suspect unauthorized access.",
        },
        {
          heading: "3. Content you create",
          text: "Songs, visions, and mind movies you generate in Lovify are yours to keep and share for personal, non-commercial use. We ask that you don't resell Lovify-generated content without our written permission.",
        },
        {
          heading: "4. Acceptable use",
          text: "Don't use Lovify to generate content that is illegal, harassing, sexually explicit, or intended to impersonate real people without consent. We reserve the right to suspend accounts that violate these principles.",
        },
        {
          heading: "5. Subscriptions & billing",
          text: "Paid plans renew automatically on their billing cycle. You can cancel anytime inside the app. Refunds are handled case-by-case — reach out and we'll do our best to make it right.",
        },
        {
          heading: "6. Changes",
          text: "We may update these terms from time to time. Material changes will be announced in the app or by email. Continuing to use Lovify after a change means you accept the revised terms.",
        },
        {
          heading: "7. Contact",
          text: "Questions about these terms? Email us at support@trylovify.com.",
        },
      ],
      placeholder:
        "This is a placeholder version of our Terms of Service while we finalize the legal copy with counsel. Nothing on this page constitutes legal advice.",
    },

    privacy: {
      eyebrow: "Legal",
      title: "Privacy Policy",
      subtitle: "Last updated April 23, 2026",
      body: [
        {
          heading: "What we collect",
          text: "We collect the information you give us when you create an account (name, email), the content you generate in Lovify (prompts, songs, visions, selfies), and basic usage analytics to help us improve the app.",
        },
        {
          heading: "How we use it",
          text: "We use your information to generate your personalized songs and visions, deliver the product, communicate with you, and improve Lovify. We don't sell your data. Ever.",
        },
        {
          heading: "Who we share it with",
          text: "We share limited data with trusted infrastructure providers (hosting, email, analytics) who help us run Lovify, under confidentiality agreements. We'll never sell your content or use it to train third-party models without your consent.",
        },
        {
          heading: "Your choices",
          text: "You can export or delete your Lovify data at any time from the app, or by emailing support@trylovify.com. Account deletion removes all associated content within 30 days.",
        },
        {
          heading: "Cookies",
          text: "We use essential cookies to keep you signed in and basic analytics cookies to understand how Lovify is used. We don't use tracking cookies for advertising.",
        },
        {
          heading: "Contact",
          text: "Questions about your privacy? Email privacy@trylovify.com.",
        },
      ],
      placeholder:
        "This is a placeholder version of our Privacy Policy while we finalize the legal copy with counsel. Nothing on this page constitutes legal advice.",
    },

    comingSoon: {
      eyebrow: "Coming soon",
      title: "Something good is on the way",
      subtitle:
        "This page doesn't exist yet, but it will. In the meantime, press play on the life you love.",
    },
  },
} as const;

export type Site = typeof site;
