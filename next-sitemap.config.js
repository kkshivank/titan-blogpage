/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl:
    process.env.SITE_URL || "https://blogpage-weld.vercel.app/blogs",
  generateRobotsTxt: true // (optional)
  // ...other options
};
