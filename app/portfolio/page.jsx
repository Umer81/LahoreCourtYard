import PageHead from "../../components/PageHead";
import CaseViewer from "../../components/CaseViewer";
import Marquee from "../../components/Marquee";
import CTA from "../../components/CTA";

export const metadata = { title: "Portfolio | Lahore Courtyard" };

export default function Portfolio() {
  return (
    <>
      <PageHead eyebrow="Before it becomes noise · before it becomes culture" title="Our Portfolio" sub="Select a case study below to explore the moments behind the noise." />
      <CaseViewer />
      <section className="sec sec--tight"><p className="eyebrow center">The brands behind the portfolio</p></section>
      <Marquee />
      <CTA title={<>Your launch,<br />our next record.</>} text="If it deserves a crowd, it deserves us. Let's build the next case study together." />
    </>
  );
}