export interface StudentProfile {
  name: string;
  avatar: string;
  college: string;
  branch: string;
  year: number; // 1, 2, 3, 4
  semester: number; // 1-8
  targetRole: string;
  targetCompanies: string[];
  readinessScore: number; // percentage
  activeStreak: number; // days
  dailyTargetMinutes: number;
  completedTasksCount: number;
  totalTasksCount: number;
  githubConnected: boolean;
  leetcodeConnected: boolean;
  portfolioUrl: string;
}

export interface Task {
  id: string;
  title: string;
  durationMinutes: number;
  category: 'core' | 'dsa' | 'project' | 'portfolio' | 'readiness';
  status: 'pending' | 'in_progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  description: string;
  milestoneTitle: string;
  dateScheduled?: string;
  points: number;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming' | 'Frameworks' | 'Core CS' | 'Data & ML' | 'DevOps' | 'Soft Skills';
  level: 'Strong' | 'Intermediate' | 'Beginner' | 'Not Started';
  percentage: number;
  targetPercentage: number;
  isPriorityGap: boolean;
  marketDemand: 'Very High' | 'High' | 'Medium';
}

export interface Milestone {
  id: string;
  year: number;
  semester: number;
  title: string;
  phase: string;
  status: 'completed' | 'in_progress' | 'upcoming';
  progressPercentage: number;
  tasksCount: number;
  completedTasks: number;
  deliverable: string;
  keySkills: string[];
}

export interface ProjectProof {
  id: string;
  title: string;
  tagline: string;
  techStack: string[];
  status: 'completed' | 'in_progress' | 'planned';
  skillsDemonstrated: string[];
  githubUrl: string;
  liveDemoUrl: string;
  starsCount?: number;
  verifiedMetric: string;
  architectureSummary: string;
  highlights: string[];
}

export interface ResumeSectionItem {
  institutionOrCompany: string;
  roleOrDegree: string;
  period: string;
  location?: string;
  bulletPoints: string[];
}

export interface ResumeData {
  fullName: string;
  title: string;
  email: string;
  github: string;
  linkedin: string;
  portfolio: string;
  summary: string;
  education: ResumeSectionItem[];
  experience: ResumeSectionItem[];
  projects: {
    name: string;
    tech: string;
    bullets: string[];
    link: string;
  }[];
  skillsGrouped: {
    category: string;
    items: string[];
  }[];
  atsScore: number;
  verifiedBadgesCount: number;
}

export interface CopilotChatMessage {
  id: string;
  sender: 'copilot' | 'user';
  text: string;
  timestamp: string;
  actionSuggestions?: {
    label: string;
    actionKey: string;
  }[];
  interactivePayload?: {
    type: 'task_assigned' | 'skill_gap_alert' | 'milestone_completed' | 'resume_updated';
    title: string;
    details: string;
    meta?: string;
  };
}

export interface YearStage {
  year: number;
  title: string;
  focusTagline: string;
  description: string;
  primaryPillars: {
    pillar: string;
    action: string;
  }[];
  targetMilestone: string;
  studentMindsetTrap: string;
  copilotIntervention: string;
}

// Default initial state
export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  name: "Aman Sharma",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
  college: "Indian Institute of Technology / NIT Benchmark",
  branch: "Computer Science & Engineering",
  year: 2,
  semester: 4,
  targetRole: "AI / ML Engineer",
  targetCompanies: ["Google DeepMind", "Microsoft Research", "NVIDIA", "CRED"],
  readinessScore: 42,
  activeStreak: 14,
  dailyTargetMinutes: 60,
  completedTasksCount: 38,
  totalTasksCount: 82,
  githubConnected: true,
  leetcodeConnected: true,
  portfolioUrl: "careeros.me/aman-sharma"
};

