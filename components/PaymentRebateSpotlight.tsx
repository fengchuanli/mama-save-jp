import Link from "next/link";
import type { CalendarEvent } from "@/lib/types";

type PaymentRebateSpotlightProps = {
  events: CalendarEvent[];
  title?: string;
  eyebrow?: string;
  showAllLink?: boolean;
};

const linkClass =
  "inline-flex whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700 transition hover:bg-peach";

export function PaymentRebateSpotlight({
  events,
  title = "本周先看：支付返点",
  eyebrow = "支付返点",
  showAllLink = false
}: PaymentRebateSpotlightProps) {
  return (
    <section className="mb-8 sm:mb-10">
      <div className="mb-4 flex flex-col justify-between gap-3 sm:mb-5 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold text-tea">{eyebrow}</p>
          <h2 className="mt-1 text-2xl font-semibold tracking-normal text-ink">{title}</h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">
            去药妆店、AEON、西松屋、超市前，先确认今天哪个支付方式有返还。
          </p>
        </div>
        {showAllLink ? (
          <Link href="/calendar" className="text-sm font-semibold text-tea">
            查看全部省钱日历
          </Link>
        ) : null}
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {events.map((event) => (
          <article key={event.id} className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft">
            <p className="text-sm font-semibold text-tea">{event.platform}</p>
            <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">{event.title}</h3>
            <p className="mt-2 text-base font-bold leading-6 text-rose-700">{event.highlight}</p>
            <p className="mt-1 text-sm font-semibold leading-6 text-rose-700">{event.period}</p>
            <p className="mt-2 text-sm leading-6 text-stone-700">{event.actionTip}</p>
            <Link href={event.detailUrl} className={linkClass}>
              查看详情
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs leading-5 text-stone-500">
        活动、返点、库存和适用门店可能变化，购买前请以官方页面、结算页或店头公告为准。
      </p>
    </section>
  );
}

export function PaymentRebateShelfCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="h-full rounded-lg border border-stone-200 bg-white p-4 shadow-soft">
      <p className="text-sm font-semibold text-stone-700">{event.platform}</p>
      <h3 className="mt-2 text-lg font-semibold leading-7 text-ink">{event.title}</h3>
      <p className="mt-2 text-base font-bold leading-6 text-rose-700">{event.highlight}</p>
      <p className="mt-1 text-sm font-semibold leading-6 text-rose-700">{event.period}</p>
      <p className="mt-2 text-sm leading-6 text-stone-700">{event.actionTip}</p>
      <Link href={event.detailUrl} className={`mt-4 ${linkClass}`}>
        查看详情
      </Link>
    </article>
  );
}
