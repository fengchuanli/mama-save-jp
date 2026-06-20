import fs from "node:fs";
import path from "node:path";
import { maxDate, readGuides, toDateOnly } from "./content-utils.mjs";

const rootDir = process.cwd();
const guidesDir = path.join(rootDir, "content", "guides");
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");
const siteConfig = JSON.parse(
  fs.readFileSync(path.join(rootDir, "data", "site-config.json"), "utf8")
);

function readJsonDates(relativePath, fieldName) {
  const fileContent = fs.readFileSync(path.join(rootDir, relativePath), "utf8");
  return JSON.parse(fileContent).map((item) => item[fieldName]);
}

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderUrl({ path: urlPath, lastmod, changefreq, priority }) {
  return [
    "  <url>",
    `    <loc>${escapeXml(`${siteConfig.siteUrl}${urlPath}`)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}

const guides = readGuides(guidesDir).map((guide) => ({
  slug: guide.slug,
  lastmod: toDateOnly(guide.data.updatedAt ?? guide.data.publishedAt)
}));
const latestGuideDate = maxDate(guides.map((guide) => guide.lastmod));
const latestDealDate = maxDate(readJsonDates("data/deals.json", "updatedAt"));
const latestCalendarDate = maxDate(readJsonDates("data/shopping-calendar.json", "updatedAt"));
const latestSiteDate = maxDate([latestGuideDate, latestDealDate, latestCalendarDate]);

const urls = [
  { path: "/", lastmod: latestSiteDate, changefreq: "weekly", priority: "1.0" },
  { path: "/deals/", lastmod: latestDealDate, changefreq: "weekly", priority: "0.9" },
  { path: "/calendar/", lastmod: latestCalendarDate, changefreq: "monthly", priority: "0.8" },
  { path: "/guides/", lastmod: latestGuideDate, changefreq: "weekly", priority: "0.8" },
  ...guides.map((guide) => ({
    path: `/guides/${guide.slug}/`,
    lastmod: guide.lastmod,
    changefreq: "monthly",
    priority: "0.7"
  }))
];

const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(renderUrl),
  "</urlset>",
  ""
].join("\n");

fs.writeFileSync(sitemapPath, sitemap);
console.log(`Generated ${path.relative(rootDir, sitemapPath)} with ${urls.length} URLs.`);
