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
  stack: StackItem[];
  description: string;
  overview: string;
  features: string[];
  challenges: Challenge[];
  liveDemo: string;
  sourceCode: string;
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
    Backend-focused Full Stack Developer specializing in secure, scalable application architecture. 
    Expertise in Spring Boot, Node.js/Express, REST API design, and database systems. 
    Passionate about building robust server-side solutions with clean, maintainable code.
  `,
  cta: {
    text: "View Resume",
    link: "/Docs/Full-Stack-Resume.pdf",
  },
  counters: [
    {
      label: "Projects",
      count: 2,
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
    "Currently pursuing the Microsoft Back-End Developer Professional Certificate and actively seeking full-time opportunities where I can contribute to building scalable, production-ready applications.",
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
      { name: ".NET", icon: SiDotnet, description: "Microsoft framework for building applications" },
      { name: "PostgreSQL", icon: SiPostgresql, description: "Advanced relational database" },
      { name: "MySQL", icon: SiMysql, description: "Popular relational database" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact, description: "JavaScript library for building user interfaces" },
      { name: "Next.js", icon: SiNextdotjs, description: "React framework for production applications" },
      { name: "TypeScript", icon: SiTypescript, description: "Typed superset of JavaScript" },
      { name: "JavaScript", icon: FaJsSquare, description: "Core programming language for web development" },
      { name: "HTML5", icon: FaHtml5, description: "Markup language for web content" },
      { name: "CSS3", icon: FaCss3Alt, description: "Styling language for web design" },
    ],
  },
];

/* ============================================
   CERTIFICATION
   ============================================ */

export const certification = {
  title: "Microsoft Back-End Developer Professional Certificate",
  provider: "Coursera",
  status: "In Progress",
  expectedCompletion: "April 2026",
  icon: "📜",
};

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
  ] as ProjectData[],
};