//iHive
import ihiveImage from "../../public/Images/Projects/iHive/iHive-preview.jpeg"

//Portfolio
import porfolioImage from "../../public/Images/Projects/Portfolio/portfolio-preview.jpg"

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

export const coreSkills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Java",
  "REST APIs",
  "GitHub",
  "Docker",
];

export const additionalSkills = [
  "React Three Fiber",
  "Three.js",
  "Tailwind CSS",
  "Python",
  "HTML5",
  "CSS3",
  "firebase",
  "MVC",
];


export const heroContent = {
  title: "Hello, I'm Rizik Haddad",
  location: "North Carolina, USA",
  job: "Software Engineer",
  focus: "Full-Stack Development",
  image: "/Images/hero.png",
  description: `
    I create clean, purposeful digital experiences and enjoy building things that matter. Always evolving, always curious.
  `,
  cta: {
    text: "Check My Resume",
    link: "/Docs/Full-Stack-Resume.pdf",
  },
};


export const projectsData = {
  Projects: [
    {
      slug: "ihive",
      name: "iHive",
      image: ihiveImage,
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
      image: porfolioImage,
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