import Image from "next/image";
import Link from "next/link";
import { brand, nav } from "../lib/data";

export default function Footer() {  
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <Link href="/" className="logo" aria-label="Lahore Courtyard home">
            <Image src="/images/logo-03.webp" alt="Lahore Courtyard logo" width={200} height={200} className="block h-[120px] w-[110px] object-contain md:h-[200px] md:w-[140px]" />
          </Link>
          <p className="footer__tag">We don't just launch brands – we set them in motion. Events, PR and brand activation, from {brand.city}.</p>
          <p className="footer__social"><a href={brand.instagram}>Instagram</a><a href={brand.linkedin}>LinkedIn</a></p>
        </div>
        <div><h4>Explore</h4>{nav.map((n) => <Link key={n.href} href={n.href}>{n.label}</Link>)}</div>
        <div><h4>Contact us</h4><p>{brand.address.join(", ")}</p><a href={`mailto:${brand.email}`}>{brand.email}</a>{brand.phones.map((p) => <a key={p} href={`tel:${p.replace(/\s/g, "")}`}>{p}</a>)}</div>
      </div>
      <div className="footer__bar"><span>© {new Date().getFullYear()} {brand.name} Events &amp; PR. All rights reserved.</span><span>{brand.city}</span></div>
    </footer>
  );
}
