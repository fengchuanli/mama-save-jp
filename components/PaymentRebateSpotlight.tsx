import Link from "next/link";
import type { CalendarEvent } from "@/lib/types";

type PaymentRebateSpotlightProps = {
  events: CalendarEvent[];
  title?: string;
  eyebrow?: string;
  showAllLink?: boolean;
};

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
          <h2 className="mt-1 text-2xl font-semibold tracking-normal text-ink">
            {title}
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600 sm:text-base sm:leading-7">
            去药妆店、AEON、西松屋、超市前，先确认今天哪个支付方式有返还。返点活动经常是地区/门店限定，购买前请以官方活动页和店头公告为准。
          </p>
        </div>
        {showAllLink ? (
          <Link href="/calendar" className="text-sm font-semibold text-tea">
            查看省钱日历
          </Link>
        ) : null}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {events.map((event) => (
          <a
            key={event.id}
            href={event.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft transition hover:border-tea/40"
          >
            <p className="text-xs font-semibold text-tea">{event.store}</p>
            <h3 className="mt-2 text-base font-semibold leading-6 text-ink">{event.eventName}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{event.days}</p>
            <p className="mt-3 text-sm leading-6 text-stone-700">{event.savingsExample}</p>
            <p className="mt-3 text-xs leading-5 text-stone-500">
              最大返还和适用门店需以官方活动页、结算页或店头公告为准。
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
