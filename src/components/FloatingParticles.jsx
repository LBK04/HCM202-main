import React, { useMemo } from 'react';

const PARTICLE_COUNT = 18;

const COLORS = [
  'rgba(107, 91, 149, 0.4)',
  'rgba(26, 58, 92, 0.35)',
  'rgba(139, 123, 181, 0.3)',
  'rgba(42, 90, 138, 0.3)',
  'rgba(196, 181, 221, 0.25)',
];

const FloatingParticles = () => {
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 6 + Math.random() * 14,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      delay: Math.random() * 12,
      duration: 10 + Math.random() * 8,
      driftX: (Math.random() - 0.5) * 80,
      driftAmp: 20 + Math.random() * 40,
      rotation: Math.random() * 360,
    }));
  }, []);

  return (
    <div className="floating-particles">
      {particles.map((p) => (
        <div
          key={p.id}
          className="floating-particle"
          style={{
            left: p.left,
            bottom: '-10%',
            width: p.size,
            height: p.size * (0.6 + Math.random() * 0.4),
            backgroundColor: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s, ${p.duration * 1.2}s`,
            '--drift-x': `${p.driftX}px`,
            '--drift-amplitude': `${p.driftAmp}px`,
            '--rotation': `${p.rotation + 360}deg`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
