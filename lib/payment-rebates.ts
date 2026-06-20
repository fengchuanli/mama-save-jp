import type { CalendarEvent } from "@/lib/types";

const paymentRebateEventIds = [
  "paypay-official-campaign-check",
  "paypay-yahoo-campaign",
  "rakuten-pay-campaign-check",
  "dbarai-campaign-check",
  "aupay-campaign-check"
];

export function getPaymentRebateEvents(events: CalendarEvent[], limit = paymentRebateEventIds.length) {
  const byId = new Map(events.map((event) => [event.id, event]));

  return paymentRebateEventIds
    .map((id) => byId.get(id))
    .filter((event): event is CalendarEvent => Boolean(event))
    .slice(0, limit);
}
