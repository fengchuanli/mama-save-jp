import Link from "next/link";
import type { ReactNode } from "react";

type HorizontalCardSectionProps<T> = {
  title: string;
  description?: string;
  viewAllHref: string;
  viewAllLabel?: string;
  items: T[];
  getKey: (item: T) => string;
  renderCard: (item: T) => ReactNode;
  className?: string;
};

export function HorizontalCardSection<T>({
  title,
  description,
  viewAllHref,
  viewAllLabel = "查看全部",
  items,
  getKey,
  renderCard,
  className = ""
}: HorizontalCardSectionProps<T>) {
  return (
    <section className={className}>
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal text-ink md:text-3xl">{title}</h2>
          {description ? (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">{description}</p>
          ) : null}
        </div>
        <Link
          href={viewAllHref}
          className="shrink-0 whitespace-nowrap text-sm font-bold text-blue-700 underline underline-offset-4 transition hover:text-blue-900"
        >
          {viewAllLabel}
        </Link>
      </div>

      <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 pr-10 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:pr-0">
        {items.map((item) => (
          <div
            key={getKey(item)}
            className="w-[82vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
          >
            {renderCard(item)}
          </div>
        ))}
      </div>
    </section>
  );
}
