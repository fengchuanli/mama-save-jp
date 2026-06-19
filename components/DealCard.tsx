import type { Deal } from "@/lib/types";

const priorityLabel = {
  high: "优先看",
  medium: "可关注",
  low: "按需买"
};

const dataStatusLabel = {
  sample: "示例数据",
  verified: "已核验优惠"
};

const dataStatusClass = {
  sample: "bg-stone-100 text-stone-600",
  verified: "bg-tea text-white"
};

const availabilityStatusLabel = {
  unknown: "待确认",
  active: "进行中",
  expired: "已过期",
  unavailable: "已下架"
};

const availabilityStatusClass = {
  unknown: "bg-stone-100 text-stone-600",
  active: "bg-linen text-stone-700",
  expired: "bg-amber-100 text-amber-800",
  unavailable: "bg-rose-100 text-rose-800"
};

export function DealCard({ deal }: { deal: Deal }) {
  const hasPrice = Boolean(deal.originalPrice || deal.salePrice || deal.effectivePrice);
  const content = (
    <>
      <div className="mb-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
        <span className="rounded-full bg-linen px-2.5 py-1 text-xs font-medium text-stone-700 sm:px-3">
          {deal.category}
        </span>
        <span className="rounded-full bg-mist px-2.5 py-1 text-xs font-medium text-stone-700 sm:px-3">
          {deal.platform}
        </span>
        <span className="rounded-full bg-tea px-2.5 py-1 text-xs font-medium text-white sm:px-3">
          {priorityLabel[deal.priority]}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 ${dataStatusClass[deal.dataStatus]}`}
        >
          {dataStatusLabel[deal.dataStatus]}
        </span>
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium sm:px-3 ${availabilityStatusClass[deal.availabilityStatus]}`}
        >
          {availabilityStatusLabel[deal.availabilityStatus]}
        </span>
        {!hasPrice ? (
          <span className="rounded-full bg-peach px-2.5 py-1 text-xs font-medium text-ink sm:px-3">
            攻略型推荐
          </span>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-base font-semibold leading-7 text-ink sm:text-lg">{deal.title}</h3>
          <p className="mt-1 text-xs text-stone-500 sm:text-sm">更新 {deal.updatedAt}</p>
        </div>
        {deal.url ? (
          <span className="text-xs font-semibold text-tea sm:rounded-full sm:border sm:border-stone-200 sm:px-3 sm:py-2">
            查看商品页
          </span>
        ) : (
          <span className="text-xs font-semibold text-stone-400 sm:rounded-full sm:border sm:border-stone-200 sm:px-3 sm:py-2">
            商品页待确认
          </span>
        )}
      </div>

      {hasPrice ? (
        <div className="mt-4 grid grid-cols-2 gap-3 rounded-lg bg-cream p-3 text-sm sm:mt-5 sm:grid-cols-3">
          <div>
            <p className="text-stone-500">原价</p>
            <p className="mt-1 font-semibold text-stone-700">{deal.originalPrice || "未标注"}</p>
          </div>
          <div>
            <p className="text-stone-500">优惠价</p>
            <p className="mt-1 font-semibold text-ink">{deal.salePrice || "看活动"}</p>
          </div>
          <div>
            <p className="text-stone-500">实质价格</p>
            <p className="mt-1 font-semibold text-ink">{deal.effectivePrice || "按积分计算"}</p>
          </div>
        </div>
      ) : (
        <div className="mt-4 rounded-lg bg-cream p-3 text-sm leading-6 text-stone-700 sm:mt-5 sm:p-4">
          暂无固定价格，适合作为购买时机和避坑清单参考。
        </div>
      )}

      <div className="mt-4 rounded-lg border border-peach bg-linen p-3 sm:mt-5 sm:p-4">
        <p className="text-sm font-semibold text-ink">
          {deal.availabilityStatus === "active" ? "为什么值得买" : "参考价值"}
        </p>
        <p className="mt-2 text-sm leading-6 text-stone-700 sm:text-base sm:leading-7">
          {deal.whyWorthBuying}
        </p>
      </div>

      <div className="mt-3 rounded-lg border border-stone-200 bg-white p-3 sm:p-4">
        <p className="text-sm font-semibold text-ink">什么情况不适合买</p>
        <p className="mt-2 text-sm leading-6 text-stone-700 sm:text-base sm:leading-7">
          {deal.skipWhen}
        </p>
      </div>

      <dl className="mt-4 grid gap-3 text-sm sm:mt-5 sm:gap-4 md:grid-cols-2">
        <div>
          <dt className="font-semibold text-ink">优惠条件</dt>
          <dd className="mt-1 leading-6 text-stone-600">{deal.condition}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">适合买入时间</dt>
          <dd className="mt-1 leading-6 text-stone-600">{deal.bestTime}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">适合人群</dt>
          <dd className="mt-1 leading-6 text-stone-600">{deal.targetUser}</dd>
        </div>
        <div>
          <dt className="font-semibold text-ink">备注</dt>
          <dd className="mt-1 leading-6 text-stone-600">{deal.note}</dd>
        </div>
      </dl>
    </>
  );

  return (
    <article className="rounded-lg border border-stone-200 bg-white p-4 shadow-soft sm:p-5">
      {deal.url ? (
        <a href={deal.url} target="_blank" rel="noreferrer" className="block">
          {content}
        </a>
      ) : (
        content
      )}
    </article>
  );
}
