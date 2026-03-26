import { useState } from "react";

import type { Project, SectionCopy } from "../../data/portfolio";

type ProjectsSectionProps = {
  intro: SectionCopy;
  projects: Project[];
};

const PROJECT_DESCRIPTION_MAX_LENGTH = 320;

function truncateText(text: string, maxLength: number) {
  const normalizedText = text.trim();

  if (normalizedText.length <= maxLength) {
    return normalizedText;
  }

  const truncatedText = normalizedText.slice(0, maxLength).trimEnd();
  const lastSpaceIndex = truncatedText.lastIndexOf(" ");

  if (lastSpaceIndex > Math.floor(maxLength * 0.6)) {
    return `${truncatedText.slice(0, lastSpaceIndex).trimEnd()}...`;
  }

  return `${truncatedText}...`;
}

export function ProjectsSection({ intro, projects }: ProjectsSectionProps) {
  const [expandedProjects, setExpandedProjects] = useState<Record<string, boolean>>(
    {},
  );

  const toggleProjectDescription = (projectId: string) => {
    setExpandedProjects((current) => ({
      ...current,
      [projectId]: !current[projectId],
    }));
  };

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
          {projects.map((project) => {
            const projectDescription = project.description.trim();
            const isExpanded = expandedProjects[project.id] ?? false;
            const isTruncated =
              projectDescription.length > PROJECT_DESCRIPTION_MAX_LENGTH;
            const visibleDescription =
              isExpanded || !isTruncated
                ? projectDescription
                : truncateText(projectDescription, PROJECT_DESCRIPTION_MAX_LENGTH);

            return (
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
                  <p className="project-description">
                    {visibleDescription}
                    {isTruncated ? (
                      <>
                        {" "}
                        <button
                          type="button"
                          className="project-description__toggle"
                          onClick={() => toggleProjectDescription(project.id)}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? "show less." : "show more."}
                        </button>
                      </>
                    ) : null}
                  </p>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
