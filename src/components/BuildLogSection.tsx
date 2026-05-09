"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { buildLogs } from "@/data/portfolio";
import type { BuildLog } from "@/data/types";

function getTypeConfig(type: BuildLog["type"]) {
  const map = {
    milestone: { color: "text-green-400", border: "border-green-500/30", icon: "🏆", label: "MILESTONE" },
    update: { color: "text-neon-purple-light", border: "border-neon-purple/30", icon: "📡", label: "UPDATE" },
    learning: { color: "text-cyan-400", border: "border-cyan-500/30", icon: "💡", label: "LEARNING" },
    experiment: { color: "text-yellow-400", border: "border-yellow-500/30", icon: "🧪", label: "EXPERIMENT" },
    failure: { color: "text-red-400", border: "border-red-500/30", icon: "❌", label: "FAILURE" },
  };
  return map[type];
}

function LogEntry({ log, index, isVisible }: { log: BuildLog; index: number; isVisible: boolean }) {
  const config = getTypeConfig(log.type);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={isVisible ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative pl-8 sm:pl-12 pb-8 last:pb-0 group"
    >
      {/* Timeline line */}
      <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-0 w-px bg-surface-border group-last:hidden" aria-hidden="true" />

      {/* Timeline dot */}
      <div className={`absolute left-0 sm:left-2 top-1.5 w-6 h-6 rounded-full border-2 ${config.border} bg-background flex items-center justify-center`}>
        <div className={`w-2 h-2 rounded-full ${config.color.replace("text-", "bg-")} shadow-[0_0_8px_currentColor]`} />
      </div>

      {/* Content */}
      <div className="glass rounded-lg p-4 sm:p-5 hover:border-neon-purple/30 transition-all duration-300">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-2">
          <span className="font-[var(--font-mono)] text-[10px] text-neon-purple">
            {log.date}
          </span>
          <span className={`font-[var(--font-pixel)] text-[7px] tracking-widest px-2 py-0.5 border rounded ${config.border} ${config.color}`}>
            {config.icon} {config.label}
          </span>
        </div>

        <h3 className="font-[var(--font-heading)] text-sm tracking-wider text-foreground mb-2">
          {log.title}
        </h3>
        <p className="font-[var(--font-body)] text-sm text-muted leading-relaxed">
          {log.content}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {log.tags.map((tag) => (
            <span key={tag} className="tag text-[9px]">
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function BuildLogSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="build-log"
      className="relative overflow-hidden"
      aria-label="Build in Public Log"
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
          <span className="section-label block mb-3">// 04 — Build Log</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            BUILD IN PUBLIC<span className="text-neon-purple">.</span>
          </h2>
          <p className="font-[var(--font-body)] text-muted mt-4 max-w-xl">
            Daily updates, learnings, experiments, failures, and milestones — the raw developer journey.
          </p>
        </motion.div>

        {/* Terminal header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex items-center gap-3 mb-8 glass p-3 rounded"
        >
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-500/80" />
            <div className="w-2 h-2 rounded-full bg-green-500/80" />
          </div>
          <span className="font-[var(--font-mono)] text-[10px] text-muted">
            user@codexowais:~$ cat build_log.md
          </span>
          <div className="flex-1" />
          <span className="font-[var(--font-mono)] text-[10px] text-neon-purple/50">
            {buildLogs.length} entries
          </span>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {buildLogs.map((log, i) => (
            <LogEntry key={log.id} log={log} index={i} isVisible={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
}
