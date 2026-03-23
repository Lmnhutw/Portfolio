import type { SectionIntro, Skill } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

type SkillsSectionProps = {
  intro: SectionIntro;
  skills: Skill[];
};

export function SkillsSection({ intro, skills }: SkillsSectionProps) {
  return (
    <section id="skills" className="section section-muted">
      <div className="layout-frame">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} />

        <div className="skills-grid">
          {skills.map((skill) => (
            <article key={skill.name} className="skill-card">
              <span className="material-symbols-outlined skill-icon" aria-hidden="true">
                {skill.icon}
              </span>
              <span className="skill-name">{skill.name}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
