import Link from "next/link";
import type { GetStaticProps } from "next";
import { GuideCard } from "@/components/GuideCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllGuides } from "@/lib/guides";
import type { GuideMeta } from "@/lib/types";

type GuidesProps = {
  guides: GuideMeta[];
};

export default function Guides({ guides }: GuidesProps) {
  const beginnerGuideSlugs = [
    "newborn-shopping-list",
    "buy-diapers-japan",
    "rakuten-5-0-mama-shopping"
  ];
  const beginnerGuides = beginnerGuideSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is GuideMeta => Boolean(guide));

  return (
    <Layout
      title="攻略列表"
      description="面向在日华人宝妈的日本母婴省钱攻略，解释尿不湿、楽天积分、西松屋、赤ちゃん本舗、保育园用品和童装尺码。"
    >
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="攻略列表"
          title="把日本购物规则讲清楚"
          description="适合刚来日本、日语购物页面看着费劲、还不熟悉积分和促销节奏的华人宝妈/宝爸。"
        />

        <div className="mb-8 rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
          <div className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold text-tea">新手宝妈必读路线</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">
                先解决买什么，再判断哪里买
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-stone-600">
              如果刚开始在日本准备母婴用品，可以按下面顺序读，先控制清单范围，再看高频消耗品和平台活动。
            </p>
          </div>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {beginnerGuides.map((guide, index) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-lg bg-cream p-4 transition hover:bg-linen"
              >
                <p className="text-xs font-semibold text-tea">第 {index + 1} 步</p>
                <h3 className="mt-2 font-semibold text-ink">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<GuidesProps> = async () => {
  return {
    props: {
      guides: getAllGuides()
    }
  };
};
