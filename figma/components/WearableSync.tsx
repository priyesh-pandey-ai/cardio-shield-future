import React from 'react';
import { Watch, Smartphone, Waves } from 'lucide-react';

export function WearableSync() {
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border-2 border-emerald-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 rounded-2xl bg-white border-2 border-emerald-200 flex items-center justify-center shadow-lg">
          <Waves className="w-8 h-8 text-emerald-600" strokeWidth={2} />
        </div>
        <div>
          <h4 className="text-slate-900 mb-1">Wearable Integration</h4>
          <p className="text-slate-600 text-sm">Real-time vitals monitoring</p>
        </div>
      </div>

      <div className="relative">
        {/* Sync animation */}
        <div className="flex items-center justify-center gap-8">
          {/* Wearable device */}
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center shadow-xl">
              <Watch className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-2xl border-2 border-emerald-400 animate-ping opacity-20"></div>
          </div>

          {/* Sync indicator */}
          <div className="flex flex-col items-center gap-2">
            <svg width="60" height="40" viewBox="0 0 60 40">
              <defs>
                <linearGradient id="syncGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#14b8a6" />
                </linearGradient>
              </defs>
              <path
                d="M 0 20 L 15 20 M 20 20 L 30 20 M 35 20 L 45 20 M 50 20 L 60 20"
                stroke="url(#syncGrad)"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="10" cy="20" r="3" fill="#10b981">
                <animate attributeName="cx" values="10;50;10" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="30" cy="20" r="3" fill="#14b8a6">
                <animate attributeName="cx" values="30;60;30" dur="2s" repeatCount="indefinite" begin="0.3s" />
              </circle>
            </svg>
            <p className="text-emerald-600 text-xs">Syncing...</p>
          </div>

          {/* Smartphone */}
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-xl">
              <Smartphone className="w-12 h-12 text-white" strokeWidth={2} />
            </div>
          </div>
        </div>

        {/* Data stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          <div className="bg-white rounded-xl p-3 text-center border border-emerald-200 shadow-sm">
            <p className="text-emerald-600">Heart Rate</p>
            <p className="text-slate-900 text-xl">72</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-teal-200 shadow-sm">
            <p className="text-teal-600">Steps</p>
            <p className="text-slate-900 text-xl">8.2K</p>
          </div>
          <div className="bg-white rounded-xl p-3 text-center border border-emerald-200 shadow-sm">
            <p className="text-emerald-600">Sleep</p>
            <p className="text-slate-900 text-xl">7.5h</p>
          </div>
        </div>
      </div>
    </div>
  );
}
