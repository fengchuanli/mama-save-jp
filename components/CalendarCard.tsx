import Link from "next/link";
import type { CalendarEvent } from "@/lib/types";

const linkClass =
  "inline-flex whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700 transition hover:bg-peach";

const priorityClass = {
  high: "border-rose-200 bg-rose-50 text-rose-700",
  medium: "border-peach bg-linen text-ink",
  low: "border-stone-200 bg-stone-50 text-stone-700"
};

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

function TargetItems({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="whitespace-nowrap rounded-full bg-cream px-2.5 py-1 text-xs text-stone-700">
          {item}
        </span>
      ))}
    </div>
  );
}

export function CalendarSummaryCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft">
      <p className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${priorityClass[event.priority]}`}>
        {event.highlight}
      </p>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{event.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-rose-700">{event.period}</p>
      <p className="mt-2 text-sm leading-6 text-stone-700">{event.keyBenefit}</p>
      <TargetItems items={event.targetItems} />
      <p className="mt-3 text-sm leading-6 text-stone-600">{event.actionTip}</p>
      <Link href={event.detailUrl} className={linkClass}>
        查看详情
      </Link>
    </article>
  );
}

export function CalendarCard({ event }: { event: CalendarEvent }) {
  return (
    <article id={event.slug} className="scroll-mt-24 rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${priorityClass[event.priority]}`}>
            {event.highlight}
          </p>
          <h3 className="mt-3 text-lg font-semibold leading-7 text-ink sm:text-xl">{event.title}</h3>
        </div>
        <p className="text-sm font-semibold leading-6 text-rose-700">{event.period}</p>
      </div>

      <div className="mt-4 rounded-lg bg-cream p-3">
        <p className="text-sm font-semibold text-ink">{event.keyBenefit}</p>
        <TargetItems items={event.targetItems} />
        <p className="mt-3 text-sm leading-6 text-stone-700">行动建议：{event.actionTip}</p>
      </div>

      <details className="mt-4 group">
        <summary className={`${linkClass} cursor-pointer list-none`}>
          查看详情
        </summary>
        <div className="mt-4 grid gap-4 border-t border-stone-200 pt-4 lg:grid-cols-2">
          <section>
            <h4 className="text-sm font-semibold text-ink">活动是什么</h4>
            <p className="mt-2 text-sm leading-6 text-stone-700">{event.description}</p>
          </section>

          {event.participationSteps?.length ? (
            <section>
              <h4 className="text-sm font-semibold text-ink">怎么参加</h4>
              <BulletList items={event.participationSteps} />
            </section>
          ) : null}

          {event.savingsExample ? (
            <section>
              <h4 className="text-sm font-semibold text-ink">省钱示例</h4>
              <p className="mt-2 text-sm leading-6 text-stone-700">{event.savingsExample}</p>
            </section>
          ) : null}

          {event.maxBenefitExample ? (
            <section>
              <h4 className="text-sm font-semibold text-ink">最大可省/可返示例</h4>
              <p className="mt-2 text-sm leading-6 text-stone-700">{event.maxBenefitExample}</p>
            </section>
          ) : null}

          <section>
            <h4 className="text-sm font-semibold text-ink">下单前确认</h4>
            <BulletList items={event.checkBeforeBuying} />
          </section>

          <section>
            <h4 className="text-sm font-semibold text-ink">注意事项</h4>
            <p className="mt-2 text-sm leading-6 text-stone-700">{event.caution}</p>
          </section>

          <section>
            <h4 className="text-sm font-semibold text-ink">来源与更新</h4>
            <p className="mt-2 text-sm leading-6 text-stone-700">更新时间：{event.updatedAt}</p>
            {event.sourceUrl ? (
              <a href={event.sourceUrl} target="_blank" rel="noreferrer" className={linkClass}>
                去官方页面
              </a>
            ) : null}
          </section>
        </div>
      </details>

      <p className="mt-4 text-xs leading-5 text-stone-500">
        活动、返点、库存和适用门店可能变化，购买前请以官方页面、结算页或店头公告为准。
      </p>
    </article>
  );
}

export function CalendarStoreGroup({
  store,
  events
}: {
  store: string;
  events: CalendarEvent[];
}) {
  return (
    <section className="rounded-lg border border-stone-200 bg-white/70 p-4 shadow-soft sm:p-5">
      <div className="mb-4 flex flex-col gap-2 border-b border-stone-200 pb-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between sm:pb-4">
        <div>
          <p className="text-sm font-semibold text-tea">平台</p>
          <h2 className="mt-1 text-xl font-semibold text-ink sm:text-2xl">{store}</h2>
        </div>
        <p className="text-sm text-stone-500">{events.length} 个省钱节点</p>
      </div>
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {events.map((event) => (
          <CalendarCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
