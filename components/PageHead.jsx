"use client";
import { motion } from "framer-motion";
const ease = [0.22, 1, 0.36, 1];

export default function PageHead({ eyebrow, title, sub, className = "" }) {
  return (
    <header className={`head ${className}`}>
      <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>{eyebrow}</motion.p>
      <h1 className="head__title"><span className="mask"><motion.span className="mask__inner" initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 1, delay: 0.8, ease }}>{title}</motion.span></span></h1>
      {sub && <motion.p className="head__sub" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.7 }}>{sub}</motion.p>}
    </header>
  );
}
