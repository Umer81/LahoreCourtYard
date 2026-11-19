"use client";
import { motion } from "framer-motion";
import { team } from "../lib/data";

export default function Team() {
  return (
    <div className="stage">
      {team.map((p, i) => (
        <motion.div key={p.role} className="badge" style={{ transformOrigin: "50% 0" }}
          initial={{ rotate: i ? -3 : 3 }} animate={{ rotate: i ? 3 : -3 }}
          transition={{ duration: 3.4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: i * 0.5 }}>
          <span className="badge__strap" /><span className="badge__clip" />
          <div className="badge__card">
            <h3>{p.name[0]}<br />{p.name[1]}</h3><p>{p.role}</p>
            {/* Replace with a cut-out photo */}
            <div className="badge__photo" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
