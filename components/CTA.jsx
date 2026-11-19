"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA({ title, text, label = "Get in Touch" }) {
  return (
    <section className="px-[clamp(1.25rem,5vw,5rem)] pb-24 pt-8">
      <motion.div
        className="grid justify-items-center gap-5 rounded-[1.6rem] bg-[#E5CB92] px-6 py-[clamp(3rem,8vw,6rem)] text-center text-[#2E5136]"
        initial={{ opacity: 0, scale: 0.94 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-12%" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="font-extrabold leading-none">{title}</h2>
        <p className="max-w-[30rem] opacity-90">{text}</p>
        <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-[#244129] bg-[#244129] px-6 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          {label} →
        </Link>
      </motion.div>
    </section>
  );
}
