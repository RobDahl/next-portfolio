import type { ExperienceEntry } from "@/data/data";

interface ExperienceTimelineProps {
  items: ExperienceEntry[];
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white md:text-3xl">Experience Timeline</h3>

      <div className="space-y-4">
        {items.map((item) => (
          <article
            key={`${item.company}-${item.role}`}
            className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
          >
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
              <h4 className="text-lg font-semibold text-zinc-100">
                {item.company} | {item.role}
              </h4>
              <p className="text-sm text-zinc-400">{item.dateRange}</p>
            </div>

            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-300 md:text-base">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
