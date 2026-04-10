import type { MetadataRoute } from "next";

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

  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
