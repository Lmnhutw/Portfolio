import type { ContactContent } from "../../data/portfolio";

type ContactSectionProps = {
  content: ContactContent;
};

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="section">
      <div className="layout-frame">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-content">
            <h2>
              {content.titleLead}
              <br />
              {content.titlePrefix} <span>{content.titleAccent}</span>
            </h2>
            <p>{content.description}</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${content.email}`}>
                <span className="material-symbols-outlined" aria-hidden="true">
                  mail
                </span>
                {content.email}
              </a>
              <a className="button button-tertiary" href="#about">
                {content.secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
