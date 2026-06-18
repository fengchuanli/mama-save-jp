import type { GetStaticProps } from "next";
import { useMemo, useState } from "react";
import { DealCard } from "@/components/DealCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import type { Deal } from "@/lib/types";
import dealsData from "@/data/deals.json";

type DealsProps = {
  deals: Deal[];
};

export default function Deals({ deals }: DealsProps) {
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

  return (
    <Layout
      title="本周值得买"
      description="在日华人宝妈可参考的日本母婴优惠列表，按尿不湿、湿巾、童装、保育园用品和 Amazon、楽天、西松屋、赤ちゃん本舗等平台筛选。"
    >
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="本周值得买"
          title="先看为什么值得买，再看价格"
          description="这里展示人工精选的母婴优惠和攻略型推荐。可以按分类和平台筛选，先判断是否适合自己，再决定要不要下单。"
        />
        <div className="mb-7 space-y-5 rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
          <div>
            <div className="mb-3 flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-ink">按分类筛选</p>
              <p className="text-xs text-stone-500">当前 {filteredDeals.length} 条</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const active = selectedCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
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
            <div className="flex flex-wrap gap-2">
              {platforms.map((platform) => {
                const active = selectedPlatform === platform;

                return (
                  <button
                    key={platform}
                    type="button"
                    onClick={() => setSelectedPlatform(platform)}
                    className={`rounded-full px-4 py-2 text-sm transition ${
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

          {selectedCategory !== "全部" || selectedPlatform !== "全部" ? (
            <button
              type="button"
              onClick={resetFilters}
              className="text-sm font-semibold text-tea"
            >
              清除筛选
            </button>
          ) : null}
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
