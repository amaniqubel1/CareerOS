import React from 'react';
import { ExternalLink, Github, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { INITIAL_PROJECTS } from '../data/careerOSData';

export const ProofOfWorkSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-white/5 relative bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Portfolio Evidence Engine
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Learning is good. Proof is better.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            Tutorial completion certificates are ignored by recruiters. CareerOS guides you to build production architectures with live URLs, clean commits, and quantified performance metrics.
          </p>
        </div>

        {/* 3 Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {INITIAL_PROJECTS.map((proj) => (
            <div 
              key={proj.id}
              className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 hover:border-white/20 transition-all flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                
                {/* Header status */}
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                    proj.status === 'completed'
                      ? 'bg-emerald-500/10 text-emerald-400'
                      : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {proj.status === 'completed' ? 'VERIFIED ARTIFACT' : 'IN DEVELOPMENT'}
                  </span>

                  {proj.starsCount && (
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      ★ {proj.starsCount} Stars
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {proj.tagline}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techStack.map((tech, i) => (
                    <span 
                      key={i} 
                      className="text-[11px] font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-500/20 px-2 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Skills Demonstrated */}
                <div className="space-y-1 pt-1">
                  <div className="text-[11px] font-mono uppercase text-slate-400">Skills Demonstrated:</div>
                  <div className="flex flex-wrap gap-1">
                    {proj.skillsDemonstrated.map((sd, i) => (
                      <span key={i} className="text-xs text-slate-300">
                        {sd}{i < proj.skillsDemonstrated.length - 1 ? ' · ' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Verified Metric */}
                <div className="p-3 rounded-lg bg-slate-900/80 border border-white/5 space-y-1">
                  <div className="text-[10px] font-mono text-slate-400">Performance Metric</div>
                  <div className="text-xs font-semibold text-emerald-400 font-mono">
                    {proj.verifiedMetric}
                  </div>
                </div>

              </div>

              {/* Links at bottom */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <a 
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 transition-colors"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>Repository</span>
                </a>

                <a 
                  href={proj.liveDemoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
