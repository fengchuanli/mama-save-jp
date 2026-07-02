import type { CalendarEvent } from "@/lib/types";

const featuredCalendarEventIds = [
  "amazon-smile-sale",
  "yahoo-super-paypay-202607",
  "rakuten-marathon"
];

export function getFeaturedCalendarEvents(events: CalendarEvent[]) {
  const byId = new Map(events.map((event) => [event.id, event]));

  return featuredCalendarEventIds
    .map((id) => byId.get(id))
    .filter((event): event is CalendarEvent => Boolean(event));
}
