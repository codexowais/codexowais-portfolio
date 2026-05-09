export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  category: string;
  status: "live" | "in-progress" | "archived" | "draft";
  featured: boolean;
  visible: boolean;
  liveUrl: string;
  githubUrl: string;
  thumbnail: string;
  order: number;
}

export interface Skill {
  name: string;
  level: number;
  category: string;
}

export interface BuildLog {
  id: string;
  date: string;
  title: string;
  content: string;
  type: "update" | "milestone" | "learning" | "experiment" | "failure";
  tags: string[];
}
