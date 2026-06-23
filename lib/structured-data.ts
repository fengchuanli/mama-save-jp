import { siteConfig } from "@/lib/site";

type JsonLdObject = Record<string, unknown>;

type CollectionPageInput = {
  name: string;
  description: string;
  url: string;
  items: JsonLdObject[];
};

type BreadcrumbItem = {
  name: string;
  item: string;
};

type ArticleInput = {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt: string;
  section: string;
  tags: string[];
  readingTime?: string;
};

type ListItemInput = {
  position: number;
  name: string;
  url: string;
  description: string;
  item?: JsonLdObject;
};

export const getAbsoluteUrl = (path: string) =>
  `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const createCollectionPageJsonLd = ({
  name,
  description,
  url,
  items
}: CollectionPageInput): JsonLdObject => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name,
  description,
  url,
  inLanguage: "zh-CN",
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl
  },
  audience: {
    "@type": "Audience",
    audienceType: "在日华人宝妈/宝爸"
  },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: items
  }
});

export const createListItemJsonLd = ({
  position,
  name,
  url,
  description,
  item
}: ListItemInput): JsonLdObject => ({
  "@type": "ListItem",
  position,
  name,
  url,
  description,
  ...(item ? { item } : {})
});

export const createBreadcrumbJsonLd = (items: BreadcrumbItem[]): JsonLdObject => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "首页",
      item: siteConfig.siteUrl
    },
    ...items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 2,
      ...item
    }))
  ]
});

const toIsoDuration = (readingTime?: string) => {
  const minutes = readingTime?.match(/(\d+)/)?.[1];
  return minutes ? `PT${minutes}M` : undefined;
};

export const createArticleJsonLd = ({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  section,
  tags,
  readingTime
}: ArticleInput): JsonLdObject => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": url
  },
  datePublished: publishedAt,
  dateModified: updatedAt,
  articleSection: section,
  keywords: tags,
  ...(toIsoDuration(readingTime) ? { timeRequired: toIsoDuration(readingTime) } : {}),
  inLanguage: "zh-CN",
  author: {
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl
  },
  publisher: {
    "@type": "Organization",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl
  },
  isPartOf: {
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: siteConfig.siteUrl
  },
  audience: {
    "@type": "Audience",
    audienceType: "在日华人宝妈/宝爸"
  }
});
