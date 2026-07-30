import Link from "next/link";
import type { ReactNode } from "react";
import type { Deal } from "@/lib/types";
import { CardVisual, getDealVisual } from "@/components/VisualMotif";

const ctaClass =
  "inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700 transition hover:bg-peach sm:justify-start";

const dealStatusMeta: Record<
  Deal["availabilityStatus"],
  {
    label: string;
    className: string;
  }
> = {
  active: {
    label: "现在可确认",
    className: "border-tea/30 bg-tea/10 text-tea"
  },
  expired: {
    label: "等下一场",
    className: "border-stone-200 bg-stone-50 text-stone-700"
  },
  unavailable: {
    label: "暂不可买",
    className: "border-rose-200 bg-rose-50 text-rose-700"
  },
  unknown: {
    label: "待确认",
    className: "border-amber-200 bg-amber-50 text-amber-700"
  }
};

function MiniMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-stone-500">{label}</p>
      <p className="mt-1 break-words text-sm font-semibold leading-5 text-stone-800">{value}</p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 space-y-2 text-sm leading-6 text-stone-700">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-tea" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function DetailSection({
  label,
  title,
  children
}: {
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-stone-200 pb-4 last:border-b-0 last:pb-0 lg:border-b-0 lg:pb-0">
      <p className="text-xs font-semibold text-tea">{label}</p>
      <h4 className="mt-1 text-sm font-semibold text-ink">{title}</h4>
      {children}
    </section>
  );
}

export function DealSummaryCard({ deal }: { deal: Deal }) {
  const statusMeta = dealStatusMeta[deal.availabilityStatus];

  return (
    <article className="h-full rounded-lg border border-orange-100 bg-white p-4 shadow-soft sm:p-5">
      <CardVisual label={deal.category} tone="warm" variant={getDealVisual(deal)} />
      <div className="flex flex-wrap gap-2">
        <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-bold text-rose-700">
          {deal.highlight}
        </p>
        <p className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${statusMeta.className}`}>
          {statusMeta.label}
        </p>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{deal.title}</h3>
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <MiniMeta label="平台" value={deal.platform} />
        <MiniMeta label="类型" value={deal.dealType} />
        <MiniMeta label="确定性" value={deal.benefitCertainty} />
        <MiniMeta label="时机" value={deal.shortPeriod} />
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700">
          {deal.recommendationLabel}
        </span>
        <span className="text-sm leading-6 text-stone-600">{deal.targetSummary}</span>
      </div>
      <Link href={`/deals#${deal.id}`} className={`mt-3 ${ctaClass}`}>
        查看详情
      </Link>
    </article>
  );
}

export function DealShelfCard({ deal }: { deal: Deal }) {
  const statusMeta = dealStatusMeta[deal.availabilityStatus];

  return (
    <article className="flex h-full min-h-[25rem] flex-col rounded-lg border border-orange-100 bg-white p-4 shadow-soft">
      <CardVisual label={deal.category} tone="warm" variant={getDealVisual(deal)} />
      <div className="flex flex-wrap gap-2">
        <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-bold text-rose-700">
          {deal.highlight}
        </p>
        <p className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${statusMeta.className}`}>
          {statusMeta.label}
        </p>
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{deal.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-stone-700">
        {deal.platform} · {deal.shortPeriod}
      </p>
      <p className="mt-2 text-xs font-semibold text-tea">{deal.benefitCertainty}</p>
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700">
          {deal.recommendationLabel}
        </span>
        <span className="text-sm leading-6 text-stone-600">{deal.targetSummary}</span>
      </div>
      <Link href={`/deals#${deal.id}`} className={`mt-auto ${ctaClass}`}>
        查看详情
      </Link>
    </article>
  );
}

