import type { MetadataRoute } from "next";

const siteUrl = "https://formaprima.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${siteUrl}/`, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/revendedor`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/materiais`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteUrl}/portfolio`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/orcamento`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/contato`, lastModified, changeFrequency: "monthly", priority: 0.7 },
  ];
}
