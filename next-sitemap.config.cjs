/** @type {import('next-sitemap.config.cjs').IConfig} */
module.exports = {
  siteUrl: "https://www.tazamaafricasafari.com/",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      { UserAgent: "*", Disallow: " /api/*" },
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
