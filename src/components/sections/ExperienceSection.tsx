import type { ExperienceItem, SectionIntro } from "../../data/portfolio";
import { SectionHeading } from "../ui/SectionHeading";

type ExperienceSectionProps = {
  intro: SectionIntro;
  experienceItems: ExperienceItem[];
};

export function ExperienceSection({ intro, experienceItems }: ExperienceSectionProps) {
  return (
    <section id="experience" className="section section-deep">
      <div className="layout-frame layout-frame--narrow">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} centered />

        <div className="timeline">
          {experienceItems.map((item) => (
            <article key={`${item.company}-${item.period}`} className="timeline-item">
              <div className="timeline-period">{item.period}</div>
              <div className="timeline-line" aria-hidden="true">
                <span className={`timeline-dot${item.active ? " is-active" : ""}`} />
              </div>
              <div className="timeline-content">
                <h3>{item.title}</h3>
                <p className="timeline-company">{item.company}</p>
                <p className="timeline-description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
