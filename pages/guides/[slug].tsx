import Link from "next/link";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getAllGuides, getGuideBySlug, getGuideSlugs } from "@/lib/guides";
import type { Guide, GuideMeta } from "@/lib/types";

type GuideDetailProps = {
  guide: Guide;
  relatedGuides: GuideMeta[];
};

export default function GuideDetail({ guide, relatedGuides }: GuideDetailProps) {
  return (
    <Layout title={`${guide.title} - 母婴省钱日历`} description={guide.description}>
      <article className="mx-auto max-w-3xl px-5 py-12">
        <Link href="/guides" className="text-sm font-semibold text-tea">
          返回攻略列表
        </Link>
        <div className="mt-6 rounded-lg border border-stone-200 bg-white p-6 shadow-soft">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-linen px-3 py-1 text-xs text-stone-700">
              {guide.category}
            </span>
            <span className="rounded-full bg-mist px-3 py-1 text-xs text-stone-700">
              {guide.babyAge}
            </span>
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-ink">{guide.title}</h1>
          <p className="mt-4 leading-7 text-stone-600">{guide.description}</p>
          <p className="mt-4 text-sm text-stone-500">
            {guide.readingTime} · 更新 {guide.updatedAt}
          </p>
        </div>
        <div className="prose prose-stone mt-8 max-w-none rounded-lg border border-stone-200 bg-white p-6 shadow-soft">
          <MarkdownContent content={guide.content} />
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <h2 className="mb-5 text-2xl font-semibold text-ink">继续阅读</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedGuides.map((item) => (
            <Link
              key={item.slug}
              href={`/guides/${item.slug}`}
              className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft"
            >
              <p className="text-sm text-tea">{item.category}</p>
              <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600">{item.description}</p>
            </Link>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: getGuideSlugs().map((slug) => ({ params: { slug } })),
    fallback: false
  };
};

export const getStaticProps: GetStaticProps<GuideDetailProps> = async ({ params }) => {
  const slug = String(params?.slug);
  const guide = getGuideBySlug(slug);
  const relatedGuides = getAllGuides()
    .filter((item) => item.slug !== slug)
    .slice(0, 3);

  return {
    props: {
      guide,
      relatedGuides
    }
  };
};
