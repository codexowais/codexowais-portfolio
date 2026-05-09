"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const bootSequence = [
  "> system online...",
  "> initializing...",
  "> connecting...",
  "> connection established.",
  "> welcome back, coder.",
  "",
  "> loading CODEXOWAIS kernel v2.0...",
  "> CPU ██████████░░░ 78%",
  "> MEMORY █████████░░░ 65%",
  "> DISK █████░░░░░░░ 43%",
  "> NETWORK ███████████░ 91%",
  "",
  "> all systems operational.",
  "> ready to build the future.",
  "> _",
];

export default function HeroSection() {
  const [bootLines, setBootLines] = useState<string[]>([]);
  const [bootDone, setBootDone] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const indexRef = { current: 0 };
    setBootLines([]);
    setBootDone(false);
    const interval = setInterval(() => {
      if (indexRef.current < bootSequence.length) {
        const line = bootSequence[indexRef.current];
        setBootLines((prev) => [...prev, line]);
        indexRef.current++;
        if (terminalRef.current) {
          terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
      } else {
        setBootDone(true);
        clearInterval(interval);
      }
    }, 180);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — CODEXOWAIS portfolio introduction"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#05050A]" />

      {/* Animated grid floor */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(168,85,247,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(124,58,237,0.05) 50%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <span className="section-label inline-block px-3 py-1.5 border border-neon-purple/30 bg-neon-purple/5">
                // DEVELOPER PORTFOLIO
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-[var(--font-heading)] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider mb-6"
            >
              <span className="gradient-text-bright">CODE</span>
              <span className="text-neon-purple neon-text">X</span>
              <span className="gradient-text-bright">OWAIS</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="font-[var(--font-body)] text-base sm:text-lg md:text-xl text-muted max-w-lg mx-auto lg:mx-0 mb-4"
            >
              Building the future one project at a time.
            </motion.p>

            {/* Typing line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="font-[var(--font-mono)] text-xs sm:text-sm text-neon-purple/70 mb-10 flex items-center gap-2 justify-center lg:justify-start"
            >
              <span className="text-muted">$</span>
              <span className="overflow-hidden whitespace-nowrap border-r-2 border-neon-purple animate-[typing_3.5s_steps(40,end),blink-caret_0.75s_step-end_infinite]">
                npx codexowais --build-the-future
              </span>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <a href="#projects" className="btn-cyber btn-cyber-primary">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                </svg>
                View Projects
              </a>
              <a href="#contact" className="btn-cyber">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </a>
              <a
                href="https://github.com/codexowais"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber"
                aria-label="GitHub profile"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a
                href="https://x.com/codexowais"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cyber"
                aria-label="Twitter/X profile"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                Twitter/X
              </a>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="mt-12 flex gap-6 sm:gap-10 justify-center lg:justify-start"
            >
              {[
                { value: "15+", label: "Projects" },
                { value: "20+", label: "Technologies" },
                { value: "∞", label: "Ambition" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-[var(--font-heading)] text-xl sm:text-2xl font-bold text-neon-purple neon-text">
                    {stat.value}
                  </div>
                  <div className="font-[var(--font-mono)] text-[10px] text-muted tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="terminal-window neon-border max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500/80" />
                <div className="terminal-dot bg-yellow-500/80" />
                <div className="terminal-dot bg-green-500/80" />
                <span className="ml-2 font-[var(--font-mono)]">
                  TERMINAL — system_boot.sh
                </span>
              </div>
              <div
                ref={terminalRef}
                className="terminal-body h-[280px] sm:h-[320px] overflow-y-auto"
              >
                {bootLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`${
                      line.startsWith(">") ? "text-neon-purple-light" : "text-muted"
                    } ${
                      line.includes("█") ? "text-neon-purple" : ""
                    } ${
                      line.includes("operational") || line.includes("ready")
                        ? "text-green-400"
                        : ""
                    }`}
                  >
                    {line || "\u00A0"}
                  </motion.div>
                ))}
                {bootDone && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="text-neon-purple inline-block"
                  >
                    █
                  </motion.div>
                )}
              </div>
            </div>

            {/* Floating widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="hidden lg:flex mt-4 ml-auto max-w-[260px] items-center gap-3 glass p-3 rounded"
            >
              <div className="w-8 h-8 border border-neon-purple/30 flex items-center justify-center text-neon-purple text-xs">
                ⚡
              </div>
              <div>
                <div className="font-[var(--font-mono)] text-[10px] text-muted">
                  CURRENT STATUS
                </div>
                <div className="font-[var(--font-body)] text-xs text-neon-purple-light">
                  Building in public
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-[var(--font-pixel)] text-[8px] text-muted tracking-widest">
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-4 h-7 border border-neon-purple/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-1.5 bg-neon-purple rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
