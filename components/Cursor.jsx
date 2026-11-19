"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 520, damping: 40 }), sy = useSpring(y, { stiffness: 520, damping: 40 });
  const [big, setBig] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const mv = (e) => { x.set(e.clientX); y.set(e.clientY); setBig(!!e.target.closest?.("a,button,input,select,textarea")); };
    window.addEventListener("pointermove", mv);
    return () => window.removeEventListener("pointermove", mv);
  }, [x, y]);
  return <motion.div className="cursor" style={{ x: sx, y: sy }} aria-hidden><i className={big ? "is-big" : ""} /></motion.div>;
}
