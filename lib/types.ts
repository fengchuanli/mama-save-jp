export type SourceLevel = "official" | "authorized" | "community" | "signal" | "unknown";

export type Deal = {
  id: string;
  title: string;
  category: string;
  platform: string;
  dealType: string;
  highlight: string;
  shortPeriod: string;
  recommendationLabel: string;
  targetSummary: string;
  detailReason: string;
  originalPrice?: string;
  salePrice?: string;
  effectivePrice?: string;
  condition: string;
  bestTime: string;
  targetUser: string;
  note: string;
  url?: string;
  sourceUrl?: string;
  sourceName?: string;
  sourceLevel?: SourceLevel;
  dataStatus: "sample" | "verified";
  availabilityStatus: "unknown" | "active" | "expired" | "unavailable";
  benefitCertainty: string;
  certaintyReason: string;
  verificationScope?: string;
  whyWorthBuying: string;
  skipWhen: string;
  checkBeforeBuying: string[];
  participationSteps?: string[];
  savingsExample?: string;
  maxBenefitExample?: string;
  updatedAt: string;
  priority: "high" | "medium" | "low";
};

export type CalendarEvent = {
  id: string;
  slug: string;
  title: string;
  platform: string;
  highlight: string;
  shortSummary: string;
  keyBenefit: string;
  targetItems: string[];
  actionTip: string;
  period: string;
  detailUrl: string;
  priority: "high" | "medium" | "low";
  description: string;
  store: string;
  eventName: string;
  days: string;
  benefit: string;
  reminder: string;
  buyingTiming: "prepare" | "same-day" | "watch";
  decisionHint: string;
  checkBeforeBuying: string[];
  suitableItems: string[];
  participationSteps?: string[];
  savingsExample?: string;
  maxBenefitExample?: string;
  caution: string;
  difficulty: "easy" | "normal" | "hard";
  sourceName?: string;
  sourceUrl?: string;
  sourceLevel?: SourceLevel;
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
