import type { Deal } from "@/lib/types";

const priorityLabel = {
  high: "优先看",
  medium: "可关注",
  low: "按需买"
};

export function DealCard({ deal }: { deal: Deal }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-linen px-3 py-1 text-xs font-medium text-stone-700">
          {deal.category}
        </span>
        <span className="rounded-full bg-mist px-3 py-1 text-xs font-medium text-stone-700">
          {deal.babyAge}
        </span>
        <span className="rounded-full bg-tea px-3 py-1 text-xs font-medium text-white">
          {priorityLabel[deal.priority]}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-ink">{deal.title}</h3>
      <p className="mt-2 text-sm text-stone-500">{deal.platform} · 更新 {deal.updatedAt}</p>
      <div className="mt-5 grid grid-cols-3 gap-3 rounded-lg bg-cream p-3 text-sm">
        <div>
          <p className="text-stone-500">平时价</p>
          <p className="mt-1 font-semibold text-stone-700">{deal.regularPrice}</p>
        </div>
        <div>
          <p className="text-stone-500">好价线</p>
          <p className="mt-1 font-semibold text-stone-700">{deal.goodPrice}</p>
        </div>
        <div>
          <p className="text-stone-500">本周价</p>
          <p className="mt-1 font-semibold text-ink">{deal.currentPrice}</p>
        </div>
      </div>
      <p className="mt-4 leading-7 text-stone-700">{deal.reason}</p>
      <p className="mt-3 rounded-lg bg-linen px-4 py-3 text-sm leading-6 text-stone-700">
        {deal.savingTip}
      </p>
      <p className="mt-3 text-sm leading-6 text-stone-500">{deal.caution}</p>
    </article>
  );
}
