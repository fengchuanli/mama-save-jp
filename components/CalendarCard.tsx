import type { CalendarEvent } from "@/lib/types";

const difficultyLabel = {
  easy: "新手友好",
  normal: "需要简单计算",
  hard: "规则较复杂"
};

const difficultyClass = {
  easy: "bg-tea text-white",
  normal: "bg-linen text-stone-700",
  hard: "bg-peach text-ink"
};

const buyingTimingLabel = {
  prepare: "适合提前准备",
  "same-day": "当天确认再买",
  watch: "先观察价格"
};

const buyingTimingClass = {
  prepare: "bg-ink text-white",
  "same-day": "bg-tea text-white",
  watch: "bg-mist text-stone-700"
};

export function CalendarCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:p-5">
      <div className="mb-3 flex flex-wrap items-center gap-1.5 sm:mb-4 sm:gap-2">
        <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-stone-700 sm:px-3">
          {event.days}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 ${buyingTimingClass[event.buyingTiming]}`}
        >
          {buyingTimingLabel[event.buyingTiming]}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 ${difficultyClass[event.difficulty]}`}
        >
          {difficultyLabel[event.difficulty]}
        </span>
      </div>
      <h3 className="text-base font-semibold leading-7 text-ink sm:text-lg">{event.eventName}</h3>
      {(event.sourceName || event.updatedAt) && (
        <p className="mt-1.5 text-xs leading-5 text-stone-500 sm:mt-2">
          {event.sourceName && event.sourceUrl ? (
            <a className="underline underline-offset-2" href={event.sourceUrl}>
              来源：{event.sourceName}
            </a>
          ) : event.sourceName ? (
            <>来源：{event.sourceName}</>
          ) : null}
          {event.sourceName && event.updatedAt ? " · " : ""}
          {event.updatedAt ? `更新：${event.updatedAt}` : ""}
        </p>
      )}
      <p className="mt-3 text-sm leading-6 text-stone-700 sm:text-base sm:leading-7">
        {event.benefit}
      </p>

      <div className="mt-4 rounded-lg bg-cream p-3 sm:mt-5 sm:p-4">
        <p className="text-sm font-semibold text-ink">适合买什么</p>
        <div className="mt-2 flex flex-wrap gap-1.5 sm:mt-3 sm:gap-2">
          {event.suitableItems.map((item) => (
            <span
              key={item}
              className="rounded-full bg-white px-2.5 py-1 text-xs text-stone-700 sm:px-3"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 rounded-lg border border-stone-200 bg-white p-3 sm:mt-4 sm:p-4">
        <p className="text-sm font-semibold text-ink">下单前确认</p>
        <ul className="mt-2 space-y-1.5 text-sm leading-6 text-stone-700 sm:mt-3 sm:space-y-2">
          {event.checkBeforeBuying.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tea" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-3 rounded-lg border border-peach bg-linen p-3 sm:mt-4 sm:p-4">
        <p className="text-sm font-semibold text-ink">注意什么</p>
        <p className="mt-2 text-sm leading-6 text-stone-700">{event.reminder}</p>
      </div>
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
