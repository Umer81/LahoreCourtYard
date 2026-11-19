"use client";
import { motion } from "framer-motion";
import { cues } from "../lib/data";
const box = { show: { transition: { staggerChildren: 0.09 } } };
const item = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } };

export default function Cues() {
  return (
    <motion.div className="cues" variants={box} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-15%" }}>
      {cues.map(([t, d], i) => (
        <motion.div key={t} className="cue" variants={item}>
          <span>Cue 0{i + 1}</span><h3>{t}</h3><p>{d}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
