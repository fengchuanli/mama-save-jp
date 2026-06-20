import type { GetStaticProps } from "next";
import { CalendarStoreGroup } from "@/components/CalendarCard";
import { Layout } from "@/components/Layout";
import { PaymentRebateSpotlight } from "@/components/PaymentRebateSpotlight";
import { SectionHeader } from "@/components/SectionHeader";
import { getPaymentRebateEvents } from "@/lib/payment-rebates";
import type { CalendarEvent } from "@/lib/types";
import calendarData from "@/data/shopping-calendar.json";

type CalendarProps = {
  events: CalendarEvent[];
};

export default function Calendar({ events }: CalendarProps) {
  const paymentRebateEvents = getPaymentRebateEvents(events);
  const groupedEvents = events.reduce<Record<string, CalendarEvent[]>>((groups, event) => {
    if (!groups[event.store]) {
      groups[event.store] = [];
    }

    groups[event.store].push(event);
    return groups;
  }, {});

  return (
    <Layout
      title="省钱日历"
      description="日本母婴购物省钱日历，按 Amazon、楽天、西松屋、赤ちゃん本舗、药妆店等平台整理适合买什么和注意事项。"
    >
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
        </div>

        <PaymentRebateSpotlight events={paymentRebateEvents} />

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
