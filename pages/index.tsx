import Link from "next/link";
import type { GetStaticProps } from "next";
import { CalendarShelfCard } from "@/components/CalendarCard";
import { DealShelfCard } from "@/components/DealCard";
import { GuideShelfCard } from "@/components/GuideCard";
import { HorizontalCardSection } from "@/components/HorizontalCardSection";
import { Layout } from "@/components/Layout";
import { PaymentRebateShelfCard } from "@/components/PaymentRebateSpotlight";
import { HeroShoppingVisual } from "@/components/VisualMotif";
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

const calendarTimingMeta: Record<
  CalendarEvent["buyingTiming"],
  {
    label: string;
    title: string;
    description: string;
    href: string;
  }
> = {
  "same-day": {
    label: "当天确认",
    title: "今天可能能买",
    description: "适合已经要补货的纸尿裤、湿巾或洗护，先看结算页的券、积分和配送。",
    href: "/calendar?timing=same-day"
  },
  prepare: {
    label: "提前准备",
    title: "先列清单等节点",
    description: "适合大促或规则型活动，先记录平时价，等正式开始后再判断。",
    href: "/calendar?timing=prepare"
  },
  watch: {
    label: "先观察",
    title: "看到具体价格再买",
    description: "适合已结束、只剩入口或规则还不完整的节点，先收藏不急下单。",
    href: "/calendar?timing=watch"
  }
};

