import fs from "node:fs";
import path from "node:path";

export function toDateOnly(value) {
  if (!value) return "";
  return String(value).slice(0, 10);
}

export function maxDate(values) {
  return values.map(toDateOnly).filter(Boolean).sort().at(-1) ?? "";
}

export function parseFrontmatter(fileContent) {
  const match = fileContent.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: fileContent };
  }

  const data = match[1].split("\n").reduce((acc, line) => {
    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) return acc;

    const key = line.slice(0, separatorIndex).trim();
    const value = line.slice(separatorIndex + 1).trim().replace(/^"|"$/g, "");
    acc[key] = value;
    return acc;
  }, {});

  return { data, content: match[2].trim() };
}

export function readGuides(guidesDir) {
  return fs
    .readdirSync(guidesDir)
    .filter((fileName) => fileName.endsWith(".mdx"))
    .sort()
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const filePath = path.join(guidesDir, fileName);
      const fileContent = fs.readFileSync(filePath, "utf8");
      const { data, content } = parseFrontmatter(fileContent);

      return {
        slug,
        fileName,
        filePath,
        data,
        content
      };
    });
}
