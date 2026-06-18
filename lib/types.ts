export type Deal = {
  id: string;
  title: string;
  category: string;
  platform: string;
  originalPrice?: string;
  salePrice?: string;
  effectivePrice?: string;
  condition: string;
  bestTime: string;
  targetUser: string;
  note: string;
  url?: string;
  whyWorthBuying: string;
  updatedAt: string;
  priority: "high" | "medium" | "low";
};

export type CalendarEvent = {
  id: string;
  store: string;
  eventName: string;
  days: string;
  benefit: string;
  reminder: string;
  suitableItems: string[];
  difficulty: "easy" | "normal" | "hard";
  sourceName?: string;
  sourceUrl?: string;
  updatedAt?: string;
};

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  babyAge: string;
  readingTime: string;
  updatedAt: string;
  publishedAt: string;
  tags: string[];
};

export type Guide = GuideMeta & {
  content: string;
};
