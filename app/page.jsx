import Link from "next/link";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import WorkPreview from "../components/WorkPreview";
import CTA from "../components/CTA";
import { services } from "../lib/data";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="px-[clamp(1.25rem,5vw,5rem)] py-[clamp(3.5rem,8vw,7rem)]">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="relative pl-5 font-extrabold tracking-[-0.045em] before:absolute before:left-0 before:top-[0.25em] before:h-[1.2em] before:w-[2px] before:bg-[#E5CB92] before:content-['']">
            Trusted by the big names
          </h2>
          <p className="max-w-[26rem] text-[#5f564d] md:justify-self-end">
            From F&amp;B and beauty to automotive and FMCG, brands come to us when the moment has to land.
          </p>
        </div>
      </section>
       <Marquee /> 
      <section className="px-[clamp(1.25rem,5vw,5rem)] py-[clamp(3.5rem,8vw,7rem)]">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="relative pl-5 font-extrabold tracking-[-0.045em] before:absolute before:left-0 before:top-[0.25em] before:h-[1.2em] before:w-[2px] before:bg-[#E5CB92] before:content-['']">
            Selected work
          </h2>
          <p className="max-w-[26rem] text-[#5f564d] md:justify-self-end">
            Two moments that show the range: a record-breaking debut and an immersive employee gala.
          </p>
        </div>
        <WorkPreview />
      </section>
      <section className="px-[clamp(1.25rem,5vw,5rem)] py-[clamp(3.5rem,8vw,7rem)]">
        <div className="mb-12 grid gap-8 md:grid-cols-2 md:items-end">
          <h2 className="relative pl-5 font-extrabold tracking-[-0.045em] before:absolute before:left-0 before:top-[0.25em] before:h-[1.2em] before:w-[2px] before:bg-[#E5CB92] before:content-['']">
            What we do
          </h2>
          <p className="max-w-[26rem] text-[#5f564d] md:justify-self-end">
            Four disciplines, one team: strategy, creative and execution that never get lost in a handoff.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Link href={`/services/${s.slug}`} key={s.slug} className="group relative grid aspect-[5/4] gap-3 overflow-hidden rounded-[1.1rem] border border-[rgba(54,41,26,0.12)] bg-[#F7F0E7] p-8 transition-transform duration-300 hover:-translate-y-1">
              <span className="text-[0.8rem] font-medium uppercase tracking-[0.1em] text-[#2E5136]">0{i + 1}</span>
              <h3 className="font-bold tracking-[-0.03em]">{s.title}</h3>
              <p className="text-[#5f564d]">{s.text.split(":")[0].split(".")[0]}.</p>
              <em className="text-[0.72rem] uppercase tracking-[0.08em] text-[#5f564d]">{s.tags.slice(0, 3).join(" · ")}</em>
              <span className="absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-[#E5CB92] transition-transform duration-500 group-hover:scale-x-100" />
            </Link>
          ))}
        </div>
      </section>
      <CTA title={<>Ready to step<br />into the spotlight?</>} text="Tell us what you're launching. We'll make sure the whole country's watching." />
    </>
  );
}
