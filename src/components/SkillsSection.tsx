import type { Skills } from "@/data/data";

interface SkillsSectionProps {
  skills: Skills;
}

const skillGroups = [
  { label: "Product Delivery", key: "productDelivery" },
  { label: "Identity & Platform", key: "identityAndPlatform" },
  { label: "Systems & AI Workflows", key: "systemsAndAiWorkflows" },
  { label: "Frontend Experience", key: "frontendExperience" },
  { label: "Backend & Data", key: "backendAndData" },
] as const;

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section className="space-y-5">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-primary)]/75">Capabilities</p>
        <h3 className="text-2xl font-semibold text-white md:text-3xl">Engineering Value Stack</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <article key={group.key} className="rounded-3xl border border-[var(--color-border)] bg-[color:var(--color-surface)]/90 p-5 shadow-[0_8px_22px_rgba(2,8,23,0.34)] transition hover:border-[var(--color-border-strong)]">
            <h4 className="text-base font-semibold text-[var(--color-text)]">{group.label}</h4>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills[group.key].map((skill) => (
                <span
                  key={`${group.key}-${skill}`}
                  className="rounded-full border border-[var(--color-border-strong)] bg-[var(--color-primary-soft)] px-3 py-1 text-sm text-[var(--color-text)]"
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
