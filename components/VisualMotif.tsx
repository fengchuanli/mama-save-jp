import type { CalendarEvent, Deal, GuideMeta } from "@/lib/types";

export type VisualVariant =
  | "calendar"
  | "clothes"
  | "diaper"
  | "guide"
  | "nursery"
  | "payment"
  | "shopping"
  | "wipes";

export type VisualTone = "blue" | "green" | "warm" | "yellow";

const toneClass: Record<VisualTone, string> = {
  blue: "border-sky-100 bg-sky-50",
  green: "border-emerald-100 bg-emerald-50",
  warm: "border-orange-100 bg-orange-50",
  yellow: "border-amber-100 bg-amber-50"
};

const accentClass: Record<VisualTone, string> = {
  blue: "bg-sky-100 text-sky-800",
  green: "bg-emerald-100 text-emerald-800",
  warm: "bg-orange-100 text-orange-800",
  yellow: "bg-amber-100 text-amber-800"
};

function MotifSvg({ variant }: { variant: VisualVariant }) {
  if (variant === "payment") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
        <rect x="24" y="16" width="58" height="82" rx="14" fill="#ffffff" stroke="#93c5fd" strokeWidth="5" />
        <rect x="34" y="28" width="38" height="46" rx="8" fill="#dbeafe" />
        <rect x="40" y="82" width="26" height="5" rx="2.5" fill="#60a5fa" />
        <rect x="76" y="38" width="58" height="42" rx="12" fill="#ffffff" stroke="#f6b8a2" strokeWidth="5" />
        <rect x="88" y="52" width="24" height="8" rx="4" fill="#fca5a5" />
        <path d="M116 86c13-4 22-13 25-28" fill="none" stroke="#72836d" strokeLinecap="round" strokeWidth="6" />
        <path d="M134 62l8-8 5 11" fill="none" stroke="#72836d" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" />
      </svg>
    );
  }

  if (variant === "calendar") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
        <rect x="24" y="24" width="72" height="64" rx="14" fill="#ffffff" stroke="#fbbf24" strokeWidth="5" />
        <path d="M25 43h70" stroke="#fbbf24" strokeWidth="5" />
        <path d="M42 18v17M78 18v17" stroke="#d97706" strokeLinecap="round" strokeWidth="7" />
        <rect x="42" y="54" width="14" height="12" rx="4" fill="#fde68a" />
        <rect x="64" y="54" width="14" height="12" rx="4" fill="#fecaca" />
        <path d="M101 54l33-9 10 36-33 9z" fill="#ffffff" stroke="#f6b8a2" strokeLinejoin="round" strokeWidth="5" />
        <path d="M113 61l17 17M130 56l-17 27" stroke="#fb7185" strokeLinecap="round" strokeWidth="5" />
      </svg>
    );
  }

  if (variant === "guide") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
        <rect x="38" y="16" width="78" height="82" rx="14" fill="#ffffff" stroke="#86efac" strokeWidth="5" />
        <path d="M55 43h42M55 61h42M55 79h26" stroke="#72836d" strokeLinecap="round" strokeWidth="6" />
        <path d="M52 29h50" stroke="#bbf7d0" strokeLinecap="round" strokeWidth="9" />
        <path d="M113 72l11 11 22-27" fill="none" stroke="#22c55e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="8" />
      </svg>
    );
  }

  if (variant === "nursery") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
        <path d="M45 30h60l12 55H33z" fill="#ffffff" stroke="#86efac" strokeLinejoin="round" strokeWidth="5" />
        <path d="M56 29c3-13 35-13 38 0" fill="none" stroke="#72836d" strokeLinecap="round" strokeWidth="6" />
        <rect x="84" y="50" width="48" height="28" rx="10" fill="#fef3c7" stroke="#f6b8a2" strokeWidth="5" />
        <path d="M95 64h26" stroke="#fb7185" strokeLinecap="round" strokeWidth="5" />
        <path d="M49 58h25M49 72h18" stroke="#93c5fd" strokeLinecap="round" strokeWidth="6" />
      </svg>
    );
  }

  if (variant === "wipes") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
        <rect x="28" y="42" width="102" height="44" rx="14" fill="#ffffff" stroke="#93c5fd" strokeWidth="5" />
        <rect x="57" y="28" width="44" height="28" rx="12" fill="#dbeafe" stroke="#60a5fa" strokeWidth="5" />
        <path d="M65 41c9-7 20-7 28 0" fill="none" stroke="#ffffff" strokeLinecap="round" strokeWidth="6" />
        <path d="M44 64h70" stroke="#bfdbfe" strokeLinecap="round" strokeWidth="7" />
        <path d="M46 77h45" stroke="#fde68a" strokeLinecap="round" strokeWidth="7" />
      </svg>
    );
  }

  if (variant === "clothes") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
        <path d="M65 25l15 9 15-9 24 18-13 18-10-7v41H64V54l-10 7-13-18z" fill="#ffffff" stroke="#f6b8a2" strokeLinejoin="round" strokeWidth="5" />
        <path d="M67 27c5 13 21 13 26 0" fill="none" stroke="#fca5a5" strokeLinecap="round" strokeWidth="5" />
        <path d="M71 67h18" stroke="#93c5fd" strokeLinecap="round" strokeWidth="6" />
      </svg>
    );
  }

  if (variant === "shopping") {
    return (
      <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
        <path d="M36 45h88l-10 45H46z" fill="#ffffff" stroke="#f6b8a2" strokeLinejoin="round" strokeWidth="5" />
        <path d="M58 45c3-23 41-23 44 0" fill="none" stroke="#72836d" strokeLinecap="round" strokeWidth="6" />
        <rect x="55" y="60" width="24" height="18" rx="7" fill="#dbeafe" />
        <rect x="86" y="58" width="21" height="24" rx="8" fill="#fde68a" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 110" className="h-full w-full" aria-hidden="true">
      <rect x="45" y="20" width="70" height="78" rx="18" fill="#ffffff" stroke="#f6b8a2" strokeWidth="5" />
      <path d="M57 49c10 9 36 9 46 0v24c-10 10-36 10-46 0z" fill="#fef3c7" stroke="#fbbf24" strokeLinejoin="round" strokeWidth="5" />
      <path d="M62 34h36M66 83h28" stroke="#fb7185" strokeLinecap="round" strokeWidth="6" />
      <path d="M44 47l-16-9M116 48l17-8" stroke="#93c5fd" strokeLinecap="round" strokeWidth="7" />
    </svg>
  );
}

