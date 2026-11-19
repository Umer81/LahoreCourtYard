import PageHead from "../../components/PageHead";
import ContactForm from "../../components/ContactForm";
import { brand } from "../../lib/data";
export const metadata = { title: "Contact | Lahore Courtyard" };

export default function Contact() {
  return (
    <>
      <PageHead eyebrow="Set something bigger in motion" title="Get in Touch" sub="Tell us what you're launching, and we'll make sure the whole country's watching." />
      <section className="sec contact">
        <dl className="info">
          <div><dt>Office</dt><dd>{brand.address[0]},<br />{brand.address[1]}</dd></div>
          <div><dt>Email</dt><dd><a href={`mailto:${brand.email}`}>{brand.email}</a></dd></div>
          <div><dt>Phone</dt><dd>{brand.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}<br /></a>)}</dd></div>
          <div><dt>Social</dt><dd><a href={brand.instagram}>Instagram</a><br /><a href={brand.linkedin}>LinkedIn</a></dd></div>
        </dl>
        <ContactForm />
      </section>
    </>
  );
}
