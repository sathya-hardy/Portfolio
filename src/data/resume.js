export const personal = {
  name: "N C Sathya",
  phone: "930-333-2972",
  email: "sathya.hardy@gmail.com",
  location: "Charlotte, NC",
  linkedin: "https://www.linkedin.com/in/sathya-n-c-28574919a/",
  github: "https://github.com/sathya-hardy",
  resumePath: "/Sathya_N_C_Resume.pdf",
};

export const skills = {
  Languages: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "Bash"],
  Frameworks: ["React", "Node.js", "Django", "Flask", "Spring Boot", "PyTorch", "Pandas", "NumPy", "Scikit-learn", "LangChain", "LangGraph"],
  "Cloud & Infra": ["AWS (S3, Glue, Lambda, SageMaker)", "Azure", "OCI", "Docker", "Kubernetes", "Terraform", "Kafka", "Prometheus", "Databricks"],
  Databases: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "SQLite", "FAISS"],
  Tools: ["GitLab", "Git", "JIRA", "Power BI", "Tableau", "REST APIs", "GraphQL", "Microservices", "Claude", "Cursor", "Agile/Scrum"],
  Expertise: ["Machine Learning", "AI Agents", "Distributed Systems", "Backend Development", "Automation Pipelines", "CI/CD"],
};

export const experience = [
  {
    role: "Software Engineer",
    company: "Oracle Inc",
    dates: "Jul 2021 – Aug 2023",
    location: "Hyderabad, India",
    bullets: [
      "Engineered and deployed production-grade SaaS applications using Kubernetes and Docker for the Spectra platform, owning end-to-end feature delivery from API design to deployment architecture.",
      "Maintained CI/CD pipelines in GitLab, reducing deployment time by 30%; scripted infrastructure automation in Bash and built observability into distributed services through comprehensive test plans.",
      "Redesigned frontend using React and JavaScript with seamless backend API integration, enforcing clean service contracts and contributing to a 15% increase in customer satisfaction scores.",
      "Collaborated in Agile Scrum sprints to ship production-ready features at high velocity, balancing iteration speed with code quality and long-term architectural health.",
    ],
  },
  {
    role: "Data Scientist Intern",
    company: "Positive Integers",
    dates: "May 2020 – Jul 2020",
    location: "Chennai, India",
    bullets: [
      "Built a COVID-19 forecasting pipeline using the SIR-D framework with structured model outputs, improving prediction accuracy by 18% by integrating external transmission rate research from IIT Delhi.",
      "Developed a supervised learning lead prioritization system, increasing qualified lead generation by 15% and identifying the top 3 areas for model improvement.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Bounce Share",
    dates: "Nov 2019 – Jan 2020",
    location: "Bangalore, India",
    bullets: [
      "Built a real-time task prioritization system for mobile repair units using location data and predictive analytics, boosting technician efficiency by 35% through data-driven dispatching.",
      "Architected 15+ relational database schemas serving product, finance, and marketing teams, accelerating data processing speeds by 20% and improving cross-departmental reporting.",
    ],
  },
];

export const education = [
  {
    school: "Indiana University",
    degree: "Master of Science, Computer Science",
    gpa: "GPA: 3.9/4.0",
    dates: "Aug 2023 – May 2025",
    location: "Bloomington, IN, USA",
    logo: import.meta.env.BASE_URL + "logos/iu.svg",
  },
  {
    school: "Indian Institute of Technology – Madras",
    degree: "Bachelor of Technology, Mechanical Engineering",
    dates: "Aug 2017 – Jun 2021",
    location: "Chennai, India",
    logo: import.meta.env.BASE_URL + "logos/iitm.png",
  },
];

export const projects = [
  {
    title: "Spotify AI Music Recommender",
    tech: ["FastAPI", "LangGraph", "LangChain", "LLaMA 3.1", "FAISS", "React", "SQLite"],
    bullets: [
      "Built an agentic recommendation engine where a LangGraph ReAct agent (LLaMA 3.1 via Ollama) autonomously selects tools at runtime — FAISS vector search, Spotify Web API, or ReccoBeats audio features API — replacing hardcoded pipelines with dynamic tool calling and state management.",
      "Designed structured outputs and exception handling for reliable agent behavior across query types; shipped a FastAPI backend with SQLite persistence and a React 19 + Vite frontend with Tailwind CSS and Framer Motion.",
    ],
    github: "https://github.com/sathya-hardy/Spotify-Recommender",
  },
  {
    title: "Flask-Based Content Management Platform",
    tech: ["Flask", "Docker", "PostgreSQL", "REST APIs"],
    bullets: [
      "Built a secure multi-tenant web app with role-based access control, least-privilege authentication, and RESTful APIs to manage user and moderator workflows with strong tenant isolation.",
      "Containerized deployment using Docker with automated database initialization and role provisioning, reducing deployment time by 60% and ensuring reproducible production environments.",
    ],
    github: "https://github.com/sathya-hardy/MasterofJokes",
  },
  {
    title: "Stripe MRR Dashboard Pipeline",
    tech: ["Stripe API", "BigQuery", "FastAPI", "React", "Recharts", "Python"],
    bullets: [
      "Built a full-stack SaaS metrics pipeline — simulated 100 customers across 5 pricing tiers with 6 months of billing lifecycle events (upgrades, downgrades, churn, past-due) using Stripe test clocks, then ETL'd snapshots into BigQuery for MRR, ARPPU, and churn analysis.",
      "Shipped a FastAPI + React dashboard with real-time charts and automated test suites that cross-validate local snapshots against Stripe's live API for data integrity.",
    ],
    github: "https://github.com/sathya-hardy/Stripe-Dashboard",
  },
  {
    title: "AI Interviewer",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "Ollama", "Tailwind CSS", "Zustand"],
    bullets: [
      "Built a full-stack AI interview prep platform that generates 5 personalized technical questions from a parsed resume (PDF/DOCX) and target role, with progressive difficulty — powered by Llama 3 running locally via Ollama so all data stays on-device.",
      "Implemented real-time answer evaluation with scoring (0–10), detailed feedback, and actionable tips; added answer editing and re-submission flow with Zustand state management and a dark-themed React UI.",
    ],
    github: "https://github.com/sathya-hardy/AI-Interviewer",
  },
];