export function CardVisual({
  label,
  tone = "warm",
  variant
}: {
  label?: string;
  tone?: VisualTone;
  variant: VisualVariant;
}) {
  return (
    <div className={`relative mb-4 h-24 overflow-hidden rounded-lg border ${toneClass[tone]}`}>
      {label ? (
        <span className={`absolute left-3 top-3 z-10 rounded-full px-2.5 py-1 text-[11px] font-semibold ${accentClass[tone]}`}>
          {label}
        </span>
      ) : null}
      <div className="absolute inset-y-1 right-0 w-36">
        <MotifSvg variant={variant} />
      </div>
    </div>
  );
}

export function HeroShoppingVisual() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute right-[-2rem] top-8 h-56 w-72 opacity-[0.45] sm:right-4 sm:h-72 sm:w-96 md:right-10 md:top-10">
        <MotifSvg variant="shopping" />
      </div>
      <div className="absolute bottom-4 right-8 h-28 w-40 opacity-40 md:right-40">
        <MotifSvg variant="calendar" />
      </div>
      <div className="absolute bottom-14 left-4 hidden h-24 w-36 opacity-[0.35] sm:block">
        <MotifSvg variant="diaper" />
      </div>
    </div>
  );
}

export function getDealVisual(deal: Deal): VisualVariant {
  const text = `${deal.category} ${deal.title} ${deal.dealType}`;

  if (text.includes("湿巾") || text.includes("棉柔")) return "wipes";
  if (text.includes("保育") || text.includes("姓名") || text.includes("入园")) return "nursery";
  if (text.includes("童装") || text.includes("衣")) return "clothes";
  if (text.includes("PayPay") || text.includes("支付") || text.includes("返点")) return "payment";
  return "diaper";
}

export function getCalendarVisual(event: CalendarEvent): VisualVariant {
  const text = `${event.platform} ${event.store} ${event.title} ${event.eventName}`;

  if (text.includes("PayPay") || text.includes("ペイ") || text.includes("払い") || text.includes("PAY")) return "payment";
  if (text.includes("保育") || text.includes("西松屋") || text.includes("赤ちゃん")) return "nursery";
  return "calendar";
}

export function getGuideVisual(guide: GuideMeta): VisualVariant {
  const text = `${guide.title} ${guide.category} ${guide.tags.join(" ")}`;

  if (text.includes("尿") || text.includes("おむつ")) return "diaper";
  if (text.includes("保育") || text.includes("入园")) return "nursery";
  if (text.includes("童装") || text.includes("尺码")) return "clothes";
  if (text.includes("返点") || text.includes("支付") || text.includes("楽天")) return "payment";
  return "guide";
}
