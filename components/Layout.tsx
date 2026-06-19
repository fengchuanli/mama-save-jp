import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import type { ReactNode } from "react";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/deals", label: "本周值得买" },
  { href: "/calendar", label: "省钱日历" },
  { href: "/guides", label: "攻略" }
];

const siteUrl = "https://fengchuanli.github.io/mama-save-jp";

type LayoutProps = {
  title?: string;
  description?: string;
  ogType?: "website" | "article";
  children: ReactNode;
};

export function Layout({
  title = "在日华人宝妈母婴省钱日历",
  description = "整理日本母婴用品促销节奏、购买渠道和省钱攻略，帮助 0-3 岁宝宝家庭少踩坑、会囤货。",
  ogType = "website",
  children
}: LayoutProps) {
  const router = useRouter();
  const pageTitle = title.includes("母婴省钱日历") ? title : `${title} - 母婴省钱日历`;
  const canonicalPath = router.asPath === "/" ? "" : router.asPath.split("?")[0];
  const canonicalUrl = `${siteUrl}${canonicalPath}`;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:site_name" content="母婴省钱日历" />
        <meta name="twitter:card" content="summary" />
      </Head>
      <div className="min-h-screen bg-cream">
        <header className="border-b border-stone-200 bg-cream/95">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-peach text-sm font-bold text-ink">
                省
              </span>
              <span>
                <span className="block text-base font-semibold text-ink">母婴省钱日历</span>
                <span className="block text-xs text-stone-500">日本生活 · 0-3 岁宝宝家庭</span>
              </span>
            </Link>
            <nav className="flex flex-wrap gap-2">
              {navItems.map((item) => {
                const active =
                  item.href === "/"
                    ? router.pathname === "/"
                    : router.pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-full px-4 py-2 text-sm transition ${
                      active
                        ? "bg-ink text-white"
                        : "bg-white text-stone-700 hover:bg-linen"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="border-t border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-4 px-5 py-8 text-sm text-stone-600 md:grid-cols-[1.2fr_0.8fr]">
            <p>
              本站只做省钱信息整理和购物节奏提醒，不替代医生、营养师或专业育儿建议。宝宝用品请结合家庭情况谨慎选择。
            </p>
            <p className="md:text-right">适合在日华人宝妈/宝爸的轻量母婴购物参考。</p>
          </div>
        </footer>
      </div>
    </>
  );
}
