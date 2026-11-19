"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import StatRow from "./Stats";
import { brand } from "../lib/data";

const d = 0.85;

export default function Hero() {
  const line = (i, children) => (
    <span className="mask">
      <motion.span
        className="mask__inner"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.05, delay: d + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );

  return (
    <section className="relative grid min-h-[100svh] items-center overflow-hidden px-[clamp(1.25rem,5vw,5rem)] pb-12 pt-[10rem] md:pt-48">
      {/* Endless float runs as a CSS animation so it stays on the compositor instead of a JS frame loop. */}
      <div
        className="hero-float pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 select-none text-[clamp(18rem,34vw,32rem)] font-extrabold leading-none text-white/5"
        style={{ fontFamily: "var(--font-display), sans-serif" }}
        aria-hidden
      >
        {brand.name[0]}
      </div>

      <div className="relative z-10 grid max-w-[62rem] gap-7">
        <motion.p className="text-[0.72rem] uppercase tracking-[0.16em] text-[#5f564d]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: d }}>
          Events · PR · Activations · Influencer Marketing
        </motion.p>

        <h1 className="text-[clamp(1.8rem,4.5vw,3.5rem)] font-extrabold leading-[0.95] tracking-[-0.045em]">
          {line(0, "We don't just launch brands –")}
          {line(1, <span className="text-[#2E5136]">We set them in motion.</span>)}
        </h1>

        <motion.p className="max-w-[36rem] text-[1.05rem] text-[#5f564d]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: d + 0.6, duration: 0.8 }}>
          {brand.name} is an Events, PR and brand-activation agency. We draw back the curtain and make brands step into the spotlight, turning launches into landmarks and campaigns into culture.
        </motion.p>

        <motion.div className="flex flex-wrap gap-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: d + 0.75 }}>
          <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-[#244129] bg-[#244129] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-brand">
            See the portfolio →
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#244129] bg-[#244129] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand">
            Get in Touch
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: d + 0.95 }}>
          {/* <StatRow /> */}
        </motion.div>
      </div>
    </section>
  );
}