export const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Implement Vectorized Matrix Operations in NumPy",
    durationMinutes: 40,
    category: "project",
    status: "in_progress",
    priority: "high",
    description: "Write vectorized forward-propagation computation for 2-layer perceptron without for-loops.",
    milestoneTitle: "Data Analysis & ML Foundations",
    points: 80
  },
  {
    id: "task-2",
    title: "LeetCode Daily: Two Pointer / Sliding Window",
    durationMinutes: 30,
    category: "dsa",
    status: "pending",
    priority: "medium",
    description: "Solve problem #424 'Longest Repeating Character Replacement' with O(N) complexity.",
    milestoneTitle: "Core Data Structures & Algorithms",
    points: 50
  },
  {
    id: "task-3",
    title: "Set up Docker Container for FastApi Study Assistant",
    durationMinutes: 25,
    category: "portfolio",
    status: "pending",
    priority: "medium",
    description: "Containerize Python backend with multi-stage build and health check endpoint.",
    milestoneTitle: "Proof of Work: AI Study Assistant",
    points: 60
  },
  {
    id: "task-4",
    title: "Review SQL Indexing & Query Explain Plans",
    durationMinutes: 20,
    category: "core",
    status: "completed",
    priority: "low",
    description: "Analyze B-Tree vs Hash index lookup latency on a 100k row dataset.",
    milestoneTitle: "Database Engineering & Query Optimization",
    points: 40
  }
];

export const INITIAL_SKILLS: SkillItem[] = [
  {
    id: "s-1",
    name: "Python & Scientific Stack",
    category: "Programming",
    level: "Strong",
    percentage: 76,
    targetPercentage: 90,
    isPriorityGap: false,
    marketDemand: "Very High"
  },
  {
    id: "s-2",
    name: "Git & Collaborative GitHub",
    category: "DevOps",
    level: "Intermediate",
    percentage: 58,
    targetPercentage: 85,
    isPriorityGap: false,
    marketDemand: "High"
  },
  {
    id: "s-3",
    name: "SQL & Relational Architecture",
    category: "Core CS",
    level: "Beginner",
    percentage: 38,
    targetPercentage: 80,
    isPriorityGap: true,
    marketDemand: "Very High"
  },
  {
    id: "s-4",
    name: "Machine Learning Foundations",
    category: "Data & ML",
    level: "Beginner",
    percentage: 24,
    targetPercentage: 85,
    isPriorityGap: true,
    marketDemand: "Very High"
  },
  {
    id: "s-5",
    name: "Data Structures & Algorithms",
    category: "Core CS",
    level: "Intermediate",
    percentage: 62,
    targetPercentage: 90,
    isPriorityGap: false,
    marketDemand: "Very High"
  },
  {
    id: "s-6",
    name: "Docker & Containerization",
    category: "DevOps",
    level: "Beginner",
    percentage: 20,
    targetPercentage: 75,
    isPriorityGap: true,
    marketDemand: "High"
  },
  {
    id: "s-7",
    name: "MLOps & Model Deployment",
    category: "Data & ML",
    level: "Not Started",
    percentage: 5,
    targetPercentage: 70,
    isPriorityGap: true,
    marketDemand: "Very High"
  }
];

