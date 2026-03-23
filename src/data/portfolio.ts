export type NavItem = {
  label: string;
  href: `#${string}`;
};

export type Skill = {
  name: string;
  icon: string;
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
    "Full-stack developer focused on building sleek, high-performance web applications. I craft digital artifacts with architectural precision and midnight inspiration.",
  principlesTitle: "Night shift principles",
  principles: [
    "Elegant systems over visual noise",
    "Fast interfaces under real-world load",
    "Polish that survives product scale",
  ],
  statValue: "15+",
  statCaption: "Products influenced by design systems and frontend architecture.",
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

export const skills: Skill[] = [
  { name: "React.js", icon: "deployed_code" },
  { name: "Node.js", icon: "terminal" },
  { name: "TypeScript", icon: "code" },
  { name: "AWS", icon: "cloud" },
  { name: "Figma", icon: "palette" },
  { name: "PostgreSQL", icon: "database" },
  { name: "GraphQL", icon: "hub" },
  { name: "Performance", icon: "speed" },
  { name: "Cybersecurity", icon: "shield_lock" },
  { name: "CI/CD", icon: "sync_alt" },
];

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
  eyebrow: "Curated Work",
  title: "Functional Artifacts",
  description:
    "Selected projects that push the boundaries of interaction, performance, and visual hierarchy.",
};

export const experienceItems: ExperienceItem[] = [
  {
    period: "2021 - PRES",
    title: "Senior Full-Stack Architect",
    company: "Lumina Digital Labs",
    description:
      "Leading a team of 8 developers in constructing scalable microservices. Reduced deployment time by 40% using automated CI/CD pipelines and infrastructure as code.",
    active: true,
  },
  {
    period: "2018 - 2021",
    title: "Web Applications Engineer",
    company: "Prism Global Systems",
    description:
      "Developed a core UI library utilized by 15+ internal products. Optimized frontend performance resulting in a 2.5 second reduction in Largest Contentful Paint.",
  },
  {
    period: "2016 - 2018",
    title: "Junior UI Developer",
    company: "Nova Tech Solutions",
    description:
      "Contributed to the development of responsive marketing sites and client dashboards, sharpening a foundation in design systems and modern JavaScript frameworks.",
  },
];

export const experienceIntro: SectionIntro = {
  eyebrow: "Journey",
  title: "Professional Evolution",
};

export const contactContent: ContactContent = {
  titleLead: "Ready to build",
  titlePrefix: "something",
  titleAccent: "eternal?",
  description:
    "I'm currently accepting new projects and consulting opportunities. Let's discuss your architectural vision.",
  email: "architect@nocturnal.dev",
  secondaryCtaLabel: "Schedule a Call",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Twitter", href: "#" },
];




