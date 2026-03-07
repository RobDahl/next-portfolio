"use client";

import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { use } from "react";
import Link from "next/link";
import { caseStudies } from "@/data/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function CaseStudyPage({ params }: PageProps) {
  const { slug } = use(params);
  const study = caseStudies.find((s) => s.slug === slug);

  if (!study) notFound();

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="relative min-h-screen bg-gradient-to-b from-[#070b14] to-[#0a0f1e] text-white"
    >
      {/* Back Button */}
      <div className="absolute top-4 left-4 z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-sm text-zinc-300 transition hover:border-white/35 hover:bg-white/10 hover:text-white"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{study.title}</h1>
            <p className="mt-4 mx-auto max-w-2xl text-lg leading-relaxed text-zinc-300 md:text-xl">{study.hook}</p>
          </div>
        </div>
      </section>

      {/* Two-Column Layout */}
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pb-16 sm:px-6 lg:px-8 lg:flex-row lg:gap-12">
        {/* Left Column: Problem/Solution Narrative */}
        <div className="flex-1 space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-cyan-300">Problem</h2>
            <div className="prose prose-invert max-w-none">
              {study.problem.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4 leading-relaxed text-zinc-300">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <h2 className="mb-4 text-2xl font-semibold text-cyan-300">Solution</h2>
            <div className="prose prose-invert max-w-none">
              {study.solution.split("\n\n").map((para, i) => (
                <p key={i} className="mb-4 leading-relaxed text-zinc-300">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Wireframe placeholder for diagrams */}
          <div className="rounded-3xl border border-dashed border-white/20 bg-white/[0.01] p-6 md:p-8">
            <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02] text-zinc-500">
              <p className="text-center text-sm uppercase tracking-[0.15em]">Architectural Diagram / UI Screenshot Placeholder</p>
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Sidebar */}
        <aside className="lg:sticky lg:top-8 lg:h-fit lg:w-80">
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-white">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {study.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-fuchsia-300/25 bg-fuchsia-300/10 px-3 py-1 text-xs text-fuchsia-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {study.sourceUrl ? (
              <a
                href={study.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/15 px-4 py-3 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/20"
              >
                View Source Code
              </a>
            ) : (
              <div className="inline-flex w-full items-center justify-center rounded-xl border border-zinc-500/30 bg-zinc-500/10 px-4 py-3 text-sm font-medium text-zinc-400">
                Enterprise Case Study
              </div>
            )}
          </div>
        </aside>
      </div>
    </motion.main>
  );
}
