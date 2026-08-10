/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
const { createClient } = require("@sanity/client");

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2024-01-01",
  useCdn: true,
});

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.tazamaafricasafari.com",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/studio", "/studio/*", "/api/*", "/draft/*"],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/studio/*", "/draft/*"],
      },
    ],
  },

  // Per-URL overrides — give key pages higher priority than defaults
  transform: async (config, path) => {
    let priority = config.priority;
    let changefreq = config.changefreq;

    if (path === "/") {
      priority = 1.0;
      changefreq = "daily";
    } else if (path.startsWith("/tours/") && path.startsWith("/blogs/")) {
      priority = 0.9;
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },

  // Pull live itinerary slugs straight from Sanity so new/updated
  // tours show up in the sitemap without needing a fresh code deploy
  additionalPaths: async (config) => {
    const itineraries = await sanityClient.fetch(
      `*[_type == "itinerary" && defined(slug.current)]{
        "slug": slug.current,
        _updatedAt
      }`
    );

    return itineraries.map((itinerary) =>
      config.transform(config, `/tours/${itinerary.slug}`).then((entry) => ({
        ...entry,
        lastmod: itinerary._updatedAt,
        priority: 0.9,
      }))
    );
  },
};