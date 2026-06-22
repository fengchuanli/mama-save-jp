import fs from "node:fs";
import path from "node:path";
import { readGuides, toDateOnly } from "./content-utils.mjs";

const rootDir = process.cwd();
const guidesDir = path.join(rootDir, "content", "guides");
const datePattern = /^\d{4}-\d{2}-\d{2}$/;
const sourceLevels = ["official", "authorized", "community", "signal", "unknown"];
const errors = [];

function assert(condition, message) {
  if (!condition) errors.push(message);
}

function readJson(relativePath) {
  const filePath = path.join(rootDir, relativePath);
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`${relativePath} JSON 解析失败：${error.message}`);
    return [];
  }
}

function assertUniqueIds(items, label) {
  const seen = new Set();

  for (const item of items) {
    assert(item.id, `${label} 存在缺少 id 的条目`);
    if (!item.id) continue;
    assert(!seen.has(item.id), `${label} id 重复：${item.id}`);
    seen.add(item.id);
  }
}

function parseListField(value) {
  if (!value) return [];

  return String(value)
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((item) => item.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);
}

const siteConfig = readJson("data/site-config.json");
assert(typeof siteConfig.siteName === "string" && siteConfig.siteName.length > 0, "data/site-config.json 缺少 siteName");
assert(typeof siteConfig.siteUrl === "string" && siteConfig.siteUrl.length > 0, "data/site-config.json 缺少 siteUrl");
if (siteConfig.siteUrl) {
  try {
    const url = new URL(siteConfig.siteUrl);
    assert(url.protocol === "https:", "data/site-config.json siteUrl 需要使用 https");
  } catch {
    assert(false, "data/site-config.json siteUrl 不是合法 URL");
  }
}

const guides = readGuides(guidesDir);
assert(guides.length > 0, "content/guides 至少需要 1 篇攻略");

for (const guide of guides) {
  const label = `content/guides/${guide.fileName}`;
  const requiredFields = ["title", "description", "category", "babyAge", "readingTime", "tags"];

  for (const field of requiredFields) {
    assert(guide.data[field], `${label} 缺少 frontmatter 字段：${field}`);
  }

  const tags = parseListField(guide.data.tags);
  const publishedAt = toDateOnly(guide.data.publishedAt);
  const updatedAt = toDateOnly(guide.data.updatedAt);
  assert(publishedAt || updatedAt, `${label} publishedAt 和 updatedAt 至少需要 1 个日期`);
  if (guide.data.publishedAt) {
    assert(datePattern.test(publishedAt), `${label} publishedAt 需要使用 YYYY-MM-DD`);
  }
  if (guide.data.updatedAt) {
    assert(datePattern.test(updatedAt), `${label} updatedAt 需要使用 YYYY-MM-DD`);
  }
  assert(/^\d+\s*分钟$/.test(guide.data.readingTime ?? ""), `${label} readingTime 需要使用“数字 分钟”`);
  assert(tags.length >= 3, `${label} tags 至少需要 3 个标签`);
  assert(guide.content.length >= 200, `${label} 正文过短，可能还不是完整攻略`);
}

const deals = readJson("data/deals.json");
assert(Array.isArray(deals), "data/deals.json 顶层需要是数组");
assertUniqueIds(deals, "data/deals.json");

