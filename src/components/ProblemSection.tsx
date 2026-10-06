import React from 'react';
import { Compass, Clock, FileCheck, Target } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      index: "01",
      icon: Compass,
      title: "Too much information",
      subtitle: "Overwhelmed by tutorials and noise",
      description: "Students drown in endless roadmaps, YouTube playlists, and conflicting advice. Without a deterministic execution sequence, months are lost switching between tech stacks without shipping anything substantive."
    },
    {
      index: "02",
      icon: Clock,
      title: "Starting too late",
      subtitle: "The 7th semester panic trap",
      description: "Most engineering students only consider placements when company interview rosters appear on campus noticeboards. Cramming Data Structures and projects in three months yields high anxiety and shallow results."
    },
    {
      index: "03",
      icon: FileCheck,
      title: "No proof of skill",
      subtitle: "Certificates instead of artifacts",
      description: "Passing university exams and collecting tutorial completion certificates doesn't impress technical recruiters. Real hiring managers demand verified code commits, deployed architectures, and working live demos."
    },
    {
      index: "04",
      icon: Target,
      title: "Generic guidance",
      subtitle: "One-size-fits-all college advice",
      description: "Campus placement cells offer blanket workshops that ignore whether you are in Semester 2 exploring systems programming or Semester 6 targeting quantitative machine learning roles."
    }
  ];

  return (
    <section className="py-24 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
            System Failure / The Structural Gap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight text-balance">
            Engineering gives you a degree. It doesn't give you a career roadmap.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            Colleges evaluate you on semester theory. High-growth tech companies evaluate you on systematic proof of engineering execution. Here is why most students get stuck.
          </p>
        </div>

        {/* 4 Elegant Problem Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div 
                key={item.index}
                className="p-7 rounded-xl bg-[#0B0E17] border border-white/5 hover:border-white/10 transition-colors group space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 border border-white/5 flex items-center justify-center text-slate-300 group-hover:text-indigo-400 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-slate-400 font-semibold">{item.index}</span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-lg font-bold text-white tracking-tight">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-indigo-400 font-mono">
                    {item.subtitle}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
