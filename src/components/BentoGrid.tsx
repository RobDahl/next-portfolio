import type { BentoProject } from "@/data/data";

interface BentoGridProps {
  projects: BentoProject[];
}

export function BentoGrid({ projects }: BentoGridProps) {
  return (
    <section className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-white md:text-3xl">Visual Showcase</h3>
        <p className="text-zinc-400">A bento-style snapshot of architecture, infrastructure, and data work.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <article
            key={project.title}
            className={[
              "rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6",
              "shadow-[0_10px_40px_rgba(0,0,0,0.28)]",
              index === 0 ? "md:col-span-2 xl:col-span-1" : "",
            ].join(" ")}
          >
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">{project.subtitle}</p>
            <h4 className="mt-3 text-xl font-semibold text-zinc-100">{project.title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.description}</p>

            <div className="mt-4">
              <p className="text-xs uppercase tracking-[0.18em] text-zinc-400">Highlights</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.focusAreas.map((area) => (
                  <span
                    key={`${project.title}-${area}`}
                    className="rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs text-fuchsia-100"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={`${project.title}-${tag}`}
                  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
