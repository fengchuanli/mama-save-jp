import type { GetStaticProps } from "next";
import { DealCard } from "@/components/DealCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import type { Deal } from "@/lib/types";
import dealsData from "@/data/deals.json";

type DealsProps = {
  deals: Deal[];
};

export default function Deals({ deals }: DealsProps) {
  const categories = Array.from(new Set(deals.map((deal) => deal.category)));

  return (
    <Layout title="本周值得买 - 母婴省钱日历">
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="本周值得买"
          title="先看刚需，再看价格"
          description="这里展示人工精选的母婴好价示例。第一版重点是好价线、适合买什么、什么情况不建议囤。"
        />
        <div className="mb-7 flex flex-wrap gap-2">
          {categories.map((category) => (
            <span key={category} className="rounded-full bg-white px-4 py-2 text-sm text-stone-700">
              {category}
            </span>
          ))}
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {deals.map((deal) => (
            <DealCard key={deal.id} deal={deal} />
          ))}
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
