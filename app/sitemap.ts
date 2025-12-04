import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.tectrium-rhein-main.de";
  return [
    {
      url: base,
      lastModified: new Date()
    }
  ];
}