export const INITIAL_MILESTONES: Milestone[] = [
  {
    id: "m-1",
    year: 1,
    semester: 1,
    title: "Engineering Computational Foundations",
    phase: "Year 1 / Semester 1",
    status: "completed",
    progressPercentage: 100,
    tasksCount: 16,
    completedTasks: 16,
    deliverable: "Terminal CLI tools & Basic Algorithms in C/Python",
    keySkills: ["C", "Python basics", "Logic Building", "Command Line"]
  },
  {
    id: "m-2",
    year: 1,
    semester: 2,
    title: "Git, Version Control & Web Foundations",
    phase: "Year 1 / Semester 2",
    status: "completed",
    progressPercentage: 100,
    tasksCount: 18,
    completedTasks: 18,
    deliverable: "First hosted portfolio & collaborative GitHub repos",
    keySkills: ["Git/GitHub", "HTML/CSS", "Data Types", "Linux"]
  },
  {
    id: "m-3",
    year: 2,
    semester: 3,
    title: "Data Structures, OOP & Relational SQL",
    phase: "Year 2 / Semester 3",
    status: "completed",
    progressPercentage: 100,
    tasksCount: 22,
    completedTasks: 22,
    deliverable: "Relational database schema & 50+ DSA problems solved",
    keySkills: ["OOP", "Arrays & Trees", "PostgreSQL", "API Design"]
  },
  {
    id: "m-4",
    year: 2,
    semester: 4,
    title: "Data Analysis & ML Foundations",
    phase: "Year 2 / Semester 4 (Current)",
    status: "in_progress",
    progressPercentage: 45,
    tasksCount: 24,
    completedTasks: 11,
    deliverable: "End-to-End Predictive Model with FastAPI backend",
    keySkills: ["NumPy", "Pandas", "Scikit-Learn", "FastAPI"]
  },
  {
    id: "m-5",
    year: 3,
    semester: 5,
    title: "Deep Learning & System Design Foundations",
    phase: "Year 3 / Semester 5",
    status: "upcoming",
    progressPercentage: 0,
    tasksCount: 26,
    completedTasks: 0,
    deliverable: "Production neural network inference pipeline & Microservices",
    keySkills: ["PyTorch", "System Design", "Docker", "REST & gRPC"]
  },
  {
    id: "m-6",
    year: 3,
    semester: 6,
    title: "Summer Internship Preparation & MLOps",
    phase: "Year 3 / Semester 6",
    status: "upcoming",
    progressPercentage: 0,
    tasksCount: 20,
    completedTasks: 0,
    deliverable: "Verified 2nd-round tech interview readiness & Live open-source PR",
    keySkills: ["MLflow", "GitHub Actions", "Mock Interviews", "DSA Advance"]
  },
  {
    id: "m-7",
    year: 4,
    semester: 7,
    title: "Campus Placements & Final Year Capstone",
    phase: "Year 4 / Semester 7",
    status: "upcoming",
    progressPercentage: 0,
    tasksCount: 18,
    completedTasks: 0,
    deliverable: "Dual tier-1 job offers & Published technical project thesis",
    keySkills: ["Behavioral Tech", "Negotiation", "Capstone Architecture"]
  },
  {
    id: "m-8",
    year: 4,
    semester: 8,
    title: "Career Transition & Industry Onboarding",
    phase: "Year 4 / Semester 8",
    status: "upcoming",
    progressPercentage: 0,
    tasksCount: 12,
    completedTasks: 0,
    deliverable: "Transition from college coder to high-output engineer",
    keySkills: ["Production Codebases", "Sprint Planning", "Career Ladders"]
  }
];

export const INITIAL_PROJECTS: ProjectProof[] = [
  {
    id: "p-1",
    title: "AI Study Assistant",
    tagline: "Context-aware query engine over lecture notes and slide decks",
    techStack: ["Python", "FastAPI", "OpenAI API", "ChromaDB"],
    status: "completed",
    skillsDemonstrated: ["RAG Architecture", "Vector Embeddings", "Async API Handling"],
    githubUrl: "https://github.com/aman-sharma/ai-study-assistant",
    liveDemoUrl: "https://study-assistant.demo.careeros.me",
    starsCount: 34,
    verifiedMetric: "Sub-120ms retrieval over 500+ lecture PDF slides",
    architectureSummary: "Chunking pipeline → OpenAI text-embedding-3-small → Local vector store → FastAPI streaming response",
    highlights: [
      "Custom semantic caching layer reducing LLM API token consumption by 48%",
      "Engineered automated evaluation test harness checking retrieval recall @ 5",
      "Deployed on containerized Cloud Run instance with automated GitHub Actions CI"
    ]
  },
  {
    id: "p-2",
    title: "Student Performance Predictor",
    tagline: "Machine learning regression pipeline detecting early academic distress",
    techStack: ["Python", "Pandas", "Scikit-Learn", "Streamlit"],
    status: "completed",
    skillsDemonstrated: ["Exploratory Data Analysis", "Feature Engineering", "Model Evaluation"],
    githubUrl: "https://github.com/aman-sharma/student-performance-predictor",
    liveDemoUrl: "https://predictor.demo.careeros.me",
    starsCount: 19,
    verifiedMetric: "91.4% R² test accuracy with zero target data leakage",
    architectureSummary: "Raw CSV pipeline → Imputation & StandardScaler → XGBoost Regression → Interactive Streamlit UI",
    highlights: [
      "Cleaned messy multi-source synthetic academic attendance & lab score datasets",
      "Benchmarked Ridge, Random Forest and Gradient Boosted Regressors with cross-validation",
      "Engineered SHAP explainability charts to pinpoint primary performance drivers"
    ]
  },
  {
    id: "p-3",
    title: "Cloud Deployment Dashboard",
    tagline: "Lightweight containerized microservice orchestrator with live metrics",
    techStack: ["Docker", "AWS ECS", "GitHub Actions", "Node.js"],
    status: "in_progress",
    skillsDemonstrated: ["Containerization", "CI/CD Pipelines", "Cloud Observability"],
    githubUrl: "https://github.com/aman-sharma/cloud-deploy-dashboard",
    liveDemoUrl: "https://deploy-hub.demo.careeros.me",
    starsCount: 12,
    verifiedMetric: "Automated zero-downtime rolling deploys in <90 seconds",
    architectureSummary: "Multi-stage Dockerfile → GitHub Actions build/push → AWS ECR → ECS Fargate task runner",
    highlights: [
      "Multi-stage Docker image reduction from 840MB to 78MB",
      "Configured branch-protection and automated lint/test matrix checks",
      "Integrated Prometheus metrics exporter for latency tracking"
    ]
  }
];

