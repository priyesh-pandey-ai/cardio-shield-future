import React from 'react';
import { ChevronDown } from 'lucide-react';

export function FlowArrow() {
  return (
    <div className="flex justify-center py-6">
      <div className="flex flex-col items-center gap-1">
        <div className="w-0.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-400 rounded-full"></div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-lg shadow-teal-500/20">
          <ChevronDown className="w-5 h-5 text-white" strokeWidth={2.5} />
        </div>
        <div className="w-0.5 h-8 bg-gradient-to-b from-teal-400 to-emerald-400 rounded-full"></div>
      </div>
    </div>
  );
}
