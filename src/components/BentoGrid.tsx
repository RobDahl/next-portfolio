import type { BentoProject } from "@/data/data";
import Link from "next/link";
import { ProjectCard } from "./ProjectCard";

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