export const INITIAL_RESUME_DATA: ResumeData = {
  fullName: "Aman Sharma",
  title: "Aspiring AI / Machine Learning Software Engineer",
  email: "aman.sharma@college.edu",
  github: "github.com/aman-sharma",
  linkedin: "linkedin.com/in/aman-sharma-tech",
  portfolio: "careeros.me/aman-sharma",
  summary: "Second-year Computer Science undergraduate with hands-on expertise in Python, scientific data modeling, and containerized backend architectures. Track record of building production-ready proof-of-work projects with measurable performance outcomes.",
  education: [
    {
      institutionOrCompany: "Apex Institute of Technology",
      roleOrDegree: "B.Tech in Computer Science & Engineering",
      period: "2024 — 2028 (Expected)",
      location: "Bengaluru, India",
      bulletPoints: [
        "Current CGPA: 8.82 / 10.0 · Core subjects: Data Structures & Algorithms, Discrete Math, DBMS",
        "Lead Technical Member: ACM Student Chapter & Developer Student Club"
      ]
    }
  ],
  experience: [
    {
      institutionOrCompany: "Open Source Collective",
      roleOrDegree: "Student Contributor · ML Data Tooling",
      period: "Dec 2025 — Present",
      location: "Remote",
      bulletPoints: [
        "Contributed 4 merged pull requests fixing data preprocessing memory leaks in Python tooling",
        "Refactored unit tests increasing integration coverage from 68% to 84%"
      ]
    }
  ],
  projects: [
    {
      name: "AI Study Assistant",
      tech: "Python, FastAPI, OpenAI Embeddings, ChromaDB",
      link: "github.com/aman-sharma/ai-study-assistant",
      bullets: [
        "Architected semantic retrieval pipeline delivering sub-120ms queries over 500+ technical lecture slides",
        "Implemented custom token-reduction caching layer cutting downstream inference costs by 48%"
      ]
    },
    {
      name: "Student Performance Predictor",
      tech: "Python, Scikit-Learn, Pandas, Streamlit",
      link: "github.com/aman-sharma/student-performance-predictor",
      bullets: [
        "Trained and cross-validated ensemble regression model achieving 91.4% R² test accuracy",
        "Deployed interactive feature attribution analysis using SHAP values for academic advisor dashboards"
      ]
    }
  ],
  skillsGrouped: [
    {
      category: "Languages & Frameworks",
      items: ["Python", "C++", "FastAPI", "SQL", "HTML/CSS", "JavaScript"]
    },
    {
      category: "Libraries & ML Tools",
      items: ["NumPy", "Pandas", "Scikit-Learn", "Matplotlib", "ChromaDB"]
    },
    {
      category: "DevOps & Tooling",
      items: ["Git", "GitHub Actions", "Docker", "Linux Shell", "PostgreSQL", "AWS Basics"]
    }
  ],
  atsScore: 89,
  verifiedBadgesCount: 6
};