export function DealCard({ deal }: { deal: Deal }) {
  const statusMeta = dealStatusMeta[deal.availabilityStatus];

  return (
    <article id={deal.id} className="scroll-mt-24 rounded-lg border border-orange-100 bg-white p-4 shadow-soft sm:p-5">
      <CardVisual label={deal.category} tone="warm" variant={getDealVisual(deal)} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="inline-flex rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-sm font-bold text-rose-700">
            {deal.highlight}
          </p>
          <h3 className="mt-3 text-lg font-semibold leading-7 text-ink sm:text-xl">{deal.title}</h3>
        </div>
        <div className="flex flex-wrap gap-2 sm:justify-end">
          <span className={`w-fit whitespace-nowrap rounded-full border px-3 py-1 text-xs font-semibold ${statusMeta.className}`}>
            {statusMeta.label}
          </span>
          <span className="w-fit whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700">
            {deal.recommendationLabel}
          </span>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 rounded-lg bg-cream p-3 sm:grid-cols-2 lg:grid-cols-4">
        <MiniMeta label="平台" value={deal.platform} />
        <MiniMeta label="类型" value={deal.dealType} />
        <MiniMeta label="确定性" value={deal.benefitCertainty} />
        <MiniMeta label="时机" value={deal.shortPeriod} />
        <MiniMeta label="适合谁" value={deal.targetSummary} />
      </div>

      <p className="mt-3 text-sm leading-6 text-stone-700">{deal.detailReason}</p>
      <p className="mt-2 text-xs leading-5 text-stone-500">
        确定性：{deal.certaintyReason}
      </p>

      <div className="mt-4 grid gap-3 sm:flex sm:flex-wrap">
        <details className="group w-full">
          <summary className={`${ctaClass} w-full cursor-pointer list-none sm:w-fit`}>
            <span className="group-open:hidden">展开详情</span>
            <span className="hidden group-open:inline">收起详情</span>
          </summary>
          <div className="mt-4 grid gap-4 border-t border-stone-200 pt-4 sm:gap-5 lg:grid-cols-2">
            <DetailSection label="先判断" title="为什么值得看">
              <p className="mt-2 text-sm leading-6 text-stone-700">{deal.whyWorthBuying}</p>
            </DetailSection>

            <DetailSection label="先排除" title="什么情况跳过">
              <p className="mt-2 text-sm leading-6 text-stone-700">{deal.skipWhen}</p>
            </DetailSection>

            {deal.participationSteps?.length ? (
              <DetailSection label="再操作" title="参加方法">
                <BulletList items={deal.participationSteps} />
              </DetailSection>
            ) : null}

            <DetailSection label="下单前" title="购买前确认">
              <BulletList items={deal.checkBeforeBuying} />
            </DetailSection>

            {deal.savingsExample ? (
              <DetailSection label="看金额" title="省钱示例">
                <p className="mt-2 text-sm leading-6 text-stone-700">{deal.savingsExample}</p>
              </DetailSection>
            ) : null}

            {deal.maxBenefitExample ? (
              <DetailSection label="看上限" title="最大可省/可返示例">
                <p className="mt-2 text-sm leading-6 text-stone-700">{deal.maxBenefitExample}</p>
              </DetailSection>
            ) : null}

            <DetailSection label="最后核对" title="来源与更新">
              <dl className="mt-2 space-y-2 text-sm leading-6 text-stone-700">
                <div>
                  <dt className="font-semibold text-ink">更新时间</dt>
                  <dd>{deal.updatedAt}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-ink">来源名称</dt>
                  <dd>{deal.sourceName}</dd>
                </div>
              </dl>
            </DetailSection>
          </div>
        </details>

        {deal.sourceUrl ? (
          <a href={deal.sourceUrl} target="_blank" rel="noreferrer" className={`${ctaClass} w-full sm:w-auto`}>
            去官方页面
          </a>
        ) : null}
      </div>

      <p className="mt-4 text-xs leading-5 text-stone-500">
        价格、库存和活动条件可能变化，购买前请以官方页面和结算页为准。
      </p>
    </article>
  );
}
