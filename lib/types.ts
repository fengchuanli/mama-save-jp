export type Deal = {
  id: string;
  title: string;
  category: string;
  babyAge: string;
  platform: string;
  regularPrice: string;
  goodPrice: string;
  currentPrice: string;
  savingTip: string;
  reason: string;
  caution: string;
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
