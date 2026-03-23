import type { ReactNode } from "react";
import type { NavItem, SocialLink } from "../../data/portfolio";
import { Footer } from "./Footer";
import { Header } from "./Header";

type MainLayoutProps = {
  children: ReactNode;
  navItems: NavItem[];
  socialLinks: SocialLink[];
};

export function MainLayout({ children, navItems, socialLinks }: MainLayoutProps) {
  return (
    <div className="site-shell">
      <Header navItems={navItems} />
      <main className="main-layout__content">{children}</main>
      <Footer socialLinks={socialLinks} />
    </div>
  );
}
