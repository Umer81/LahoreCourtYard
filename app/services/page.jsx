import PageHead from "../../components/PageHead";
import ServiceRows from "../../components/ServiceRows";
import Cues from "../../components/Cues";
import CTA from "../../components/CTA";
export const metadata = { title: "Services | Lahore Courtyard" };

export default function Services() {
  return (
    <>
      <PageHead eyebrow="We don't just launch things we set them in motion" title="Services" sub="Strategy, creative and execution under one roof, so nothing gets lost between the idea and the night it goes live." />
      <section className="sec"><ServiceRows /></section>
      <section className="sec">
        <div className="split"><h2>How we run<br />a show</h2><p>Every project moves through the same cue sheet, the discipline behind the spectacle.</p></div>
        <Cues />
      </section>
      <CTA title={<>Let's map<br />your run of show.</>} text="Bring the brief. We'll bring the cue sheet, the crew and the crowd." />
    </>
  );
}
