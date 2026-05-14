import type { BentoProject } from "@/data/data";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

interface BentoGridProps {
  projects: BentoProject[];
}

export function BentoGrid({ projects }: BentoGridProps) {
  return (
    <section id="projects" className="scroll-mt-20 space-y-4">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]/75">Selected Work</p>
        <h3 className="text-2xl font-semibold text-white md:text-3xl">Case Studies</h3>
        <p className="max-w-3xl text-[var(--color-text-muted)]">Impact-first snapshots of identity, migration, compliance, and infrastructure work shipped in real enterprise environments.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="block group"
          >
            <ProjectCard project={project} index={index} />
          </Link>
        ))}
      </div>
    </section>
  );
}
