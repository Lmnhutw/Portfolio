import { useEffect, useState } from "react";
import type { NavItem } from "../../data/portfolio";

type HeaderProps = {
  navItems: NavItem[];
};

export function Header({ navItems }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => {
      window.removeEventListener("resize", closeMenu);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-frame">
        <nav className="nav-card" aria-label="Primary">
          <a className="brand" href="#about">
            Lai Minh Nhut
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
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {menuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </nav>

        <div id="mobile-menu" className={`mobile-menu${menuOpen ? " is-open" : ""}`}>
          {navItems.map((item) => (
            <a
              key={item.href}
              className="mobile-link"
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="button button-primary mobile-cta"
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch
          </a>
        </div>
      </div>
    </header>
  );
}

