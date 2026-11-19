import { workplace } from "../lib/data";

export default function Gallery() {
  return (
    <div className="gallery">
      {workplace.map((w, i) => (
        <figure key={w} className="tile" style={{ "--k": i }}>
          {/* Replace with <Image src=... fill /> */}
          <figcaption>{w}</figcaption>
        </figure>
      ))}
    </div>
  );
}
