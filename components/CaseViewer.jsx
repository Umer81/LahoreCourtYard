"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cases } from "../lib/data";
const pad = (n) => String(n + 1).padStart(2, "0");
const v = { enter: (d) => ({ opacity: 0, x: d * 48 }), center: { opacity: 1, x: 0 }, exit: (d) => ({ opacity: 0, x: d * -48 }) };

export default function CaseViewer() {
  const L = cases.length;
  const [[i, dir], set] = useState([0, 1]);
  const go = (n, d) => set([(n + L) % L, d]);
  const c = cases[i];
  return (
    <section className="viewer">
      <div className="pills" role="tablist">
        {cases.map((x, n) => (
          <button key={x.tab} role="tab" aria-selected={n === i} className={`pill ${n === i ? "is-on" : ""}`} onClick={() => set([n, n > i ? 1 : -1])}><b>{pad(n)}</b> {x.tab}</button>
        ))}
      </div>
      <div className="viewer__bar">
        <p className="count"><span>{pad(i)}</span> / {pad(L - 1)}</p>
        <div className="arrows"><button aria-label="Previous case" onClick={() => go(i - 1, -1)}>←</button><button aria-label="Next case" onClick={() => go(i + 1, 1)}>→</button></div>
      </div>
      <AnimatePresence mode="wait" custom={dir} initial={false}>
        <motion.article key={i} className="panel" custom={dir} variants={v} initial="enter" animate="center" exit="exit" transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}>
          <div className="panel__text">
            <p className="eyebrow">Case <span className="number">{pad(i)}</span> – {c.kind}</p>
            <h2>{c.title}</h2>
            <p className="panel__meta">{c.meta}</p>
            {c.sections.map(([h, t]) => <div key={h} className="block"><h4>{h}</h4><p>{t}</p></div>)}
            <div className="tags">{c.tags.map((t) => <span key={t}>{t}</span>)}</div>
            <dl className="kpis kpis--bar">{c.stats.map(([val, l]) => <div key={l}><dt>{val}</dt><dd>{l}</dd></div>)}</dl>
          </div>
          <div className="panel__media">
            {c.video ? (
              <div className="film film--image">
                <video className="h-full w-full object-cover" controls playsInline preload="metadata" aria-label={`${c.title} video`}>
                  <source src={c.video} type="video/mp4" />
                </video>
              </div>
            ) : c.image ? (
              <div className="film film--image" style={{ "--hue": c.hue }}>
                <Image src={c.image} alt={c.title} fill sizes="(min-width: 900px) 45vw, 100vw" />
              </div>
            ) : (
              <div className="film" style={{ "--hue": c.hue }}><span className="film__tag">Launch film</span><button className="play" aria-label="Play film">▶</button></div>
            )}
            <div className="thumbs">{[0, 1, 2].map((k) => <div key={k} className="thumb" style={{ "--hue": c.hue, "--k": k }} />)}</div>
          </div>
        </motion.article>
      </AnimatePresence>
    </section>
  );
}
