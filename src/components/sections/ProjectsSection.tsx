import type { Project, SectionCopy } from "../../data/portfolio";

type ProjectsSectionProps = {
  intro: SectionCopy;
  projects: Project[];
};

export function ProjectsSection({ intro, projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="section">
      <div className="layout-frame">
        <div className="projects-heading">
          <div>
            <span className="eyebrow">{intro.eyebrow}</span>
            <h2>{intro.title}</h2>
          </div>
          <p>{intro.description}</p>
        </div>

        <div className="project-stack">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card${project.reverse ? " is-reversed" : ""}`}
            >
              <div className="project-media">
                <img src={project.image} alt={project.imageAlt} loading="lazy" />
              </div>

              <div className="project-copy">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-actions">
                  <a className="button button-primary" href="#contact">
                    {project.primaryAction}
                  </a>
                  <a className="button button-tertiary" href="#contact">
                    {project.secondaryAction}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
