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
  month: string;
  title: string;
  platform: string;
  bestFor: string;
  reminder: string;
  tags: string[];
};

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  category: string;
  babyAge: string;
  readingTime: string;
  updatedAt: string;
};

export type Guide = GuideMeta & {
  content: string;
};
