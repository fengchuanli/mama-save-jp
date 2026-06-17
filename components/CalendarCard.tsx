import type { CalendarEvent } from "@/lib/types";

export function CalendarCard({ event }: { event: CalendarEvent }) {
  return (
    <article className="rounded-lg border border-stone-200 bg-white p-5 shadow-soft">
      <p className="text-sm font-semibold text-tea">{event.month}</p>
      <h3 className="mt-2 text-lg font-semibold text-ink">{event.title}</h3>
      <p className="mt-2 text-sm text-stone-500">{event.platform}</p>
      <p className="mt-4 leading-7 text-stone-700">{event.bestFor}</p>
      <p className="mt-3 rounded-lg bg-cream px-4 py-3 text-sm leading-6 text-stone-700">
        {event.reminder}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {event.tags.map((tag) => (
          <span key={tag} className="rounded-full bg-mist px-3 py-1 text-xs text-stone-600">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
