import React from 'react';
import { ArrowRight, Terminal, Sparkles, ShieldCheck } from 'lucide-react';

interface FinalCTASectionProps {
  onOpenOnboarding: () => void;
  onExplorePlatform: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenOnboarding,
  onExplorePlatform
}) => {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-b from-[#06080D] via-[#090C17] to-[#07090E] border-t border-white/5">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Unboxed category lead */}
        <div className="flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Semester 1 Through 8 Acceleration</span>
        </div>

        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] text-balance">
          Start building your career before your placement year.
        </h2>

        {/* Subline */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed text-balance">
          Your four years are already moving. Make every semester count with an autonomous copilot that transforms college effort into verifiable career proof.
        </p>

        {/* Dual Actions */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={onOpenOnboarding}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-xl shadow-xl shadow-indigo-600/30 transition-all duration-150 group"
          >
            <span>Create My Career Roadmap</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={onExplorePlatform}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/80 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
          >
            <span>Explore the Platform</span>
          </button>
        </div>

        {/* Guarantee text */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
          <span className="text-slate-300 font-medium">Free during student beta</span>
          <span className="text-slate-700" aria-hidden="true">·</span>
          <span>Zero credit card required</span>
          <span className="text-slate-700" aria-hidden="true">·</span>
          <span>Instant roadmap generation</span>
        </div>

      </div>
    </section>
  );
};
