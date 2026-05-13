// Font Awesome
import {
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaReact,
  FaAws,
} from "react-icons/fa";

// Simple Icons
import {
  SiExpress,
  SiGreensock,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiSpring,
  SiDotnet,
  SiMysql,
  SiFlutter,
  SiDocker,
  SiSharp,
} from "react-icons/si";

import { AiOutlineOpenAI } from "react-icons/ai";

/* ============================================
   TYPE DEFINITIONS
   ============================================ */

export interface Challenge {
  title: string;
  problem: string;
  solution: string;
}

export interface StackItem {
  name: string;
  icon: React.ComponentType<{ size?: number }>;
  description: string;
}

export interface ProjectData {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  imageSrc: string;
  wrapperType?: "safari" | "iphone";
  stack: StackItem[];
  description: string;
  overview: string;
  features: string[];
  challenges: Challenge[];
  liveDemo: string;
  sourceCode: string;
  sourceCodeAlt?: string;
}

/* ============================================
   HERO CONTENT
   ============================================ */

export const heroContent = {
  title: "Hello, I'm Rizik Haddad",
  location: "North Carolina, USA",
  job: "Software Engineer",
  focus: "Full-Stack",
  image: "/Images/hero.jpg",
  description: `
    Full stack developer with shipped backends across .NET 10 and Node.js/Express stacks, both live in production.
    B.S. Computer Science, 2025. Proficient in Spring Boot, PostgreSQL, React/Next.js, and Flutter.
    Experience integrating LLM APIs (OpenAI, Claude) into production workflows.
  `,
  cta: {
    text: "View Resume",
    link: "/Docs/RizikHaddad_Resume.pdf",
  },
  counters: [
    {
      label: "Projects",
      count: 3,
      addition: "",
    },
    {
      label: "Years Learning",
      count: 4,
      addition: "",
    },
    {
      label: "Technologies",
      count: 15,
      addition: "+",
    },
  ],
};

/* ============================================
   ABOUT CONTENT (Optional - for future use)
   ============================================ */

export const aboutHeader = {
  title: "About Me",
  description:
    "Full Stack Developer with a B.S. in Computer Science from UNC Greensboro, specializing in backend architecture and secure application development.",
};

export const aboutFocus = {
  heading: "Current Focus",
  paragraphs: [
    "I specialize in backend development with Spring Boot and Node.js, focusing on REST API design, JWT authentication, and database architecture. I'm also proficient in modern frontend technologies like React and Next.js.",
    "My approach emphasizes security-first development, implementing proper authentication flows, granular permission systems, and following the principle of least privilege.",
    "Actively seeking full-time opportunities where I can contribute to building scalable, production-ready applications.",
  ],
};

/* ============================================
   SKILLS / TECH STACK
   ============================================ */

export const skills = [
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, description: "JavaScript runtime for server-side development" },
      { name: "Express.js", icon: SiExpress, description: "Web application framework for Node.js" },
      { name: "Spring Boot", icon: SiSpringboot, description: "Java-based framework for enterprise applications" },
      { name: "Java", icon: FaJava, description: "Object-oriented programming language" },
      { name: ".NET", icon: SiDotnet, description: "ASP.NET Core Web API framework" },
      { name: "C#", icon: SiSharp, description: "Primary language for .NET development" },
      { name: "PostgreSQL", icon: SiPostgresql, description: "Advanced relational database" },
      { name: "MySQL", icon: SiMysql, description: "Popular relational database" },
      { name: "Docker", icon: SiDocker, description: "Containerization for local dev environments" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, description: "JavaScript library for building user interfaces" },
      { name: "Next.js", icon: SiNextdotjs, description: "React framework for production applications" },
      { name: "TypeScript", icon: SiTypescript, description: "Typed superset of JavaScript" },
      { name: "JavaScript", icon: FaJsSquare, description: "Core programming language for web development" },
      { name: "Flutter", icon: SiFlutter, description: "Cross-platform mobile framework (iOS/Android)" },
      { name: "HTML5", icon: FaHtml5, description: "Markup language for web content" },
      { name: "CSS3", icon: FaCss3Alt, description: "Styling language for web design" },
    ],
  },
  {
    title: "AI & APIs",
    skills: [
      { name: "OpenAI API", icon: AiOutlineOpenAI, description: "GPT-4/4o integration with structured output parsing" },
    ],
  },
];

