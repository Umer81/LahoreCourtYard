"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cases } from "../lib/data";

export default function WorkPreview() {
  return (
    <div className="previews">
      {cases.slice(0, 2).map((c, i) => (
        <motion.div key={c.tab} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ duration: 0.8, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}>
          <article className="pcard">
            {c.video ? (
              <div className="film film--image">
                <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label={`${c.title} video`}>
                  <source src={c.video} type="video/mp4" />
                </video>
              </div>
            ) : c.image ? (
              <div className="film film--image" style={{ "--hue": c.hue }}>
                <Image src={c.image} alt={c.title} fill sizes="(min-width: 900px) 50vw, 100vw" />
              </div>
            ) : (
              <div className="film" style={{ "--hue": c.hue }}><span className="film__tag">Watch film</span><span className="play">▶</span></div>
            )}
            <div className="pcard__body">
              <p className="eyebrow"><span className="number">0{i + 1}</span> · {c.kind}</p>
              <h3><Link href="/portfolio">{c.title}</Link></h3>
              <p>{c.sections[0][1]}</p>
              <dl className="kpis">{c.stats.slice(0, 3).map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}</dl>
              <div className="tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
            </div>
          </article>
        </motion.div>
      ))}
    </div>
  );
}
