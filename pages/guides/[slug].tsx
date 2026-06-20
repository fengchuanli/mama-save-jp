import Link from "next/link";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Layout } from "@/components/Layout";
import { MarkdownContent } from "@/components/MarkdownContent";
import { getAllGuides, getGuideBySlug, getGuideSlugs } from "@/lib/guides";
import { siteConfig } from "@/lib/site";
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
  const guideUrl = `${siteConfig.siteUrl}/guides/${guide.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    url: guideUrl,
    datePublished: guide.publishedAt || guide.updatedAt,
    dateModified: guide.updatedAt || guide.publishedAt,
    articleSection: guide.category,
    keywords: guide.tags,
    inLanguage: "zh-CN",
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.siteName,
      url: siteConfig.siteUrl
    },
    audience: {
      "@type": "Audience",
      audienceType: "在日华人宝妈/宝爸"
    }
  };

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
      </Head>
      <article className="mx-auto max-w-3xl px-5 py-12">
        <Link href="/guides" className="text-sm font-semibold text-tea">
          返回攻略列表
        </Link>
        <div className="mt-6 rounded-lg border border-stone-200 bg-white p-6 shadow-soft">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-linen px-3 py-1 text-xs text-stone-700">
              {guide.category}
            </span>
            {(guide.tags.length ? guide.tags : [guide.babyAge]).map((tag) => (
              <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs text-stone-700">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-3xl font-semibold leading-tight text-ink">{guide.title}</h1>
          <p className="mt-4 leading-7 text-stone-600">{guide.description}</p>
          <p className="mt-4 text-sm text-stone-500">
            {guide.readingTime} · 发布 {guide.publishedAt || guide.updatedAt}
          </p>
        </div>
        <div className="prose prose-stone mt-8 max-w-none rounded-lg border border-stone-200 bg-white p-6 shadow-soft">
          <MarkdownContent content={guide.content} />
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-5 pb-12">
        <div className="mb-5">
          <p className="text-sm font-semibold text-tea">按主题继续读</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink">相关攻略</h2>
        </div>
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
  const relatedGuides = getRelatedGuides(guide, getAllGuides());

  return {
    props: {
      guide,
      relatedGuides
    }
  };
};
