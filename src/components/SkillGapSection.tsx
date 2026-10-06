import React from 'react';
import { AlertCircle, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Target } from 'lucide-react';

interface SkillGapSectionProps {
  onOpenOnboarding: () => void;
}

export const SkillGapSection: React.FC<SkillGapSectionProps> = ({ onOpenOnboarding }) => {
  const skillsMatrix = [
    { name: "Python", status: "Strong", pct: 76, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { name: "Git & Collaborative GitHub", status: "Intermediate", pct: 58, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "SQL & Relational Schemas", status: "Beginner", pct: 38, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "Applied Statistics", status: "Intermediate", pct: 60, color: "text-blue-400", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    { name: "Machine Learning Foundations", status: "Beginner", pct: 24, color: "text-amber-400", bg: "bg-amber-500/10", border: "border-amber-500/20" },
    { name: "MLOps & Model Deployment", status: "Not Started", pct: 5, color: "text-rose-400", bg: "bg-rose-500/10", border: "border-rose-500/20" },
  ];

  const priorityGaps = [
    { rank: "01", name: "ML Fundamentals", impact: "High", timeline: "3-4 Weeks", action: "Build regression & classification algorithms from scratch using NumPy." },
    { rank: "02", name: "SQL & Query Optimization", impact: "High", timeline: "2 Weeks", action: "Master window functions, CTEs, and index execution plans for complex joins." },
    { rank: "03", name: "Model Deployment & FastAPIs", impact: "Critical", timeline: "2 Weeks", action: "Wrap scikit-learn models in containerized microservices with Swagger docs." },
    { rank: "04", name: "MLOps & CI Pipelines", impact: "Medium", timeline: "3 Weeks", action: "Implement automated data validation and GitHub Actions model test runners." },
  ];

  return (
    <section className="py-24 border-t border-white/5 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Recruiter-Calibrated Intelligence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Know what you're missing before recruiters do.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              Target Role: <span className="text-white font-semibold">AI/ML Engineer</span> · Evaluated against actual hiring rubrics from top tech firms.
            </p>
          </div>

          <button
            onClick={onOpenOnboarding}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-colors shrink-0"
          >
            <span>Build My Skill Plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Current Skills Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between pb-2 border-b border-white/5">
              <span className="text-xs font-mono uppercase text-slate-400">Current Assessed Competencies</span>
              <span className="text-xs font-mono text-slate-500">6 Competencies Tracked</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {skillsMatrix.map((item, idx) => (
                <div 
                  key={idx}
                  className="p-4 rounded-xl bg-[#0B0E17] border border-white/5 space-y-2 hover:border-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate">{item.name}</span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${item.bg} ${item.color} font-medium`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400">
                      <span>Proficiency</span>
                      <span className="text-slate-300">{item.pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className="h-full bg-indigo-500 rounded-full" 
                        style={{ width: `${item.pct}%` }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Priority Gap List */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <div className="flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-400" />
                <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                  Priority Gap Shortlist
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-400">Action Required</span>
            </div>

            <div className="space-y-3">
              {priorityGaps.map(gap => (
                <div key={gap.rank} className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-500 font-bold">{gap.rank}</span>
                      <span className="font-bold text-white">{gap.name}</span>
                    </div>
                    <span className="font-mono text-[11px] text-indigo-400">{gap.timeline}</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    {gap.action}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenOnboarding}
                className="w-full py-2.5 text-xs font-semibold text-center text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              >
                Auto-Schedule Gaps into My Next Semester Sprints →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
