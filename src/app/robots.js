export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: "https://elitechauffeur.co.uk/sitemap.xml",
  };
}
