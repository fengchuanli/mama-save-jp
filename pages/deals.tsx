import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { useMemo, useState } from "react";
import { DealCard } from "@/components/DealCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createListItemJsonLd,
  getAbsoluteUrl
} from "@/lib/structured-data";
import type { Deal } from "@/lib/types";
import dealsData from "@/data/deals.json";

type DealsProps = {
  deals: Deal[];
};

type DealStatusFilter = "全部" | Deal["availabilityStatus"];

const statusFilterLabels: Record<DealStatusFilter, string> = {
  全部: "全部状态",
  active: "现在可确认",
  expired: "等下一场",
  unavailable: "暂不可买",
  unknown: "待确认"
};

const statusNextActions: Record<
  DealStatusFilter,
  {
    label: string;
    href: string;
  }
> = {
  全部: {
    label: "下一步：去日历核对最近节点",
    href: "/calendar"
  },
  active: {
    label: "下一步：去日历核对活动条件",
    href: "/calendar"
  },
  expired: {
    label: "下一步：去日历找下一场节点",
    href: "/calendar"
  },
  unavailable: {
    label: "下一步：先读攻略找替代买法",
    href: "/guides"
  },
  unknown: {
    label: "下一步：先读攻略避免误买",
    href: "/guides"
  }
};

const filterScrollerClass =
  "no-scrollbar -mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-1 pr-10 sm:mx-0 sm:flex-wrap sm:snap-none sm:overflow-visible sm:px-0 sm:pb-0 sm:pr-0";

function MobileScrollHint({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute right-0 flex w-14 items-center justify-end bg-gradient-to-l from-white via-white/90 to-white/0 pr-1 sm:hidden ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-orange-100 bg-white text-lg font-semibold text-tea shadow-soft">
        ›
      </span>
    </div>
  );
}

