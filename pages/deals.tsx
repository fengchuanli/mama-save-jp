import type { GetStaticProps } from "next";
import Head from "next/head";
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

export default function Deals({ deals }: DealsProps) {
  const dealsUrl = getAbsoluteUrl("/deals");
  const [selectedCategory, setSelectedCategory] = useState("全部");
  const [selectedPlatform, setSelectedPlatform] = useState("全部");

  const categories = useMemo(
    () => ["全部", ...Array.from(new Set(deals.map((deal) => deal.category)))],
    [deals]
  );
  const platforms = useMemo(
    () => ["全部", ...Array.from(new Set(deals.map((deal) => deal.platform)))],
    [deals]
  );
  const filteredDeals = useMemo(
    () =>
      deals.filter((deal) => {
        const categoryMatched =
          selectedCategory === "全部" || deal.category === selectedCategory;
        const platformMatched =
          selectedPlatform === "全部" || deal.platform === selectedPlatform;

        return categoryMatched && platformMatched;
      }),
    [deals, selectedCategory, selectedPlatform]
  );

  const resetFilters = () => {
    setSelectedCategory("全部");
    setSelectedPlatform("全部");
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
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="本周值得买"
          title="先快速判断，再决定要不要点开"
          description="每周整理在日华人宝妈常用母婴用品的购买时机和优惠线索。先看亮点、时机和适合人群，详细参加方法可在卡片内展开。"
        />
        <div className="mb-7 space-y-4 rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:space-y-5 sm:p-5">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink">按分类筛选</p>
              <div className="flex items-center gap-3">
                <p className="whitespace-nowrap text-xs text-stone-500">当前 {filteredDeals.length} 条</p>
                {selectedCategory !== "全部" || selectedPlatform !== "全部" ? (
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
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedCategory(category)}
                    className={`min-h-10 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
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
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold text-ink">按平台筛选</p>
            <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0">
              {platforms.map((platform) => {
                const active = selectedPlatform === platform;

                return (
                  <button
                    key={platform}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setSelectedPlatform(platform)}
                    className={`min-h-10 shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm transition ${
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
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {filteredDeals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
        </div>

        {filteredDeals.length === 0 ? (
          <div className="mt-8 rounded-lg border border-stone-200 bg-white p-8 text-center text-stone-600 shadow-soft">
            暂时没有符合条件的优惠，换一个分类或平台看看。
          </div>
        ) : null}
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
