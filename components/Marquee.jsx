import { clients } from "../lib/data";

export default function Marquee() {
  const row = [...clients, ...clients];
  return (
    <div className="marquee" aria-label="Clients">
      <div className="marquee__track">
        {row.map((c, i) => <span key={i} className="marquee__item" aria-hidden={i >= clients.length}>{c}</span>)}
      </div>
    </div>
  );
}
