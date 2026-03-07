export interface HeroContent {
  name: string;
  title: string;
  summary: string;
  photoPath: string;
}

export interface BentoProject {
  slug: string;
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

export interface CaseStudy {
  slug: string;
  title: string;
  hook: string;
  problem: string;
  solution: string;
  technologies: string[];
  sourceUrl?: string;
}

export const heroContent: HeroContent = {
  name: "Rob Dahl",
  title: "Senior Full Stack Software Engineer",
  summary:
    "Software Engineer with 8+ years of experience and a proven track record of technical agility, independently migrating complex architectures between Flutter and React/CMS environments. Expert in executing secure identity management integrations and optimizing performance across high-volume, event-driven microservices.",
  photoPath: "/images/profile.jpg",
};

export const bentoProjects: BentoProject[] = [
  {
    slug: "identity-orchestration-ping",
    title: "Identity Orchestration & Auth",
    subtitle: "Enterprise Security",
    description:
      "Subject Matter Expert for PingOne and DaVinci, architecting secure cross-platform authentication flows and unblocking migrations for multiple engineering squads.",
    focusAreas: ["Ping DaVinci", "Auth Logic", "SME Leadership"],
    tags: ["Security", "Identity", "PingOne"],
  },
  {
    slug: "hybrid-search-migration",
    title: "Hybrid Search Migration",
    subtitle: "Architecture & UI",
    description:
      "Led the technical translation of the Agent Search engine from Flutter to React/CMS, maintaining parity across 23+ annual web releases.",
    focusAreas: ["React", "Flutter Bridge", "GraphQL"],
    tags: ["Technical Agility", "Migration", "GraphQL"],
  },
  {
    slug: "architectural-strategy-port",
    title: "PORT Initiative Strategy",
    subtitle: "System Architecture",
    description:
      "Performed deep-dive research to identify hidden dependencies and technical gaps across 12+ repositories, enabling a major organizational structural shift.",
    focusAreas: ["System Analysis", "Risk Mitigation", "Pub/Sub"],
    tags: ["Strategy", "Architecture", "DevOps"],
  },
  {
    slug: "compliance-engineering-mls",
    title: "Compliance & MLS Engineering",
    subtitle: "Data Integrity",
    description:
      "Engineered complex MLS-specific logic to ensure legal parity and data compliance across web and mobile platforms for thousands of property listings.",
    focusAreas: ["MLS Rules", "Data Mapping", "Logic Implementation"],
    tags: ["Compliance", "Legal Parity", "Enterprise"],
  },
  {
    slug: "peak-pulse-automation",
    title: "Peak Pulse Lead Generation",
    subtitle: "Personal Project",
    description:
      "Architecting a modernized data pipeline to replace legacy spreadsheet workflows, utilizing PostgreSQL and third-party APIs for programmatic direct mail fulfillment.",
    focusAreas: ["Node.js", "PostgreSQL", "API Integration"],
    tags: ["Automation", "Data Pipelines"],
  },
  {
    slug: "homelab-proxmox-automation",
    title: "Local Infrastructure & Virtualization (Homelab)",
    subtitle: "Backend & Infrastructure",
    description:
      "Engineered a Proxmox hypervisor environment to securely host and isolate network services, including Home Assistant, Pi-hole (DNS sinkhole), and dedicated game servers, complete with automated backup orchestration.",
    focusAreas: ["Proxmox", "Pi-hole", "Home Assistant", "Virtualization"],
    tags: ["Proxmox", "Home Assistant", "Pi-hole", "Virtualization"],
  },
  {
    slug: "f1-telemetry-dashboard",
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
      "Engineering Velocity: Delivered 23 Web and 9 Mobile releases in 2025, maintaining high-impact delivery standards.",
      "Auth & Identity: Served as SME for PingOne/DaVinci, architecting social auth flows (Google, FB, Apple) to unblock squad migrations.",
      "Core Search: Key contributor to ULS and Agent Search 2.0, migrating complex filtering and state from Flutter to React/CMS.",
      "Architectural Strategy: Led research for the PORT initiative, identifying integration gaps across CMS and backend services.",
      "Cross-Functional: Facilitated Agile ceremonies and acted as operational backup for leadership to ensure zero velocity loss.",
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
    "Snyk",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "identity-orchestration-ping",
    title: "Identity Orchestration & Auth",
    hook: "Standardizing secure authentication orchestration to unblock cross-squad migrations.",
    problem:
      "Authentication implementation knowledge was fragmented across squads, creating delivery bottlenecks and inconsistent identity flows. Teams needed a reliable architecture for social sign-on (Google, FB, Apple) without repeatedly rediscovering constraints[cite: 44, 73, 91, 155].",
    solution:
      "Operated as the primary PingOne/DaVinci SME, creating repeatable integration patterns and troubleshooting flow orchestration[cite: 12, 149]. Partnered directly with feature teams to conduct architecture reviews and establish implementation guidance, improving security consistency and release confidence[cite: 139, 151, 158].",
    technologies: ["PingOne", "Ping DaVinci", "OAuth", "SSO", "Identity Orchestration"],
    sourceUrl: undefined,
  },
  {
    slug: "hybrid-search-migration",
    title: "Hybrid Search Migration",
    hook: "Migrating complex search behavior from Flutter to React/CMS while preserving UX parity and delivery velocity[cite: 172, 179].",
    problem:
      "A legacy Flutter-based search experience created technical debt and slowed evolution in the web stack[cite: 179]. Critical filtering logic and state management were tightly coupled to legacy implementation, creating high regression risk[cite: 180].",
    solution:
      "Led the technical translation of core search workflows into React/CMS, maintaining parity across 23 annual web releases[cite: 172, 180, 272]. Decomposed Flutter behavior into reusable web patterns and validated parity through iterative checkpoints, ensuring search reliability without sacrificing throughput[cite: 179, 273, 274].",
    technologies: ["React", "Flutter Bridge", "CMS", "GraphQL", "State Management"],
    sourceUrl: undefined,
  },
  {
    slug: "architectural-strategy-port",
    title: "PORT Initiative Strategy",
    hook: "Driving architectural strategy by exposing hidden dependencies and integration risks across a multi-repository ecosystem[cite: 150, 157, 224].",
    problem:
      "The PORT initiative required massive technical realignment, but dependencies were spread across 12+ repositories with no clear system map, creating elevated risks of breakage[cite: 150, 213, 231].",
    solution:
      "Executed research spikes to identify hidden coupling and service boundaries[cite: 150, 215, 224]. Translated findings into actionable sequencing guidance for leadership, reducing unknowns and enabling a safer path for structural changes across CMS and backend systems[cite: 151, 232, 233].",
    technologies: ["System Analysis", "Risk Mitigation", "Pub/Sub", "GCP", "Backend Services"],
    sourceUrl: undefined,
  },
  {
    slug: "compliance-engineering-mls",
    title: "Compliance & MLS Engineering",
    hook: "Implementing MLS-specific compliance logic to preserve legal parity and data integrity across large-scale listing workflows.",
    problem:
      "MLS ecosystems required strict rule enforcement across web and mobile listing experiences, but data handling logic was fragmented and prone to inconsistency. This created legal parity risk when thousands of records moved through different surfaces and transformation layers.",
    solution:
      "I engineered MLS-specific mapping and validation logic to normalize listing data and enforce compliance rules consistently across platforms. By formalizing business-rule implementation paths and hardening transformation logic, the system improved integrity for high-volume listing pipelines while reducing parity drift between channels.",
    technologies: ["MLS Rules", "Data Mapping", "Compliance Logic", "Web", "Mobile"],
    sourceUrl: undefined,
  },
  {
    slug: "peak-pulse-automation",
    title: "Peak Pulse Lead Generation (In Progress)",
    hook: "Transitioning a direct mail business from manual spreadsheet workflows to an automated, API-driven data pipeline.",
    problem:
      "The business was relying on manual data exports and disjointed Google Sheets App Scripts to manage direct mail campaigns. This led to high operational overhead, brittle data pipelines, and a lack of scalable tracking for lead conversion. They needed a programmatic way to scrape, normalize, and fulfill outreach.",
    solution:
      "I am actively architecting a modernized data pipeline to replace the legacy spreadsheet system. The new architecture utilizes a Node.js service to interact with the Outscraper API for lead generation, normalizing and storing the payload in a PostgreSQL database (Supabase). The final phase involves integrating the Lob.com API to programmatically trigger physical direct mail fulfillment the moment a qualified lead hits the database.",
    technologies: ["Node.js", "PostgreSQL (Supabase)", "Outscraper API", "Lob API", "Data Pipelines"],
    sourceUrl: undefined,
  },
  {
    slug: "f1-telemetry-dashboard",
    title: "F1 Telemetry Dashboard",
    hook: "Building a real-time data visualization platform to ingest and compare high-frequency Formula 1 racing telemetry across drivers and circuit sectors.",
    problem:
      "Motorsports analysts lacked an accessible tool to compare live and historical telemetry data across drivers, sessions, and circuit sectors. Existing platforms were either too complex or lacked real-time updates, making it difficult to derive insights during race weekends.",
    solution:
      "I’m developing a Python/Next.js application that uses the FastF1 library to fetch live and historical F1 data, processes high-frequency telemetry streams, and renders interactive charts via D3.js. The app supports sector-by-sector lap comparisons, tire strategy analysis, and real-time race deltas. A WebSocket layer ensures sub-second updates during live sessions.",
    technologies: ["Python", "FastF1", "Next.js", "D3.js", "WebSockets", "PostgreSQL"],
    sourceUrl: "https://github.com/RobDahl/f1-telemetry-dashboard",
  },
  {
    slug: "homelab-proxmox-automation",
    title: "Local Infrastructure & Virtualization (Homelab)",
    hook: "Architecting a resilient, self-hosted environment using Proxmox VE for network management, home automation, and dedicated game servers.",
    problem:
      "Running multiple local services on bare-metal hardware or consumer routers created single points of failure, lacked proper backup strategies, and made network-wide ad blocking difficult to manage. I needed a centralized, isolated, and easily recoverable environment to host critical local network tools and automation services.",
    solution:
      "I engineered a hypervisor environment utilizing Proxmox Virtual Environment (PVE) to orchestrate multiple isolated Virtual Machines and LXC containers. The cluster currently hosts Home Assistant for localized smart home telemetry, Pi-hole for network-wide DNS sinkholing, and a dedicated Minecraft (ATM10) server. I implemented automated, scheduled backup jobs for all core VMs, ensuring rapid disaster recovery. The infrastructure is highly stable, with core services currently maintaining over 39 days of uninterrupted uptime.",
    technologies: ["Proxmox VE", "Home Assistant", "Pi-hole", "Virtualization", "Linux", "Automated Backups"],
    sourceUrl: undefined,
  },
];
