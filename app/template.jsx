"use client";
import { motion } from "framer-motion";
import { brand } from "../lib/data";

export default function Template({ children }) {
  return (
    <>
      <motion.div className="wipe" aria-hidden
        initial={{ y: "0%" }} animate={{ y: "-100%", transitionEnd: { display: "none" } }}
        transition={{ duration: 0.85, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}>
        <motion.span initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.4 }}>{brand.name[0]}</motion.span>
      </motion.div>
      <main>{children}</main>
    </>
  );
}
