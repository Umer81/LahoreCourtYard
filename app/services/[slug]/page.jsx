import { notFound } from "next/navigation";
import PageHead from "../../../components/PageHead";
import CTA from "../../../components/CTA";
import EventGalleries from "../../../components/EventGalleries";
import { services } from "../../../lib/data";
import { getEventGalleries } from "../../../lib/service-galleries";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) return { title: "Service not found | Lahore Courtyard" };
  return {
    title: `${service.title} | Lahore Courtyard`,
    description: service.text,
  };
}

export default async function ServiceDetail({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) notFound();
  const eventGalleries = await getEventGalleries(slug);

  return (
    <>
      <PageHead
        eyebrow="What we do"
        title={service.title}
        sub={service.text}
      />
      <section className="sec pt-0">
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <p className="eyebrow">Our approach</p>
            <h2 className="mt-4 text-2xl font-extrabold md:text-4xl">
              Thoughtful from the first brief to the final detail.
            </h2>
          </div>
          <div>
            <p className="muted text-lg">
              Every project starts with your goals and the people you want to reach. We bring the right creative, planning and production expertise together to make the experience feel seamless and purposeful.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {service.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-[var(--line)] px-4 py-2 text-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      {(slug === "artist-talks" || eventGalleries.length > 0) && (
        <section className="sec pt-0">
          {slug === "artist-talks" && (
            <div className="mb-12 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-16">
              <div>
                <p className="eyebrow">A talk at the College of Art and Design</p>
                <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
                  Seven decades of painting, shared in conversation.
                </h2>
              </div>
              <p className="muted text-lg">
                An artist talk with Mian Ijaz Ul Hassan brought audiences together at the University of the Punjab to hear the stories and ideas behind a remarkable body of work.
              </p>
            </div>
          )}
          <EventGalleries galleries={eventGalleries} />
        </section>
      )}
      <CTA
        title={<>Let's make<br />it happen.</>}
        text={`Planning ${service.title.toLowerCase()}? Tell us what you have in mind and we'll help bring it to life.`}
      />
    </>
  );
}