export default function Deals({ deals }: DealsProps) {
  const dealsUrl = getAbsoluteUrl("/deals");
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedPlatform, setSelectedPlatform] = useState("全部");
  const [selectedStatus, setSelectedStatus] = useState<DealStatusFilter>("全部");
  const taskEntryRoutes = [
    {
      label: "马上要补货",
      title: "先看尿不湿/湿巾",
      description: "适合家里 1-2 周内会用完，先按单片价和库存判断。",
      category: "尿不湿",
      platform: "全部",
      status: "active" as DealStatusFilter
    },
    {
      label: "准备入园",
      title: "先看保育园用品",
      description: "适合按园方清单补小件、备用衣物和姓名贴。",
      category: "保育园用品",
      platform: "全部",
      status: "active" as DealStatusFilter
    },
    {
      label: "出门前顺手确认",
      title: "先看支付/门店机会",
      description: "适合去药妆店、超市或西松屋前确认是否值得顺手参加。",
      category: "全部",
      platform: "PayPay",
      status: "active" as DealStatusFilter
    },
    {
      label: "等下一场活动",
      title: "先看过期但可准备",
      description: "适合把 5 のつく日等固定节点先记下来，到当天再重新核对。",
      category: "全部",
      platform: "全部",
      status: "expired" as DealStatusFilter
    }
  ];

  const categories = useMemo(
    () => ["全部", ...Array.from(new Set(deals.map((deal) => deal.category)))],
    [deals]
  );
  const platforms = useMemo(
    () => ["全部", ...Array.from(new Set(deals.map((deal) => deal.platform)))],
    [deals]
  );
  const statusFilters = useMemo<DealStatusFilter[]>(() => {
    const statuses = Array.from(new Set(deals.map((deal) => deal.availabilityStatus)));

    return ["全部", ...statuses];
  }, [deals]);
  const statusCounts = useMemo(() => {
    return deals.reduce<Record<DealStatusFilter, number>>(
      (counts, deal) => {
        counts["全部"] += 1;
        counts[deal.availabilityStatus] += 1;

        return counts;
      },
      {
        全部: 0,
        active: 0,
        expired: 0,
        unavailable: 0,
        unknown: 0
      }
    );
  }, [deals]);
  const filteredDeals = useMemo(
    () =>
      deals.filter((deal) => {
        const categoryMatched =
          selectedCategory === "全部" || deal.category === selectedCategory;
        const platformMatched =
          selectedPlatform === "全部" || deal.platform === selectedPlatform;
        const statusMatched =
          selectedStatus === "全部" || deal.availabilityStatus === selectedStatus;

        return categoryMatched && platformMatched && statusMatched;
      }),
    [deals, selectedCategory, selectedPlatform, selectedStatus]
  );

  const resetFilters = () => {
    setSelectedCategory("全部");
    setSelectedPlatform("全部");
    setSelectedStatus("全部");
  };
  const applyTaskEntry = (category: string, platform: string, status: DealStatusFilter) => {
    setSelectedCategory(category);
    setSelectedPlatform(platform);
    setSelectedStatus(status);
  };
  const collectionJsonLd = createCollectionPageJsonLd({
    name: "日本母婴本周值得买",
    description:
      "面向在日华人宝妈/宝爸的日本母婴优惠集合，整理尿不湿、湿巾、保育园用品、支付返点和平台活动的购买判断。",
    url: dealsUrl,
    items: deals.map((deal, index) =>
      createListItemJsonLd({
        position: index + 1,
        name: deal.title,
        url: deal.url || dealsUrl,
        description: deal.detailReason,
        item: {
          "@type": "Offer",
          name: deal.title,
          category: deal.category,
          availability:
            deal.availabilityStatus === "active"
              ? "https://schema.org/InStock"
              : "https://schema.org/OutOfStock",
          url: deal.url || dealsUrl,
          seller: {
            "@type": "Organization",
            name: deal.platform
          }
        }
      })
    )
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    {
      name: "本周值得买",
      item: dealsUrl
    }
  ]);
  const selectedCategoryLabel =
    selectedCategory === "全部" ? "全部分类" : selectedCategory;
  const selectedPlatformLabel =
    selectedPlatform === "全部" ? "全部平台" : selectedPlatform;
  const resultSummary =
    filteredDeals.length > 0
      ? `${statusFilterLabels[selectedStatus]} / ${selectedCategoryLabel} / ${selectedPlatformLabel}：当前 ${filteredDeals.length} 条优惠机会`
      : `${statusFilterLabels[selectedStatus]} / ${selectedCategoryLabel} / ${selectedPlatformLabel}：暂时没有匹配的优惠机会`;
  const selectedStatusAction = statusNextActions[selectedStatus];

  return (
    <Layout
      title="本周值得买"
      description="在日华人宝妈可参考的日本母婴优惠列表，按尿不湿、湿巾、童装、保育园用品和 Amazon、楽天、西松屋、赤ちゃん本舗等平台筛选。"
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
      <section className="bg-[#fff7ed]">
        <div className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="本周值得买"
          title="先快速判断，再决定要不要点开"
          description="每周整理在日华人宝妈常用母婴用品的购买时机和优惠线索。先看亮点、时机和适合人群，详细参加方法可在卡片内展开。"
        />
        <div className="mb-7 rounded-lg border border-orange-100 bg-white p-4 shadow-soft sm:p-5">
          <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold text-tea">先按当前任务进入</p>
              <h2 className="mt-1 text-xl font-semibold text-ink">不用先理解全部优惠类型</h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-stone-600">
              如果只是想快速判断今天该不该买，先选最接近的状态，再看卡片里的确定性、跳过条件和购买前确认。
            </p>
          </div>

          <div className="relative">
            <div className="no-scrollbar -mx-4 mt-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-1 pr-10 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 sm:pr-0 lg:grid-cols-4">
              {taskEntryRoutes.map((route) => (
                <button
                  key={route.label}
                  type="button"
                  onClick={() => applyTaskEntry(route.category, route.platform, route.status)}
                  className="w-[78vw] min-w-[17rem] shrink-0 snap-start rounded-lg border border-orange-100 bg-orange-50 p-4 text-left transition hover:bg-linen sm:w-auto sm:min-w-0 sm:shrink"
                >
                  <p className="text-xs font-semibold text-tea">{route.label}</p>
                  <h3 className="mt-2 font-semibold text-ink">{route.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{route.description}</p>
                </button>
              ))}
            </div>
            <MobileScrollHint className="bottom-1 top-5" />
          </div>
        </div>

        <div className="mb-7 space-y-4 rounded-lg border border-orange-100 bg-white p-4 shadow-soft sm:space-y-5 sm:p-5">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink">按当前状态筛选</p>
              <p className="whitespace-nowrap text-xs text-stone-500">
                {statusFilterLabels[selectedStatus]}
              </p>
            </div>
            <div className="relative">
              <div className={filterScrollerClass}>
                {statusFilters.map((status) => {
                  const active = selectedStatus === status;

                  return (
                    <button
                      key={status}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedStatus(status)}
                      className={`min-h-10 shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                        active
                          ? "bg-ink text-white"
                          : "bg-cream text-stone-700 hover:bg-linen"
                      }`}
                    >
                      {statusFilterLabels[status]}（{statusCounts[status]}）
                    </button>
                  );
                })}
              </div>
              <MobileScrollHint className="bottom-1 top-0" />
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink">按分类筛选</p>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap text-xs text-stone-500">当前 {filteredDeals.length} 条</p>
                {selectedCategory !== "全部" || selectedPlatform !== "全部" || selectedStatus !== "全部" ? (
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700"
                  >
                    清除
                  </button>
                ) : null}
              </div>
            </div>
            <div className="relative">
              <div className={filterScrollerClass}>
                {categories.map((category) => {
                  const active = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedCategory(category)}
                      className={`min-h-10 shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                        active
                          ? "bg-ink text-white"
                          : "bg-cream text-stone-700 hover:bg-linen"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
              <MobileScrollHint className="bottom-1 top-0" />
            </div>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-ink">按平台筛选</p>
            <div className="relative">
              <div className={filterScrollerClass}>
                {platforms.map((platform) => {
                  const active = selectedPlatform === platform;

                  return (
                    <button
                      key={platform}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelectedPlatform(platform)}
                      className={`min-h-10 shrink-0 snap-start whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
                        active
                          ? "bg-tea text-white"
                          : "bg-cream text-stone-700 hover:bg-linen"
                      }`}
                    >
                      {platform}
                    </button>
                  );
                })}
              </div>
              <MobileScrollHint className="bottom-1 top-0" />
            </div>
          </div>
        </div>

        <div className="mb-5 rounded-lg border border-orange-100 bg-white px-4 py-3 text-sm leading-6 text-stone-600 shadow-soft sm:px-5">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              <span className="font-semibold text-ink">{resultSummary}</span>
              <span className="ml-0 block sm:ml-2 sm:inline">
                先看状态和确定性，再展开卡片核对参加方法、跳过条件和官方来源。
              </span>
            </p>
            <Link
              href={selectedStatusAction.href}
              className="inline-flex min-h-10 shrink-0 items-center justify-center rounded-full bg-linen px-4 py-2 text-xs font-semibold text-stone-700 transition hover:bg-peach"
            >
              {selectedStatusAction.label}
            </Link>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {filteredDeals.length === 0 ? (
          <div className="mt-8 rounded-lg border border-stone-200 bg-white p-6 text-center text-stone-600 shadow-soft sm:p-8">
            <p className="font-semibold text-ink">当前组合没有符合条件的优惠。</p>
            <p className="mt-2 text-sm leading-6">
              可以先清除状态、分类和平台筛选，再从“马上要补货”或“等下一场活动”重新进入。
            </p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-4 inline-flex min-h-10 items-center justify-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white transition hover:bg-stone-800"
            >
              清除全部筛选
            </button>
          </div>
        ) : null}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<DealsProps> = async () => {
  return {
    props: {
      deals: dealsData as Deal[]
    }
  };
};
