"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HeroContent } from "@/data/data";

interface HeroProps {
  content: HeroContent;
}

export function Hero({ content }: HeroProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)] backdrop-blur md:p-10">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="flex flex-col gap-6 md:flex-row md:items-center md:gap-8"
      >
        <div className="mx-auto w-full max-w-[220px] shrink-0 md:mx-0 md:max-w-[260px]">
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-white/15 bg-white/5">
            <Image
              src={content.photoPath}
              alt={`${content.name} profile photo`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 220px, 260px"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-300/80">Portfolio</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">{content.name}</h1>
          <h2 className="text-lg font-medium text-zinc-300 md:text-2xl">{content.title}</h2>
          <p className="max-w-3xl text-base leading-relaxed text-zinc-300 md:text-lg">{content.summary}</p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/Rob_Dahl_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/15 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200/50 hover:bg-cyan-300/20"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/RobDahl"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="GitHub profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-zinc-200 transition hover:border-white/35 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.7.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.09 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.06A9.31 9.31 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.9-1.34 2.74-1.06 2.74-1.06.54 1.41.2 2.45.1 2.71.64.72 1.03 1.64 1.03 2.77 0 3.96-2.34 4.82-4.57 5.08.36.32.68.95.68 1.92 0 1.39-.01 2.5-.01 2.84 0 .27.18.59.69.49A10.28 10.28 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/rob-dahl"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="LinkedIn profile"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/5 text-zinc-200 transition hover:border-white/35 hover:bg-white/10"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                <path d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Zm-9.9 15H6.4v-8.4h2.7V18Zm-1.35-9.6a1.56 1.56 0 1 1 0-3.13 1.56 1.56 0 0 1 0 3.13ZM18 18h-2.7v-4.08c0-.97-.35-1.64-1.22-1.64-.67 0-1.06.45-1.23.88-.06.15-.08.37-.08.59V18H10V9.6h2.6v1.15h.04c.36-.68 1-1.64 2.43-1.64 1.78 0 3.12 1.16 3.12 3.64V18Z" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
