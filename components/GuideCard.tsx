import Link from "next/link";
import type { GuideMeta } from "@/lib/types";
import { CardVisual, getGuideVisual } from "@/components/VisualMotif";

type GuideCardProps = {
  guide: GuideMeta;
  contextLabel?: string;
  mobileCompact?: boolean;
};

export function GuideCard({ guide, contextLabel, mobileCompact = false }: GuideCardProps) {
  const cardPadding = mobileCompact ? "p-4 sm:p-5" : "p-5";
  const tagGroupClass = mobileCompact
    ? "mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2"
    : "mb-4 flex flex-wrap gap-2";
  const titleClass = mobileCompact
    ? "text-base font-semibold leading-6 text-ink sm:text-lg sm:leading-7"
    : "text-lg font-semibold text-ink";
  const descriptionClass = mobileCompact
    ? "mt-2 text-sm leading-6 text-stone-600 sm:mt-3 sm:text-base sm:leading-7"
    : "mt-3 leading-7 text-stone-600";
  const metaClass = mobileCompact ? "mt-3 text-sm text-stone-500 sm:mt-5" : "mt-5 text-sm text-stone-500";

  return (
    <Link
      href={`/guides/${guide.slug}`}
      className={`block h-full rounded-lg border border-emerald-100 bg-white shadow-soft transition hover:-translate-y-0.5 hover:border-emerald-200 ${cardPadding}`}
    >
      <div className={mobileCompact ? "hidden sm:block" : undefined}>
        <CardVisual label={guide.category} tone="green" variant={getGuideVisual(guide)} />
      </div>
      <div className={tagGroupClass}>
        <span className="rounded-full bg-linen px-2.5 py-1 text-xs text-stone-700 sm:px-3">
          {guide.category}
        </span>
        {(guide.tags.length ? guide.tags.slice(0, 2) : [guide.babyAge]).map((tag) => (
          <span key={tag} className="rounded-full bg-mist px-2.5 py-1 text-xs text-stone-700 sm:px-3">
            {tag}
          </span>
        ))}
      </div>
      {contextLabel ? (
        <p className="mb-2 text-xs font-semibold text-tea">{contextLabel}</p>
      ) : null}
      <h3 className={titleClass}>{guide.title}</h3>
      <p className={descriptionClass}>{guide.description}</p>
      <p className={metaClass}>
        {guide.readingTime} · 发布 {guide.publishedAt || guide.updatedAt}
      </p>
    </Link>
  );
}

export function GuideShelfCard({ guide }: { guide: GuideMeta }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="block h-full rounded-lg border border-emerald-100 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-emerald-200"
    >
      <CardVisual label={guide.category} tone="green" variant={getGuideVisual(guide)} />
      <div className="mb-3 flex flex-wrap gap-2">
        <span className="whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs text-stone-700">
          {guide.category}
        </span>
        <span className="whitespace-nowrap rounded-full bg-mist px-3 py-1 text-xs text-stone-700">
          {guide.readingTime}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-7 text-ink">{guide.title}</h3>
      <p className="mt-2 text-sm leading-6 text-stone-600">{guide.description}</p>
      <span className="mt-4 inline-flex whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700">
        查看详情
      </span>
    </Link>
  );
}
