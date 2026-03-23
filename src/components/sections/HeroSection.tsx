import type { HeroContent } from "../../data/portfolio";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section id="about" className="hero section">
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <div className="hero-orb hero-orb-left" aria-hidden="true" />

      <div className="layout-frame">
        <div className="hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{content.eyebrow}</span>
            <h1 className="hero-title">
              {content.titleLead}
              <br />
              <span>{content.titleAccent}</span>
            </h1>
            <p className="hero-aka">{content.akaName}</p>
            <p className="hero-description">{content.description}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">
                <span>{content.primaryCtaLabel}</span>
                <span className="material-symbols-outlined" aria-hidden="true">
                  arrow_outward
                </span>
              </a>
              <a className="button button-secondary" href="#experience">
                {content.secondaryCtaLabel}
              </a>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Design principles">
            <div className="panel-surface">
              <span className="panel-label">{content.principlesTitle}</span>
              <ul className="principles">
                {content.principles.map((principle) => (
                  <li key={principle}>{principle}</li>
                ))}
              </ul>
            </div>
            <div className="stat-card">
              <span className="stat-number">{content.statValue}</span>
              <span className="stat-caption">{content.statCaption}</span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}