for (const deal of deals) {
  const label = `data/deals.json#${deal.id ?? "unknown"}`;
  const requiredFields = [
    "title",
    "category",
    "platform",
    "highlight",
    "shortPeriod",
    "recommendationLabel",
    "targetSummary",
    "detailReason",
    "condition",
    "bestTime",
    "targetUser",
    "note",
    "whyWorthBuying",
    "skipWhen",
    "checkBeforeBuying",
    "dataStatus",
    "availabilityStatus",
    "updatedAt",
    "priority"
  ];

  for (const field of requiredFields) {
    assert(deal[field], `${label} 缺少字段：${field}`);
  }

  assert(deal.highlight.length <= 24, `${label} highlight 建议控制在 24 字以内`);
  assert(deal.shortPeriod.length <= 36, `${label} shortPeriod 建议控制在 36 字以内`);
  assert(deal.recommendationLabel.length <= 12, `${label} recommendationLabel 建议控制在 12 字以内`);
  assert(deal.targetSummary.length <= 34, `${label} targetSummary 建议控制在 34 字以内`);
  assert(deal.detailReason.length <= 80, `${label} detailReason 建议控制在 80 字以内`);
  assert(["high", "medium", "low"].includes(deal.priority), `${label} priority 只能是 high / medium / low`);
  assert(["sample", "verified"].includes(deal.dataStatus), `${label} dataStatus 只能是 sample / verified`);
  assert(
    ["unknown", "active", "expired", "unavailable"].includes(deal.availabilityStatus),
    `${label} availabilityStatus 只能是 unknown / active / expired / unavailable`
  );
  assert(
    Array.isArray(deal.checkBeforeBuying) && deal.checkBeforeBuying.length >= 3,
    `${label} checkBeforeBuying 至少需要 3 项`
  );
  if (deal.sourceLevel) {
    assert(sourceLevels.includes(deal.sourceLevel), `${label} sourceLevel 不合法`);
  }
  if (deal.dataStatus === "verified") {
    assert(deal.url, `${label} 已核验优惠必须提供具体商品页或活动页 url`);
    assert(deal.sourceUrl, `${label} 已核验优惠必须提供 sourceUrl`);
    assert(deal.sourceName, `${label} 已核验优惠必须提供 sourceName`);
    assert(
      ["official", "authorized"].includes(deal.sourceLevel),
      `${label} 已核验优惠 sourceLevel 必须是 official 或 authorized`
    );
    assert(
      Array.isArray(deal.participationSteps) && deal.participationSteps.length >= 3,
      `${label} 已核验优惠必须提供至少 3 项 participationSteps`
    );
    assert(deal.savingsExample, `${label} 已核验优惠必须提供 savingsExample`);
    assert(deal.maxBenefitExample, `${label} 已核验优惠必须提供 maxBenefitExample`);
    assert(deal.verificationScope, `${label} 已核验优惠必须说明 verificationScope`);
    assert(
      deal.availabilityStatus !== "unknown",
      `${label} 已核验优惠必须明确 active / expired / unavailable`
    );
  }
  assert(datePattern.test(toDateOnly(deal.updatedAt)), `${label} updatedAt 需要使用 YYYY-MM-DD`);
}

const calendarEvents = readJson("data/shopping-calendar.json");
assert(Array.isArray(calendarEvents), "data/shopping-calendar.json 顶层需要是数组");
assertUniqueIds(calendarEvents, "data/shopping-calendar.json");

for (const event of calendarEvents) {
  const label = `data/shopping-calendar.json#${event.id ?? "unknown"}`;
  const requiredFields = [
    "store",
    "eventName",
    "days",
    "benefit",
    "reminder",
    "buyingTiming",
    "decisionHint",
    "difficulty"
  ];

  for (const field of requiredFields) {
    assert(event[field], `${label} 缺少字段：${field}`);
  }

  assert(Array.isArray(event.suitableItems) && event.suitableItems.length > 0, `${label} suitableItems 至少需要 1 项`);
  assert(
    Array.isArray(event.checkBeforeBuying) && event.checkBeforeBuying.length >= 3,
    `${label} checkBeforeBuying 至少需要 3 项`
  );
  assert(
    ["prepare", "same-day", "watch"].includes(event.buyingTiming),
    `${label} buyingTiming 只能是 prepare / same-day / watch`
  );
  assert(
    typeof event.decisionHint === "string" && event.decisionHint.length >= 12 && event.decisionHint.length <= 80,
    `${label} decisionHint 需要是 12-80 字的短判断提示`
  );
  assert(sourceLevels.includes(event.sourceLevel), `${label} sourceLevel 不合法或缺失`);
  assert(
    Array.isArray(event.participationSteps) && event.participationSteps.length >= 3,
    `${label} participationSteps 至少需要 3 项`
  );
  assert(event.savingsExample, `${label} 缺少 savingsExample`);
  assert(event.maxBenefitExample, `${label} 缺少 maxBenefitExample`);
  assert(["easy", "normal", "hard"].includes(event.difficulty), `${label} difficulty 只能是 easy / normal / hard`);
  if (event.updatedAt) {
    assert(datePattern.test(toDateOnly(event.updatedAt)), `${label} updatedAt 需要使用 YYYY-MM-DD`);
  }
}

if (errors.length > 0) {
  console.error(`内容校验失败，共 ${errors.length} 个问题：`);
  for (const error of errors) {
    console.error(`- ${error}`);
  }
  process.exit(1);
}

console.log(`内容校验通过：${guides.length} 篇攻略，${deals.length} 条优惠，${calendarEvents.length} 个日历活动。`);
