import Image from "next/image";

export default function EventGalleries({ galleries }) {
  return galleries.map((gallery) => (
    <section key={gallery.title} className="mb-14 last:mb-0">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="eyebrow">
            Event gallery · {gallery.items.length} {gallery.items.length === 1 ? "item" : "items"}
          </p>
          <h4 className="mt-2 text-2xl font-bold md:text-3xl">{gallery.title}</h4>
        </div>
        <span className="eyebrow">01 — {String(gallery.items.length).padStart(2, "0")}</span>
      </div>
      <div className="grid auto-rows-[10rem] grid-cols-2 gap-3 md:auto-rows-[12rem] md:grid-cols-4">
        {gallery.items.map((item, index) => (
          <figure
            key={item.src}
            className={`group relative overflow-hidden rounded-xl bg-[var(--surface2)] ${
              index === 0 || index === 2 ? "row-span-2" : index === 4 ? "col-span-2" : ""
            }`}
          >
            {item.type === "video" ? (
              <video controls preload="metadata" playsInline className="h-full w-full object-cover">
                <source src={item.src} type={item.mimeType} />
                Your browser does not support embedded video.
              </video>
            ) : (
              <Image
                src={item.src}
                alt={item.alt}
                fill
                // Tiles are 1/4 of the grid on desktop and 1/2 on mobile; the wide tile (index 4) spans two columns.
                sizes={index === 4 ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
            <figcaption className={`absolute inset-x-0 ${item.type === "video" ? "top-0 bg-gradient-to-b" : "bottom-0 bg-gradient-to-t"} from-black/70 to-transparent px-4 pb-3 pt-10 text-sm text-white`}>
              {item.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  ));
}
