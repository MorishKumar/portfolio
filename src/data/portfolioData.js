import profileImg from '../assets/profile.jpg';

export const personalInfo = {
  name: "Morish Kumar",
  title: "Software Developer & Full-Stack Developer",
  altTitle: "Software Developer | Web Developer | MCA Graduate",
  tagline: "I build modern, performant, and accessible full-stack web applications with React, Node.js, and Java.",
  shortIntro: "I'm a Software Developer and MCA graduate with hands-on experience in full-stack web development, Java, Python, JavaScript, databases, and API development. Passionate about solving complex problems through clean and efficient code.",
  location: "Bhopal, Madhya Pradesh",
  phone: "+91 9430782078",
  email: "morish.dtg@gmail.com",
  github: "https://github.com/morishkumar",
  linkedin: "https://linkedin.com/in/morishkumar",
  resumeUrl: "/Morish_Kumar_Resume.pdf",
  statusBadge: "Available for work!",
  profileImage: profileImg
};

export const aboutMe = {
  heading: "About Me",
  paragraphs: [
    "I am a Software Developer with an MCA from Lakshmi Narain College of Technology (LNCT), Bhopal, and a B.Sc. in Computer Applications from Ganesh Lal Aggrawal College.",
    "My technical background spans across full-stack web development, Java, Python, C++, JavaScript, React.js, Node.js, Express.js, MySQL, and MongoDB. I have hands-on industry experience through web development internships, building scalable RESTful APIs, database persistence, and responsive UI components.",
    "Alongside core development, I have mentored students in Java, Object-Oriented Programming (OOP), Data Structures and Algorithms (DSA), and Python. Mentorship has sharpened my debugging, problem-solving, architectural design, and communication skills.",
    "I am actively seeking Software Engineering, Full-Stack Development, and Backend Development roles where I can contribute to impactful digital products."
  ]
};

export const skillProficiencies = [
  { name: "JavaScript / ES6+", level: 92, category: "Frontend & Scripting" },
  { name: "React.js & React Context", level: 90, category: "Frontend" },
  { name: "Java & OOP Principles", level: 90, category: "Programming" },
  { name: "Data Structures & Algorithms", level: 88, category: "Computer Science" },
  { name: "Node.js & Express.js", level: 85, category: "Backend" },
  { name: "Python Programming", level: 85, category: "Programming" },
  { name: "MongoDB & MySQL / SQL", level: 82, category: "Databases" },
  { name: "HTML5 & CSS3 / Tailwind", level: 95, category: "Frontend" },
  { name: "Git & GitHub Version Control", level: 90, category: "Tools" }
];

export const whatIDo = [
  {
    icon: "💻",
    title: "Web Development",
    description: "Building responsive, modern, and user-friendly web applications using HTML5, CSS3, JavaScript, React.js and Bootstrap."
  },
  {
    icon: "⚙️",
    title: "Backend Development",
    description: "Developing robust server-side architecture, microservices, and RESTful APIs using Node.js and Express.js."
  },
  {
    icon: "🗄️",
    title: "Database Development",
    description: "Designing relational and NoSQL database schemas with MongoDB, MySQL, and SQL query optimizations."
  },
  {
    icon: "☕",
    title: "Programming",
    description: "Object-oriented software development using Java, Python, C++, C, and modern JavaScript."
  },
  {
    icon: "🧩",
    title: "Problem Solving",
    description: "Applying Data Structures & Algorithms, OOP principles, and DBMS concepts to resolve complex engineering problems."
  },
  {
    icon: "🔧",
    title: "Development Tools",
    description: "Proficient with Git, GitHub, VS Code, Postman, and modern web developer toolchains for collaborative development."
  }
];

export const technicalSkills = [
  {
    category: "Programming Languages",
    skills: ["Java", "JavaScript", "Python", "C++", "C"]
  },
  {
    category: "Frontend",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Bootstrap", "Responsive Design"]
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
  },
  {
    category: "Databases",
    skills: ["MySQL", "SQL", "MongoDB"]
  },
  {
    category: "Tools & Workflow",
    skills: ["Git", "GitHub", "VS Code", "Postman"]
  },
  {
    category: "Computer Science",
    skills: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS"]
  }
];

export const workExperience = [
  {
    role: "MERN Stack Developer Intern",
    company: "Codec Technology",
    location: "Remote",
    period: "Internship",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Git"],
    description: "Worked as a MERN Stack Developer Intern, developing full-stack web application features using React.js, Node.js, Express.js and MongoDB.",
    responsibilities: [
      "Developed web application features using React.js and reusable frontend UI components.",
      "Created responsive user interfaces with modular state management.",
      "Integrated frontend applications with backend REST APIs.",
      "Worked with Node.js and Express.js to construct server-side endpoints.",
      "Managed MongoDB databases for application data persistence.",
      "Used Git and GitHub for collaborative source-code management."
    ]
  },
  {
    role: "Full Stack Web Development Intern",
    company: "Robokwik (IIT BHU)",
    location: "Remote",
    period: "Internship",
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Development"],
    description: "Gained practical experience in developing responsive web interfaces and implementing client-side interactivity.",
    responsibilities: [
      "Developed responsive web pages using modern HTML5 and CSS3 layouts.",
      "Implemented interactive client-side functionality using JavaScript.",
      "Worked on frontend components and web application features.",
      "Debugged and optimized application UI performance across devices.",
      "Collaborated with the core development team during testing and deployment."
    ]
  }
];

