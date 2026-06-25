import Link from "next/link";
import type { GetStaticProps } from "next";
import { CalendarShelfCard } from "@/components/CalendarCard";
import { DealShelfCard } from "@/components/DealCard";
import { GuideShelfCard } from "@/components/GuideCard";
import { HorizontalCardSection } from "@/components/HorizontalCardSection";
import { Layout } from "@/components/Layout";
import { PaymentRebateShelfCard } from "@/components/PaymentRebateSpotlight";
import { getFeaturedCalendarEvents } from "@/lib/calendar-highlights";
import { getAllGuides } from "@/lib/guides";
import { getPaymentRebateEvents } from "@/lib/payment-rebates";
import type { CalendarEvent, Deal, GuideMeta } from "@/lib/types";
import dealsData from "@/data/deals.json";
import calendarData from "@/data/shopping-calendar.json";

type HomeProps = {
  deals: Deal[];
  calendarEvents: CalendarEvent[];
  paymentRebateEvents: CalendarEvent[];
  guides: GuideMeta[];
};

export default function Home({ deals, calendarEvents, paymentRebateEvents, guides }: HomeProps) {
  const quickStartRoutes = [
    {
      label: "刚开始准备",
      href: "/guides/newborn-shopping-list",
      title: "先看新手攻略",
      description: "从第一批用品开始，把必买、可等等和不急囤分开。",
      nextStep: "下一步：列出第一批清单"
    },
    {
      label: "准备下单",
      href: "/deals",
      title: "先看本周机会",
      description: "核对为什么值得买、哪些情况跳过，再去官方页确认。",
      nextStep: "下一步：判断今天能不能买"
    },
    {
      label: "等活动日",
      href: "/calendar",
      title: "先看省钱日历",
      description: "确认活动规则、适合买什么和注意事项。",
      nextStep: "下一步：挑最近的省钱节点"
    }
  ];

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
            <div className="mt-8">
              <p className="text-sm font-semibold text-tea">第一次打开，按现在的状态先走这里</p>
              <div className="mt-3 grid gap-3 sm:grid-cols-3">
                {quickStartRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className="rounded-lg border border-stone-200 bg-white/80 p-4 transition hover:border-peach hover:bg-white"
                  >
                    <p className="text-xs font-semibold text-tea">{route.label}</p>
                    <h2 className="mt-2 text-base font-semibold text-ink">{route.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{route.description}</p>
                    <p className="mt-3 text-xs font-semibold text-stone-500">{route.nextStep}</p>
                  </Link>
                ))}
              </div>
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
        <HorizontalCardSection
          title="本周值得买"
          description="先看本周最值得关注的母婴用品和活动线索，点开后再确认详细条件。"
          viewAllHref="/deals"
          items={deals}
          getKey={(deal) => deal.id}
          renderCard={(deal) => <DealShelfCard deal={deal} />}
        />
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <HorizontalCardSection
            title="出门前先看支付返点"
            description="去药妆店、AEON、西松屋、超市前，先确认今天哪个支付方式有返还。"
            viewAllHref="/calendar"
            items={paymentRebateEvents}
            getKey={(event) => event.id}
            renderCard={(event) => <PaymentRebateShelfCard event={event} />}
          />
          <p className="mt-4 text-xs leading-5 text-stone-500">
            活动、返点、库存和适用门店可能变化，购买前请以官方页面、结算页或店头公告为准。
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <HorizontalCardSection
            title="最近要关注的省钱节点"
            description="先看最近值得关注的活动时间、关键优惠和适合买什么，详细规则放在省钱日历里。"
            viewAllHref="/calendar"
            items={calendarEvents}
            getKey={(event) => event.id}
            renderCard={(event) => <CalendarShelfCard event={event} />}
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <HorizontalCardSection
          title="新手攻略"
          description="第一次在日本准备母婴用品时，先控制购买范围，再看高频消耗品和平台规则。"
          viewAllHref="/guides"
          items={guides}
          getKey={(guide) => guide.slug}
          renderCard={(guide) => <GuideShelfCard guide={guide} />}
        />
      </section>

      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-[1fr_0.85fr] md:items-center">
            <div>
              <p className="text-sm font-semibold text-tea">分享给同在日本的宝妈/宝爸</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-ink md:text-3xl">
                下次群里问“哪里买尿不湿划算”，可以直接发这一页。
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-stone-600">
                先收藏本站，遇到楽天买回、西松屋活动或纸尿裤补货前，打开本周值得买和省钱日历快速确认适不适合自己。
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-lg border border-stone-200 bg-white p-5 shadow-soft sm:flex-row md:flex-col">
              <Link
                href="/deals"
                className="flex-1 rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white"
              >
                收藏本周值得买
              </Link>
              <Link
                href="/guides"
                className="flex-1 rounded-full border border-stone-300 bg-white px-5 py-3 text-center text-sm font-medium text-ink"
              >
                发给新手先读攻略
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGuides = getAllGuides();
  const beginnerGuideSlugs = [
    "newborn-shopping-list",
    "buy-diapers-japan",
    "rakuten-5-0-mama-shopping"
  ];
  const beginnerGuides = beginnerGuideSlugs
    .map((slug) => allGuides.find((guide) => guide.slug === slug))
    .filter((guide): guide is GuideMeta => Boolean(guide));

  return {
    props: {
      deals: (dealsData as Deal[]).slice(0, 3),
      calendarEvents: getFeaturedCalendarEvents(calendarData as CalendarEvent[]),
      paymentRebateEvents: getPaymentRebateEvents(calendarData as CalendarEvent[], 3),
      guides: beginnerGuides
    }
  };
};
