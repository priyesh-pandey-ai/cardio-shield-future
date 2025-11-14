import React from 'react';
import { Brain, Zap } from 'lucide-react';

export function NeuralNetwork() {
  return (
    <div className="relative w-full h-80 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Neural network visualization */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 320">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="lineGradActive" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
          </linearGradient>
        </defs>
        
        {/* Connection lines - Left to Middle */}
        {[60, 120, 180, 240].map((y1) => 
          [80, 130, 180, 230].map((y2, idx) => (
            <line
              key={`l-m-${y1}-${y2}`}
              x1="100"
              y1={y1}
              x2="250"
              y2={y2}
              stroke={idx % 2 === 0 ? "url(#lineGradActive)" : "url(#lineGrad)"}
              strokeWidth="1.5"
            />
          ))
        )}
        
        {/* Connection lines - Middle to Right */}
        {[80, 130, 180, 230].map((y1) => 
          [120, 200].map((y2, idx) => (
            <line
              key={`m-r-${y1}-${y2}`}
              x1="250"
              y1={y1}
              x2="400"
              y2={y2}
              stroke={idx === 0 ? "url(#lineGradActive)" : "url(#lineGrad)"}
              strokeWidth="1.5"
            />
          ))
        )}
        
        {/* Input layer nodes */}
        {[60, 120, 180, 240].map((y, idx) => (
          <g key={`input-${idx}`}>
            <circle cx="100" cy={y} r="18" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
            <circle cx="100" cy={y} r="10" fill="#14b8a6" opacity="0.3" />
          </g>
        ))}
        
        {/* Hidden layer nodes */}
        {[80, 130, 180, 230].map((y, idx) => (
          <g key={`hidden-${idx}`}>
            <circle cx="250" cy={y} r="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
            <circle cx="250" cy={y} r="8" fill="#10b981" opacity="0.4" />
          </g>
        ))}
        
        {/* Output layer nodes */}
        {[120, 200].map((y, idx) => (
          <g key={`output-${idx}`}>
            <circle cx="400" cy={y} r="20" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
            <circle cx="400" cy={y} r="12" fill="#14b8a6" opacity="0.5" />
          </g>
        ))}
      </svg>

      {/* Floating elements */}
      <div className="absolute top-6 right-6 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl px-4 py-2 shadow-lg flex items-center gap-2">
        <Zap className="w-5 h-5 text-white" strokeWidth={2} />
        <span className="text-white text-sm">Processing...</span>
      </div>

      <div className="absolute bottom-6 left-6 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-xl">
          <Brain className="w-7 h-7 text-white" strokeWidth={2} />
        </div>
        <div>
          <p className="text-white text-sm">Deep Learning Model</p>
          <p className="text-teal-400 text-xs">Multi-layer neural network</p>
        </div>
      </div>

      {/* Animated pulse */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-40 h-40 rounded-full bg-teal-500/10 animate-pulse"></div>
      </div>
    </div>
  );
}
