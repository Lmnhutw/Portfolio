import { MainLayout } from "./components/layout/MainLayout";
import { navItems, socialLinks } from "./data/portfolio";
import { HomePage } from "./pages/HomePage";
import { useTheme } from "./theme/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <MainLayout
      navItems={navItems}
      socialLinks={socialLinks}
      theme={theme}
      onToggleTheme={toggleTheme}
    >
      <HomePage />
    </MainLayout>
  );
}

export default App;
