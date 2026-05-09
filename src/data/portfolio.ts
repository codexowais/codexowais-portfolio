import { Project, BuildLog, Skill } from "./types";

export const projects: Project[] = [
  {
    id: "1",
    title: "NoteForge",
    description:
      "AI-powered lecture intelligence system that transforms YouTube lectures into structured, study-ready notes with quiz generation.",
    stack: ["Python", "FastAPI", "Ollama", "SQLite", "React"],
    category: "AI",
    status: "live",
    featured: true,
    visible: true,
    liveUrl: "#",
    githubUrl: "https://github.com/codexowais",
    thumbnail: "",
    order: 1,
  },
  {
    id: "2",
    title: "Jin AI Assistant",
    description:
      "Premium AI assistant dashboard with real-time chat, voice support, and a minimal dark-mode interface inspired by ChatGPT and Claude.",
    stack: ["Next.js", "TypeScript", "TailwindCSS", "WebSocket"],
    category: "Web Apps",
    status: "live",
    featured: true,
    visible: true,
    liveUrl: "#",
    githubUrl: "https://github.com/codexowais",
    thumbnail: "",
    order: 2,
  },
  {
    id: "3",
    title: "Cloud Nexus",
    description:
      "Scalable cloud infrastructure management platform with real-time monitoring, auto-scaling, and cost optimization dashboards.",
    stack: ["AWS", "Terraform", "Go", "PostgreSQL", "Grafana"],
    category: "Cloud",
    status: "in-progress",
    featured: false,
    visible: true,
    liveUrl: "",
    githubUrl: "https://github.com/codexowais",
    thumbnail: "",
    order: 3,
  },
  {
    id: "4",
    title: "Backend Forge",
    description:
      "High-performance API framework built for rapid backend development with built-in auth, rate-limiting, and database migrations.",
    stack: ["Node.js", "Express", "MongoDB", "Redis", "Docker"],
    category: "Backend",
    status: "live",
    featured: true,
    visible: true,
    liveUrl: "#",
    githubUrl: "https://github.com/codexowais",
    thumbnail: "",
    order: 4,
  },
  {
    id: "5",
    title: "Neural Canvas",
    description:
      "Experimental AI art generation tool using diffusion models with a real-time collaborative canvas interface.",
    stack: ["Python", "PyTorch", "Stable Diffusion", "WebSocket"],
    category: "Experimental",
    status: "archived",
    featured: false,
    visible: true,
    liveUrl: "",
    githubUrl: "https://github.com/codexowais",
    thumbnail: "",
    order: 5,
  },
  {
    id: "6",
    title: "DevPulse Analytics",
    description:
      "Developer productivity analytics platform that tracks coding sessions, pull requests, and team velocity metrics.",
    stack: ["React", "D3.js", "Node.js", "PostgreSQL"],
    category: "Web Apps",
    status: "live",
    featured: false,
    visible: true,
    liveUrl: "#",
    githubUrl: "https://github.com/codexowais",
    thumbnail: "",
    order: 6,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React / Next.js", level: 90, category: "Frontend" },
  { name: "TypeScript", level: 85, category: "Frontend" },
  { name: "TailwindCSS", level: 92, category: "Frontend" },
  { name: "Framer Motion", level: 78, category: "Frontend" },
  // Backend
  { name: "Node.js / Express", level: 88, category: "Backend" },
  { name: "Python / FastAPI", level: 85, category: "Backend" },
  { name: "Go", level: 60, category: "Backend" },
  { name: "REST / GraphQL APIs", level: 90, category: "Backend" },
  // AI/ML
  { name: "Machine Learning", level: 70, category: "AI/ML" },
  { name: "LLM Integration", level: 82, category: "AI/ML" },
  { name: "NLP / Text Processing", level: 75, category: "AI/ML" },
  { name: "PyTorch / TensorFlow", level: 65, category: "AI/ML" },
  // Cloud
  { name: "AWS", level: 80, category: "Cloud" },
  { name: "Docker / Containers", level: 85, category: "Cloud" },
  { name: "CI/CD Pipelines", level: 78, category: "Cloud" },
  { name: "Serverless", level: 72, category: "Cloud" },
  // DevOps
  { name: "Linux / Shell", level: 88, category: "DevOps" },
  { name: "Terraform", level: 65, category: "DevOps" },
  { name: "Kubernetes", level: 60, category: "DevOps" },
  { name: "Monitoring / Logging", level: 75, category: "DevOps" },
  // Databases
  { name: "PostgreSQL", level: 85, category: "Databases" },
  { name: "MongoDB", level: 82, category: "Databases" },
  { name: "Redis", level: 78, category: "Databases" },
  { name: "SQLite", level: 90, category: "Databases" },
];

export const buildLogs: BuildLog[] = [
  {
    id: "1",
    date: "2026-05-09",
    title: "Portfolio v2 Launched",
    content:
      "Rebuilt the entire portfolio from scratch with a cyberpunk aesthetic. Next.js 14, TailwindCSS, Framer Motion.",
    type: "milestone",
    tags: ["portfolio", "launch"],
  },
  {
    id: "2",
    date: "2026-05-07",
    title: "NoteForge Phase 3 Complete",
    content:
      "Finished PDF export, batch processing, quiz mode, and multi-language support. The system now handles 10+ languages.",
    type: "milestone",
    tags: ["noteforge", "ai"],
  },
  {
    id: "3",
    date: "2026-05-05",
    title: "Debugging YouTube Transcripts",
    content:
      "Spent 3 hours tracking down a deprecated API issue in youtube-transcript-api. The get_transcript method was removed in the latest version. Refactored to use list_transcripts().fetch().",
    type: "learning",
    tags: ["debugging", "python"],
  },
  {
    id: "4",
    date: "2026-05-03",
    title: "Exploring Go for Backend Services",
    content:
      "Started experimenting with Go for building high-performance microservices. The concurrency model is powerful — goroutines feel effortless compared to threads.",
    type: "experiment",
    tags: ["go", "backend"],
  },
  {
    id: "5",
    date: "2026-04-28",
    title: "Failed: Realtime Collaboration MVP",
    content:
      "Attempted to build a real-time collaborative code editor using CRDTs. Hit performance walls at 5+ users. Pausing to study operational transforms more deeply.",
    type: "failure",
    tags: ["crdt", "realtime"],
  },
  {
    id: "6",
    date: "2026-04-25",
    title: "Jin AI Dashboard Redesign",
    content:
      "Complete UI overhaul of the Jin assistant — from glassmorphism to a minimal, calm dark mode. Inspired by ChatGPT and Claude interfaces.",
    type: "update",
    tags: ["jin", "ui"],
  },
  {
    id: "7",
    date: "2026-04-20",
    title: "100 Days of Code — Day 47",
    content:
      "Built a CLI tool that auto-generates API documentation from code comments. Small tool, big time savings.",
    type: "update",
    tags: ["100daysofcode", "cli"],
  },
];

export const categories = ["All", "AI", "Backend", "Cloud", "Web Apps", "Experimental"] as const;

export const skillCategories = [
  "Frontend",
  "Backend",
  "AI/ML",
  "Cloud",
  "DevOps",
  "Databases",
] as const;
