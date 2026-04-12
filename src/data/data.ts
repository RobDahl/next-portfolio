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
  coreStack: string[];
  cloudAndData: string[];
  supporting: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  hook: string;
  problem: string;
  solution: string;
  technologies: string[];
  visualPath?: string;
  visualAlt?: string;
  visualFit?: "contain" | "cover";
  sourceUrl?: string;
  buttonText?: string;
}

export interface HobbyEntry {
  id: string;
  title: string;
  description: string;
  images: string[];
  span?: string;
}

export const heroContent: HeroContent = {
  name: "Rob Dahl",
  title: "Senior Full Stack Software Engineer",
  summary:
    "Software Engineer with 8+ years of experience and a proven track record of technical agility, independently navigating and migrating complex architectures across Flutter, React, and Handlebars CMS ecosystems. Expert in executing secure identity management integrations and optimizing performance across high-volume, event-driven microservices.",
  photoPath: "/images/profile.jpg",
};

export const bentoProjects: BentoProject[] = [
  {
    slug: "identity-orchestration-ping",
    title: "Identity Orchestration & Auth",
    subtitle: "Enterprise Security",
    description:
      "Subject Matter Expert for PingOne and DaVinci, architecting secure cross-platform authentication flows and unblocking migrations for multiple engineering teams.",
    focusAreas: ["Ping DaVinci", "Auth Logic", "SME Leadership"],
    tags: ["Security", "Identity", "PingOne"],
  },
  {
    slug: "core-search-architecture",
    title: "Core Search Architecture",
    subtitle: "Architecture & UI",
    description:
      "Key contributor for the Agent Search 2.0 migration from Flutter Web to a Handlebars CMS, alongside the Unified Listings Search (ULS) migration in the React-based Command platform.",
    focusAreas: ["React", "Handlebars CMS", "GraphQL"],
    tags: ["Technical Agility", "Migration", "Search Architecture"],
  },
  {
    slug: "architectural-strategy-port",
    title: "PORT Initiative Strategy",
    subtitle: "System Architecture",
    description:
      "Performed deep-dive research to identify hidden dependencies and technical gaps across 5+ core repositories, enabling a major organizational structural shift.",
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
    slug: "f1-telemetry-dashboard",
    title: "F1 Telemetry Dashboard (In Active Development)",
    subtitle: "Data Visualization",
    description:
      "Developing a real-time Python and FastF1 data visualization app to ingest high-frequency racing data and compare driver telemetry across circuit sectors.",
    focusAreas: ["Python", "FastF1"],
    tags: ["Python", "FastF1", "Data Visualization"],
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
];

export const experienceTimeline: ExperienceEntry[] = [
  {
    company: "Keller Williams Realty",
    role: "Software Engineer",
    dateRange: "Dec 2021 – Mar 2026",
    highlights: [
      "Velocity & Delivery: Drove the end-to-end delivery of 32 multi-platform releases in a single year, maintaining a consistent deployment cadence that met 100% of organizational delivery milestones, while managing the technical complexity of multi-platform updates.",
      "Identity Lead: Served as the go-to SME for PingOne and DaVinci, designing the authentication patterns and unblocking other squads to ensure secure, cross-platform authentication flows.",
      "Core Search Architecture: Key contributor for the ”Agent Search 2.0” migration, transitioning complex filtering and GraphQL payloads from Flutter Web to a Handlebars CMS to optimize SEO and performance, as well as the separate Unified Listings Search (ULS) migration in the React Command platform.",
      "Strategic Risk Mitigation: Led the PORT initiative’s technical discovery, auditing cross-repository dependencies to preemptively identify and resolve critical integration risks during a major organizational shift.",
      "Team Enablement & Operational Excellence: Partnered with Product and Scrum leadership to facilitate Agile ceremonies and drive operational continuity, ensuring development velocity remained unblocked and highquality through organizational transitions.",
      "Cloud Infrastructure & DevOps: Optimized event-driven architectures by resolving complex GCP Pub/Sub payload issues and Cloud Function bottlenecks. Drove technical audits to streamline MongoDB Atlas access and accelerate CI/CD build pipelines.",
      "Enterprise Compliance Architecture: Engineered critical MLS compliance logic to ensure legal parity across web and mobile platforms, designing dynamic rendering pipelines for restricted data and off-market attribution.",
    ],
  },
  {
    company: "RTC Group Inc.",
    role: "Software Developer",
    dateRange: "Nov 2017 – Dec 2021",
    highlights: [
      "Tablet POS App: Engineered a Windows-based POS application using Electron.js, IIS Express, and MySQL to streamline local e-commerce transactions.",
      "Credit Transaction Portal: Modernized a legacy portal by migrating the frontend from PHP to React, implementing JWT authentication and advanced data sorting.",
      "Inventory Platform: Revamped web and mobile UIs using HTML, CSS, JavaScript, and jQuery to improve system accessibility.",
      "IT Help Desk Tool: Developed a centralized ticketing tool using Electron.js and SQLite, improving issue tracking and resolution times.",
    ],
  },
];

export const skills: Skills = {
  coreStack: [
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Nest.js",
    "GraphQL",
    "HTML/CSS/LESS",
  ],
  cloudAndData: [
    "GCP",
    "AWS", 
    "Docker",
    "Kubernetes",
    "Pub/Sub",
    "SQL",
    "MongoDB",
  ],
  supporting: [
    "Dart",
    "Flutter",
    "React Native",
    "Electron.js",
    "Handlebars",
    "Python",
    "jQuery",
    "MySQL",
    "SQLite",
    "Proxmox",
    "PingOne DaVinci",
  ],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "identity-orchestration-ping",
    title: "Identity Orchestration & Auth",
    hook: "Standardizing secure authentication orchestration to unblock cross-team migrations.",
    problem:
      "Authentication implementation knowledge was fragmented across teams, creating delivery bottlenecks and inconsistent identity flows. Teams needed a reliable architecture for social sign-on (Google, FB, Apple) without repeatedly rediscovering constraints.",
    solution:
      "Operated as the primary PingOne/DaVinci SME, creating repeatable integration patterns and troubleshooting flow orchestration. Partnered directly with feature teams to conduct architecture reviews and establish implementation guidance, improving security consistency and release confidence.",
    technologies: ["PingOne", "Ping DaVinci", "OAuth", "SSO", "Identity Orchestration"],
    sourceUrl: undefined,
    buttonText: "Enterprise Case Study",
  },
  {
    slug: "cloud-infrastructure-devops",
    title: "Cloud Infrastructure & DevOps",
    hook: "Optimizing event-driven architectures and streamlining CI/CD pipelines to ensure backend reliability.",
    problem:
      "Complex event-driven backend workflows were experiencing intermittent failures due to GCP Pub/Sub payload issues and Cloud Function bottlenecks. Additionally, deployment velocity was being hindered by inefficient CI/CD build pipelines and fragmented database access management.",
    solution:
      "Drove technical audits to resolve event-driven latency and payload issues within GCP. Restructured deployment workflows to accelerate CI/CD build times, while streamlining MongoDB Atlas access protocols to improve operational security and database management for the engineering teams.",
    technologies: ["GCP Pub/Sub", "Cloud Functions", "CI/CD", "MongoDB Atlas", "Event-Driven Architecture"],
    sourceUrl: undefined,
    buttonText: "Enterprise Case Study",
  },
  {
    slug: "core-search-architecture",
    title: "Core Search Architecture Migrations",
    hook: "Executing dual architectural migrations: optimizing Consumer Search via Handlebars CMS while engineering Unified Listings Search (ULS) parity into a React enterprise platform.",
    problem:
      "The organization faced two distinct architectural bottlenecks. On the Consumer side, a legacy Flutter Web search experience hindered SEO and web performance. Concurrently, the Agent-centric 'Command' platform lacked feature parity with the consumer experience and needed a modernized React implementation of the Unified Listings Search (ULS).",
    solution:
      "Drove execution across both initiatives. For the Consumer platform, engineered the translation of the Agent Search engine from Flutter Web into a modernized Handlebars CMS, drastically improving load times and SEO. Simultaneously, bridged the Command platform by engineering Consumer Parity features directly into their React codebase to ensure search reliability and feature consistency across the enterprise.",
    technologies: ["React", "Handlebars CMS", "Flutter Web", "GraphQL", "State Management"],
    sourceUrl: undefined,
    buttonText: "Enterprise Case Study",
  },
  {
    slug: "architectural-strategy-port",
    title: "PORT Initiative Strategy",
    hook: "Driving architectural strategy by exposing hidden dependencies and integration risks across a multi-repository ecosystem.",
    problem:
      "The PORT initiative required massive technical realignment, but dependencies were spread across 5+ core repositories with no clear system map, creating elevated risks of breakage.",
    solution:
      "Executed research spikes to identify hidden coupling and service boundaries across 5+ core repositories. Translated findings into actionable sequencing guidance for leadership, reducing unknowns and enabling a safer path for structural changes across CMS and backend systems.",
    technologies: ["System Analysis", "Risk Mitigation", "Pub/Sub", "GCP", "Backend Services"],
    sourceUrl: undefined,
    buttonText: "Enterprise Case Study",
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
    buttonText: "Enterprise Case Study",
  },
  {
    slug: "peak-pulse-automation",
    title: "Peak Pulse Lead Generation Data Pipeline",
    hook: "Transitioning a direct mail business from manual spreadsheet workflows to an automated, API-driven data pipeline.",
    problem:
      "The business was relying on manual data exports and disjointed Google Sheets App Scripts to manage direct mail campaigns. This led to high operational overhead, brittle data pipelines, and a lack of scalable tracking for lead conversion. They needed a programmatic way to scrape, normalize, and fulfill outreach.",
    solution:
      "Architected a modernized Node.js data pipeline to replace the legacy spreadsheet system. The architecture utilizes a backend service to interact with the Outscraper API for lead generation, normalizing and storing the payload in a PostgreSQL database (Supabase). Built integration pathways with the Lob.com API to programmatically trigger physical direct mail fulfillment as qualified leads enter the system.",
    technologies: ["Node.js", "PostgreSQL (Supabase)", "Outscraper API", "Lob API", "Data Pipelines"],
    sourceUrl: undefined,
    buttonText: "Code Private",
  },
  {
    slug: "f1-telemetry-dashboard",
    title: "F1 Telemetry Dashboard",
    hook: "Building a real-time data visualization platform to ingest and compare high-frequency Formula 1 racing telemetry across drivers and circuit sectors.",
    problem:
      "Motorsports analysts lacked an accessible tool to compare live and historical telemetry data across drivers, sessions, and circuit sectors. Existing platforms were either too complex or lacked real-time updates, making it difficult to derive insights during race weekends.",
    solution:
      "Developing a Python/Next.js application that uses the FastF1 library to fetch live and historical F1 data, processing high-frequency telemetry streams and rendering interactive charts via D3.js. The app supports sector-by-sector lap comparisons, tire strategy analysis, and real-time race deltas, utilizing a WebSocket layer to ensure sub-second updates during live sessions.",
    technologies: ["Python", "FastF1", "Next.js", "D3.js", "WebSockets", "PostgreSQL"],
    visualPath: "/images/f1-telemetry-app.png",
    visualAlt: "F1 Telemetry Dashboard Application Interface",
    visualFit: "contain",
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
    buttonText: "Code Private",
  },
];

