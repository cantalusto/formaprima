'use client';

import React from 'react';

interface SilkBackgroundProps {
  className?: string;
}

export function SilkBackground({ className }: SilkBackgroundProps) {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Base gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, #1C1A17, #252220 50%, #1C1A17)',
        }}
      />
      {/* Animated silk waves via CSS */}
      <div
        style={{
          position: 'absolute',
          inset: '-50%',
          width: '200%',
          height: '200%',
          background: `
            radial-gradient(ellipse 80% 50% at 30% 20%, rgba(60, 52, 44, 0.12) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 70% 60%, rgba(50, 42, 36, 0.10) 0%, transparent 55%),
            radial-gradient(ellipse 90% 60% at 50% 80%, rgba(40, 35, 30, 0.08) 0%, transparent 50%)
          `,
          animation: 'silk-drift 20s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />
      {/* Secondary layer for depth */}
      <div
        style={{
          position: 'absolute',
          inset: '-30%',
          width: '160%',
          height: '160%',
          background: `
            radial-gradient(ellipse 70% 50% at 60% 30%, rgba(55, 48, 40, 0.08) 0%, transparent 50%),
            radial-gradient(ellipse 50% 40% at 35% 70%, rgba(45, 38, 32, 0.06) 0%, transparent 45%)
          `,
          animation: 'silk-drift-reverse 25s ease-in-out infinite alternate',
          willChange: 'transform',
        }}
      />
      {/* Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.03), rgba(0,0,0,0.25))',
        }}
      />
    </div>
  );
}
