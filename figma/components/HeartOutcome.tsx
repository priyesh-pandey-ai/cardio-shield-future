import React from 'react';
import { Heart, TrendingDown } from 'lucide-react';

export function HeartOutcome() {
  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-full blur-3xl opacity-30 scale-110"></div>
      
      {/* Main heart container */}
      <div className="relative flex items-center gap-12">
        {/* Large heart icon */}
        <div className="relative">
          <div className="w-48 h-48 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-2xl">
            <Heart className="w-28 h-28 text-white" fill="white" strokeWidth={2} />
          </div>
          
          {/* Pulse rings */}
          <div className="absolute inset-0 rounded-full border-4 border-teal-400 animate-ping opacity-20"></div>
          <div className="absolute inset-0 rounded-full border-4 border-emerald-400 animate-ping opacity-20" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Heartbeat visualization */}
        <div className="bg-white rounded-2xl p-8 border-2 border-teal-200 shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
              <TrendingDown className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div>
              <p className="text-slate-900">Risk Reduction</p>
              <p className="text-slate-600 text-sm">Over 6 months</p>
            </div>
          </div>

          {/* ECG-style heartbeat line */}
          <svg width="300" height="100" viewBox="0 0 300 100" className="mb-4">
            <defs>
              <linearGradient id="heartbeatGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="50%" stopColor="#10b981" />
                <stop offset="100%" stopColor="#14b8a6" />
              </linearGradient>
              <filter id="shadow">
                <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#14b8a6" floodOpacity="0.3"/>
              </filter>
            </defs>
            
            {/* Baseline */}
            <line x1="0" y1="50" x2="300" y2="50" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" />
            
            {/* Heartbeat line */}
            <path
              d="M 0 50 L 30 50 L 35 30 L 40 70 L 45 50 L 50 50 
                 L 80 50 L 85 35 L 90 65 L 95 50 L 100 50
                 L 130 50 L 135 32 L 140 68 L 145 50 L 150 50
                 L 180 50 L 185 35 L 190 65 L 195 50 L 200 50
                 L 230 50 L 235 30 L 240 70 L 245 50 L 250 50
                 L 280 50 L 285 35 L 290 65 L 295 50 L 300 50"
              stroke="url(#heartbeatGrad)"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#shadow)"
            />
          </svg>

          <div className="flex items-center justify-between text-sm">
            <div className="text-center">
              <p className="text-slate-600">Before</p>
              <p className="text-red-500">High Risk</p>
            </div>
            <div className="flex-1 h-1 bg-gradient-to-r from-red-400 via-amber-400 to-emerald-400 rounded-full mx-4"></div>
            <div className="text-center">
              <p className="text-slate-600">After</p>
              <p className="text-emerald-500">Low Risk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Health metrics badges */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-teal-200 text-sm text-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span>Improved BP</span>
        </div>
        <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-emerald-200 text-sm text-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-teal-500"></div>
          <span>Better Cholesterol</span>
        </div>
        <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-teal-200 text-sm text-slate-700 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
          <span>Active Lifestyle</span>
        </div>
      </div>
    </div>
  );
}
