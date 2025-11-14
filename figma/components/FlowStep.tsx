import React from 'react';

interface FlowStepProps {
  number: string;
  title: string;
  description: string;
  children: React.ReactNode;
  color: 'teal' | 'emerald' | 'gradient' | 'slate';
  highlight?: boolean;
}

export function FlowStep({ number, title, description, children, color, highlight = false }: FlowStepProps) {
  const getGradientClass = () => {
    switch (color) {
      case 'teal':
        return 'from-teal-500 to-teal-600';
      case 'emerald':
        return 'from-emerald-500 to-emerald-600';
      case 'gradient':
        return 'from-teal-500 to-emerald-500';
      case 'slate':
        return 'from-slate-600 to-slate-700';
      default:
        return 'from-teal-500 to-emerald-500';
    }
  };

  const getBgClass = () => {
    if (highlight) {
      return 'bg-gradient-to-br from-teal-50 via-emerald-50/50 to-teal-50';
    }
    return 'bg-white';
  };

  const getBorderClass = () => {
    if (highlight) {
      return 'border-2 border-teal-300';
    }
    return 'border border-slate-200';
  };

  return (
    <div className="relative mb-3 min-h-[360px]">
      {highlight && (
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl blur-2xl opacity-10"></div>
      )}
      <div className={`
        relative rounded-[22px] p-5 sm:p-6 lg:p-7
        ${getBgClass()}
        ${getBorderClass()}
        ${highlight ? 'shadow-2xl shadow-teal-500/20' : 'shadow-xl'}
      `}>
        {/* Step number badge */}
        <div className="flex items-start gap-5 mb-6">
          <div className="relative flex-shrink-0">
            {highlight && (
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-2xl blur-lg opacity-40"></div>
            )}
            <div className={`
              relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center
              bg-gradient-to-br ${getGradientClass()}
              shadow-xl text-white
            `}>
              <span className="tracking-tight">{number}</span>
            </div>
          </div>
          
          <div className="flex-1 pt-0.5">
            <h2 className="text-slate-900 mb-2">{title}</h2>
            <p className="text-slate-600 text-lg">{description}</p>
          </div>
        </div>

        {/* Content */}
        <div>
          {children}
        </div>
      </div>
    </div>
  );
}
