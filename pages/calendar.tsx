import type { GetStaticProps } from "next";
import Head from "next/head";
import { useMemo, useState } from "react";
import { CalendarStoreGroup } from "@/components/CalendarCard";
import { Layout } from "@/components/Layout";
import { PaymentRebateSpotlight } from "@/components/PaymentRebateSpotlight";
import { SectionHeader } from "@/components/SectionHeader";
import { getPaymentRebateEvents } from "@/lib/payment-rebates";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createListItemJsonLd,
  getAbsoluteUrl
} from "@/lib/structured-data";
import type { CalendarEvent } from "@/lib/types";
import calendarData from "@/data/shopping-calendar.json";

type CalendarProps = {
  events: CalendarEvent[];
};

export default function Calendar({ events }: CalendarProps) {
  const calendarUrl = getAbsoluteUrl("/calendar");
  const paymentRebateEvents = getPaymentRebateEvents(events);
  const [selectedStore, setSelectedStore] = useState("全部");
  const stores = useMemo(
    () => ["全部", ...Array.from(new Set(events.map((event) => event.store)))],
    [events]
  );
  const visibleEvents = useMemo(
    () =>
      selectedStore === "全部"
        ? events
        : events.filter((event) => event.store === selectedStore),
    [events, selectedStore]
  );
  const groupedEvents = useMemo(
    () =>
      visibleEvents.reduce<Record<string, CalendarEvent[]>>((groups, event) => {
        if (!groups[event.store]) {
          groups[event.store] = [];
        }

        groups[event.store].push(event);
        return groups;
      }, {}),
    [visibleEvents]
  );
  const collectionJsonLd = createCollectionPageJsonLd({
    name: "日本母婴购物省钱日历",
    description:
      "面向在日华人宝妈/宝爸的日本母婴购物活动日历，整理 Amazon、楽天、西松屋、赤ちゃん本舗、药妆店和支付平台活动。",
    url: calendarUrl,
    items: events.map((event, index) =>
      createListItemJsonLd({
        position: index + 1,
        name: event.title,
        url: `${calendarUrl}#${event.slug}`,
        description: event.shortSummary,
        item: {
          "@type": "Thing",
          name: event.title,
          description: event.description,
          url: `${calendarUrl}#${event.slug}`,
          provider: {
            "@type": "Organization",
            name: event.platform
          }
        }
      })
    )
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    {
      name: "省钱日历",
      item: calendarUrl
    }
  ]);

  return (
    <Layout
      title="省钱日历"
      description="日本母婴购物省钱日历，按 Amazon、楽天、西松屋、赤ちゃん本舗、药妆店等平台整理适合买什么和注意事项。"
    >
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>
      <section className="mx-auto max-w-6xl px-4 py-9 sm:px-5 sm:py-12">
        <SectionHeader
          eyebrow="省钱日历"
          title="日本母婴购物什么时候买更划算"
          description="把 Amazon、楽天、西松屋、赤ちゃん本舗和药妆店的常见活动翻成新手也能看懂的中文。不是每次活动都要买，先看适合买什么，再看注意事项。"
        />

        <div className="mb-6 rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:mb-8 sm:p-5">
          <h2 className="text-base font-semibold text-ink sm:text-lg">
            新手宝妈怎么看这个日历
          </h2>
          <div className="mt-3 grid gap-3 text-sm leading-6 text-stone-700 sm:mt-4 sm:gap-4 md:grid-cols-3">
            <p>先找你常用的平台，比如 Amazon 或 楽天，不用同时研究所有活动。</p>
            <p>每个活动先看“适合买什么”，只买家里本来就会用的刚需品。</p>
            <p>再看“注意什么”，尤其是积分上限、运费门槛和不要为了凑单乱买。</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full border border-tea/30 bg-tea/10 px-3 py-1 text-tea">提前准备：先列清单和心理价</span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-700">当天确认：结算前看条件</span>
            <span className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-stone-700">先观察：看到具体价格再买</span>
          </div>
          <div className="mt-3 flex flex-wrap gap-2 text-xs font-semibold">
            <span className="rounded-full border border-tea/30 bg-tea/10 px-3 py-1 text-tea">简单：价格和用途好判断</span>
            <span className="rounded-full border border-peach bg-linen px-3 py-1 text-ink">需要核对：看支付、运费或対象条件</span>
            <span className="rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-rose-700">规则复杂：先算上限和积分期限</span>
          </div>
        </div>

        <PaymentRebateSpotlight events={paymentRebateEvents} />

        <div className="mb-6 rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:mb-8 sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-semibold text-ink">按平台快速查看</p>
              <p className="mt-1 text-xs text-stone-500">当前 {visibleEvents.length} 个省钱节点</p>
            </div>
            {selectedStore !== "全部" ? (
              <button
                type="button"
                onClick={() => setSelectedStore("全部")}
                className="min-h-10 whitespace-nowrap rounded-full bg-linen px-3 py-2 text-xs font-semibold text-stone-700"
              >
                清除
              </button>
            ) : null}
          </div>
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
            {stores.map((store) => {
              const active = selectedStore === store;

              return (
                <button
                  key={store}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setSelectedStore(store)}
                  className={`min-h-10 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                    active
                      ? "bg-ink text-white"
                      : "bg-cream text-stone-700 hover:bg-linen"
                  }`}
                >
                  {store}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-5 sm:space-y-7">
          {Object.entries(groupedEvents).map(([store, storeEvents]) => (
            <CalendarStoreGroup key={store} store={store} events={storeEvents} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<CalendarProps> = async () => {
  return {
    props: {
      events: calendarData as CalendarEvent[]
    }
  };
};
