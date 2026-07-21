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

function MobileScrollHint({ className }: { className: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute bottom-1 right-0 top-0 flex w-12 items-center justify-end pr-1 sm:hidden ${className}`}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-stone-200 bg-white text-lg font-semibold text-tea shadow-soft">
        ›
      </span>
    </div>
  );
}

export default function GuideDetail({ guide, relatedGuides }: GuideDetailProps) {
  const guidePath = `/guides/${guide.slug}`;
  const guideUrl = getAbsoluteUrl(guidePath);
  const detailTags = guide.tags.length ? guide.tags : [guide.babyAge];
  const primaryTags = detailTags.slice(0, 3);
  const secondaryTags = detailTags.slice(3);
  const contentLines = guide.content.split("\n");
  const sectionLinks = contentLines
    .map((line, index) => ({
      id: `section-${index}`,
      title: line.trim().replace("## ", "")
    }))
    .filter((section, index) => section.title && contentLines[index].trim().startsWith("## "))
    .slice(0, 6);
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
        {sectionLinks.length > 1 ? (
          <nav
            aria-label="攻略小节"
            className="mt-4 rounded-lg border border-stone-200 bg-white p-3 shadow-soft sm:mt-5 sm:p-4"
          >
            <p className="px-1 text-xs font-semibold text-tea">快速跳到小节</p>
            <div className="relative">
              <div className="no-scrollbar -mx-1 mt-2 flex snap-x snap-mandatory gap-2 overflow-x-auto px-1 pb-1 pr-9 sm:snap-none sm:pr-1">
                {sectionLinks.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="flex min-h-11 w-[11.5rem] max-w-[70vw] shrink-0 snap-start items-center rounded-lg bg-cream px-3 py-2 text-left text-sm leading-5 text-stone-700 transition hover:bg-linen sm:min-h-10 sm:w-auto sm:max-w-none sm:rounded-full sm:whitespace-nowrap"
                  >
                    {section.title}
                  </a>
                ))}
              </div>
              <MobileScrollHint className="from-white via-white/90 bg-gradient-to-l to-white/0" />
            </div>
          </nav>
        ) : null}
        <div className="prose prose-stone mt-6 max-w-none rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:mt-8 sm:p-6">
          <MarkdownContent content={guide.content} />
        </div>
      </article>

      <section className="mx-auto max-w-6xl px-4 pb-10 sm:px-5 sm:pb-12">
        <div className="mb-4 sm:mb-5">
          <p className="text-sm font-semibold text-tea">按主题继续读</p>
          <h2 className="mt-1.5 text-xl font-semibold text-ink sm:mt-2 sm:text-2xl">相关攻略</h2>
        </div>
        <div className="relative">
          <div className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 pr-10 md:mx-0 md:grid md:snap-none md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0 md:pr-0">
            {relatedGuides.map((item) => (
              <Link
                key={item.slug}
                href={`/guides/${item.slug}`}
                className="flex min-h-[12rem] w-[82vw] max-w-[22rem] shrink-0 snap-start flex-col rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:p-5 md:w-auto md:max-w-none md:shrink"
              >
                <p className="text-sm text-tea">{item.category}</p>
                <h3 className="mt-2 font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600 sm:leading-7">
                  {item.description}
                </p>
                <p className="mt-auto pt-4 text-xs font-semibold text-stone-500">继续阅读</p>
              </Link>
            ))}
          </div>
          <MobileScrollHint className="from-[#fffaf2] via-[#fffaf2]/90 bg-gradient-to-l to-[#fffaf2]/0" />
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
