import Link from "next/link";
import type { GetStaticProps } from "next";
import { CalendarCard } from "@/components/CalendarCard";
import { DealCard } from "@/components/DealCard";
import { GuideCard } from "@/components/GuideCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllGuides } from "@/lib/guides";
import type { CalendarEvent, Deal, GuideMeta } from "@/lib/types";
import dealsData from "@/data/deals.json";
import calendarData from "@/data/shopping-calendar.json";

type HomeProps = {
  deals: Deal[];
  calendarEvents: CalendarEvent[];
  guides: GuideMeta[];
};

export default function Home({ deals, calendarEvents, guides }: HomeProps) {
  return (
    <Layout
      title="日本母婴省钱日历"
      description="面向在日华人宝妈的日本母婴省钱信息站，整理尿不湿、保育园用品、楽天、Amazon、西松屋、赤ちゃん本舗等购物攻略和省钱日历。"
    >
      <section className="bg-linen">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold text-tea">
              在日华人宝妈/宝爸的日本母婴省钱日历
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-normal text-ink md:text-5xl">
              日本母婴省钱，从尿不湿和保育园用品开始。
            </h1>
            <p className="mt-5 max-w-2xl leading-8 text-stone-700">
              面向在日华人宝妈，整理 Amazon、楽天、西松屋、赤ちゃん本舗等平台的母婴用品购买节奏、优惠条件和新手攻略，帮 0-3 岁宝宝家庭少踩坑、少囤错。
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/deals" className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white">
                看本周值得买
              </Link>
              <Link
                href="/calendar"
                className="rounded-full border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-ink"
              >
                查看省钱日历
              </Link>
            </div>
          </div>
          <div className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
            <p className="text-sm font-semibold text-tea">本周提醒</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">先补高频消耗品</h2>
            <div className="mt-5 space-y-4">
              {[
                ["纸尿裤", "看单片价，不要跨码囤太多"],
                ["湿巾", "低于好价线可按 1-2 个月用量补"],
                ["洗护", "常用品牌遇到券后价再买补充装"]
              ].map(([title, text]) => (
                <div key={title} className="rounded-lg bg-cream p-4">
                  <p className="font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm text-stone-600">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Deals"
            title="本周值得买"
            description="人工整理尿不湿、湿巾、童装和保育园用品的优惠信息，先看为什么值得买，再看价格。"
          />
          <Link href="/deals" className="mb-6 text-sm font-semibold text-tea">
            查看全部
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <SectionHeader
            eyebrow="Calendar"
            title="最近要关注的省钱节点"
            description="把 Amazon、楽天、西松屋、赤ちゃん本舗和药妆店的活动，用新手宝妈能看懂的中文放到同一个日历里。"
          />
          <div className="grid gap-5 md:grid-cols-3">
            {calendarEvents.map((event) => (
              <CalendarCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="Guides"
          title="新手也能看懂的购物攻略"
          description="用中文解释日本平台、积分、优惠券和母婴品类的判断方式。"
        />
        <div className="grid gap-5 md:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  return {
    props: {
      deals: (dealsData as Deal[]).slice(0, 2),
      calendarEvents: (calendarData as CalendarEvent[]).slice(0, 3),
      guides: getAllGuides().slice(0, 3)
    }
  };
};
