import { Project, SkillCategory } from './types';

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Anovia Suites - Hotel PMS",
    description:
      "A comprehensive Property Management System for hotels featuring dashboard analytics, stock management, employee accounts, booking system, and a mobile app for guests with integrated payment processing. Includes real-time booking tracking, revenue monitoring, and staff management.",
    image: "/images/Dashbord.jpg", 
    gallery: [
      "/images/Dashbord.jpg",
      "/images/Stock.jpg",
      "/images/employee.jpg",
      "/images/reservationprocess.png",
      "/images/reservationmanage.jpg",

    ],
    techStack: ["React", "Node.js", "Mobile Dev", "Payment Gateway", "MySQL"],
    githubLink: "https://github.com/BouchetitAnfel/Anovia.git",
    liveDemo: null,
  },
  {
    id: "2",
    title: "Anovia Suites - Guest Mobile App",
    description:
      "A companion mobile application for Anovia Suites guests, offering seamless hotel booking experience with profile management, loyalty rewards system, reservation history, and secure payment integration. Features include room selection, check-in/check-out management, and 24/7 customer support.",
    image:  "/images/Homepage1.png",
    gallery: [  
      "/images/Homepage.png",
      "/images/Second.png",
      "/images/reservation.png",
      "/images/Signin.png",
      "/images/Profile.png",
      "/images/payment.png",
    ],
    techStack: ["React Native", "Firebase", "Payment Gateway", "REST API"],
    githubLink: "https://github.com/BouchetitAnfel/Anovia.git",
    liveDemo: null,
  },
  {
    id: "3",
    title: "Restaurant Management App",
    description:
      "A modern restaurant management application featuring online ordering, table reservations, menu management, and real-time order tracking. Built with a focus on user experience and seamless customer interactions.",
    image: "",
    gallery: [  
      
    ],
    techStack: ["React", "Firebase", "Redux", "Material-UI"],
    githubLink: "https://github.com/hadilbenzaid/restaurant-app",
    liveDemo: null,
  },
  {
    id: "4",
    title: "Master Learning Platform",
    description:
      "An educational platform designed for master's students, providing course management, resources sharing, collaborative learning tools, and academic progress tracking. Features include assignment submissions, discussion forums, and grade management.",
    image: "",
    gallery: [ 
  
    ],
    techStack: ["React", "TypeScript", "PostgreSQL", "Express", "Tailwind CSS"],
    githubLink: "https://github.com/hadilbenzaid/master-platform",
    liveDemo: null,
  },
  {
    id: "5",
    title: "Lab3 – Node.js & NPM",
    description:
      "Introduction to Node.js as a JavaScript runtime environment built on the Chrome V8 engine. This lab explores NPM (Node Package Manager), its package ecosystem, and how to use existing open-source JavaScript libraries to build applications efficiently without reinventing the wheel.",
    image: "/images/nodejs.jpg",
    techStack: ["Node.js", "NPM", "JavaScript"],
    githubLink: "https://github.com/hadilbenzaid/Caw.git",
    liveDemo: null,
  },
  {
    id: "6",
    title: "Lab4 – Unit Testing in JavaScript (Jest)",
    description:
      "The objective of this lab is to understand and apply unit testing in JavaScript using Jest. It focuses on writing, running, and validating unit tests for JavaScript modules to ensure code reliability and correctness.",
    image: "/images/Jest.png",
    techStack: ["JavaScript", "Jest", "Unit Testing"],
    githubLink: "https://github.com/hadilbenzaid/Caw.git/tree/lab4",
    liveDemo: null,
  },
  {
    id: "7",
    title: "Lab5 – React Components",
    description:
      "This lab focuses on building user interfaces using React Components implemented as JavaScript functions. The goal is to understand component structure, props, and rendering logic in modern React applications.",
    image: "/images/react-logo.jpg",
    techStack: ["React", "JavaScript", "Components"],
    githubLink: "https://github.com/hadilbenzaid/Caw.git/tree/5",
    liveDemo: null,
  },
  {
    id: "8",
    title: "Lab7 – Kanban Board (Trello-like)",
    description:
      "The objective of this lab is to build a functional Kanban Board similar to Trello. It allows managing tasks across different statuses such as 'To Do', 'In Progress', and 'Done', while applying core architectural patterns of modern React.",
    image: "/images/kanban.jpg",
    techStack: ["React", "State Management", "UI Design"],
    githubLink: "https://github.com/hadilbenzaid/Caw.git/tree/kanban-board",
    liveDemo: null,
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Languages',
    skills: [
      'JavaScript (ES6+)',
      'TypeScript',
      'Python',
      'PHP',
      'Java',
      'C++',
      'HTML5',
      'CSS3 / SASS'
    ]
  },
  {
    title: 'Frameworks & Libraries',
    skills: [
      'React 18',
      'React Native',
      'Node.js',
      'Express',
      'Laravel',
      'Redux',
      'Tailwind CSS',
      'Material-UI'
    ]
  },
  {
    title: 'Databases',
    skills: [
      'MySQL (SQL)',
      'PostgreSQL (SQL)',
      'Firebase'
    ]
  },
  {
    title: 'Tools & DevOps',
    skills: [
      'Vite',
      'Git & GitHub',
      'Jest',
      'Postman',
      'NPM',
      'Mobile Development'
    ]
  }
];