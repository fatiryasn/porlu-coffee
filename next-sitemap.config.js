/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://porlucoffee.com",
  generateRobotsTxt: true,
  outDir: "./out",
  alternateRefs: [
    {
      href: "https://porlucoffee.com",
      hreflang: "en",
    },
    {
      href: "https://porlucoffee.com/id/",
      hreflang: "id",
    },
  ],
};
