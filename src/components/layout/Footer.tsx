import type { SocialLink } from "../../data/portfolio";

type FooterProps = {
  socialLinks: SocialLink[];
};

export function Footer({ socialLinks }: FooterProps) {
  return (
    <footer className="footer">
      <div className="footer-shell">
        <p className="footer-brand">THE NOCTURNAL ARCHITECT</p>
        <p className="footer-copy">Copyright 2026 The Nocturnal Architect. Built with precision.</p>
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
