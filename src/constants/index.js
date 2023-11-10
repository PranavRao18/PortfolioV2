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
  
  const education = [
    {
      title: "BMS College of Engineering",
      degree: "Bachelor of Engineering",
      place_name: "Bangalore",
      date: "November 2022 - 2026",
      grade: "9.75 CGPA(current)"
    },
    {
      title: "CFAL India",
      degree: "Class XII",
      place_name: "Mangalore",
      date: "April 2020 - May 2022",
      grade: "96.33%"
    },
    {
      title: "Shriniketana School",
      degree: "Class X",
      place_name: "Sirsi",
      date: "June 2008 - March 2020",
      grade: "96%"
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wheel-E",
      subdescription: "An electric-vehicles exclusive taxi service website which is fully functional for both users and drivers.",
      description: "In a 24-hour hackathon, my team of four developed a transportation project for the theme Sustainable Development Goals. The website features user-friendly Login and SignUp pages, including one for drivers. It calculates the shortest route between pickup and drop locations using APIs, offers cost estimates for various transport modes, and allows users to book vehicles. Upon booking, drivers receive notifications and can accept, leading to automatic redirection to the user's location.",
      tags: ["HTML", "CSS", "TailwindCSS", "JavaScript"],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "GeoCrisis",
      subdescription: "GeoCrisis is a real-time mapping application that provides immediate insights into global crises.",
      description: "GeoCrisis stands as a sophisticated and user-friendly real-time mapping application specifically crafted to provide instant, accurate, and visually immersive insights into crises and emergencies occurring worldwide. Leveraging cutting-edge technology, this platform is meticulously designed to serve as a comprehensive and pivotal tool for emergency responders, humanitarian organizations, governmental bodies, and the general public.",
      tags: ["HTML", "CSS", "BootStrap", "JavaScript", "Django"],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "cli-Mate",
      subdescription: "A weather mobile-app which notifies you in-case of too high/ low temperatures.",
      description: "Contributed significantly to the development of a cross-platform mobile application using Flutter, ensuring accessibility for both iOS and Android users. Held responsibility for front-end development, focusing on designing user interfaces and implementing core functionalities. Expertly integrated the Flutter framework, Dio for API communication, and Flutter Secure Storage for efficient data persistence. With the help of my teammates, used Django for backend framework.",
      tags: ["Flutter", "Dart"],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "PortFolio",
      subdescription: "A website to showcase my skills, projects, achievements and experiences.",
      description: "A curated digital showcase of my work and achievements, reflecting my skills and experiences in a visually engaging manner. It encompasses diverse projects, educational background, and personal interests, allowing visitors to explore my capabilities. This website serves as a valuable tool for potential employers, collaborators, or educational institutions to gain insights into my expertise and achievements. Through its user-friendly design, it offers a clear and structured representation of my talents and provides a convenient means to connect with me.",
      tags: ["ReactJS", "TailwindCSS"],
      image: carrent,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, education, testimonials, projects };