/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.nightsunstables.com",
  generateRobotsTxt: true,
  exclude: ["/studio", "/studio/*"]
};
