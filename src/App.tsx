import { useEffect, useState } from "react";
import {
  experienceItems,
  navItems,
  projects,
  skills,
  socialLinks,
} from "./data/portfolio";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <div className="site-shell">
      <Header menuOpen={menuOpen} onMenuToggle={() => setMenuOpen((open) => !open)} />
      <main>
        <Hero />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

type HeaderProps = {
  menuOpen: boolean;
  onMenuToggle: () => void;
};

function Header({ menuOpen, onMenuToggle }: HeaderProps) {
  return (
    <header className="header">
      <nav className="nav-card" aria-label="Primary">
        <a className="brand" href="#about">
          The Nocturnal Architect
        </a>

        <div className="nav-links desktop-nav">
          {navItems.map((item) => (
            <a key={item.href} className="nav-link" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <a className="button button-primary nav-cta desktop-cta" href="#contact">
            Get in Touch
          </a>
          <button
            type="button"
            className="menu-button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation"
            onClick={onMenuToggle}
          >
            <span className="material-symbols-outlined" aria-hidden="true">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
        {navItems.map((item) => (
          <a key={item.href} className="mobile-link" href={item.href} onClick={onMenuToggle}>
            {item.label}
          </a>
        ))}
        <a className="button button-primary mobile-cta" href="#contact" onClick={onMenuToggle}>
          Get in Touch
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="about" className="hero section">
      <div className="hero-orb hero-orb-right" aria-hidden="true" />
      <div className="hero-orb hero-orb-left" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Architected after dark</span>
          <h1 className="hero-title">
            The Nocturnal
            <br />
            <span>Architect</span>
          </h1>
          <p className="hero-description">
            Full-stack developer focused on building sleek, high-performance web
            applications. I craft digital artifacts with architectural precision and
            midnight inspiration.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              <span>View Projects</span>
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_outward
              </span>
            </a>
            <a className="button button-secondary" href="#experience">
              Read Philosophy
            </a>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Design principles">
          <div className="panel-surface">
            <span className="panel-label">Night shift principles</span>
            <ul className="principles">
              <li>Elegant systems over visual noise</li>
              <li>Fast interfaces under real-world load</li>
              <li>Polish that survives product scale</li>
            </ul>
          </div>
          <div className="stat-card">
            <span className="stat-number">15+</span>
            <span className="stat-caption">Products influenced by design systems and frontend architecture.</span>
          </div>
        </aside>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section section-muted">
      <div className="container">
        <div className="section-heading">
          <span className="eyebrow">Expertise</span>
          <h2>Core Competencies</h2>
        </div>

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

function ProjectsSection() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="projects-heading">
          <div>
            <span className="eyebrow">Curated Work</span>
            <h2>Functional Artifacts</h2>
          </div>
          <p>
            Selected projects that push the boundaries of interaction, performance,
            and visual hierarchy.
          </p>
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

function ExperienceSection() {
  return (
    <section id="experience" className="section section-deep">
      <div className="container container-narrow">
        <div className="section-heading section-heading-centered">
          <span className="eyebrow">Journey</span>
          <h2>Professional Evolution</h2>
        </div>

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

function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="contact-card">
          <div className="contact-glow" aria-hidden="true" />
          <div className="contact-content">
            <h2>
              Ready to build
              <br />
              something <span>eternal?</span>
            </h2>
            <p>
              I&apos;m currently accepting new projects and consulting opportunities.
              Let&apos;s discuss your architectural vision.
            </p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:architect@nocturnal.dev">
                <span className="material-symbols-outlined" aria-hidden="true">
                  mail
                </span>
                architect@nocturnal.dev
              </a>
              <a className="button button-tertiary" href="#about">
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">THE NOCTURNAL ARCHITECT</p>
        <p className="footer-copy">© 2026 The Nocturnal Architect. Built with precision.</p>
        <div className="footer-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default App;
