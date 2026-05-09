"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Built", icon: "📦" },
  { value: "20+", label: "Technologies", icon: "⚡" },
  { value: "AI/Cloud", label: "Current Focus", icon: "🎯" },
];

const focusAreas = [
  { name: "AI & Machine Learning", icon: "🤖" },
  { name: "Backend Development", icon: "⚙️" },
  { name: "Cloud Engineering", icon: "☁️" },
  { name: "Startups", icon: "🚀" },
  { name: "Build in Public", icon: "📡" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative overflow-hidden"
      aria-label="About CODEXOWAIS"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-grid-pattern" aria-hidden="true" />
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, #A855F7, transparent)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="section-label block mb-3">// 01 — About</span>
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl">
            WHO AM I<span className="text-neon-purple">?</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Character & Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            {/* Developer character card */}
            <div className="relative glass rounded-lg p-8 neon-border">
              <div className="flex flex-col items-center text-center">
                {/* ASCII art avatar */}
                <div className="w-32 h-32 border-2 border-neon-purple/30 rounded-lg bg-surface/50 flex items-center justify-center mb-6 overflow-hidden">
                  <div className="font-[var(--font-mono)] text-neon-purple text-4xl">
                    {"<O/>"}
                  </div>
                </div>

                <div className="font-[var(--font-heading)] text-lg tracking-wider mb-1 neon-text">
                  CODEXOWAIS
                </div>
                <div className="font-[var(--font-pixel)] text-[8px] text-muted tracking-widest mb-4">
                  FULL-STACK DEVELOPER
                </div>

                {/* Terminal quote */}
                <div className="terminal-window w-full">
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500/80" />
                    <div className="terminal-dot bg-yellow-500/80" />
                    <div className="terminal-dot bg-green-500/80" />
                    <span className="ml-2">about.sh</span>
                  </div>
                  <div className="terminal-body text-left text-xs">
                    <div className="text-muted">
                      user@codexowais:~$ cat philosophy.txt
                    </div>
                    <div className="mt-2 text-neon-purple-light">
                      &quot;Code. Build. Impact.&quot;
                    </div>
                    <div className="text-muted mt-1">
                      &quot;The best time to start was yesterday.
                    </div>
                    <div className="text-muted">
                      The next best time is now.&quot;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -top-4 -right-4 glass p-3 rounded hidden md:block"
            >
              <span className="font-[var(--font-pixel)] text-[8px] text-neon-purple">
                02:17AM
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Text content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="space-y-5 font-[var(--font-body)] text-muted leading-relaxed">
              <p className="text-foreground text-lg">
                I&apos;m a developer who builds at the intersection of{" "}
                <span className="text-neon-purple neon-text font-semibold">
                  AI
                </span>
                ,{" "}
                <span className="text-neon-purple neon-text font-semibold">
                  backend systems
                </span>
                , and{" "}
                <span className="text-neon-purple neon-text font-semibold">
                  cloud infrastructure
                </span>
                .
              </p>
              <p>
                Every project starts with a problem worth solving and ends with
                production-ready code. I care deeply about clean architecture,
                developer experience, and shipping things that matter.
              </p>
              <p>
                Currently exploring the AI engineering space — building tools
                that leverage large language models, designing scalable backends,
                and sharing the journey publicly through my Build in Public
                initiative.
              </p>
              <p>
                When I&apos;m not coding, I&apos;m probably reading about system
                design, experimenting with new frameworks, or drinking way too
                much coffee at 2AM.
              </p>
            </div>

            {/* Focus areas */}
            <div className="mt-8">
              <div className="font-[var(--font-pixel)] text-[8px] text-neon-purple tracking-widest mb-4">
                FOCUS AREAS
              </div>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <span
                    key={area.name}
                    className="tag flex items-center gap-1.5 py-1.5 px-3"
                  >
                    <span aria-hidden="true">{area.icon}</span>
                    {area.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.15 }}
                  className="cyber-card rounded-lg p-4 text-center"
                >
                  <div className="text-xl mb-1" aria-hidden="true">
                    {stat.icon}
                  </div>
                  <div className="font-[var(--font-heading)] text-lg sm:text-xl font-bold text-neon-purple neon-text">
                    {stat.value}
                  </div>
                  <div className="font-[var(--font-mono)] text-[9px] text-muted mt-1 tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
