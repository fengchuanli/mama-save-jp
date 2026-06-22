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
