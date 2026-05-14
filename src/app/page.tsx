import { BentoGrid } from "@/components/BentoGrid";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { Hero } from "@/components/Hero";
import { HobbyBentoGrid } from "@/components/HobbyBentoGrid";
import { SkillsSection } from "@/components/SkillsSection";
import { bentoProjects, experienceTimeline, heroContent, offTheClockHobbies, skills } from "@/data/data";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[18rem] bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.11),transparent_68%)]" />
        <div className="absolute inset-x-0 bottom-0 h-[16rem] bg-gradient-to-t from-[var(--color-bg)]/88 via-[var(--color-bg)]/35 to-transparent" />
      </div>

      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 lg:gap-10">
        <Hero content={heroContent} />
        <BentoGrid projects={bentoProjects} />
        <ExperienceTimeline items={experienceTimeline} />
        <SkillsSection skills={skills} />
        <HobbyBentoGrid hobbies={offTheClockHobbies} />
      </div>
    </main>
  );
}
