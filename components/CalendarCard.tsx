import Link from "next/link";
import type { ReactNode } from "react";
import type { CalendarEvent } from "@/lib/types";
import { CardVisual, getCalendarVisual } from "@/components/VisualMotif";

const linkClass =
  "inline-flex min-h-10 items-center justify-center whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700 transition hover:bg-peach sm:justify-start";

const detailsSummaryClass =
  "inline-flex min-h-10 cursor-pointer list-none items-center justify-center whitespace-nowrap rounded-full bg-linen px-3 py-1 text-xs font-semibold text-stone-700 transition hover:bg-peach sm:justify-start";

const priorityClass = {
  high: "border-rose-200 bg-rose-50 text-rose-700",
  medium: "border-peach bg-linen text-ink",
  low: "border-stone-200 bg-stone-50 text-stone-700"
};

const timingLabel = {
  prepare: "提前准备",
  "same-day": "当天确认",
  watch: "先观察"
};

const timingClass = {
  prepare: "border-tea/30 bg-tea/10 text-tea",
  "same-day": "border-rose-200 bg-rose-50 text-rose-700",
  watch: "border-stone-200 bg-stone-50 text-stone-700"
};

const difficultyLabel = {
  easy: "简单",
  normal: "需要核对",
  hard: "规则复杂"
};

const difficultyClass = {
  easy: "border-tea/30 bg-tea/10 text-tea",
  normal: "border-peach bg-linen text-ink",
  hard: "border-rose-200 bg-rose-50 text-rose-700"
};

function TimingBadge({ event }: { event: CalendarEvent }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${timingClass[event.buyingTiming]}`}>
      {timingLabel[event.buyingTiming]}
    </span>
  );
}

function DifficultyBadge({ event }: { event: CalendarEvent }) {
  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${difficultyClass[event.difficulty]}`}>
      {difficultyLabel[event.difficulty]}
    </span>
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

function TargetItems({ items }: { items: string[] }) {
  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="max-w-full break-words rounded-full bg-cream px-2.5 py-1 text-xs text-stone-700">
          {item}
        </span>
      ))}
    </div>
  );
}

export function CalendarSummaryCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="h-full rounded-lg border border-amber-100 bg-white p-4 shadow-soft">
      <CardVisual label={event.platform} tone="yellow" variant={getCalendarVisual(event)} />
      <div className="flex flex-wrap items-center gap-2">
        <p className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${priorityClass[event.priority]}`}>
          {event.highlight}
        </p>
        <TimingBadge event={event} />
        <DifficultyBadge event={event} />
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{event.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-rose-700">{event.period}</p>
      <p className="mt-2 text-sm leading-6 text-stone-700">{event.keyBenefit}</p>
      <TargetItems items={event.targetItems} />
      <p className="mt-3 text-sm leading-6 text-stone-700">先这样判断：{event.decisionHint}</p>
      <p className="mt-3 text-sm leading-6 text-stone-600">{event.actionTip}</p>
      <Link href={event.detailUrl} className={`mt-4 ${linkClass}`}>
        查看详情
      </Link>
    </article>
  );
}

export function CalendarShelfCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="flex h-full min-h-[25rem] flex-col rounded-lg border border-amber-100 bg-white p-4 shadow-soft">
      <CardVisual label={event.platform} tone="yellow" variant={getCalendarVisual(event)} />
      <div className="flex flex-wrap items-center gap-2">
        <p className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${priorityClass[event.priority]}`}>
          {event.highlight}
        </p>
        <DifficultyBadge event={event} />
      </div>
      <h3 className="mt-3 text-lg font-semibold leading-7 text-ink">{event.title}</h3>
      <p className="mt-2 text-sm font-semibold leading-6 text-rose-700">{event.period}</p>
      <p className="mt-2 text-sm leading-6 text-stone-700">
        适合：{event.targetItems.slice(0, 3).join("、")}
      </p>
      <p className="mt-2 text-sm leading-6 text-stone-600">{event.actionTip}</p>
      <Link href={event.detailUrl} className={`mt-auto ${linkClass}`}>
        查看详情
      </Link>
    </article>
  );
}