export const INITIAL_COPILOT_MESSAGES: CopilotChatMessage[] = [
  {
    id: "msg-1",
    sender: "copilot",
    text: "Good morning, Aman. You're aiming for an AI/ML role at top tech firms. Python fundamentals are locked in at 76%, but SQL and Vectorized Operations need focus this week.",
    timestamp: "08:15 AM",
    actionSuggestions: [
      { label: "View Today's Priority Task", actionKey: "show_task" },
      { label: "Run Skill Gap Audit", actionKey: "show_skills" }
    ],
    interactivePayload: {
      type: "task_assigned",
      title: "Today's Target: Vectorized Matrix Ops",
      details: "40 min focused sprint · Essential for neural network forward-pass implementations",
      meta: "Milestone: Data Analysis & ML Foundations"
    }
  },
  {
    id: "msg-2",
    sender: "user",
    text: "How does completing this task help my placement readiness for companies like NVIDIA or Google?",
    timestamp: "08:18 AM"
  },
  {
    id: "msg-3",
    sender: "copilot",
    text: "Top AI teams test fundamental understanding of tensor manipulation without heavy abstractions like PyTorch first. Demonstrating vectorized implementations proves you comprehend memory layouts, cache locality, and matrix broadcast rules rather than just calling .fit(). I'll automatically sync this to your resume under Core Competencies.",
    timestamp: "08:19 AM",
    actionSuggestions: [
      { label: "Start 40m Timer", actionKey: "start_timer" },
      { label: "Preview Resume Sync", actionKey: "show_resume" }
    ]
  }
];

export const FOUR_YEAR_JOURNEY_STAGES: YearStage[] = [
  {
    year: 1,
    title: "Foundation & Exploration",
    focusTagline: "Semester 1 & 2 · Build computational grit and find your natural domain fit.",
    description: "Most students lose year one to campus adjustment or unstructured tutorial hell. CareerOS establishes command over foundational programming, Git workflows, command-line efficiency, and lightweight proof projects.",
    primaryPillars: [
      { pillar: "Syntax to Logic", action: "Transition from textbook theory to solving real problems in C/C++ or Python." },
      { pillar: "Git from Day 1", action: "Every single assignment committed with clean commit hygiene to a public GitHub profile." },
      { pillar: "Domain Exploration", action: "Systematic 4-week taster modules across Web, Systems, Mobile, and Machine Learning." }
    ],
    targetMilestone: "First working terminal CLI application + Live developer portfolio hosted on personal domain.",
    studentMindsetTrap: "Placements are 3 years away, I can relax and catch up later.",
    copilotIntervention: "Daily 30-minute high-leverage micro-tasks so momentum compounds with zero burnout."
  },
  {
    year: 2,
    title: "Skills & Proof of Work",
    focusTagline: "Semester 3 & 4 · Convert syntax knowledge into deployable, verifiable systems.",
    description: "Move beyond toy code. Build substantive full-stack or data applications, master relational database schemas, and begin structured Data Structures & Algorithms patterns.",
    primaryPillars: [
      { pillar: "DSA Pattern Mastery", action: "Solve by pattern (Two Pointers, Sliding Window, DFS/BFS, Dynamic Programming) not random problem grinding." },
      { pillar: "Production-Grade Projects", action: "Build apps with databases, tests, containerization, and real users instead of cloned to-do lists." },
      { pillar: "Hackathons & Open Source", action: "Target first college hackathon win and submit first verified pull request to open-source libraries." }
    ],
    targetMilestone: "2 production-ready projects with live demos + 100+ curated DSA patterns conquered.",
    studentMindsetTrap: "Following endless video tutorials without building anything original.",
    copilotIntervention: "Auto-detects tutorial stalling and assigns unguided project challenges with architecture scaffolding."
  },
  {
    year: 3,
    title: "Internships & Placement Prep",
    focusTagline: "Semester 5 & 6 · Peak technical interview readiness, system design, and competitive edge.",
    description: "The pivotal year for off-campus summer internships and early on-campus recruitment shortlists. CareerOS shifts into interview simulation mode, resume hardening, and advanced system design.",
    primaryPillars: [
      { pillar: "High-Frequency DSA Speed", action: "Timed 45-minute coding rounds simulating LeetCode medium/hard campus test platforms." },
      { pillar: "System Design & Architecture", action: "Learn caching, load balancing, relational indexing, and API rate-limiting fundamentals." },
      { pillar: "Targeted Cold Outreach & Referrals", action: "AI-generated portfolio summaries tailored to engineering managers and alumni networks." }
    ],
    targetMilestone: "Tier-1 summer tech internship offer secured + Verified ATS-proof resume with 90+ score.",
    studentMindsetTrap: "Applying to 200 jobs with a generic 2-page PDF resume and hearing nothing back.",
    copilotIntervention: "Dynamic resume generation matched specifically to job role criteria and proof-of-work links."
  },
  {
    year: 4,
    title: "Career Launch & Negotiation",
    focusTagline: "Semester 7 & 8 · Converting offers, maximizing compensation, and transitioning to high-impact engineer.",
    description: "Lock in primary dream placement offers, negotiate multi-offer packages, finalize graduation capstone projects, and prepare for day-one performance in production engineering teams.",
    primaryPillars: [
      { pillar: "Mock Interview Simulations", action: "Rigorous technical deep-dives on every line of your project code and resume claims." },
      { pillar: "Offer Negotiation", action: "Benchmark compensation bands across Indian and global tech markets to counter-offer confidently." },
      { pillar: "Senior Capstone Delivery", action: "Deploy an ambitious final year engineering project with technical thesis and peer review." }
    ],
    targetMilestone: "Top-tier full-time software engineering offer + Seamless transition into high-growth tech career.",
    studentMindsetTrap: "Accepting the very first low-ball campus offer out of fear and stopping technical growth.",
    copilotIntervention: "Compensatory benchmark analysis and customized interview refresher playbooks."
  }
];

