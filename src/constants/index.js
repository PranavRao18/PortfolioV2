import {
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    carrent,
    threejs,
    CodeHunt,
    Devsprints,
    Leetcode,
    Codechef,
    Wheele,
    Geocrisis,
    Climate,
    Portfolio
  } from "../assets/assets";
  import icons from "./Icons";
  
  export const navLinks = [
    {
      id: "interests",
      title: "Interests",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "about",
      title: "About Me",
    },
    {
      id: "contact",
      title: "Contact Me",
    },
  ];
  
  const services = [
    {
      title: "WEB DEVELOPMENT",
      icon: icons.react,
      content: "I'm passionate about crafting the digital world through web development, and I specialize in the MERN stack (MongoDB, Express.js, React, Node.js). I enjoy building responsive and user-friendly websites that look great and deliver exceptional user experiences."
    },
    {
      title: "COMPETITIVE PROGRAMMING",
      icon: icons.laptop,
      content: "I thrive on the challenge of Competitive Programming. Solving complex algorithmic problems, optimizing code for efficiency, conquering coding competitions, and contributing to open-source projects are not just hobbies; they're a passion."
    },
    {
      title: "APP DEVELOPMENT",
      icon: icons.mobile,
      content: "I'm enthusiastic about mobile app development with a strong focus on Flutter and Dart. I love creating cross-platform, visually appealing applications that offer seamless experiences. The Flutter framework's flexibility empowers me to bring innovative app ideas to life."
    },
    {
      title: "UI/UX",
      icon: icons.layout,
      content: "I'm fascinated by the art and science of User Interface (UI) and User Experience (UX) design. Even though not proficient in this field, I'm highly interested to learn more. Crafting visually appealing and user-centered interfaces is my passion. "
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Express JS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
    ,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Django",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "C",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    {
      name: "C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "VS Code",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
      name: "Blender",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg"
    }
  ];
  
  const education = [
    {
      title: "BMS College of Engineering",
      degree: "B.E. in Computer Science",
      place_name: "Bangalore",
      date: "November 2022 - 2026",
      grade: "CGPA: 9.75 (current)"
    },
    {
      title: "CFAL India",
      degree: "Class XII",
      place_name: "Mangalore",
      date: "April 2020 - May 2022",
      grade: "Percentage: 96.33%"
    },
    {
      title: "Shriniketana School",
      degree: "Class X",
      place_name: "Sirsi",
      date: "June 2008 - March 2020",
      grade: "Percentage: 96%"
    },
  ];
  
  const projects = [
    {
      name: "Wheel-E",
      subdescription: "An electric-vehicles exclusive taxi service website which is fully functional for both users and drivers.",
      description: "In a 24-hour hackathon, my team of four developed a transportation project for the theme Sustainable Development Goals. The website features user-friendly Login and SignUp pages, including one for drivers. It calculates the shortest route between pickup and drop locations using APIs, offers cost estimates for various transport modes, and allows users to book vehicles. Upon booking, drivers receive notifications and can accept, leading to automatic redirection to the user's location.",
      tags: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      image: Wheele,
      source_code_link: "https://github.com/",
    },
    {
      name: "GeoCrisis",
      subdescription: "GeoCrisis is a real-time mapping application that provides immediate insights into global crises.",
      description: "GeoCrisis stands as a sophisticated and user-friendly real-time mapping application specifically crafted to provide instant, accurate, and visually immersive insights into crises and emergencies occurring worldwide. Leveraging cutting-edge technology, this platform is meticulously designed to serve as a comprehensive and pivotal tool for emergency responders, humanitarian organizations, governmental bodies, and the general public.",
      tags: ["HTML", "CSS", "BootStrap", "JavaScript", "Django"],
      image: Geocrisis,
      source_code_link: "https://github.com/",
    },
    {
      name: "cli-Mate",
      subdescription: "A weather mobile-app which notifies you in-case of too high/ low temperatures.",
      description: "Contributed significantly to the development of a cross-platform mobile application using Flutter, ensuring accessibility for both iOS and Android users. Held responsibility for front-end development, focusing on designing user interfaces and implementing core functionalities. Expertly integrated the Flutter framework, Dio for API communication, and Flutter Secure Storage for efficient data persistence. With the help of my teammates, used Django for backend framework.",
      tags: ["Flutter", "Dart"],
      image: Climate,
      source_code_link: "https://github.com/",
    },
    {
      name: "PortFolio",
      subdescription: "A website to showcase my skills, projects, achievements and experiences.",
      description: "A curated digital showcase of my work and achievements, reflecting my skills and experiences in a visually engaging manner. It encompasses diverse projects, educational background, and personal interests, allowing visitors to explore my capabilities. This website serves as a valuable tool for potential employers, collaborators, or educational institutions to gain insights into my expertise and achievements. Through its user-friendly design, it offers a clear and structured representation of my talents and provides a convenient means to connect with me.",
      tags: ["ReactJS", "TailwindCSS"],
      image: Portfolio,
      source_code_link: "https://github.com/",
    },
  ];

  const achievements = [
    {
      image: Devsprints,
      title: 'Runner Up',
      subtitle: 'in Devsprints Hackathon',
      text: 'A 24 hour National Level Hackathon organized by BMSCE IEEE Computer Society',
      link: Devsprints
    },
    {
      image: CodeHunt,
      title: 'First Place',
      subtitle: 'in CodeHunt 2.1 Code-a-thon',
      text: 'A college level Code-a-thon organized by BMSCE IEEE Computer Society',
      link: CodeHunt
    },
    {
      image: 'public/herobg.png',
      title: 'Finalist',
      subtitle: 'in Hack AI Hackathon',
      text: 'A national level Hackathon organized by TechFest IIT Bombay\'23',
      link: ''
    },
    {
      image: 'public/herobg.png',
      title: 'Finalist',
      subtitle: 'in Hack It Out Hackathon',
      text: 'A national level Hackathon organized by IIT Patna during Celesta\'23',
      link: ''
    },
    {
      image: Leetcode,
      title: 'LeetCode',
      subtitle: 'Profile',
      text: 'Max Rating: 1597 | Problems Solved: 200+',
      link: 'https://leetcode.com/pranavrao/'
    },
    {
      image: Codechef,
      title: 'CodeChef',
      subtitle: 'Profile',
      text: '3⭐ | Max Rating: 1636 | Problems Solved: 150+',
      link: 'https://www.codechef.com/users/pranavrao18'
    },
  ]
  
  export { services, technologies, education, achievements, projects };