import PageHead from "../../components/PageHead";
import Team from "../../components/Team";
import Gallery from "../../components/Gallery";
import CTA from "../../components/CTA";
import { Num } from "../../components/Stats";
import { departments, perks, brand } from "../../lib/data";
export const metadata = { title: "About | Lahore Courtyard" };

export default function About() {
  return (
    <>
      <PageHead eyebrow="Who's behind the noise" title="About Us" sub="" className="head--about" />
      <section className="sec about about--intro">
        <div>
          <p className="lead">{brand.name} is a dynamic Events, PR and brand-activation agency, creating tailor-made experiences that resonate with modern audiences. We combine strategy, creativity and execution to deliver campaigns that spark conversations, drive virality and achieve real business results.</p>
          <p className="muted">For 10+ years we've worked at the front of the region's events and influencer-marketing scene, building the launches, activations and campaigns people remember.</p>
        </div>
        <div className="bignum"><b><Num value={10} suffix="+" /></b><span>We've been exceeding our clients' expectations for over 10 years!</span></div>
      </section>
      <section className="sec">
        <div className="split"><h2>Meet the<br />main characters</h2><p>The operators who've been in the room for every record we've broken, on stage, as always.</p></div>
        <Team />
      </section>
      <section className="sec">
        <div className="split"><h2>Our<br />departments</h2><p>A full in-house team across seven departments, from operations and creative to PR, business development, HR and accounts.</p></div>
        <div className="tags tags--lg">{departments.map((d) => <span key={d}>{d}</span>)}</div>
      </section>
      <section className="sec">
        <div className="split"><h2>The<br />workplace</h2><p>{brand.address[0]}, {brand.city}, a space built for people who create, not just sell.</p></div>
        <Gallery />
        <div className="perks">{perks.map(([k, t, d]) => <div key={t} className="perk"><span>{k}</span><h4>{t}</h4><p>{d}</p></div>)}</div>
      </section>
      <CTA title={<>Want this team<br />on your brand?</>} text="Strategy, creative and production, all in one room. Let's talk." />
    </>
  );
}
