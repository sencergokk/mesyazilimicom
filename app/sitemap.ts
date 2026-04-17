import type { MetadataRoute } from "next";
import { cities } from "@/lib/cities-data";

const blogSlugs = [
  "mes-yazilimi-nedir",
  "mes-ve-erp-farklari",
  "endustri-4-0-ve-mes",
  "mes-yazilimi-nasil-secilir",
  "oee-nedir-mes-ile-uretim-verimliligi",
  "mes-yazilimi-roi-yatirim-getirisi",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mesyazilimi.com";
  const now = new Date();

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const cityRoutes: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${baseUrl}/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [...routes, ...cityRoutes, ...blogRoutes];
}
