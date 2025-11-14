import React from 'react';
import { Heart, TrendingUp, Activity, Calendar, ArrowRight, User } from 'lucide-react';

interface PhoneMockupProps {
  screen: 'login' | 'dashboard';
}

export function PhoneMockup({ screen }: PhoneMockupProps) {
  return (
    <div className="flex justify-center w-full">
      <div className="relative">
        {/* Phone frame */}
        <div className="w-60 h-[520px] bg-gradient-to-br from-slate-900 to-slate-800 rounded-[3rem] p-3 shadow-2xl">
          {/* Screen */}
          <div className="w-full h-full bg-white rounded-[2.6rem] overflow-hidden relative">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-slate-900 rounded-b-3xl z-10"></div>
            
            {screen === 'login' ? (
              <LoginScreen />
            ) : (
              <DashboardScreen />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-white via-teal-50/30 to-emerald-50/30 flex flex-col items-center justify-center px-10 pt-12">
      {/* Logo */}
      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl blur-2xl opacity-30"></div>
        <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center shadow-2xl">
          <Heart className="w-14 h-14 text-white" fill="white" strokeWidth={2} />
        </div>
      </div>
      
      <h3 className="text-slate-900 text-2xl mb-2 text-center">Welcome to CardioShield</h3>
      <p className="text-slate-600 text-center mb-10">Your AI health companion</p>
      
      {/* Input fields */}
      <div className="w-full space-y-4 mb-6">
        <div className="bg-white rounded-2xl border-2 border-teal-200/60 shadow-sm px-5 py-4 flex items-center gap-3">
          <User className="w-5 h-5 text-teal-500" strokeWidth={2} />
          <div className="h-4 bg-slate-200 rounded w-32"></div>
        </div>
        <div className="bg-white rounded-2xl border-2 border-teal-200/60 shadow-sm px-5 py-4 flex items-center gap-3">
          <div className="w-5 h-5 rounded bg-teal-500/20"></div>
          <div className="h-4 bg-slate-200 rounded w-24"></div>
        </div>
      </div>
      
      {/* Login button */}
      <button className="w-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-2xl py-4 shadow-xl shadow-teal-500/30 flex items-center justify-center gap-2">
        <span className="text-white">Get Started</span>
        <ArrowRight className="w-5 h-5 text-white" strokeWidth={2} />
      </button>
      
      {/* Social login */}
      <div className="mt-8 flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-white border-2 border-slate-200 shadow-sm"></div>
        <div className="w-12 h-12 rounded-xl bg-white border-2 border-slate-200 shadow-sm"></div>
        <div className="w-12 h-12 rounded-xl bg-white border-2 border-slate-200 shadow-sm"></div>
      </div>
    </div>
  );
}

function DashboardScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-slate-50 to-white flex flex-col pt-12 px-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-slate-600 text-sm">Welcome back</p>
          <p className="text-slate-900">Sarah Johnson</p>
        </div>
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
          <User className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
      </div>
      
      {/* Risk score card */}
      <div className="bg-gradient-to-br from-teal-500 to-emerald-500 rounded-3xl p-6 mb-6 shadow-2xl shadow-teal-500/30">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-white/90 text-sm mb-1">Your Risk Score</p>
            <div className="flex items-baseline gap-2">
              <p className="text-white text-5xl">23</p>
              <p className="text-white/80 text-sm">/ 100</p>
            </div>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <Heart className="w-7 h-7 text-white" strokeWidth={2} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-white rounded-full" style={{ width: '23%' }}></div>
          </div>
          <p className="text-white/90 text-sm">Low Risk</p>
        </div>
      </div>
      
      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="w-5 h-5 text-emerald-500" strokeWidth={2} />
            <p className="text-slate-600 text-xs">Heart Rate</p>
          </div>
          <p className="text-slate-900 text-2xl">72</p>
          <p className="text-slate-500 text-xs">bpm</p>
        </div>
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-5 h-5 text-teal-500" strokeWidth={2} />
            <p className="text-slate-600 text-xs">BP</p>
          </div>
          <p className="text-slate-900 text-2xl">120</p>
          <p className="text-slate-500 text-xs">/80 mmHg</p>
        </div>
      </div>
      
      {/* Today's tasks */}
      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex-1">
        <div className="flex items-center justify-between mb-4">
          <h4 className="text-slate-900">Today's Tasks</h4>
          <Calendar className="w-5 h-5 text-teal-500" strokeWidth={2} />
        </div>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center gap-3">
              <div className={`w-5 h-5 rounded-full border-2 ${i === 1 ? 'border-teal-500 bg-teal-500' : 'border-slate-300'} flex items-center justify-center`}>
                {i === 1 && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <div className="flex-1 h-2 bg-slate-100 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
