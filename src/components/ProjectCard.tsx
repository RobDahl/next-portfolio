"use client";

import { motion } from "framer-motion";
import type { BentoProject } from "@/data/data";

interface ProjectCardProps {
  project: BentoProject;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={[
        "h-full rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6",
        "shadow-[0_10px_40px_rgba(0,0,0,0.28)]",
        index === 0 ? "md:col-span-2 xl:col-span-1" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-300/80">{project.subtitle}</p>
          <h4 className="mt-3 text-xl font-semibold text-zinc-100">{project.title}</h4>
          <p className="mt-3 text-sm leading-relaxed text-zinc-300">{project.description}</p>
        </div>
        <motion.div
          className="ml-4 text-cyan-300/60 group-hover:text-cyan-300"
          whileHover={{ x: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>

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
    </motion.article>
  );
}
