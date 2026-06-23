import Link from "next/link";
import type { Deal } from "@/lib/types";

const ctaClass =
  "inline-flex whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700 transition hover:bg-peach";

function MiniMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-stone-500">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold leading-5 text-stone-800">{value}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2 text-sm leading-6 text-stone-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tea" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function DealSummaryCard({ deal }: { deal: Deal }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:p-5">
      <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-bold text-rose-700">
        {deal.highlight}
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{deal.title}</h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MiniMeta label="平台" value={deal.platform} />
        <MiniMeta label="类型" value={deal.dealType} />
        <MiniMeta label="时机" value={deal.shortPeriod} />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700">
          {deal.recommendationLabel}
        </span>
        <span className="text-sm leading-6 text-stone-600">{deal.targetSummary}</span>
      </div>
      <Link href={`/deals#${deal.id}`} className={`mt-3 ${ctaClass}`}>
        查看详情
      </Link>
    </article>
  );
}

export function DealShelfCard({ deal }: { deal: Deal }) {
  return (
    <article className="h-full rounded-lg border border-stone-200 bg-white p-4 shadow-soft">
      <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-bold text-rose-700">
        {deal.highlight}
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{deal.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">
        {deal.platform} · {deal.shortPeriod}
      </p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700">
          {deal.recommendationLabel}
        </span>
        <span className="text-sm leading-6 text-stone-600">{deal.targetSummary}</span>
      </div>
      <Link href={`/deals#${deal.id}`} className={`mt-4 ${ctaClass}`}>
        查看详情
      </Link>
    </article>
  );
}

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article id={deal.id} className="scroll-mt-24 rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-bold text-rose-700">
            {deal.highlight}
          </p>
          <h3 className="mt-3 text-lg font-semibold leading-7 text-ink sm:text-xl">{deal.title}</h3>
        </div>
        <span className="w-fit whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700">
          {deal.recommendationLabel}
        </span>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 rounded-lg bg-cream p-3 sm:grid-cols-2 lg:grid-cols-4">
        <MiniMeta label="平台" value={deal.platform} />
        <MiniMeta label="类型" value={deal.dealType} />
        <MiniMeta label="时机" value={deal.shortPeriod} />
        <MiniMeta label="适合谁" value={deal.targetSummary} />
      </div>

      <p className="mt-3 text-sm leading-6 text-stone-700">{deal.detailReason}</p>

      <div className="mt-4 flex flex-wrap gap-4">
        <details className="group">
          <summary className={`${ctaClass} cursor-pointer list-none`}>
            查看详情
          </summary>
          <div className="mt-4 grid gap-4 border-t border-stone-200 pt-4 lg:grid-cols-2">
            {deal.participationSteps?.length ? (
              <section>
                <h4 className="text-sm font-semibold text-ink">参加方法</h4>
                <BulletList items={deal.participationSteps} />
              </section>
            ) : null}

            <section>
              <h4 className="text-sm font-semibold text-ink">购买前确认</h4>
              <BulletList items={deal.checkBeforeBuying} />
            </section>

            {deal.savingsExample ? (
              <section>
                <h4 className="text-sm font-semibold text-ink">省钱示例</h4>
                <p className="mt-2 text-sm leading-6 text-stone-700">{deal.savingsExample}</p>
              </section>
            ) : null}

            <section>
              <h4 className="text-sm font-semibold text-ink">来源与更新</h4>
              <dl className="mt-2 space-y-2 text-sm leading-6 text-stone-700">
                <div>
                  <dt className="font-semibold text-ink">更新时间</dt>
                  <dd>{deal.updatedAt}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">来源名称</dt>
                  <dd>{deal.sourceName}</dd>
                </div>
              </dl>
            </section>
          </div>
        </details>

        {deal.sourceUrl ? (
          <a href={deal.sourceUrl} target="_blank" rel="noreferrer" className={ctaClass}>
            去官方页面
          </a>
        ) : null}
      </div>

      <p className="mt-4 text-xs leading-5 text-stone-500">
        价格、库存和活动条件可能变化，购买前请以官方页面和结算页为准。
      </p>
    </article>
  );
}
