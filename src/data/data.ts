export interface HeroContent {
  name: string;
  title: string;
  summary: string;
  photoPath: string;
}

export interface BentoProject {
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  tags: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  dateRange: string;
  highlights: string[];
}

export interface Skills {
  languages: string[];
  frameworks: string[];
  cloudAndInfra: string[];
  tools: string[];
}

export const heroContent: HeroContent = {
  name: "Rob Dahl",
  title: "Full Stack Software Engineer",
  summary:
    "Results-driven Software Engineer with 8+ years of experience building scalable web and mobile applications. Proven track record of leading cross-functional architectural initiatives, optimizing performance, and executing secure identity management integrations using React, Flutter, and TypeScript.",
  photoPath: "/images/profile.jpg",
};

export const bentoProjects: BentoProject[] = [
  {
    title: "Peak Pulse Automation",
    subtitle: "Architecture & UI",
    description:
      "Architected an automated lead generation system for a direct mail business, configuring telephony integrations, digital pipelines, and backend data processing.",
    focusAreas: ["React", "Flutter", "TypeScript"],
    tags: ["Automation", "Telephony", "Data Pipelines"],
  },
  {
    title: "Local Infrastructure & Automation (Homelab)",
    subtitle: "Backend & Infrastructure",
    description:
      "Engineered a local network using Proxmox for virtualization. Developed custom automations for deployments (Home Assistant, Zigbee) to manage server and networking contingencies.",
    focusAreas: ["GraphQL", "MongoDB", "Proxmox", "Home Assistant"],
    tags: ["Proxmox", "CI/CD", "Networking", "Home Assistant"],
  },
  {
    title: "F1 Telemetry Dashboard (In Active Development)",
    subtitle: "Data Visualization",
    description:
      "Developing a real-time Python and FastF1 data visualization app to ingest high-frequency racing data and compare driver telemetry across circuit sectors.",
    focusAreas: ["Python", "FastF1"],
    tags: ["Python", "FastF1", "Data Visualization"],
  },
];

export const experienceTimeline: ExperienceEntry[] = [
  {
    company: "Keller Williams Realty",
    role: "Software Engineer",
    dateRange: "Dec 2021 – Feb 2026",
    highlights: [
      "Deployed 23 Web and 9 Mobile releases in a single year by developing cross-platform components with React, Typescript, and Flutter.",
      "Engineered features for the 2025 Luxury Site launch, migrating Agent Search from Flutter to CMS and implementing a flexible theming architecture using Handlebars, Less, and GraphQL.",
      "Constructed secure authentication flows in Ping DaVinci, acting as the primary Subject Matter Expert (SME) to unblock cross-team security integrations.",
      "Led deep architectural assessments across CMS, Flutter, and backend services to decouple dependencies and mitigate cross-team integration risks.",
      "Maintained team velocity as the primary operational backup for the Product Manager and Scrum Master during leadership absences.",
    ],
  },
  {
    company: "RTC Group Inc.",
    role: "Software Developer",
    dateRange: "Nov 2017 – Dec 2021",
    highlights: [
      "Tablet POS App: Engineered a Windows-based POS application using ElectronJS, IIS Express, and MySQL to streamline local e-commerce transactions.",
      "Credit Transaction Portal: Modernized a legacy portal by migrating the frontend from PHP to React, implementing JWT authentication and advanced data sorting.",
      "Inventory Platform: Revamped web and mobile UIs using HTML, CSS, JavaScript, and jQuery to improve system accessibility.",
      "IT Help Desk Tool: Developed a centralized ticketing tool using Electron.js and SQLite, improving issue tracking and resolution times.",
    ],
  },
];

export const skills: Skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "Dart",
    "C++",
    "PHP",
    "HTML/CSS",
    "SQL",
    "GraphQL",
  ],
  frameworks: [
    "React",
    "React Native",
    "Flutter",
    "Nest.js",
    "Electron.js",
    "jQuery",
    "MJML",
  ],
  cloudAndInfra: [
    "GCP",
    "Kubernetes",
    "Pub/Sub",
    "AWS (S3, CloudFront)",
    "Docker",
    "Proxmox",
  ],
  tools: [
    "Git",
    "SVN",
    "MongoDB",
    "MySQL",
    "SQLite",
    "Agile/Scrum",
    "Ping DaVinci",
  ],
};
