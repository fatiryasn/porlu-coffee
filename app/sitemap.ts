import { MetadataRoute } from "next";

const routes = [
  "",
  "/products",
  "/about",
  "/collaborations",
  "/contact",

  "/id",
  "/id/produk",
  "/id/tentang-kami",
  "/id/kolaborasi",
  "/id/kontak",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://porlucoffee.com${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" || route === "/id" ? 1 : 0.8,
  }));
}
