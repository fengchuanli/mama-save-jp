import fs from "node:fs";
import path from "node:path";

const siteUrl = "https://fengchuanli.github.io/mama-save-jp";
const rootDir = process.cwd();
const guidesDir = path.join(rootDir, "content", "guides");
const sitemapPath = path.join(rootDir, "public", "sitemap.xml");

function toDateOnly(value) {
  if (!value) return "";
  return String(value).slice(0, 10);
}

function maxDate(values) {
  return values.map(toDateOnly).filter(Boolean).sort().at(-1) ?? "";
}

function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) return {};

  return match[1].split("\n").reduce((data, line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return data;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "");
    data[key] = value;
    return data;
  }, {});
}

function readGuides() {
  return fs
    .readdirSync(guidesDir)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .sort()
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fileContent = fs.readFileSync(path.join(guidesDir, fileName), "utf8");
      const data = parseFrontmatter(fileContent);

      return {
        slug,
        lastmod: toDateOnly(data.updatedAt ?? data.publishedAt)
      };
    });
}

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
    `    <loc>${escapeXml(`${siteUrl}${urlPath}`)}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority}</priority>`,
    "  </url>"
  ].join("\n");
}

const guides = readGuides();
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