export const CAREER_GOALS_OPTIONS = [
  {
    id: "ai_ml",
    title: "AI / Machine Learning Engineer",
    focus: "PyTorch, Vector Databases, MLOps, LLMs & Neural Architectures",
    medianPackage: "₹18 — 45 LPA",
    targetSkills: ["Python", "FastAPI", "NumPy & Pandas", "PyTorch", "Docker", "SQL", "MLOps"]
  },
  {
    id: "full_stack",
    title: "Full-Stack Software Engineer",
    focus: "React, Next.js, Node.js/Go, Distributed Systems, PostgreSQL & AWS",
    medianPackage: "₹14 — 38 LPA",
    targetSkills: ["TypeScript", "React", "Node.js", "PostgreSQL", "Docker", "Redis", "System Design"]
  },
  {
    id: "cloud_devops",
    title: "Cloud & DevOps Architect",
    focus: "Kubernetes, Terraform, CI/CD, AWS/GCP, SRE Observability & Linux",
    medianPackage: "₹16 — 42 LPA",
    targetSkills: ["Linux", "Docker", "Kubernetes", "AWS", "Terraform", "GitHub Actions", "Go/Python"]
  },
  {
    id: "data_science",
    title: "Data Scientist & Analytics Engineer",
    focus: "Advanced Statistics, Big Data Pipelines, Snowflake, dbt & Business Insights",
    medianPackage: "₹13 — 32 LPA",
    targetSkills: ["Python", "Advanced SQL", "Spark", "Data Modeling", "Tableau", "Statistics"]
  },
  {
    id: "systems_embedded",
    title: "Systems & Embedded Software Engineer",
    focus: "C/C++, Real-Time OS, Linux Kernel, Microcontrollers & Memory Safety",
    medianPackage: "₹15 — 36 LPA",
    targetSkills: ["C", "Modern C++", "RTOS", "Linux Internals", "Computer Architecture", "GDB"]
  }
];

export const BRANCH_OPTIONS = [
  "Computer Science & Engineering",
  "AI & Data Science",
  "Information Technology",
  "Electronics & Communication (ECE)",
  "Electrical & Electronics (EEE)",
  "Mechanical & Mechatronics"
];
