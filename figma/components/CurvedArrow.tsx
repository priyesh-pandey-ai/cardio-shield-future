import React from 'react';

interface CurvedArrowProps {
  highlight?: boolean;
}

export function CurvedArrow({ highlight = false }: CurvedArrowProps) {
  return (
    <div className="flex justify-center py-8">
      <svg width="60" height="80" viewBox="0 0 60 80" className="relative">
        <defs>
          <linearGradient id={`arrowGradient-${highlight ? 'highlight' : 'normal'}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity={highlight ? "0.8" : "0.5"} />
            <stop offset="100%" stopColor="#10b981" stopOpacity={highlight ? "0.8" : "0.5"} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Curved line */}
        <path
          d="M 30 0 Q 35 20, 30 40 Q 25 60, 30 70"
          stroke={`url(#arrowGradient-${highlight ? 'highlight' : 'normal'})`}
          strokeWidth={highlight ? "3" : "2"}
          fill="none"
          strokeLinecap="round"
          filter={highlight ? "url(#glow)" : "none"}
        />
        
        {/* Arrow head */}
        <g transform="translate(30, 70)">
          <path
            d="M 0 0 L -6 -8 M 0 0 L 6 -8"
            stroke={`url(#arrowGradient-${highlight ? 'highlight' : 'normal'})`}
            strokeWidth={highlight ? "3" : "2"}
            fill="none"
            strokeLinecap="round"
            filter={highlight ? "url(#glow)" : "none"}
          />
        </g>
      </svg>
    </div>
  );
}
