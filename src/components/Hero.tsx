"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AppleIcon } from "@/components/ui/AppleIcon";
import { StaggerButton } from "@/components/ui/StaggerButton";
import { LaurelBadge } from "@/components/ui/LaurelBadge";

export const Hero = () => (
  <section className="relative flex min-h-screen w-full flex-col items-center justify-end overflow-hidden pb-16">
    <Image src="/assets/bg.avif" alt="" fill priority className="object-cover" />

    <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-heading text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.1] tracking-tight text-white"
      >
        Transform Your Life
        <br />
        Through Music
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80"
      >
        The first app that uses personalized music and visualization to
        reprogram your subconscious mind and create the life you want.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-8"
      >
        <StaggerButton
          text="Download App"
          href="#start"
          icon={<AppleIcon size={18} />}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-8 text-white"
      >
        <LaurelBadge title="Apple Watch" subtitle="Spotlight" />
        <LaurelBadge title="New and" subtitle="Noteworthy" />
      </motion.div>
    </div>
  </section>
);
