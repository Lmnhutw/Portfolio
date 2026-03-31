export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Skill = {
  name: string;
  icon: SkillIconKey;
};

export type SkillIconKey =
  | "csharp"
  | "javascript"
  | "typescript"
  | "java"
  | "dotnet"
  | "sqlServer"
  | "redis"
  | "angular"
  | "nextjs"
  | "bootstrap"
  | "docker"
  | "postman"
  | "git"
  | "github"
  | "jira"
  | "mysql"
  | "mongodb"
  | "html"
  | "css"
  | "minimalApi"
  | "signalr"
  | "unitTesting"
  | "oop"
  | "dsa";

export type SkillsCollection = {
  grid: Skill[];
  slider: Skill[];
};

export type Project = {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction: string;
  secondaryAction: string;
  reverse?: boolean;
};

export type ExperienceItem = {
  period: string;
  title: string;
  company: string;
  description: string;
  active?: boolean;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SectionIntro = {
  eyebrow: string;
  title: string;
};

export type SectionCopy = SectionIntro & {
  description: string;
};

export type HeroContent = {
  eyebrow: string;
  titleLead: string;
  titleAccent: string;
  akaName: string;
  description: string;
  principlesTitle: string;
  principles: string[];
  statValue: string;
  statText: string;
  statCaption: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type ContactContent = {
  titleLead: string;
  titlePrefix: string;
  titleAccent: string;
  description: string;
  email: string;
  secondaryCtaLabel: string;
};

export const heroContent: HeroContent = {
  eyebrow: "Junior software engineer",
  titleLead: "Lai Minh",
  titleAccent: "Nhut",
  akaName: "Vincent Lai",
  description:
    "Full-stack developer focused on backend systems with .NET and C#. I build scalable web applications and translate product requirements into practical, well-structured solutions. I enjoy working across teams to analyze problems, design system architecture, and ensure performance and reliability in production environments.",
  principlesTitle: "Product principles",
  principles: [
    "Prioritize clarity by reducing unnecessary visual and structural complexity",
    "Focus on delivering real user value over adding features",
    "Make decisions based on data and real-world feedback",
    "Design interfaces that remain responsive and reliable under real-world conditions",
    "Maintain a level of quality and polish that holds as the product scales",
  ],
  statValue: "1.6+",
  statText: "year of experience",
  statCaption: "Building and contributing to products through backend development, and cross-functional collaboration.",
  primaryCtaLabel: "View Projects",
  secondaryCtaLabel: "Read Philosophy",
};

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skills: SkillsCollection = {
  grid: [
    { name: "C#", icon: "csharp" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Java", icon: "java" },
    { name: "ASP.NET Core", icon: "dotnet" },
    { name: "SQL Server", icon: "sqlServer" },
    { name: "Redis", icon: "redis" },
    { name: "Angular", icon: "angular" },
    { name: "NextJs", icon: "nextjs" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "Docker", icon: "docker" },
    { name: "Postman", icon: "postman" },
    { name: "Git", icon: "git" },
    { name: "Github", icon: "github" },
    { name: "Jira", icon: "jira" },
  ],
  slider: [
    { name: "MySQL", icon: "mysql" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "Minimal API (.NET)", icon: "minimalApi" },
    { name: "SignalR", icon: "signalr" },
    { name: "Unit Testing", icon: "unitTesting" },
    { name: "OOP", icon: "oop" },
    { name: "Data Structures and Algorithms", icon: "dsa" },
  ],
};

export const skillsIntro: SectionIntro = {
  eyebrow: "Expertise",
  title: "Core Competencies",
};

export const projects: Project[] = [
  {
    id: "aether-capital",
    category: "01 / FINTECH",
    title: "Aether Capital",
    description:
      "A high-frequency trading dashboard designed for minimal latency and maximum clarity. Built with React and WebSockets for real-time data streaming.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA9hMFTr9IZT8c3HlUEmd1SzIYcfa1Dv4rUAQMJVu7pM_feuiKkUEbj4OvndOTXir4SgkeiB652hii1wb4sNTMGuwnmjxTq3jyV0JwAQDbkmbIyHEm1Q9-sSmmJSMPbCIvuuDtErpgbV3zAYN-d-35dDJovxBlgXb8TFUBmXn8OxIOqGWd8V3Nq0ijrnW2k8vcoF2B8pMjZf_RhHeP2yBvP-2Ji7TsD7eCM6MFvxfuFComRrNMyMfT0vCO_Co5XLgzNJtALXQSVSom7",
    imageAlt: "Dark trading dashboard with live price and volume charts.",
    primaryAction: "Live Demo",
    secondaryAction: "Case Study",
  },
  {
    id: "onyx-retail",
    category: "02 / LIFESTYLE",
    title: "Onyx Retail",
    description:
      "A minimalist e-commerce ecosystem focused on premium tactile feedback and seamless checkout journeys with a headless Shopify architecture.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuClE_3jIn9Jq6tP08GvdQZOdF76wuZeIxNvHi3x-ZU5sNnmYrl0IVxqe7aXZXYSJyxm7Qp-W7wKYXSSFMFoqeGKdDSDvccR1ySI0eAB_Mxggy2V1O4Uw0xgPsS53fMyGidYcXSZxROq7Ukhsgaws7c2x_McljA00dSMZaovp_PKnf_wsngR7N8rMxTPWQMPHZjM6cYySYLGFHxKNZ0jxIL8kBS58CDxinm-5CargnHV_BSWYIXL4YG4z4XeVtn2vXOG5vgaWQOrBDAE",
    imageAlt: "Minimalist product card with soft shadows and a premium white finish.",
    primaryAction: "View Details",
    secondaryAction: "Git Repo",
    reverse: true,
  },
];

export const projectsIntro: SectionCopy = {
  eyebrow: "Featured Projects",
  title: "Deliverables",
  description:
    "A selection of projects that highlighting my experience in building scalable, high-performance applications with a strong focus on usability and clean design. These works reflect how I approach real-world problems, from concept to implementation.",
};

export const experienceItems: ExperienceItem[] = [
  {
    period: " Sep 2024 - Present",
    title: "Junior Software Engineer",
    company: "TPF",
    description:
      "Developed a core UI library utilized by 15+ internal products. Optimized frontend performance resulting in a 2.5 second reduction in Largest Contentful Paint.",
  },
  {
    period: "Jul 2024 - Sep 2024",
    title: "Junior UI Developer",
    company: "Nova Tech Solutions",
    description:
      "Contributed to the development of responsive marketing sites and client dashboards, sharpening a foundation in design systems and modern JavaScript frameworks.",
  },
];

export const experienceIntro: SectionIntro = {
  eyebrow: "Journey",
  title: "Professional Experience",
};

export const contactContent: ContactContent = {
  titleLead: "Ready to build",
  titlePrefix: "something",
  titleAccent: "eternal?",
  description:
  "I'm currently open to new opportunities where I can contribute and continue growing. Feel free to reach out to me via email or schedule a call to discuss potential collaborations.",
  email: "lmnhut0211@gmail.com",
  secondaryCtaLabel: "Schedule a Call",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Lmnhutw" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/minhnhut0211" },
  { label: "Twitter", href: "#" },
];





