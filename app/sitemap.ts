import { MetadataRoute } from "next";

const BASE_URL = "https://porlucoffee.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    {
      en: "/",
      id: "/id",
      priority: 1,
    },
    {
      en: "/products",
      id: "/id/produk",
      priority: 0.8,
    },
    {
      en: "/about",
      id: "/id/tentang-kami",
      priority: 0.8,
    },
    {
      en: "/collaborate",
      id: "/id/kolaborasi",
      priority: 0.8,
    },
    {
      en: "/contact",
      id: "/id/kontak",
      priority: 0.8,
    },
  ];

  return pages.flatMap((page) => {
    const enUrl = `${BASE_URL}${page.en}`;
    const idUrl = `${BASE_URL}${page.id}`;

    return [
      {
        url: enUrl,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: page.priority,
        alternates: {
          languages: {
            en: enUrl,
            id: idUrl,
            "x-default": enUrl,
          },
        },
      },
      {
        url: idUrl,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: page.priority,
        alternates: {
          languages: {
            en: enUrl,
            id: idUrl,
            "x-default": enUrl,
          },
        },
      },
    ];
  });
}
