"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer
      className="relative border-t border-surface-border bg-[#05050A]"
      role="contentinfo"
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, #A855F7, transparent)" }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-neon-purple/40 flex items-center justify-center text-neon-purple font-[var(--font-heading)] text-xs font-bold">
              {"</>"}
            </div>
            <div>
              <div className="font-[var(--font-heading)] text-sm tracking-[0.2em] font-bold neon-text">
                CODEXOWAIS
              </div>
              <div className="font-[var(--font-pixel)] text-[7px] text-muted tracking-widest mt-0.5">
                BUILD • LEARN • GROW
              </div>
            </div>
          </div>

          {/* Center: animated cursor */}
          <motion.div
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
            className="font-[var(--font-mono)] text-neon-purple text-sm hidden sm:block"
            aria-hidden="true"
          >
            █
          </motion.div>

          {/* Right */}
          <div className="text-center sm:text-right">
            <div className="font-[var(--font-mono)] text-xs text-muted">
              © {new Date().getFullYear()} CODEXOWAIS
            </div>
            <div className="font-[var(--font-pixel)] text-[7px] text-neon-purple/40 tracking-widest mt-1">
              CRAFTED AT 2:17AM
            </div>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="mt-8 neon-line" aria-hidden="true" />
        <div className="mt-4 flex justify-center">
          <span className="font-[var(--font-pixel)] text-[6px] text-muted/30 tracking-[0.3em]">
            CODEXOWAIS // SYSTEM v2.0 // ALL SYSTEMS ONLINE
          </span>
        </div>
      </div>
    </footer>
  );
}