function HomeCalendarActionSection({ events }: { events: CalendarEvent[] }) {
  return (
    <section>
      <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end sm:gap-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-normal text-ink md:text-3xl">
            最近要关注的省钱节点
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-600">
            先按今天要做的动作判断：能买就核对结算，不能买就提前准备或先观察。
          </p>
        </div>
        <Link
          href="/calendar"
          className="shrink-0 whitespace-nowrap text-sm font-bold text-blue-700 underline underline-offset-4 transition hover:text-blue-900"
        >
          查看全部
        </Link>
      </div>

      <div className="relative">
        <div className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 pr-10 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:gap-5 md:overflow-visible md:px-0 md:pb-0 md:pr-0">
          {events.map((event) => {
            const meta = calendarTimingMeta[event.buyingTiming];

            return (
              <div
                key={event.id}
                className="w-[82vw] max-w-[22rem] shrink-0 snap-start md:w-auto md:max-w-none md:shrink"
              >
                <Link
                  href={meta.href}
                  className="mb-3 block rounded-lg border border-amber-100 bg-white/85 p-3 shadow-soft transition hover:bg-linen"
                >
                  <p className="text-xs font-semibold text-tea">{meta.label}</p>
                  <h3 className="mt-1 text-base font-semibold text-ink">{meta.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{meta.description}</p>
                </Link>
                <CalendarShelfCard event={event} />
              </div>
            );
          })}
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-2 right-0 top-0 flex w-14 items-center justify-end bg-gradient-to-l from-amber-50 via-amber-50/90 to-amber-50/0 pr-1 md:hidden"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-amber-100 bg-white text-lg font-semibold text-tea shadow-soft">
            ›
          </span>
        </div>
      </div>
    </section>
  );
}

export default function Home({ deals, calendarEvents, paymentRebateEvents, guides }: HomeProps) {
  const quickStartRoutes = [
    {
      label: "刚开始准备",
      href: "/guides/newborn-shopping-list",
      title: "先看新手攻略",
      description: "从第一批用品开始，把马上需要、可等等和不急囤分开。",
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
    },
    {
      label: "准备出门",
      href: "/calendar",
      title: "先看支付返点",
      description: "去药妆店、超市或西松屋前，先确认今天有没有顺手参加的返还。",
      nextStep: "下一步：只买本来要买的用品"
    }
  ];
  const guideProblemRoutes = [
    {
      label: "第一批买什么",
      href: "/guides#guide-group-start",
      title: "先收窄清单",
      description: "适合孕期或刚开始准备，不确定第一批用品和去哪家店看。",
      nextStep: "先读：新生儿准备品"
    },
    {
      label: "快要补货",
      href: "/guides#guide-group-essentials",
      title: "看消耗品值不值",
      description: "适合纸尿裤、湿巾、洗护快用完，想判断今天能不能囤。",
      nextStep: "先读：纸尿裤怎么买"
    },
    {
      label: "活动看不懂",
      href: "/guides#guide-group-platforms",
      title: "拆开平台规则",
      description: "适合遇到楽天积分、5/0 日或支付返点，先确认实付和上限。",
      nextStep: "先读：楽天积分入门"
    },
    {
      label: "准备入园换季",
      href: "/guides#guide-group-nursery",
      title: "按场景和尺码买",
      description: "适合收到保育园清单，或想趁换季清仓买备用衣。",
      nextStep: "先读：保育园入园准备"
    }
  ];
  const shareTrialRoutes = [
    {
      label: "发给刚开始准备的朋友",
      href: "/guides/newborn-shopping-list",
      title: "让对方先看第一批用品",
      description: "适合孕期或刚来日本的新手家庭，重点看哪些马上要买、哪些可以先不囤。",
      action: "转发新手清单"
    },
    {
      label: "发给最近要补货的朋友",
      href: "/guides/diaper-price-line",
      title: "让对方先算纸尿裤好价线",
      description: "适合正在比较尿不湿、湿巾和箱购活动的人，重点看单片价和跳过条件。",
      action: "转发好价线"
    },
    {
      label: "发给等活动日的朋友",
      href: "/calendar",
      title: "让对方先收藏省钱日历",
      description: "适合等楽天、西松屋、PayPay 等活动的人，重点分清当天确认、提前准备和先观察。",
      action: "转发日历"
    }
  ];
  const weeklyReminderRoutes = [
    {
      label: "今天要补货",
      href: "/deals",
      title: "先核对本周机会",
      description: "适合纸尿裤、湿巾和洗护快用完时，先看状态、跳过条件和官方来源。",
      action: "判断今天能不能买"
    },
    {
      label: "还没到活动日",
      href: "/calendar",
      title: "先把近期节点排好",
      description: "适合等楽天、Yahoo! 或 PayPay 节点时，先记录平时价和需要补的数量。",
      action: "看最近省钱节点"
    },
    {
      label: "出门前 3 分钟",
      href: "/guides/drugstore-coupon",
      title: "先筛掉不适用券",
      description: "适合去药妆店、超市或西松屋前，先确认対象商品、满额和抽选条件。",
      action: "看药妆店用券"
    }
  ];

  return (
    <Layout
      title="日本母婴省钱日历"
      description="面向在日华人宝妈的日本母婴省钱信息站，整理尿不湿、保育园用品、楽天、Amazon、西松屋、赤ちゃん本舗等购物攻略和省钱日历。"
    >
      <section className="relative overflow-hidden bg-[#fff3e8]">
        <HeroShoppingVisual />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="rounded-lg bg-[#fff3e8]/80 py-2">
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
              <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {quickStartRoutes.map((route) => (
                  <Link
                    key={route.label}
                    href={route.href}
                    className="rounded-lg border border-orange-100 bg-white/90 p-4 shadow-soft transition hover:border-peach hover:bg-white"
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
          <div className="rounded-lg border border-orange-100 bg-white/95 p-5 shadow-soft">
            <p className="text-sm font-semibold text-tea">本周提醒</p>
            <h2 className="mt-2 text-2xl font-semibold text-ink">先按今天的动作走</h2>
            <p className="mt-2 text-sm leading-6 text-stone-600">
              不用一次看完全部信息，先确认是要马上补货、等活动日，还是出门前顺手核对。
            </p>
            <div className="mt-5 space-y-4">
              {weeklyReminderRoutes.map(({ label, title, description, href, action }) => (
                <Link
                  key={title}
                  href={href}
                  className="block rounded-lg border border-orange-100 bg-orange-50 p-4 transition hover:border-peach hover:bg-linen"
                >
                  <p className="text-xs font-semibold text-tea">{label}</p>
                  <p className="font-semibold text-ink">{title}</p>
                  <p className="mt-1 text-sm leading-6 text-stone-600">{description}</p>
                  <p className="mt-3 text-xs font-semibold text-tea">{action}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-6xl px-5 py-12">
        <HorizontalCardSection
          title="本周值得买"
          description="先看本周最值得关注的母婴用品和活动线索，点开后再确认详细条件。"
          nextAction={{
            label: "看完后：按状态筛选全部优惠",
            href: "/deals"
          }}
          viewAllHref="/deals"
          items={deals}
          getKey={(deal) => deal.id}
          renderCard={(deal) => <DealShelfCard deal={deal} />}
        />
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <HorizontalCardSection
            title="出门前先看支付返点"
            description="去药妆店、AEON、西松屋、超市前，先确认今天哪个支付方式有返还。"
            nextAction={{
              label: "看完后：去日历核对活动条件",
              href: "/calendar"
            }}
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

      <section className="bg-amber-50">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <HomeCalendarActionSection events={calendarEvents} />
        </div>
      </section>

      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="mb-6">
            <div className="mb-4 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-semibold text-tea">新手攻略</p>
                <h2 className="mt-2 text-2xl font-semibold tracking-normal text-ink md:text-3xl">
                  先按今天的问题找
                </h2>
              </div>
              <Link
                href="/guides"
                className="shrink-0 whitespace-nowrap text-sm font-bold text-blue-700 underline underline-offset-4 transition hover:text-blue-900"
              >
                查看全部攻略
              </Link>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {guideProblemRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-lg border border-emerald-100 bg-white p-4 shadow-soft transition hover:border-emerald-200 hover:bg-emerald-50"
                >
                  <p className="text-xs font-semibold text-tea">{route.label}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink">{route.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{route.description}</p>
                  <p className="mt-3 text-xs font-semibold text-stone-500">{route.nextStep}</p>
                </Link>
              ))}
            </div>
          </div>

          <HorizontalCardSection
            title="新手必读路线"
            description="第一次在日本准备母婴用品时，先控制购买范围，再看高频消耗品和平台规则。"
            nextAction={{
              label: "看完后：按今天的问题找攻略",
              href: "/guides"
            }}
            viewAllHref="/guides"
            items={guides}
            getKey={(guide) => guide.slug}
            renderCard={(guide) => <GuideShelfCard guide={guide} />}
          />
        </div>
      </section>

      <section className="bg-linen">
        <div className="mx-auto max-w-6xl px-5 py-12">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-tea">分享给同在日本的宝妈/宝爸</p>
              <h2 className="mt-2 text-2xl font-semibold tracking-normal text-ink md:text-3xl">
                亲友试用时，先按对方正在烦恼的事发一个入口。
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-stone-600">
                早期先验证“看完能不能判断下一步”，不用一次把首页、优惠和全部攻略都发过去。
                每次只让对方看 3-5 分钟，再问哪一页有用、哪里不够可信。
              </p>
            </div>
            <div className="grid gap-3">
              {shareTrialRoutes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft transition hover:border-peach hover:bg-white/90"
                >
                  <p className="text-xs font-semibold text-tea">{route.label}</p>
                  <h3 className="mt-2 text-base font-semibold text-ink">{route.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{route.description}</p>
                  <p className="mt-3 text-xs font-semibold text-stone-500">{route.action}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const allGuides = getAllGuides();
  const allDeals = dealsData as Deal[];
  const homepageDeals = [
    ...allDeals.filter((deal) => deal.availabilityStatus === "active"),
    ...allDeals.filter((deal) => deal.availabilityStatus !== "active")
  ].slice(0, 3);
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
      deals: homepageDeals,
      calendarEvents: getFeaturedCalendarEvents(calendarData as CalendarEvent[]),
      paymentRebateEvents: getPaymentRebateEvents(calendarData as CalendarEvent[], 3),
      guides: beginnerGuides
    }
  };
};
