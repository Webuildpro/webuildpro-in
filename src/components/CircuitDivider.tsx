import React from 'react';

interface CircuitDividerProps {
  className?: string;
}

export default function CircuitDivider({ className = '' }: CircuitDividerProps) {
  return (
    <div className={`w-full overflow-hidden ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-10"
        preserveAspectRatio="none"
      >
        {/* Main trace line */}
        <path
          d="M0 20 L100 20 L120 8 L200 8 L220 20 L400 20 L420 32 L480 32 L500 20 L600 20 L620 8 L700 8 L720 20 L900 20 L920 32 L980 32 L1000 20 L1200 20"
          stroke="rgba(0, 208, 255, 0.25)"
          strokeWidth="1"
          fill="none"
          className="circuit-trace"
        />
        {/* Solder pads */}
        <circle cx="120" cy="8" r="2.5" fill="rgba(0, 208, 255, 0.4)" />
        <circle cx="220" cy="20" r="2.5" fill="rgba(255, 106, 19, 0.5)" />
        <circle cx="500" cy="20" r="2.5" fill="rgba(0, 208, 255, 0.4)" />
        <circle cx="620" cy="8" r="2.5" fill="rgba(255, 106, 19, 0.5)" />
        <circle cx="720" cy="20" r="2.5" fill="rgba(0, 208, 255, 0.4)" />
        <circle cx="1000" cy="20" r="2.5" fill="rgba(255, 106, 19, 0.5)" />
        {/* Secondary trace */}
        <path
          d="M200 8 L200 2 L260 2 L260 8"
          stroke="rgba(0, 208, 255, 0.15)"
          strokeWidth="1"
          fill="none"
        />
        <path
          d="M700 8 L700 2 L760 2 L760 8"
          stroke="rgba(0, 208, 255, 0.15)"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}