import type { MetadataRoute } from "next";
import { siteConfig, services } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/industries",
    "/how-it-works",
    "/trust-and-process",
    "/insights",
    "/contact",
    "/start-sourcing-request",
    "/privacy-policy",
    "/terms",
  ];

  const serviceRoutes = services.map((service) => service.href);

  const routes = [...staticRoutes, ...serviceRoutes];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("start-sourcing-request") ? 0.9 : 0.7,
  }));
}