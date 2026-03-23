import { MainLayout } from "./components/layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { navItems, socialLinks } from "./data/portfolio";

function App() {
  return (
    <MainLayout navItems={navItems} socialLinks={socialLinks}>
      <HomePage />
    </MainLayout>
  );
}

export default App;
