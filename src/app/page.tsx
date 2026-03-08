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
        <div className="absolute inset-x-0 top-[-14rem] h-[28rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.16),transparent_60%)]" />
        <div className="absolute bottom-0 right-[-10rem] h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
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
