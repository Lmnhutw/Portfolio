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
  | "dotnet"
  | "javascript"
  | "typescript"
  | "java"
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
    { name: "ASP.NET Core", icon: "dotnet" },
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "Java", icon: "java" },
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
    "id": "tpf-group",
    "category": "01 / EXPERIENCE",
    "title": "Junior .NET Developer",
    "description": "- Refactored core email processing functions to use dynamic JSON-driven field retrieval cutting development and testing time for new fields about 65%.  - Developed entitlement-based sidebar content and CTA sliders using Scriban and JavaScript, enabling dynamic multi-condition rendering and reducing update time by over 50% - Assisted in debugging server-side logic, SQL queries, and authentication flows as part of production support. - Worked in an Agile/Scrum team with deployment, QA, and database teams to triage, and resolve critical issues; supported seniors on complex problems.- Collaborated with overseas and local deployment teams to gather requirements, align on technical specifications, and deliver a new “club” feature.",
    "image": "https://via.placeholder.com/600x400?text=TPF+Group",
    "imageAlt": "Email system dashboard and responsive UI components.",
    "primaryAction": "View Experience",
    "secondaryAction": "View Details"
  },
  {
    "id": "catena-intern",
    "category": "02 / EXPERIENCE",
    "title": "Software Engineer Intern",
    "description": "\n- Researched .NET technologies and implemented SignalR for real-time communication.\n- Cloned and analyzed a basic real-time chat web app to understand its architecture and functionality.\n- Conducted business analysis (BA) and designed SQL queries to support chat application features.\n- Assisted with various development tasks, including improving UI responsiveness.",
    "image": "https://via.placeholder.com/600x400?text=Catena+Technology",
    "imageAlt": "Real-time chat application interface.",
    "primaryAction": "View Experience",
    "secondaryAction": "Project Details",
    "reverse": true
  }
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
    description: "Refactored core email processing functions to use dynamic JSON-driven field retrieval cutting development and testing time for new fields about 65%.  - Developed entitlement-based sidebar content and CTA sliders using Scriban and JavaScript, enabling dynamic multi-condition rendering and reducing update time by over 50%.- Assisted in debugging server-side logic, SQL queries, and authentication flows as part of production support. - Designed and contributed to the creation of marketing EDMs, ensuring responsive design and alignment with brand standards across major email clients with MailChimp.- Designed and maintained a Scriban-based email templating system with dynamic parameter support, enabling consistent and reusable templates across campaigns. - Worked in an Agile/Scrum team with deployment, QA, and database teams to triage, and resolve critical issues; supported seniors on complex problems.- Collaborated with overseas and local deployment teams to gather requirements, align on technical specifications, and deliver a new “club” feature.",
  },
  {
    period: "Jul 2024 - Sep 2024",
    title: "Intern Software Engineer",
    company: "Catena Technology Co., LTD",
    description: "Researched .NET technologies and implemented SignalR for real-time communication.\n- Cloned and analyzed a basic real-time chat web app to understand its architecture and functionality.\n- Conducted business analysis (BA) and designed SQL queries to support chat application features.\n- Assisted with various development tasks, including improving UI responsiveness.",
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
];