export const offTheClockHobbies: HobbyEntry[] = [
  {
    id: "cat",
    title: "Senior QA Tester",
    description: "Keeping a 10-year-old cat entertained between commits.",
    images: ["/images/cat-1.jpg", "/images/cat-2.jpg", "/images/cat-3.jpg"],
    span: "col-span-1", 
  },
  {
    id: "hiking",
    title: "Hiking & Nature",
    description: "Exploring mountain trails and chasing waterfalls to recharge between sprints.",
    images: ["/images/hiking-1.jpg"],
    span: "row-span-2", 
  },
  {
    id: "sim-racing",
    title: "Sim Racing",
    description: "Turning laps in iRacing and dialing in force feedback on my custom-built rig running a Moza R9 wheelbase.",
    images: ["/images/sim-rig-1.jpg"],
    span: "col-span-1",
  },
  {
    id: "formula-1",
    title: "Formula 1",
    description: "Armchair strategist. Still recovering from cheering on Piastri through that intense championship battle last year.",
    images: ["/images/f1-piastri.jpg"],
    span: "col-span-1",
  },
  {
    id: "cooking",
    title: "Cooking & Foodie",
    description: "Experimenting with recipes and techniques from around the world.",
    images: ["/images/food-1.jpg", "/images/food-2.jpg"],
    span: "col-span-1",
  },
  {
    id: "3d-printing",
    title: "3D Printing & Fabrication",
    description: "Customizing functional parts and optimizing slice settings in Bambu Studio.",
    images: ["/images/bambu-studio.png"],
    span: "col-span-1",
  },
  {
    id: "travel",
    title: "Travel & Exploration",
    description: "Discovering new places and capturing moments around the globe.",
    images: ["/images/niagara-falls-1.jpg"],
    span: "col-span-1 md:col-span-2",
  },
];