export const teachingLeadership = [
  {
    role: "Teaching Assistant",
    company: "Coding Ninjas",
    period: "June 2024 – August 2024",
    technologies: ["Java", "Object-Oriented Programming", "Data Structures & Algorithms", "Debugging"],
    description: "Mentored students in Java programming, Object-Oriented Programming and Data Structures & Algorithms.",
    responsibilities: [
      "Explained core Java programming concepts and memory management.",
      "Guided learners through OOP principles and design paradigms.",
      "Assisted students with Data Structures and Algorithms problem-solving.",
      "Helped learners debug complex programming errors and optimize code solutions."
    ]
  },
  {
    role: "Python Tutor & Curriculum Developer",
    company: "Navgurukul Foundation",
    period: "September 2023 – August 2024",
    technologies: ["Python", "Object-Oriented Programming", "Problem Solving", "Curriculum Development"],
    description: "Taught Python programming and supported learners through exercises while contributing to curriculum development.",
    responsibilities: [
      "Taught Python programming concepts from basic logic to advanced OOP.",
      "Mentored students individually through coding challenges.",
      "Contributed to the design and refinement of technical programming curriculum.",
      "Evaluated student progress through practical coding assessments."
    ]
  }
];

export const projects = [
  {
    id: "employee-directory",
    title: "Employee Directory System",
    shortDescription: "Full-stack employee management application with RBAC & search",
    category: "Full-Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    description: "A full-stack employee management application designed to manage employee records seamlessly through an intuitive web dashboard.",
    features: [
      "Complete Employee record CRUD operations",
      "Instant client-side & server-side search and filtering",
      "Pagination for large dataset performance",
      "REST API integration with backend server",
      "JWT Authentication & Role-based access control (RBAC)",
      "MongoDB persistent data storage"
    ],
    techDetails: {
      frontend: "React.js",
      backend: "Node.js, Express.js",
      database: "MongoDB",
      auth: "JWT"
    },
    liveUrl: "https://github.com/morishkumar",
    githubUrl: "https://github.com/morishkumar"
  },
  {
    id: "lms-portal",
    title: "Learning Management System",
    shortDescription: "Centralized student learning & course resource portal",
    category: "React / Node",
    technologies: ["React.js", "Bootstrap", "Node.js", "React Context"],
    description: "A web-based learning management portal providing students access to courses, study materials, assignments, and educational resources.",
    features: [
      "Interactive course browsing catalog",
      "Study material access & document downloads",
      "Assignment submission & resource hub",
      "React Context-based global state management",
      "Student dashboard with course overview"
    ],
    techDetails: {
      frontend: "React.js, Bootstrap",
      backend: "Node.js",
      stateManagement: "React Context"
    },
    liveUrl: "https://github.com/morishkumar",
    githubUrl: "https://github.com/morishkumar"
  },
  {
    id: "elearning-website",
    title: "E-Learning Website",
    shortDescription: "Responsive course-browsing platform with lazy loading",
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    description: "A responsive e-learning website that allows users to browse courses and discover content using client-side search and filtering.",
    features: [
      "Dynamic course catalog display",
      "Instant client-side search functionality",
      "Category filtering system",
      "Responsive design across mobile, tablet, and desktop",
      "Image optimization & lazy loading"
    ],
    techDetails: {
      frontend: "HTML5, CSS3, JavaScript",
      optimization: "Lazy Loading & Performance Optimization"
    },
    liveUrl: "https://github.com/morishkumar",
    githubUrl: "https://github.com/morishkumar"
  }
];

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lakshmi Narain College of Technology, Bhopal",
    year: "2026",
    details: "Specializing in advanced software engineering, full-stack architecture, cloud computing, database systems, and web security."
  },
  {
    degree: "Bachelor of Science in Computer Applications (B.Sc.)",
    institution: "Ganesh Lal Aggrawal College",
    year: "2023",
    details: "Foundational computer science coursework covering Java, C++, C, web design, database administration, and software logic."
  }
];

export const certifications = [
  {
    title: "Certificate of Excellence in Java",
    issuer: "Coding Ninjas",
    focus: "Java, Programming, Data Structures & Problem Solving"
  },
  {
    title: "HTML, CSS and JavaScript",
    issuer: "Coursera",
    focus: "Modern Web Standards, Responsive Layouts & Client Scripting"
  },
  {
    title: "Python Programming",
    issuer: "Udemy",
    focus: "Python Language Mechanics, OOP Concepts & Scripting"
  },
  {
    title: "C++ Programming",
    issuer: "Udemy",
    focus: "Object-Oriented Design, Memory Management & Logic"
  }
];

export const whyHireMe = [
  {
    title: "Full-Stack Expertise",
    description: "Hands-on exposure to both frontend and backend development using React.js, Node.js and Express.js."
  },
  {
    title: "Strong Programming Foundation",
    description: "Proficient in Java, Python, C++, C, Data Structures & Algorithms, and Object-Oriented Programming."
  },
  {
    title: "Database Administration",
    description: "Practical exposure to relational and NoSQL databases including MySQL, SQL, and MongoDB."
  },
  {
    title: "Problem Solving & Mentorship",
    description: "Experience teaching and mentoring students in programming logic, debugging, and DSA."
  },
  {
    title: "Continuous Learning",
    description: "Fast learner committed to mastering modern web development frameworks and production best practices."
  }
];

export const careerInterests = [
  "Software Development",
  "Web Development",
  "Full-Stack Development",
  "Backend Development",
  "Java Development",
  "Python Development"
];
