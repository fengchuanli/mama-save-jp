import Link from "next/link";
import Head from "next/head";
import type { GetStaticProps } from "next";
import { GuideCard } from "@/components/GuideCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { getAllGuides } from "@/lib/guides";
import {
  createBreadcrumbJsonLd,
  createCollectionPageJsonLd,
  createListItemJsonLd,
  getAbsoluteUrl
} from "@/lib/structured-data";
import type { GuideMeta } from "@/lib/types";

type GuidesProps = {
  guides: GuideMeta[];
};

type GuideProblemGroup = {
  id: string;
  title: string;
  description: string;
  slugs: string[];
  readingOrder: Record<string, string>;
};

const guideProblemGroups: GuideProblemGroup[] = [
  {
    id: "start",
    title: "先定购物范围",
    description: "还不知道第一批该买什么、去哪家店看时，先用这些攻略把清单收窄。",
    slugs: ["newborn-shopping-list", "choose-baby-stores-japan"],
    readingOrder: {
      "newborn-shopping-list": "先读：第一批买什么",
      "choose-baby-stores-japan": "再读：去哪家店看"
    }
  },
  {
    id: "essentials",
    title: "判断消耗品值不值",
    description: "尿不湿、纸尿裤和药妆店补货先看单价、尺码风险和是否马上会用。",
    slugs: ["buy-diapers-japan", "diaper-price-line", "drugstore-coupon"],
    readingOrder: {
      "buy-diapers-japan": "先读：纸尿裤怎么买",
      "diaper-price-line": "再读：怎么算好价",
      "drugstore-coupon": "需要时读：药妆店补货"
    }
  },
  {
    id: "platforms",
    title: "看懂平台和返点",
    description: "遇到楽天、5と0のつく日或支付返点时，先确认实付、上限和是否本来就要买。",
    slugs: [
      "rakuten-points-basics",
      "rakuten-5-0-mama-shopping",
      "payment-rebates-mama-shopping"
    ],
    readingOrder: {
      "rakuten-points-basics": "先读：理解积分",
      "rakuten-5-0-mama-shopping": "再读：判断活动日",
      "payment-rebates-mama-shopping": "出门前读：支付返点"
    }
  },
  {
    id: "nursery",
    title: "保育园和童装准备",
    description: "入园清单、姓名贴和换季童装更容易买多，先按场景和尺码判断。",
    slugs: ["nursery-entry-budget-items", "kids-clothes-size-80-90-100"],
    readingOrder: {
      "nursery-entry-budget-items": "先读：入园用品",
      "kids-clothes-size-80-90-100": "换季前读：童装尺码"
    }
  }
];

export default function Guides({ guides }: GuidesProps) {
  const guidesUrl = getAbsoluteUrl("/guides");
  const beginnerGuideSlugs = [
    "newborn-shopping-list",
    "buy-diapers-japan",
    "rakuten-5-0-mama-shopping"
  ];
  const beginnerGuides = beginnerGuideSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is GuideMeta => Boolean(guide));
  const groupedGuides = guideProblemGroups.map((group) => ({
    ...group,
    guides: group.slugs
      .map((slug) => guides.find((guide) => guide.slug === slug))
      .filter((guide): guide is GuideMeta => Boolean(guide))
  }));
  const collectionJsonLd = createCollectionPageJsonLd({
    name: "日本母婴省钱攻略列表",
    description:
      "面向在日华人宝妈/宝爸的日本母婴省钱攻略，整理尿不湿、楽天积分、药妆店优惠、保育园用品和支付返点判断方法。",
    url: guidesUrl,
    items: guides.map((guide, index) =>
      createListItemJsonLd({
        position: index + 1,
        name: guide.title,
        url: `${guidesUrl}/${guide.slug}`,
        description: guide.description
      })
    )
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    {
      name: "攻略",
      item: guidesUrl
    }
  ]);

  return (
    <Layout
      title="攻略列表"
      description="面向在日华人宝妈的日本母婴省钱攻略，解释尿不湿、楽天积分、西松屋、赤ちゃん本舗、保育园用品和童装尺码。"
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

        <div className="space-y-8">
          {groupedGuides.map((group) => (
            <section key={group.id} aria-labelledby={`guide-group-${group.id}`}>
              <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-semibold text-tea">按问题找攻略</p>
                  <h2
                    id={`guide-group-${group.id}`}
                    className="mt-1 text-xl font-semibold text-ink"
                  >
                    {group.title}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-stone-600">
                  {group.description}
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {group.guides.map((guide) => (
                  <GuideCard
                    key={guide.slug}
                    guide={guide}
                    contextLabel={group.readingOrder[guide.slug]}
                  />
                ))}
              </div>
            </section>
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