/* ============================================
   PROJECTS
   ============================================ */

export const projectsData = {
  Projects: [
    {
      slug: "ihive",
      name: "iHive",
      tagline: "GitHub-Inspired Collaboration Platform",
      url: "https://ihive.vercel.app",
      imageSrc: "/Images/Projects/iHive/iHive-preview.jpeg",
      stack: [
        { name: "TypeScript", icon: SiTypescript, description: "Type-safe development" },
        { name: "Next.js", icon: SiNextdotjs, description: "React framework" },
        { name: "React.js", icon: FaReact, description: "UI library" },
        { name: "AWS S3", icon: FaAws, description: "File storage" },
        { name: "Node.js", icon: SiNodedotjs, description: "Backend runtime" },
        { name: "Supabase", icon: SiSupabase, description: "Database & auth" },
        { name: "OpenAI", icon: AiOutlineOpenAI, description: "AI integration" },
      ],
      description:
        "Led development of a GitHub-inspired collaboration platform as technical lead. Architected complete backend with Node.js/Express and PostgreSQL, implementing granular role-based permission system and AWS S3 file management.",
      overview:
        "Led development of a full-stack collaboration platform connecting entrepreneurs with investors. Architected complete backend infrastructure with Node.js/Express and PostgreSQL, designed and implemented a granular three-tier permission system, integrated AWS S3 for secure file storage, and added AI-powered tag generation using OpenAI's GPT-4 API. Managed a 4-member team through Agile/Scrum methodology.",
      features: [
        "Granular role-based permission system with public, protected, and private access levels",
        "AWS S3 integration for secure file upload, storage, and management",
        "OpenAI GPT-4 API integration for automated tag generation from idea descriptions",
        "RESTful API design with comprehensive JWT authentication and authorization",
        "Real-time collaboration features with WebSocket implementation",
      ],
      challenges: [
        {
          title: "Granular Permission System Architecture",
          problem: "Needed a flexible access control system where owners could set file-level permissions and collaborators could only access content matching their permission level, while ensuring no unauthorized access through API manipulation.",
          solution: "Implemented a least-privilege permission system with three discrete levels (0=public, 1=protected, 2=private). Built middleware to validate permissions on every file operation at the API level, ensuring collaborators could only upload files at or below their assigned permission level and preventing privilege escalation attempts.",
        },
        {
          title: "AI Integration Consistency",
          problem: "OpenAI API responses needed to return consistent JSON structure for tag generation, but natural language models can return unpredictable formats including markdown, preambles, or malformed JSON.",
          solution: "Designed custom system prompts that explicitly instructed the model to return only valid JSON in a specific structure: {\"tags\": [\"tag1\", \"tag2\", ...]}. Implemented response validation and sanitization to strip markdown code blocks and parse the JSON safely, with fallback error handling for malformed responses.",
        },
        {
          title: "Team Coordination & Code Quality",
          problem: "As technical lead, needed to maintain code quality and architectural consistency across a 4-member team while debugging issues in unfamiliar code areas like WebSocket implementations.",
          solution: "Established code review processes, conducted regular sprint planning meetings, and actively debugged and refactored teammate code. Took hands-on approach to fixing WebSocket bugs and refactoring AI integration code to ensure reliability and maintainability.",
        },
      ],
      liveDemo: "https://ihive.vercel.app/",
      sourceCode: "https://github.com/RizikH/iHive",
    },
    {
      slug: "justseen",
      name: "JustSeen",
      tagline: "Full-Stack Movie Discovery Platform",
      url: "https://justseen.vercel.app",
      imageSrc: "/Images/Projects/JustSeen/justseen-preview.jpg",
      stack: [
        { name: "Spring Boot", icon: SiSpring, description: "Java backend" },
        { name: "TypeScript", icon: SiTypescript, description: "Type safety" },
        { name: "Next.js", icon: SiNextdotjs, description: "React framework" },
        { name: "React.js", icon: FaReact, description: "UI library" },
        { name: "Tailwind CSS", icon: SiTailwindcss, description: "Styling" },
        { name: "PostgreSQL", icon: SiPostgresql, description: "Database" },
        { name: "GSAP", icon: SiGreensock, description: "Animations" },
      ],
      description:
        "Built production full-stack application with Spring Boot backend following MVC architecture. Implemented JWT authentication with BCrypt encryption and designed database schema using JPA/Jakarta Persistence.",
      overview:
        "Built a production-ready full-stack movie discovery platform with Spring Boot MVC backend (Controllers, Services, Repositories, DTOs) and React/Next.js frontend. Implemented secure JWT authentication with BCrypt password encryption and HTTP-only cookie session management. Designed database schema using JPA/Jakarta Persistence with entity relationships for user watch history and movie preferences. Integrated TMDB API for movie data with custom caching and deduplication strategies.",
      features: [
        "Spring Boot MVC architecture with proper separation of concerns (Controllers, Services, Repositories, DTOs)",
        "JWT authentication with BCrypt password encryption and HTTP-only cookie sessions",
        "JPA/Jakarta Persistence database design with entity relationships for user data",
        "Custom horizontal movie carousel with CSS transform-based scrolling",
        "Server-side caching and deduplication for TMDB API responses",
      ],
      challenges: [
        {
          title: "TMDB API Data Quality Issues",
          problem: "TMDB API returned massive datasets with extensive duplicate entries across different endpoints and categories, causing slow load times and displaying redundant content to users.",
          solution: "Implemented server-side deduplication logic to filter out duplicate movie entries by comparing movie IDs before sending responses to the frontend. Combined this with response caching strategy to store processed, deduplicated data, reducing API calls and improving load times significantly after initial fetch.",
        },
        {
          title: "Custom Horizontal Scroll Implementation",
          problem: "Standard CSS scroll solutions didn't provide the smooth, controlled movie carousel experience needed. Built-in overflow scrolling lacked precise control and couldn't implement next/previous buttons effectively.",
          solution: "Designed custom scrolling solution from scratch using CSS transform and CSS variables. Implemented --slider-index variable that tracks current position, then calculated translateX values to shift movie containers. Added button controls that increment/decrement the index with bounds checking (0 to Math.floor(movies.length / 6) - 2) to ensure smooth, controlled horizontal scrolling across genre sections.",
        },
        {
          title: "Database Schema Design for User Preferences",
          problem: "Needed to efficiently store and query user watch history, movie ratings, and personalized recommendations while maintaining relationships between users, movies, and reviews.",
          solution: "Designed normalized database schema using JPA entity relationships (@OneToMany, @ManyToOne) to connect Users, Movies, and Reviews. Used @Entity and @Table annotations with Jakarta Persistence to define clear data models, enabling efficient queries for watch history tracking and recommendation generation based on user preferences.",
        },
      ],
      liveDemo: "https://justseen.vercel.app",
      sourceCode: "https://github.com/RizikH/JustSeen",
    },
    {
      slug: "appops",
      name: "AppOps",
      tagline: "Job Application Tracker: Production .NET 10 API + Flutter Mobile",
      url: "",
      imageSrc: "/Images/Projects/AppOps/appops-preview.jpg",
      wrapperType: "iphone",
      stack: [
        { name: "C#", icon: SiSharp, description: ".NET backend language" },
        { name: ".NET 10", icon: SiDotnet, description: "ASP.NET Core Web API" },
        { name: "PostgreSQL", icon: SiPostgresql, description: "Database" },
        { name: "Flutter", icon: SiFlutter, description: "iOS/Android mobile frontend" },
        { name: "Docker", icon: SiDocker, description: "Local dev containerization" },
      ],
      description:
        "Two independent production projects connected via REST API: a .NET 10 Clean Architecture backend on Azure and a Flutter mobile app (iOS/Android). Backend includes JWT rotation, IP rate limiting, per-user data isolation at the DbContext level, and 119 tests (87 running against real PostgreSQL via Testcontainers).",
      overview:
        "AppOps is two independent, production-grade projects connected via REST API. The .NET 10 backend follows Clean Architecture (API, Application, Domain, Infrastructure) with a 5-table PostgreSQL 16 schema on Supabase, deployed to Azure App Service. The API exposes three resource types (Job Applications, Notes, and Reminders), all with full CRUD and per-user isolation enforced at the DbContext level. Cross-user access returns 404 not 403 to avoid leaking resource existence. Domain entities encapsulate business logic: status transitions auto-generate TimelineEvents. Test suite: 32 pure domain unit tests + 87 integration tests using Testcontainers (real PostgreSQL) and WebApplicationFactory. The Flutter frontend (iOS/Android) connects via a token interceptor, stores JWTs in the secure enclave (Keychain/Keystore), and caches applications locally with AES-encrypted Hive storage.",
      features: [
        "Two independent repos: ASP.NET Core Web API (C#/.NET 10) + Flutter mobile app (iOS/Android), connected via REST",
        "4-layer Clean Architecture (API, Application, Domain, Infrastructure) with Result Pattern, Factory Pattern, and interface-driven DI throughout",
        "JWT auth: 15-min access tokens + 30-day refresh tokens with rotation on refresh and explicit revocation on logout",
        "IP rate limiting via AspNetCoreRateLimit: login 5/min, register 3/min, refresh 10/min, all other endpoints 60/min",
        "Per-user data isolation enforced at DbContext level; cross-user access returns 404 not 403 to avoid leaking resource existence",
        "3 REST resource types with full CRUD: Job Applications, Notes, and Reminders, all scoped to the authenticated user",
        "119-test suite: 32 domain unit tests (pure C#, no infrastructure) + 87 integration tests (Testcontainers real PostgreSQL + WebApplicationFactory)",
        "Flutter: 3-tier storage (SecureStorage for JWTs, SharedPreferences for prefs, AES-encrypted Hive cache); token interceptor handles proactive + reactive refresh",
      ],
      challenges: [
        {
          title: "JWT Token Rotation & Revocation",
          problem:
            "Needed a seamless auth experience where users stay logged in long-term without compromising security. Short-lived access tokens alone would require frequent re-login, but long-lived tokens are a security risk.",
          solution:
            "Implemented a two-token system: 15-minute access tokens (signed HMAC-SHA256) paired with 30-day refresh tokens stored in the database. On refresh, the old token is revoked and a new one issued (rotation). Explicit revocation on logout marks the token in the DB, preventing reuse. The Flutter TokenInterceptor handles both proactive (pre-expiry) and reactive (401 response) refresh transparently.",
        },
        {
          title: "Multi-User Data Isolation",
          problem:
            "Every database query needed to be scoped to the authenticated user's ID without relying on per-endpoint filtering. A single missed filter would expose another user's data.",
          solution:
            "Enforced isolation at the DbContext level using IHttpContextAccessor to extract the authenticated UserId from JWT claims. All queries are automatically filtered by this ID, meaning no per-query filter is needed and no controller can accidentally return cross-user data.",
        },
        {
          title: "Clean Architecture Layer Boundaries",
          problem:
            "Maintaining strict separation between Domain, Application, Infrastructure, and API layers while keeping the codebase practical for a solo project, balancing over-engineering vs. maintainability.",
          solution:
            "Used the Repository and Service Layer patterns with interface-driven DI throughout. Domain entities encapsulate business logic (e.g., JobApplication status transitions auto-generate TimelineEvents). DTOs in the Application layer prevent domain leakage into the HTTP layer.",
        },
      ],
      liveDemo: "",
      sourceCode: "https://github.com/RizikH/AppOps",
      sourceCodeAlt: "https://github.com/RizikH/AppOps-Mobile",
    },
  ] as ProjectData[],
};