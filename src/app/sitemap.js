export default function sitemap() {
  const baseUrl = "https://resonance-elite.com";

  const staticRoutes = [
    "",
    "/about",
    "/products",
    "/brands",
    "/services",
    "/projects",
    "/contact",
    "/privacy-policy",
    "/refund-policy",
    "/terms-and-conditions",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));

  return staticRoutes;
}