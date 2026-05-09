"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  duration: number;
  delay: number;
  size: number;
}

export default function Particles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const count = Math.min(25, Math.floor(window.innerWidth / 60));
    const generated: Particle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      duration: 10 + Math.random() * 20,
      delay: Math.random() * 15,
      size: 1 + Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={
            {
              "--x": `${p.x}%`,
              "--duration": `${p.duration}s`,
              "--delay": `${p.delay}s`,
              width: `${p.size}px`,
              height: `${p.size}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
