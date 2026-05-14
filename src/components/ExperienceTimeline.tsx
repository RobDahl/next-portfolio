import type { ExperienceEntry } from "@/data/data";

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]/75">Experience</p>
        <h3 className="text-2xl font-semibold text-white md:text-3xl">Delivery Timeline</h3>
      </div>

      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-3xl border border-[var(--color-border)] bg-[color:var(--color-surface)]/92 p-6 shadow-[0_8px_24px_rgba(2,8,23,0.38)]"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h4 className="text-lg font-semibold text-[var(--color-text)]">
                {item.company} | {item.role}
              </h4>
              <p className="text-sm text-[var(--color-text-subtle)]">{item.dateRange}</p>
            </div>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-[var(--color-text-muted)] marker:text-[var(--color-primary)] md:text-base">
              {item.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
