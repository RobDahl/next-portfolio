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
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className={[
        "h-full rounded-3xl border border-[var(--color-border)] bg-gradient-to-b from-[color:var(--color-surface-elevated)]/95 to-[color:var(--color-surface)]/92 p-5",
        "shadow-[0_12px_28px_rgba(2,8,23,0.34)]",
        index === 0 ? "md:col-span-2 xl:col-span-1" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-primary)]/80">{project.subtitle}</p>
          <h4 className="mt-2 text-lg font-semibold leading-tight text-[var(--color-text)]">{project.title}</h4>
        </div>
        <motion.div
          className="text-[var(--color-text-subtle)] transition group-hover:text-[var(--color-primary)]"
          whileHover={{ x: 2 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-[var(--color-text-muted)]">{project.description}</p>

      <div className="mt-4 rounded-xl border border-[var(--color-border)] bg-[color:var(--color-bg-soft)]/70 p-3">
        <p className="text-[11px] uppercase tracking-[0.16em] text-[var(--color-primary)]/75">Impact Signal</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {project.focusAreas.map((area) => (
            <span
              key={`${project.title}-${area}`}
              className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-primary-soft)] px-2.5 py-1 text-[11px] text-[var(--color-text)]"
            >
              {area}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={`${project.title}-${tag}`}
            className="rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface-elevated)]/85 px-2.5 py-1 text-[11px] text-[var(--color-text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
