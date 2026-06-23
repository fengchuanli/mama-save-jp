import Link from "next/link";
import type { GuideMeta } from "@/lib/types";

type GuideCardProps = {
  guide: GuideMeta;
  contextLabel?: string;
};

export function GuideCard({ guide, contextLabel }: GuideCardProps) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="block rounded-lg border border-stone-200 bg-white p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-peach"
    >
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full bg-linen px-3 py-1 text-xs text-stone-700">
          {guide.category}
        </span>
        {(guide.tags.length ? guide.tags.slice(0, 2) : [guide.babyAge]).map((tag) => (
          <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs text-stone-700">
            {tag}
          </span>
        ))}
      </div>
      {contextLabel ? (
        <p className="mb-2 text-xs font-semibold text-tea">{contextLabel}</p>
      ) : null}
      <h3 className="text-lg font-semibold text-ink">{guide.title}</h3>
      <p className="mt-3 leading-7 text-stone-600">{guide.description}</p>
      <p className="mt-5 text-sm text-stone-500">
        {guide.readingTime} · 发布 {guide.publishedAt || guide.updatedAt}
      </p>
    </Link>
  );
}

export function GuideShelfCard({ guide }: { guide: GuideMeta }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="block h-full rounded-lg border border-stone-200 bg-white p-4 shadow-soft transition hover:-translate-y-0.5 hover:border-peach"
    >
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
