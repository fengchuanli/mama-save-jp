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

export function CalendarCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-stone-700">
          {event.days}
        </span>
        <span
          className={`rounded-full px-3 py-1 text-xs font-medium ${difficultyClass[event.difficulty]}`}
        >
          {difficultyLabel[event.difficulty]}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-ink">{event.eventName}</h3>
      {(event.sourceName || event.updatedAt) && (
        <p className="mt-2 text-xs leading-5 text-stone-500">
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
      <p className="mt-3 leading-7 text-stone-700">{event.benefit}</p>

      <div className="mt-5 rounded-lg bg-cream p-4">
        <p className="text-sm font-semibold text-ink">适合买什么</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {event.suitableItems.map((item) => (
            <span key={item} className="rounded-full bg-white px-3 py-1 text-xs text-stone-700">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 rounded-lg border border-stone-200 bg-white p-4">
        <p className="text-sm font-semibold text-ink">下单前确认</p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-stone-700">
          {event.checkBeforeBuying.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tea" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 rounded-lg border border-peach bg-linen p-4">
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
    <section className="rounded-lg border border-stone-200 bg-white/70 p-5 shadow-soft">
      <div className="mb-5 flex flex-col gap-2 border-b border-stone-200 pb-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-tea">平台</p>
          <h2 className="mt-1 text-2xl font-semibold text-ink">{store}</h2>
        </div>
        <p className="text-sm text-stone-500">{events.length} 个省钱节点</p>
      </div>
      <div className="grid gap-5 lg:grid-cols-2">
        {events.map((event) => (
          <CalendarCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
