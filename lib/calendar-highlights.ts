import type { CalendarEvent } from "@/lib/types";

const featuredCalendarEventIds = [
  "rakuten-marathon",
  "amazon-smile-sale",
  "paypay-yahoo-campaign"
];

export function getFeaturedCalendarEvents(events: CalendarEvent[]) {
  const byId = new Map(events.map((event) => [event.id, event]));

  return featuredCalendarEventIds
    .map((id) => byId.get(id))
    .filter((event): event is CalendarEvent => Boolean(event));
}
