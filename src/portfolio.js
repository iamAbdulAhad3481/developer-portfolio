import emoji from "react-easy-emoji";

import shopdev from "./assets/img/icons/common/shopdev.svg";
import visualr from "./assets/img/icons/common/visualr.svg";

import venuehub from "./assets/img/icons/common/venuehub.svg";
import codility from "./assets/img/icons/common/codility.svg";

export const greetings = {
  name: "Abdul Ahad",
  title: "Hi all, I'm Abdul Ahad",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript / Reactjs / Redux / HTML / CSS3 / Bootstrap and some other cool libraries and frameworks and Cross Platform Mobile Apps With Apache Capacitor and React Native.",
  resumeLink:
    "https://drive.google.com/file/d/1msVX4zIQV2IsNZcxasxzDqHo_CG72g3k/view?usp=drive_link",
};

export const openSource = {
  githubUserName: "iamAbdulAhad3481",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/iamAbdulAhad3481",
  instagram: "https://www.instagram.com/iamabdulahad3481/",
  twitter: "https://twitter.com/iamAbdulAhad1",
  github: "https://github.com/iamAbdulAhad3481",
  linkedin: "https://www.linkedin.com/in/abdul-ahad-a812581a7/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  softwareSkills: [
    {
      skillName: "HTML5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "SASS",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "React Js",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "Next Js",
      fontAwesomeClassname: "vscode-icons:file-type-next",
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "vscode-icons:file-type-reacttemplate",
    },
    {
      skillName: "Apache Cordova",
      fontAwesomeClassname: "vscode-icons:file-type-apache",
    },
    {
      skillName: "Node Js",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "60",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo = [
  {
    schoolName: "Lahore Garrison University",
    subHeader: "Bachelors in Computer Science",
    duration: "October 2015 - September 2019",
    description: [
      {
        title: "Completed Graduation with overall CGPA of 3.3.",
      },
      {
        title:
          "Shortlisted in the PM laptop scheme by Govt of Punjab on the basis of Inter marks and received a laptop.",
      },
      {
        title: "Active member of all the communities in university.",
      },
    ],
  },
  {
    schoolName: "Govt College Gulberg",
    subHeader: "FSC Pre Engg",
    duration: "October 2013 - April 2015",
    description: [
      {
        title: "Completed FSC in Computer Science with 80% marks.",
      },
      {
        title:
          "Received Award for better performance by all jamiat organization.",
      },
      {
        title: "Active Member of all the sports events in College.",
      },
    ],
  },
];

export const experience = [
  {
    role: "Senior React js & Mobile App Developer",
    company: "Visualr",
    companylogo: visualr,
    date: "April 2022 – Present",
    // desc: "ShopDev is a full-service technology and data science company specializing in software & product development and technology acceleration.",
    descBullets: [
      "Led and successfully delivered e-commerce app, ensuring robust frontend development for both web and mobile interfaces using Next Js and Apache Capacitor.",
      "Managed all aspects of Front-End development, ensuring cohesive user experience and interface functionality.",
      "Established and implemented testing protocols, ensuring bug-free deployments and consistent user experiences across all platforms.",
    ],
  },
  {
    role: "React js Developer",
    company: "ShopDev",
    companylogo: shopdev,
    date: "July 2021 – March 2022",
    // desc: "ShopDev is a full-service technology and data science company specializing in software & product development and technology acceleration.",
    descBullets: [
      "Lead front-end team in developing company owned product, comprehensive promotional system, ensuring streamlined operations and user interface.",
      "Delivered key projects, including pivotal e-commerce application and admin panel rewrite, on schedule and bug-free, meeting all specified requirements",
      `Actively contributed to numerous client and in-house projects, ensuring use of best practices and maintaining high quality of code.`,
    ],
  },
  {
    role: "React js Developer",
    company: "Codility Solutions",
    companylogo: codility,
    date: "Nov 2019 – Jun 2021",
    // desc: `Codility is a solution provider company based on cutting edge technologies.
    //   We provide comprehensive solutions in web and mobile application development.
    //   `,
    descBullets: [
      "Developed and successfully delivered my first mobile application using React and Apache Capacitor, ensuring responsive and user-friendly experience",
      "Actively contributed to development and enhancement of company’s own ERP system, focusing on implementing robust and scalable React-based front-end solutions",
      `Collaborated with various teams to successfully deliver multiple projects, ensuring usability and stability of front-end components.`,
    ],
  },
  // {
  //   role: "Front-End Intern",
  //   company: "Venue Hub",
  //   companylogo: venuehub,
  //   date: "Jan 2019 – Sep 2019",
  //   desc: `
  //   VenueHub is Asia's leading venue booking platform with 1,300+ memorable event spaces to choose from across Hong kong & Shanghai.
  //   `,
  //   descBullets: [
  //     "Created site layout and user interface using HTML and CSS practices.",
  //     "Collaborated with in-house web designers to create innovative UI design.",
  //     "Collaborated with other developers to identify number of bugs and errors in the website.",
  //   ],
  // },
];

export const projects = [
  {
    name: "ENPNT",
    tools:
      "React js, Next js, Tailwind CSS, Apache Capacitor, Next.js, GraphQL",
    desc: `Enpointe is a hybrid application developed using Next.js and Apache Capacitor, designed to cater to the B2C arts industry.`,
    descBullets: [
      "Led and successfully delivered e-commerce app, ensuring robust frontend development for both web and mobile interfaces using Next Js and Apache Capacitor.",
      " Working closely with designers and stakeholders to ensure a seamless and visually appealing user experience for customers.",
      " Integrating the Apache Capacitor framework to enable the hybrid functionality of the application, allowing it to run seamlessly on both iOS and Android platforms",
    ],
  },
  {
    name: "Hypr",
    tools: "React js, Redux, Antd, GraphQL, TypeScript",
    desc: `HYPR is an admin panel, designed to cater to retail operations with a B2C orientation, needing a transformative shift to React.`,
    descBullets: [
      "Translating an existing Angular-based UI into React, ensuring no loss of functionality and improving usability where possible, all within a constricted timeframe.",
      "Successfully converted the HYPR admin panel to React within the given limited timeframe, ensuring enhanced performance and future scalability.",
      "Managed, maintained, and enriched the company's internal repository of reusable components to streamline development across the team.",
    ],
  },
  {
    name: "LMS (Loyalty Management System)",
    tools: "React js, Redux, Antd, GraphQL, TypeScript",
    desc: `LMS is a comprehensive in-house product, designed to encompass all facets of loyalty management and promotions, providing a unified system to manage diverse aspects of customer loyalty and promotional management`,
    descBullets: [
      "Led the Front-End development team, steering the design, development, and deployment phases, ensuring all aspects of the LMS were cohesive and adherent to specified requirements.",
      "Engaged in strategic planning, task allocation, and code reviews, while maintaining a hands-on approach to coding and problem-solving.",
      "Successfully led the FE team to build and deliver the LMS, ensuring timely delivery and robust performance, with the product effectively managing complex loyalty and promotional paradigms",
    ],
  },
  {
    name: "UpForJobs",
    tools: "React, Redux, TypeScript, Apollo Client, GraphQL",
    desc: `UpForJobs is a unique digital freelance marketplace tailored to help both businesses and freelancers.
     It is a website with a focus on helping buisness, to find freelancers and to freelancers to find respected work!`,
    descBullets: [
      "As a dedicated React Developer, I was entrusted with all React-related tasks and modules, ensuring the frontend was not only user-friendly but also robust and securely integrated with the backend functionalities.",
      "Actively collaborated with the team to assure that each module I developed was seamlessly integrated into the overall platform, ensuring a coherent and stable user experience.",
      "Developing a reliable and user-friendly platform to manage and facilitate the numerous interactions between freelancers and clients, ensuring secure, transparent, and efficient project management and transaction handling.",
    ],
  },
  {
    name: "Pesaswap(B2B)",
    tools: "Cordova, React, Redux, Tailwind, TypeScript",
    desc: "PesaSwap provided a robust B2B and B2C platform integrated into a single codebase, acting as a Point-of-Sale (POS) system to facilitate smooth transactions and interactions among customers, retailers, and distributors across both web and mobile platforms",
    descBullets: [
      "Solely led the front-end development, navigating through the complexities of creating a hybrid mobile application while ensuring optimal performance and user experience.",
      "Successfully delivered the project within the stipulated timeline, managing the design, development, and deployment phases to ensure the application was published on relevant platforms effectively",
      "Managing the complexity of integrating diverse user functionalities within a unified application while maintaining a clean, intuitive user interface and experience.",
    ],
  },
  {
    name: "Driving Certification",
    tools: "React, Redux, Sass",
    desc: "A web and mobile application for managing the driving schools and their instructors and teachers and their students and managing student's lesson plans.",
    descBullets: [
      " Undertook all React-related development tasks, contributing to the front-end design, functionality, and overall user experience.",
      "Successfully completed all assigned modules, features, and responsibilities, ensuring they adhered to the defined requirements and quality benchmarks.",
      "Ensuring that the system was robust and error-free, providing reliable service to all stakeholders involved in the driving school’s operations.",
    ],
  },
  // {
  //   name: "NewNew",
  //   tools: "React, Redux, TypeScript, LESS",
  //   desc: "NewNew is a web application related to client business for showing its posts and news for its customers.",
  // },
  {
    name: "ERP System",
    tools: "React, Redux, TypeScript",
    desc: "An in-house ERP product designed to holistically manage all aspects of human resource management, featuring a myriad of modules like attendance, task management, accounting, and payroll to streamline and enhance organizational operations.An in-house ERP product designed to holistically manage all aspects of human resource management, featuring a myriad of modules like attendance, task management, accounting, and payroll to streamline and enhance organizational operations.",
    descBullets: [
      "Worked extensively on the 'Attendance' and 'Task Management' modules, managing both development and integration aspects.",
      "Successfully integrated the attendance and task management modules into the office system, ensuring real-time synchronization and operational efficiency.",
      "Efficiently developed and integrated the attendance and task management modules, receiving positive feedback for user-friendly design and flawless functionality.",
    ],
    link: {
      name: "ERP Pack",
      url: "https://codility.erppack.com/",
    },
  },
];
