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

const schemaContext = "https://schema.org";
const siteLanguage = "zh-CN";
const audience = {
  "@type": "Audience",
  audienceType: "在日华人宝妈/宝爸"
};
const siteOrganization = {
  "@type": "Organization",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl
};
const siteWebsite = {
  "@type": "WebSite",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl
};

export const getAbsoluteUrl = (path: string) =>
  `${siteConfig.siteUrl}${path.startsWith("/") ? path : `/${path}`}`;

export const createCollectionPageJsonLd = ({
  name,
  description,
  url,
  items
}: CollectionPageInput): JsonLdObject => ({
  "@context": schemaContext,
  "@type": "CollectionPage",
  name,
  description,
  url,
  inLanguage: siteLanguage,
  isPartOf: siteWebsite,
  audience,
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
  "@context": schemaContext,
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
}: ArticleInput): JsonLdObject => {
  const timeRequired = toIsoDuration(readingTime);

  return {
    "@context": schemaContext,
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
    ...(timeRequired ? { timeRequired } : {}),
    inLanguage: siteLanguage,
    author: siteOrganization,
    publisher: siteOrganization,
    isPartOf: siteWebsite,
    audience
  };
};
