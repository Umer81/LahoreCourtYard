import { readdir } from "node:fs/promises";
import path from "node:path";
import { services } from "./data";

const imageFolders = {
  "artist-talks": "Artist Talk",
  "curation-of-exhibition": "Curation of Exhibitions",
  "launch-events": "Launch Events",
  "seminars-symposium": "Seminars & Symposium",
  "web-design-development": "Web Development & Design",
};
const imageExtensions = new Set([".webp"]);
const videoExtensions = new Set([".mp4", ".webm"]);
const eventTitleOverrides = {
  "culture of punjab pakistan - copp - september 26th, 2022":
    "Culture of Punjab Pakistan - September 26th, 2022",
  "6 decades of dr shaukat mehmood":
    "6 Decades of Excellence of Eminent Alumnus Dr Shaukat Mahmood - June 8th, 2022",
  "7 decades of mian ijaz ul hassan":
    "7 Decades of Mian Ijaz Ul Hassan - October 18th, 2022",
  "pakistan art chronicles": "Launch of Pakistan Art Chronicles - September 13th, 2026",
  "september 13th, 2026 - pac data":
    "Launch of Pakistan Art Chronicles - September 13th, 2026",
};

export async function getEventGalleries(slug) {
  const folderName = imageFolders[slug];
  if (!folderName) return [];

  const publicImagesRoot = path.join(process.cwd(), "public", "images");
  const serviceRoot = path.join(publicImagesRoot, folderName);
  const serviceTitle = services.find((service) => service.slug === slug)?.title || folderName;

  function isMediaFile(entry) {
    const extension = path.extname(entry.name).toLowerCase();
    return entry.isFile() && (imageExtensions.has(extension) || videoExtensions.has(extension));
  }

  function mapMediaFiles(files, folder, title) {
    return files.map((file, index) => {
      const relativePath = path.relative(publicImagesRoot, path.join(folder, file.name));
      const encodedPath = relativePath.split(path.sep).map(encodeURIComponent).join("/");
      const extension = path.extname(file.name).toLowerCase();
      const type = videoExtensions.has(extension) ? "video" : "image";
      return {
        src: `/images/${encodedPath}`,
        type,
        mimeType: type === "video" ? `video/${extension.slice(1)}` : undefined,
        alt: `${title} ${type === "video" ? "event video" : "event photo"} ${index + 1}`,
      };
    });
  }

  async function collectMedia(folder, title) {
    const entries = await readdir(folder, { withFileTypes: true });
    const files = entries
      .filter(isMediaFile)
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
    const items = mapMediaFiles(files, folder, title);
    const directories = entries
      .filter((entry) => entry.isDirectory())
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
    for (const directory of directories) {
      items.push(...(await collectMedia(path.join(folder, directory.name), title)));
    }
    return items;
  }

  function addCaptions(items) {
    return items.map((item, index) => ({ ...item, caption: String(index + 1).padStart(2, "0") }));
  }

  // A service folder can be absent from the deployed repo (e.g. one that only holds
  // videos, which aren't committed). Render no gallery instead of failing the build.
  let rootEntries;
  try {
    rootEntries = await readdir(serviceRoot, { withFileTypes: true });
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
  if (slug === "web-design-development") {
    const items = addCaptions(await collectMedia(serviceRoot, serviceTitle));
    return items.length > 0 ? [{ title: serviceTitle, items }] : [];
  }

  const galleries = [];
  const rootFiles = rootEntries.filter(isMediaFile);
  if (rootFiles.length > 0) {
    galleries.push({
      title: serviceTitle,
      items: addCaptions(mapMediaFiles(rootFiles, serviceRoot, serviceTitle)),
    });
  }

  const eventFolders = rootEntries
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: "base" }));
  for (const eventFolder of eventFolders) {
    const title = eventTitleOverrides[eventFolder.name.toLowerCase()] || eventFolder.name;
    const items = addCaptions(await collectMedia(path.join(serviceRoot, eventFolder.name), title));
    if (items.length > 0) galleries.push({ title, items });
  }

  return galleries;
}