export function CalendarCard({ event }: { event: CalendarEvent }) {
  return (
    <article id={event.slug} className="scroll-mt-24 rounded-lg border border-amber-100 bg-white p-4 shadow-soft sm:p-5">
      <CardVisual label={event.platform} tone="yellow" variant={getCalendarVisual(event)} />
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <p className={`inline-flex rounded-full border px-3 py-1 text-sm font-bold ${priorityClass[event.priority]}`}>
              {event.highlight}
            </p>
            <TimingBadge event={event} />
            <DifficultyBadge event={event} />
          </div>
          <h3 className="mt-3 text-lg font-semibold leading-7 text-ink sm:text-xl">{event.title}</h3>
        </div>
        <p className="rounded-lg bg-rose-50 px-3 py-2 text-sm font-semibold leading-6 text-rose-700 sm:max-w-[14rem] sm:bg-transparent sm:px-0 sm:py-0 sm:text-right">
          {event.period}
        </p>
      </div>

      <div className="mt-4 rounded-lg bg-cream p-3">
        <p className="text-sm font-semibold text-ink">{event.keyBenefit}</p>
        <TargetItems items={event.targetItems} />
        <p className="mt-3 text-sm leading-6 text-stone-700">先这样判断：{event.decisionHint}</p>
        <p className="mt-3 text-sm leading-6 text-stone-700">行动建议：{event.actionTip}</p>
      </div>

      <details className="mt-4 group">
        <summary className={`${detailsSummaryClass} w-full sm:w-fit`}>
          <span className="group-open:hidden">展开详情</span>
          <span className="hidden group-open:inline">收起详情</span>
        </summary>
        <div className="mt-4 grid gap-4 border-t border-stone-200 pt-4 sm:gap-5 lg:grid-cols-2">
          <DetailSection label="先理解" title="活动是什么">
            <p className="mt-2 text-sm leading-6 text-stone-700">{event.description}</p>
          </DetailSection>

          {event.participationSteps?.length ? (
            <DetailSection label="再操作" title="怎么参加">
              <BulletList items={event.participationSteps} />
            </DetailSection>
          ) : null}

          {event.savingsExample ? (
            <DetailSection label="看金额" title="省钱示例">
              <p className="mt-2 text-sm leading-6 text-stone-700">{event.savingsExample}</p>
            </DetailSection>
          ) : null}

          {event.maxBenefitExample ? (
            <DetailSection label="看上限" title="最大可省/可返示例">
              <p className="mt-2 text-sm leading-6 text-stone-700">{event.maxBenefitExample}</p>
            </DetailSection>
          ) : null}

          <DetailSection label="下单前" title="确认这些条件">
            <BulletList items={event.checkBeforeBuying} />
          </DetailSection>

          <DetailSection label="容易踩坑" title="注意事项">
            <p className="mt-2 text-sm leading-6 text-stone-700">{event.caution}</p>
          </DetailSection>

          <DetailSection label="最后核对" title="来源与更新">
            <p className="mt-2 text-sm leading-6 text-stone-700">更新时间：{event.updatedAt}</p>
            {event.sourceUrl ? (
              <a href={event.sourceUrl} target="_blank" rel="noreferrer" className={`mt-3 w-full sm:w-fit ${linkClass}`}>
                去官方页面
              </a>
            ) : null}
          </DetailSection>
        </div>
      </details>

      <p className="mt-4 text-xs leading-5 text-stone-500">
        活动、返点、库存和适用门店可能变化，购买前请以官方页面、结算页或店头公告为准。
      </p>
    </article>
  );
}

export function CalendarStoreGroup({
  store,
  events
}: {
  store: string;
  events: CalendarEvent[];
}) {
  return (
    <section className="rounded-lg border border-amber-100 bg-white/80 p-4 shadow-soft sm:p-5">
      <div className="mb-4 flex flex-col gap-2 border-b border-stone-200 pb-3 sm:mb-5 sm:flex-row sm:items-end sm:justify-between sm:pb-4">
        <div>
          <p className="text-sm font-semibold text-tea">平台</p>
          <h2 className="mt-1 text-xl font-semibold text-ink sm:text-2xl">{store}</h2>
        </div>
        <p className="text-sm text-stone-500">{events.length} 个省钱节点</p>
      </div>
      <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
        {events.map((event) => (
          <CalendarCard key={event.id} event={event} />
        ))}
      </div>
    </section>
  );
}
