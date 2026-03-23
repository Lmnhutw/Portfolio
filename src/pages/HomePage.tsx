import { ContactSection } from "../components/sections/ContactSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { HeroSection } from "../components/sections/HeroSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import {
  contactContent,
  experienceIntro,
  experienceItems,
  heroContent,
  projects,
  projectsIntro,
  skills,
  skillsIntro,
} from "../data/portfolio";

export function HomePage() {
  return (
    <>
      <HeroSection content={heroContent} />
      <SkillsSection intro={skillsIntro} skills={skills} />
      <ProjectsSection intro={projectsIntro} projects={projects} />
      <ExperienceSection intro={experienceIntro} experienceItems={experienceItems} />
      <ContactSection content={contactContent} />
    </>
  );
}
