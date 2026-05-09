"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skills, skillCategories } from "@/data/portfolio";

function SkillBar({
  name,
  level,
  delay,
  isVisible,
}: {
  name: string;
  level: number;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-[var(--font-body)] text-sm text-foreground group-hover:neon-text transition-all duration-300">
          {name}
        </span>
        <span className="font-[var(--font-mono)] text-[10px] text-neon-purple">
          {level}%
        </span>
      </div>
      <div className="skill-bar-track">
        <motion.div
          className="skill-bar-fill"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay, duration: 1.2, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState<string>("Frontend");

  const filteredSkills = skills.filter((s) => s.category === activeTab);

  return (
    <section
      id="skills"
      className="relative overflow-hidden"
      aria-label="Skills"
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
          <span className="section-label block mb-3">// 03 — Skills</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            TECH ARSENAL<span className="text-neon-purple">.</span>
          </h2>
          <p className="font-[var(--font-body)] text-muted mt-4 max-w-xl">
            Technologies and tools I work with — constantly expanding the stack.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
          {/* Category tabs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0" role="tablist" aria-label="Skill categories">
              {skillCategories.map((cat) => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeTab === cat}
                  onClick={() => setActiveTab(cat)}
                  className={`flex items-center gap-3 px-4 py-3 text-left font-[var(--font-mono)] text-xs tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeTab === cat
                      ? "text-neon-purple bg-neon-purple/10 border-l-2 border-neon-purple shadow-[inset_0_0_20px_rgba(168,85,247,0.05)]"
                      : "text-muted border-l-2 border-transparent hover:text-foreground hover:border-neon-purple/30"
                  }`}
                >
                  <span className="text-neon-purple/50">{">"}</span>
                  {cat}
                </button>
              ))}
            </div>

            {/* HUD element */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="hidden lg:block mt-8 glass p-4 rounded"
            >
              <div className="font-[var(--font-pixel)] text-[8px] text-neon-purple tracking-widest mb-2">
                SYSTEM STATUS
              </div>
              <div className="space-y-1.5">
                {[
                  { label: "CPU", width: 78 },
                  { label: "MEM", width: 65 },
                  { label: "NET", width: 91 },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <span className="font-[var(--font-mono)] text-[9px] text-muted w-8">
                      {item.label}
                    </span>
                    <div className="flex-1 h-1 bg-surface-border rounded overflow-hidden">
                      <div
                        className="h-full bg-neon-purple/60 rounded"
                        style={{ width: `${item.width}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Skills panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="glass rounded-lg p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
              <h3 className="font-[var(--font-heading)] text-sm tracking-widest text-foreground">
                {activeTab.toUpperCase()}
              </h3>
              <div className="flex-1 h-px bg-gradient-to-r from-neon-purple/20 to-transparent" />
            </div>

            <div className="space-y-6">
              {filteredSkills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.1}
                  isVisible={isInView}
                />
              ))}
            </div>

            {/* Bottom bar */}
            <div className="mt-8 pt-4 border-t border-surface-border flex items-center justify-between">
              <span className="font-[var(--font-mono)] text-[10px] text-muted">
                {filteredSkills.length} skills loaded
              </span>
              <span className="font-[var(--font-pixel)] text-[7px] text-neon-purple/50 tracking-widest">
                ALWAYS LEARNING
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
