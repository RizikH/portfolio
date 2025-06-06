// Font Awesome
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaReact,
  FaSass,
} from "react-icons/fa";

// Simple Icons
import {
  SiApachenetbeanside,
  SiExpress,
  SiFirebase,
  SiGreensock,
  SiIntellijidea,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPug,
  SiSpringboot,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Boxicons
import { BiLogoVisualStudio } from "react-icons/bi";



export const aboutHeader = {
  title: "About Me",
  description:
    "Over the past few years, I've dabbled in a bit of everything, from Assembly and Java to JavaScript and PHP.",
};

export const aboutFocus = {
  heading: "Current Focus",
  paragraphs: [
    "Lately, I've been exploring React, Next.js, and React Three Fiber to build more visual and interactive experiences. There's always more to learn, and I enjoy the process.",
    "I'm drawn to the full picture from how things look to how they work behind the scenes. I enjoy refining both the interface and the logic, and learning is a steady part of how I work.",
    "I'm currently looking for a full-time role where I can apply what I know, and keep learning.",
  ],
};

export const heroContent = {
  title: "Hello, I'm Rizik Haddad",
  location: "North Carolina, USA",
  job: "Software Engineer",
  focus: "Full-Stack",
  image: "/Images/hero.jpg",
  description: `
    I enjoy creating subtle animations and interactions that enhance UX. I like it simple, clean, and functional. I am available for work and open to new opportunities.
  `,
  cta: {
    text: "Check My Resume",
    link: "/Docs/Full-Stack-Resume.pdf",
  },
  counters: [
    {
      label: "Projects",
      count: 10,
      addition: "+",
    },
    {
      label: "Years of Experience",
      count: 2,
      addition: "+",
    },
    {
      label: "Languages",
      count: 10,
    },
  ],
};


export const skills = [
  {
    title: "Frontend",
    skills: [
      { name: "JavaScript", icon: FaJsSquare, description: "Web’s favorite language" },
      { name: "TypeScript", icon: SiTypescript, description: "JavaScript, but smarter" },
      { name: "React.js", icon: FaReact, description: "UI meets logic" },
      { name: "Next.js", icon: SiNextdotjs, description: "React on steroids" },
      { name: "Tailwind CSS", icon: SiTailwindcss, description: "Utility class wizardry" },
      { name: "SASS", icon: FaSass, description: "CSS with superpowers" },
      { name: "GSAP", icon: SiGreensock, description: "Animation, unleashed" },
      { name: "HTML5", icon: FaHtml5, description: "Structure of the web" },
      { name: "CSS3", icon: FaCss3Alt, description: "Looks that kill" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, description: "JavaScript on servers" },
      { name: "Express.js", icon: SiExpress, description: "Minimalist backend magic" },
      { name: "Java", icon: FaJava, description: "Verbose but mighty" },
      { name: "Spring Boot", icon: SiSpringboot, description: "Java, accelerated" },
      { name: "PostgreSQL", icon: SiPostgresql, description: "SQL with power" },
      { name: "Firebase", icon: SiFirebase, description: "Serverless fire" },
      { name: "Supabase", icon: SiSupabase, description: "Open-source Firebase" },
    ],
  },
];


export const projectsData = {
  Projects: [
    {
      slug: "ihive",
      name: "iHive",
      imageSrc: "/Images/Projects/iHive/iHive-preview.jpeg",
      stack: [
        "TypeScript",
        "Next.js2",
        "React.js",
        "AWS",
        "Node.js",
        "Supabase",
        "OpenAI",
      ],
      description:
        "iHive is a full-stack web application that connects entrepreneurs with investors through idea repositories, secure file sharing, real-time chat, and role-based collaboration.",
      liveDemo: "https://ihive.vercel.app/",
      sourceCode: "https://github.com/RizikH/iHive",
    },
    {
      slug: "portfolio",
      name: "Portfolio",
      imageSrc: "/Images/Projects/Portfolio/portfolio-preview.jpg",
      stack: [
        "TypeScript",
        "Next.js2",
        "React.js",
        "Tailwind CSS",
        "GSAP",
      ],
      description:
        "Built with React.js, Next.js, Tailwind CSS, and GSAP. Designed to deliver a minimalist yet elegant user experience, it showcases selected projects, skills, and background with smooth animations and responsive design.",
      liveDemo: "",
      sourceCode: "https://github.com/RizikH/Portfolio",
    },
  ],
};