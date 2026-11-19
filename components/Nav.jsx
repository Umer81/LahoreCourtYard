"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { nav } from "../lib/data";

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [path]);

  return (
    <header
      className={[
        "fixed inset-x-0 top-0 z-50 flex items-center justify-between px-[clamp(1.25rem,5vw,5rem)] py-4 transition-all duration-300",
        solid ? "border-b border-[#2E5136]/10 bg-[#EFE7D5]/80 backdrop-blur-md" : "bg-transparent",
      ].join(" ")}
    >
      <Link href="/" className="inline-flex items-center justify-center" aria-label="Lahore Courtyard home">
        <Image src="/images/lahore-courtyard-logo.webp" alt="Lahore Courtyard logo" width={96} height={104} priority className="block h-[84px] w-[77px] object-contain md:h-[104px] md:w-[96px]" />
      </Link>

      <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-9 md:flex" aria-label="Primary navigation">
        {nav.map((n) => (
          <Link
            key={n.href}
            href={n.href}
            className={[
              "relative px-0 py-2 text-[0.78rem] font-medium uppercase tracking-[0.12em] transition-colors",
              path === n.href ? "text-[#2E5136]" : "text-[#5f564d] hover:text-[#2E5136]",
            ].join(" ")}
          >
            {n.label}
            {path === n.href && <motion.i layoutId="nav-u" className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-[#E5CB92]" />}
          </Link>
        ))}
      </nav>

      <Link
        href="/contact"
        className="hidden rounded-full border border-[#244129] bg-[#244129] px-5 py-2 text-[0.82rem] font-semibold uppercase tracking-[0.06em] text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-brand md:inline-flex"
      >
        Get in touch
      </Link>

      <button
        className="relative h-9 w-9 rounded-full border-0 bg-[#244129] md:hidden"
        aria-label="Menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="absolute left-2 right-2 h-[2px] rounded-full bg-white" style={{ top: "0.85rem" }} />
        <span className="absolute left-2 right-2 h-[2px] rounded-full bg-white" style={{ top: "1.3rem" }} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[-1] grid place-content-center gap-5 bg-[#EFE7D5] p-6 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="text-4xl font-semibold text-[#2E5136]">
                {n.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
