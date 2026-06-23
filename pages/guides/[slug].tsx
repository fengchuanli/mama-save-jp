import Link from "next/link";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getAllGuides, getGuideBySlug, getGuideSlugs } from "@/lib/guides";
import {
  createArticleJsonLd,
  createBreadcrumbJsonLd,
  getAbsoluteUrl
} from "@/lib/structured-data";
import type { Guide, GuideMeta } from "@/lib/types";

type GuideDetailProps = {
  guide: Guide;
  relatedGuides: GuideMeta[];
};

function getRelatedGuides(guide: Guide, guides: GuideMeta[]) {
  return guides
    .filter((item) => item.slug !== guide.slug)
    .map((item) => {
      const sharedTags = item.tags.filter((tag) => guide.tags.includes(tag)).length;
      const categoryScore = item.category === guide.category ? 3 : 0;
      const ageScore = item.babyAge === guide.babyAge ? 1 : 0;

      return {
        guide: item,
        score: sharedTags * 2 + categoryScore + ageScore
      };
    })
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      const aDate = a.guide.updatedAt || a.guide.publishedAt;
      const bDate = b.guide.updatedAt || b.guide.publishedAt;
      return bDate.localeCompare(aDate);
    })
    .slice(0, 3)
    .map(({ guide: item }) => item);
}

export default function GuideDetail({ guide, relatedGuides }: GuideDetailProps) {
  const guidePath = `/guides/${guide.slug}`;
  const guideUrl = getAbsoluteUrl(guidePath);
  const detailTags = guide.tags.length ? guide.tags : [guide.babyAge];
  const primaryTags = detailTags.slice(0, 3);
  const secondaryTags = detailTags.slice(3);
  const articleJsonLd = createArticleJsonLd({
    title: guide.title,
    description: guide.description,
    url: guideUrl,
    publishedAt: guide.publishedAt || guide.updatedAt,
    updatedAt: guide.updatedAt || guide.publishedAt,
    section: guide.category,
    tags: guide.tags,
    readingTime: guide.readingTime
  });
  const breadcrumbJsonLd = createBreadcrumbJsonLd([
    { name: "攻略", item: getAbsoluteUrl("/guides") },
    { name: guide.title, item: guideUrl }
  ]);

  return (
    <Layout title={guide.title} description={guide.description} ogType="article">
      <Head>
        <meta name="keywords" content={guide.tags.join(",")} />
        <meta property="article:published_time" content={guide.publishedAt} />
        <meta property="article:modified_time" content={guide.updatedAt || guide.publishedAt} />
        <meta property="article:section" content={guide.category} />
        {guide.tags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      </Head>
      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-5 sm:py-12">
        <Link href="/guides" className="text-sm font-semibold text-tea">
          返回攻略列表
        </Link>
        <div className="mt-5 rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:mt-6 sm:p-6">
          <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
            <span className="rounded-full bg-linen px-2.5 py-1 text-xs text-stone-700 sm:px-3">
              {guide.category}
            </span>
            {primaryTags.map((tag) => (
              <span key={tag} className="rounded-full bg-mist px-2.5 py-1 text-xs text-stone-700 sm:px-3">
                {tag}
              </span>
            ))}
            {secondaryTags.map((tag) => (
              <span
                key={tag}
                className="hidden rounded-full bg-mist px-3 py-1 text-xs text-stone-700 sm:inline-flex"
              >
                {tag}
              </span>
            ))}
            {secondaryTags.length > 0 ? (
              <span className="rounded-full bg-mist px-2.5 py-1 text-xs text-stone-700 sm:hidden">
                +{secondaryTags.length}
              </span>
            ) : null}
          </div>
          <h1 className="text-2xl font-semibold leading-tight text-ink sm:text-3xl">
            {guide.title}
          </h1>
          <p className="mt-3 text-sm leading-6 text-stone-600 sm:mt-4 sm:text-base sm:leading-7">
            {guide.description}
          </p>
          <p className="mt-3 text-sm text-stone-500 sm:mt-4">
            {guide.readingTime} · 发布 {guide.publishedAt || guide.updatedAt}
          </p>
        </div>
        <div className="prose prose-stone mt-6 max-w-none rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:mt-8 sm:p-6">
          <MarkdownContent content={guide.content} />
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-5 sm:pb-12">
        <div className="mb-4 sm:mb-5">
          <p className="text-sm font-semibold text-tea">按主题继续读</p>
          <h2 className="mt-1.5 text-xl font-semibold text-ink sm:mt-2 sm:text-2xl">相关攻略</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {relatedGuides.map((item) => (
            <Link
              key={item.slug}
              href={`/guides/${item.slug}`}
              className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:p-5"
            >
              <p className="text-sm text-tea">{item.category}</p>
              <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-stone-600 sm:leading-7">
                {item.description}
              </p>
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
  const relatedGuides = getRelatedGuides(guide, getAllGuides());

  return {
    props: {
      guide,
      relatedGuides
    }
  };
};
