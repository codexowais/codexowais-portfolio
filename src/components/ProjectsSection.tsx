"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { projects, categories } from "@/data/portfolio";
import type { Project } from "@/data/types";

function StatusBadge({ status }: { status: Project["status"] }) {
  const config = {
    live: { color: "text-green-400 border-green-500/30 bg-green-500/10", label: "LIVE" },
    "in-progress": { color: "text-yellow-400 border-yellow-500/30 bg-yellow-500/10", label: "IN PROGRESS" },
    archived: { color: "text-muted border-surface-border bg-surface/50", label: "ARCHIVED" },
    draft: { color: "text-muted border-surface-border bg-surface/50", label: "DRAFT" },
  };
  const c = config[status];
  return (
    <span className={`font-[var(--font-pixel)] text-[7px] tracking-widest px-2 py-1 border rounded ${c.color}`}>
      {c.label}
    </span>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className="cyber-card rounded-lg overflow-hidden group"
    >
      {/* Thumbnail placeholder */}
      <div className="h-40 sm:h-48 bg-surface relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/10 to-neon-blue/5 flex items-center justify-center">
          <div className="font-[var(--font-heading)] text-2xl sm:text-3xl text-neon-purple/20 tracking-widest group-hover:text-neon-purple/40 transition-colors duration-500">
            {"</>"}
          </div>
        </div>
        {/* Top overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <StatusBadge status={project.status} />
          {project.featured && (
            <span className="font-[var(--font-pixel)] text-[7px] text-neon-purple tracking-widest px-2 py-1 border border-neon-purple/30 bg-neon-purple/10 rounded">
              ★ FEATURED
            </span>
          )}
        </div>
        {/* Glow line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-purple/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <h3 className="font-[var(--font-heading)] text-base sm:text-lg tracking-wider mb-2 text-foreground group-hover:neon-text transition-all duration-300">
          {project.title}
        </h3>
        <p className="font-[var(--font-body)] text-sm text-muted leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.stack.map((tech) => (
            <span key={tech} className="tag text-[10px]">
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber text-[10px] py-2 px-3"
              aria-label={`Live demo of ${project.title}`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              LIVE
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cyber text-[10px] py-2 px-3"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              CODE
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filtered =
    activeCategory === "All"
      ? projects.filter((p) => p.visible)
      : projects.filter((p) => p.visible && p.category === activeCategory);

  return (
    <section
      id="projects"
      className="relative overflow-hidden"
      aria-label="Projects"
    >
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #A855F7, transparent)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="section-label block mb-3">// 02 — Projects</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            WHAT I&apos;VE BUILT<span className="text-neon-purple">.</span>
          </h2>
          <p className="font-[var(--font-body)] text-muted mt-4 max-w-xl">
            A selection of projects spanning AI, backend systems, cloud
            infrastructure, and experimental ideas.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-2 mb-10"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-[var(--font-mono)] text-xs tracking-wider px-4 py-2 border transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "border-neon-purple text-neon-purple bg-neon-purple/10 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                  : "border-surface-border text-muted hover:border-neon-purple/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <div className="font-[var(--font-mono)] text-muted text-sm">
              No projects found in this category.
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
