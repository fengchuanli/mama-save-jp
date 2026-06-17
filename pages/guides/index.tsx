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
  return (
    <Layout title="攻略列表 - 母婴省钱日历">
      <section className="mx-auto max-w-6xl px-5 py-12">
        <SectionHeader
          eyebrow="攻略列表"
          title="把日本购物规则讲清楚"
          description="适合刚来日本、日语购物页面看着费劲、还不熟悉积分和促销节奏的华人宝妈/宝爸。"
        />
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
