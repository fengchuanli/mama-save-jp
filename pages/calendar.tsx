import type { GetStaticProps } from "next";
import { CalendarCard } from "@/components/CalendarCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import type { CalendarEvent } from "@/lib/types";
import calendarData from "@/data/shopping-calendar.json";

type CalendarProps = {
  events: CalendarEvent[];
};

export default function Calendar({ events }: CalendarProps) {
  return (
    <Layout title="省钱日历 - 母婴省钱日历">
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="省钱日历"
          title="把促销日变成温和提醒"
          description="不是每次活动都要买。这里记录适合 0-3 岁宝宝家庭关注的日本购物节点和适合买的品类。"
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <CalendarCard key={event.id} event={event} />
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
