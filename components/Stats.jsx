"use client";
import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import { stats } from "../lib/data";

export function Num({ value, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.8, delay: 0.3, ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { if (ref.current) ref.current.textContent = `${prefix}${Math.round(v)}${suffix}`; } });
    return () => c.stop();
  }, [inView, value, prefix, suffix]);
  return <span ref={ref}>{prefix}0{suffix}</span>;
}

export default function StatRow() {
  return (
    <div className="hero__stats">
      {stats.map((s) => <div key={s.label}><b><Num {...s} /></b><span>{s.label}</span></div>)}
    </div>
  );
}
