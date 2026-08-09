import Link from "next/link";
import { useId, type ReactNode } from "react";

type HorizontalCardSectionProps<T> = {
  title: string;
  description?: string;
  nextAction?: {
    label: string;
    href: string;
  };
  viewAllHref: string;
  viewAllLabel?: string;
  items: T[];
  getKey: (item: T) => string;
  renderCard: (item: T) => ReactNode;
  className?: string;
  scrollHintClassName?: string;
  itemClassName?: string;
};

export function HorizontalCardSection<T>({
  title,
  description,
  nextAction,
  viewAllHref,
  viewAllLabel = "查看全部",
  items,
  getKey,
  renderCard,
  className = "",
  scrollHintClassName = "from-cream via-cream/90",
  itemClassName = "w-[calc(100vw-5.5rem)] max-w-[21rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
}: HorizontalCardSectionProps<T>) {
  const scrollHintId = useId();

  return (
    <section className={className}>
      <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal text-ink md:text-3xl">{title}</h2>
          {description ? (
            <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">{description}</p>
          ) : null}
          {nextAction ? (
            <Link
              href={nextAction.href}
              className="mt-3 inline-flex min-h-10 items-center justify-center rounded-full bg-linen px-4 py-2 text-xs font-semibold text-stone-700 transition hover:bg-peach"
            >
              {nextAction.label}
            </Link>
          ) : null}
        </div>
        <Link
          href={viewAllHref}
          className="shrink-0 whitespace-nowrap text-sm font-bold text-blue-700 underline underline-offset-4 transition hover:text-blue-900"
        >
          {viewAllLabel}
        </Link>
      </div>

      <div className="relative">
        <p id={scrollHintId} className="sr-only">
          手机端可横向滑动查看更多卡片。
        </p>
        <div
          aria-describedby={scrollHintId}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 pr-16 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:pr-0"
        >
          {items.map((item) => (
            <div
              key={getKey(item)}
              className={itemClassName}
            >
              {renderCard(item)}
            </div>
          ))}
        </div>
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute bottom-2 right-0 top-0 flex w-14 items-center justify-end bg-gradient-to-l ${scrollHintClassName} to-transparent pr-1 md:hidden`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-100 bg-white text-lg font-semibold text-tea shadow-soft">
            ›
          </span>
        </div>
      </div>
    </section>
  );
}
