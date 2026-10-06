import React, { useState } from 'react';
import { FOUR_YEAR_JOURNEY_STAGES } from '../data/careerOSData';
import { ArrowRight, Check, Compass, ShieldAlert, Zap } from 'lucide-react';

export const FourYearJourneySection: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState<number>(2);

  const activeStage = FOUR_YEAR_JOURNEY_STAGES.find(s => s.year === selectedYear) || FOUR_YEAR_JOURNEY_STAGES[0];

  return (
    <section id="for-students" className="py-24 border-t border-white/5 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            The 8-Semester Progression Arc
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            One platform. Four years. One direction.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            College is an 8-semester sequence where each year requires a fundamentally different strategic focus. CareerOS evolves alongside your maturity.
          </p>
        </div>

        {/* 4-Year Horizontal Selector */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {FOUR_YEAR_JOURNEY_STAGES.map((stage) => {
            const isSelected = stage.year === selectedYear;
            return (
              <button
                key={stage.year}
                onClick={() => setSelectedYear(stage.year)}
                className={`p-4 rounded-xl text-left border transition-all ${
                  isSelected
                    ? 'bg-indigo-600/90 border-indigo-500 text-white shadow-lg shadow-indigo-950/60'
                    : 'bg-[#0B0E17] border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold">YEAR 0{stage.year}</span>
                  {stage.year === 2 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/20 text-white">
                      Current
                    </span>
                  )}
                </div>
                <div className={`text-sm font-bold truncate ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                  {stage.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Display */}
        <div className="rounded-2xl bg-[#0B0F19] border border-white/10 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-white/5">
            <div>
              <div className="text-xs font-mono text-indigo-400 font-semibold mb-1">
                Strategic Scope: Year 0{activeStage.year}
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {activeStage.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl">
                {activeStage.focusTagline}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-900/80 border border-white/5 text-xs space-y-1 max-w-xs shrink-0">
              <div className="text-slate-400 font-mono">Target Year Deliverable</div>
              <div className="text-white font-medium">{activeStage.targetMilestone}</div>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {activeStage.description}
          </p>

          {/* 3 Primary Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {activeStage.primaryPillars.map((p, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-900/50 border border-white/5 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </span>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    {p.pillar}
                  </h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {p.action}
                </p>
              </div>
            ))}
          </div>

          {/* Student Mindset Trap vs Copilot Intervention */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-300 font-semibold">
                <ShieldAlert className="w-4 h-4 shrink-0 text-rose-400" />
                <span>The Common Student Trap</span>
              </div>
              <p className="text-xs text-slate-300">
                "{activeStage.studentMindsetTrap}"
              </p>
            </div>

            <div className="p-4 rounded-xl bg-indigo-950/25 border border-indigo-500/20 space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-300 font-semibold">
                <Zap className="w-4 h-4 shrink-0 text-indigo-400" />
                <span>How CareerOS Intervenes</span>
              </div>
              <p className="text-xs text-slate-200">
                {activeStage.copilotIntervention}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
