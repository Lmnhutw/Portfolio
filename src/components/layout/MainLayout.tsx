import type { ReactNode } from "react";
import type { NavItem, SocialLink } from "../../data/portfolio";
import type { Theme } from "../../theme/useTheme";
import { Footer } from "./Footer";
import { Header } from "./Header";

type MainLayoutProps = {
  children: ReactNode;
  navItems: NavItem[];
  onToggleTheme: () => void;
  socialLinks: SocialLink[];
  theme: Theme;
};

export function MainLayout({
  children,
  navItems,
  onToggleTheme,
  socialLinks,
  theme,
}: MainLayoutProps) {
  return (
    <div className="site-shell">
      <Header navItems={navItems} onToggleTheme={onToggleTheme} theme={theme} />
      <main className="main-layout__content">{children}</main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
