import Link from "next/link";
import { services } from "../lib/data";

export default function ServiceRows() {
  return (
    <div className="service-grid">
      {services.map((service, index) => (
        <Link
          key={service.slug}
          href={`/services/${service.slug}`}
          className={`service-card ${
            index % 3 === 0 || index % 3 === 2 ? "service-card--wide" : ""
          }`}
          aria-label={`Learn more about ${service.title}`}
        >
          <div className="service-card__content">
            <div className="service-card__top">
              <span className="service-card__number">0{index + 1}</span>
              <span className="service-card__arrow">↗</span>
            </div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.text.split(".")[0]}.</p>
              <span className="service-card__link">Know more <b>→</b></span>
            </div>
          </div>
          <div className="service-card__visual" aria-hidden="true">
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
