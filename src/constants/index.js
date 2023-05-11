import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Python3 Programmer",
    icon: mobile,
  },
  {
    title: "Stunning Visual Creator",
    icon: backend,
  },
  {
    title: "Technological Innovator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Creative Developer",
    company_name: "ZoomCar, India",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - Sept 2020",
    points: [
      "Cultivated professional working relationships with merchandising and sales departments, suppliers and clients.",
      "Mentored other designers, providing guidance and support to help generate work on time and within project parameters.",
      "Utilized expertise and current best practices to verify quality of images, content and brand compliance.",
      "Managed large volume of projects and met all deadlines through exceptional organizational and time management skills.",
    ],
  },
  {
    title: "Business Analyst",
    company_name: "Indiespirits, India",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Promoted campus awareness of activities and engagement opportunities with on-campus table tents, email distribution, and social media promotion.",
      "Developed marketing efforts such as posters and social media ads to encourage student participation for campus events.",
      "Facilitated monthly programs focusing on personal safety, off-campus education and encouraging community interaction.",
      "Shared marketing materials on social media platforms to measure audience perception for Indiespirits, India.",
    ],
  },
  {
    title: "Developer Intern",
    company_name: "Tactlabs, Canada",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2021 - Oct 2022",
    points: [
      "Lead in the design, development, and implementation of the code, database, and web development projects.",
      "Delegate tasks to more than five members of the back-end team and provide intend on all aspects of the project.",
      "Lead and completed the assessment of all feature materials to ensure the quality and accuracy of the projects.",
      "Delegate tasks to more than five members of the back-end team and provide intend on all aspects of the project.",
    ],
  },
  {
    title: "Product Engineer Intern",
    company_name: "Codingmart Technologies, India",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining full stack web applications using MERN Stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Conceptualized and implemented innovative ideas to drive user engagement for clients' websites.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Praabindh proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Praabindh does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Praabindh optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Reimagined 3D",
    description:
      "Reimagined 3D is a 3D portfolio website of Praabindh that showcases the best of 3D art and design. Built using React and Three.js, it offers a seamless and interactive user experience. The website's three-dimensional layout highlights the portfolio's depth and complexity, with easy-to-navigate menus that allow visitors to explore Praabindh's work in detail with visually stunning website to showcase the best of 3D art and design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/praabindh/Reimagined-3D",
  },
  {
    name: "The Schema Wind",
    description:
      "SchemaWind defines how data is organized within a relational database and includes logical constraints such as table names, fields, data types, and the relationships between these entities. An open-source project for developers to use working schema of various fields of technological domains as well as for contributing to resolving the rising demands of models, database structures, and schema in the back-end applications.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/praabindh/SchemaWind",
  },
  {
    name: "The HALE : Wor-Corp",
    description:
      "Project HALE Wor-Corp integrates IoT, Blockchain, APIs, and AI to enhance patient care, streamline administrative processes, and improve healthcare delivery. The system collects real-time data via IoT devices, securely transmits it using blockchain technology, and applies AI algorithms to analyze it. It facilitates effective workplace management, collaboration, and workflow visualization.",
    tags: [
      {
        name: "fullstack",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/praabindhp/Wor-Corp-Dev",
  },
];

export { services, technologies, experiences, testimonials, projects };
