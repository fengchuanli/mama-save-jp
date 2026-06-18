import fs from "fs";
import path from "path";
import type { Guide, GuideMeta } from "./types";

const guidesDirectory = path.join(process.cwd(), "content", "guides");

function parseFrontmatter(fileContent: string) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const data = match[1].split("\n").reduce<Record<string, string>>((acc, line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return acc;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "");
    acc[key] = value;
    return acc;
  }, {});

  return { data, content: match[2].trim() };
}

function parseTags(value?: string) {
  if (!value) return [];

  return value
    .replace(/^\[|\]$/g, "")
    .split(",")
    .map((tag) => tag.trim().replace(/^"|"$/g, ""))
    .filter(Boolean);
}

export function getGuideSlugs() {
  return fs
    .readdirSync(guidesDirectory)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => fileName.replace(/\.mdx$/, ""));
}

export function getGuideBySlug(slug: string): Guide {
  const fullPath = path.join(guidesDirectory, `${slug}.mdx`);
  const fileContent = fs.readFileSync(fullPath, "utf8");
  const { data, content } = parseFrontmatter(fileContent);

  return {
    slug,
    title: data.title ?? slug,
    description: data.description ?? "",
    category: data.category ?? "攻略",
    babyAge: data.babyAge ?? "0-3 岁",
    readingTime: data.readingTime ?? "3 分钟",
    updatedAt: data.updatedAt ?? data.publishedAt ?? "",
    publishedAt: data.publishedAt ?? data.updatedAt ?? "",
    tags: parseTags(data.tags),
    content
  };
}

export function getAllGuides(): GuideMeta[] {
  return getGuideSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = getGuideBySlug(slug);
      return meta;
    })
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}
