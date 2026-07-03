export const heroData = {
  name: "HENG ANDY",
  role: "FROND-END DEVELOPER",
  description:
    "I create modern and clean FROND-END designs with a focus on usability, aesthetics, and user experience. Passionate about building meaningful digital products.",
  image: "/src/image/Pic.jpg",
};

export const education = {
  school: "RUPP University - Computer Science",
  duration: "2024 - Now",
};

export const softSkills = [
  "Teamwork",
  "Hardworking",
  "Communication",
  "Critical Thinking",
  "Fast Learner",
];

export const skillSet = [
  "UI Design",
  "Web Design",
  "Prototyping",
  "AI Tools & Productivity",
];

export const techSkills = [
  "ReactJS",
  "TailwindCss",
  "HTML",
  "CSS",
  "JavaScript",
  "Framer Motion",
  "Laravel",
  "MySQL",
];

export const languages = [
  { name: "Khmer", level: "Native" },
  { name: "English", level: "Pre-intermediate" },
];

export const projects = [
  {
    id: 1,
    title: "E-Learning",
    desc: "Study about FrameWork and Library",
    image: "/public/img/e-learning.png",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "https://e-learning-xi-sage.vercel.app/",
    github: "https://github.com/Andy223-c/E-Learning",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    desc: "Online shopping with payment integration",
    image:
      "https://i.pinimg.com/736x/d9/c9/ca/d9c9ca3071f052121f8c70ccd8b0e89b.jpg",
    tech: ["React", "Tailwind", "Node", "PostgreSQL"],
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Staff Management System",
    desc: "Manage staff information and attendance",
    image:
      "https://i.pinimg.com/736x/18/47/cf/1847cf653cd0abc7173fbbce0c6443b4.jpg",
    tech: ["React", "Tailwind", "Laravel", "MySQL"],
    link: "#",
    github: "#",
  },
];
export const getTechIcon = (tech) => {
  const icons = {
    react: "bx bxl-react",
    tailwind: "bx bxl-tailwind-css",
    "framer motion": "bx bxl-framer",
    node: "bx bxl-nodejs",
    postgresql: "bx bxl-postgresql",
  };
  // Returns the match, or a default 'code' icon if not found
  return icons[tech.toLowerCase()] || "bx bx-code-alt";
};
