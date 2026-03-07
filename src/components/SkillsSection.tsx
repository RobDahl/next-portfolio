import type { Skills } from "@/data/data";

interface SkillsSectionProps {
  skills: Skills;
}

const skillGroups = [
  { label: "Languages", key: "languages" },
  { label: "Frameworks", key: "frameworks" },
  { label: "Cloud & Infra", key: "cloudAndInfra" },
  { label: "Tools", key: "tools" },
] as const;

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="space-y-4">
      <h3 className="text-2xl font-semibold text-white md:text-3xl">Skills</h3>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.key} className="rounded-3xl border border-white/10 bg-white/[0.02] p-5">
            <h4 className="text-lg font-medium text-zinc-100">{group.label}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills[group.key].map((skill) => (
                <span
                  key={`${group.key}-${skill}`}
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
