import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Sparkles, 
  TrendingUp, 
  Terminal, 
  Play, 
  Layers, 
  Check, 
  Award,
  ChevronRight
} from 'lucide-react';
import { StudentProfile } from '../data/careerOSData';

interface HeroProps {
  profile: StudentProfile;
  onOpenOnboarding: () => void;
  onScrollToHowItWorks: () => void;
  onCompleteTaskInHero: () => void;
  heroTaskCompleted: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenOnboarding,
  onScrollToHowItWorks,
  onCompleteTaskInHero,
  heroTaskCompleted
}) => {
  const [activeTab, setActiveTab] = useState<'today' | 'skills' | 'milestones'>('today');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background subtle radial glow (not loud gradient) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[300px] bg-blue-600/5 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Subtle grid backdrop */}
      <div 
        className="absolute inset-0 -z-20 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Context kicker text (No static pill enclosures - zero pill rule) */}
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-indigo-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>System Kernel v2.4</span>
              <span className="text-slate-600" aria-hidden="true">·</span>
              <span className="text-slate-400">Engineered for 8-Semester Execution</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              Your career shouldn't start in your final year.
            </h1>

            {/* Subheadline with subtle OS metaphor */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl text-balance">
              An AI career copilot that operates as your professional runtime engine — helping B.Tech students systematically execute the right skills, projects, portfolio, and career readiness, one step at a time.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={onOpenOnboarding}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-lg shadow-indigo-600/25 transition-all duration-150 group"
              >
                <span>Build My Career Roadmap</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onScrollToHowItWorks}
                className="inline-flex items-center justify-center px-5 py-3.5 text-sm font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 rounded-lg transition-colors"
              >
                <Play className="w-3.5 h-3.5 mr-2 text-slate-400 fill-slate-400" />
                <span>See How It Works</span>
              </button>
            </div>

            {/* Trust line with unboxed metadata discipline */}
            <div className="pt-4 flex items-center gap-3 text-xs text-slate-400">
              <span className="text-slate-300 font-medium">Built for the 4-year engineering journey</span>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <span>CSE, AI/DS, IT, ECE & Allied Branches</span>
              <span className="text-slate-700" aria-hidden="true">·</span>
              <span className="text-emerald-400">Zero AI Slop</span>
            </div>

          </div>

          {/* Right Column: Animated Interactive Dashboard Preview (High-Fidelity UI, not an illustration) */}
          <div className="lg:col-span-6 relative">
            
            {/* Outer window frame container */}
            <div className="relative rounded-2xl bg-[#0B0F19] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden backdrop-blur-xl">
              
              {/* Window Header / Window bar */}
              <div className="px-4 py-3 bg-[#0E1322] border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-2 text-xs font-mono text-slate-400 truncate">careeros / session / runtime.sys</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    AGENT SYNCED
                  </span>
                </div>
              </div>

              {/* Window Body: Real Live Interactive Snapshot */}
              <div className="p-5 sm:p-6 space-y-5">
                
                {/* Top Profile Summary Strip */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/5">
                  <div>
                    <div className="text-xs text-slate-400 font-medium">Target Role</div>
                    <div className="text-base font-bold text-white flex items-center gap-2">
                      <span>{profile.targetRole}</span>
                      <span className="text-[11px] font-mono text-indigo-400 font-normal">Semester {profile.semester}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="text-xs text-slate-400 font-medium">Career Readiness</div>
                    <div className="text-base font-mono font-bold text-emerald-400 tabular-nums">
                      {heroTaskCompleted ? '44%' : '42%'}
                      <span className="text-[11px] text-slate-400 font-normal ml-1">(On Track)</span>
                    </div>
                  </div>
                </div>

                {/* Segmented Control Tabs (Functional buttons with click handlers) */}
                <div className="flex items-center gap-1 p-1 bg-slate-900/90 border border-white/5 rounded-lg text-xs">
                  <button
                    onClick={() => setActiveTab('today')}
                    className={`flex-1 py-1.5 px-3 rounded-md font-medium transition-all ${
                      activeTab === 'today'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Today's Task
                  </button>
                  <button
                    onClick={() => setActiveTab('skills')}
                    className={`flex-1 py-1.5 px-3 rounded-md font-medium transition-all ${
                      activeTab === 'skills'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Skill Matrix
                  </button>
                  <button
                    onClick={() => setActiveTab('milestones')}
                    className={`flex-1 py-1.5 px-3 rounded-md font-medium transition-all ${
                      activeTab === 'milestones'
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Milestones
                  </button>
                </div>

                {/* Tab 1: Today's Task */}
                {activeTab === 'today' && (
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-slate-900/60 border border-indigo-500/20 relative group">
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-[11px] font-mono text-indigo-400">
                            <Clock className="w-3.5 h-3.5" />
                            <span>Estimated ~40 min</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-amber-400">High Impact</span>
                          </div>
                          <h4 className={`text-sm font-semibold transition-colors ${heroTaskCompleted ? 'line-through text-slate-400' : 'text-white'}`}>
                            Implement Vectorized Matrix Operations in NumPy
                          </h4>
                          <p className="text-xs text-slate-400 line-clamp-2">
                            Write vectorized forward-propagation computation for 2-layer perceptron without for-loops.
                          </p>
                        </div>

                        <button
                          onClick={onCompleteTaskInHero}
                          className={`shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                            heroTaskCompleted
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-600/30'
                          }`}
                        >
                          {heroTaskCompleted ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Completed</span>
                            </>
                          ) : (
                            <>
                              <span>Mark Done</span>
                              <ChevronRight className="w-3.5 h-3.5" />
                            </>
                          )}
                        </button>
                      </div>

                      {heroTaskCompleted && (
                        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-emerald-400">
                          <span className="flex items-center gap-1">
                            <Sparkles className="w-3 h-3" />
                            Copilot: +80 Points added to ML Foundations milestone
                          </span>
                          <span className="font-mono text-slate-400">Streak: 15 Days</span>
                        </div>
                      )}
                    </div>

                    {/* Proactive Agent Callout */}
                    <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/15 flex items-start gap-2.5">
                      <div className="w-6 h-6 rounded bg-indigo-600/30 flex items-center justify-center shrink-0 text-indigo-300">
                        <Terminal className="w-3.5 h-3.5" />
                      </div>
                      <div className="text-xs leading-relaxed text-slate-300">
                        <span className="text-indigo-300 font-semibold">Autonomous Copilot:</span> "You're aiming for an AI/ML role. Python fundamentals are locked in. Next milestone: Pandas + NumPy. Today's task: ~40 min."
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 2: Skill Progress Bars */}
                {activeTab === 'skills' && (
                  <div className="space-y-3.5 py-1">
                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-200 font-medium">Python & Scientific Stack</span>
                        <span className="font-mono text-indigo-400 tabular-nums font-semibold">{heroTaskCompleted ? '76%' : '72%'}</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full bg-indigo-500 rounded-full transition-all duration-500" 
                          style={{ width: heroTaskCompleted ? '76%' : '72%' }} 
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-200 font-medium">Git & Collaborative GitHub</span>
                        <span className="font-mono text-indigo-400 tabular-nums font-semibold">54%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: '54%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-200 font-medium">SQL & Relational Databases</span>
                        <span className="font-mono text-indigo-400 tabular-nums font-semibold">38%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: '38%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-200 font-medium">Machine Learning Foundations</span>
                        <span className="font-mono text-indigo-400 tabular-nums font-semibold">18%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div className="h-full bg-indigo-500 rounded-full" style={{ width: '18%' }} />
                      </div>
                    </div>
                  </div>
                )}

                {/* Tab 3: Milestones */}
                {activeTab === 'milestones' && (
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/40 border border-white/5 text-xs">
                      <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Python Fundamentals & Syntax</div>
                        <div className="text-slate-400 text-[11px]">Semester 1 — Verified Proof of Code</div>
                      </div>
                      <span className="font-mono text-emerald-400 text-[11px]">100%</span>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs">
                      <div className="w-5 h-5 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 animate-pulse">
                        <TrendingUp className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium">Data Analysis & Predictive ML</div>
                        <div className="text-indigo-300 text-[11px]">Semester 4 (Active Milestone)</div>
                      </div>
                      <span className="font-mono text-indigo-400 text-[11px] font-semibold">45%</span>
                    </div>

                    <div className="flex items-center gap-3 p-2.5 rounded-lg bg-slate-900/20 border border-white/5 text-xs text-slate-400 opacity-70">
                      <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-500 flex items-center justify-center shrink-0">
                        <Layers className="w-3 h-3" />
                      </div>
                      <div className="flex-1">
                        <div className="text-slate-300 font-medium">Deep Learning & System Design</div>
                        <div className="text-slate-500 text-[11px]">Semester 5 (Upcoming)</div>
                      </div>
                      <span className="font-mono text-slate-500 text-[11px]">0%</span>
                    </div>
                  </div>
                )}

                {/* Footer preview note */}
                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-white/5">
                  <span className="font-mono">Next Milestone: Vector Embeddings</span>
                  <span className="text-indigo-400 hover:text-indigo-300 cursor-pointer" onClick={onOpenOnboarding}>
                    Customize for your branch →
                  </span>
                </div>

              </div>
            </div>

            {/* Subtle floating badge */}
            <div className="absolute -bottom-4 -left-4 sm:bottom-6 sm:-left-6 p-3 rounded-xl bg-slate-900/90 border border-white/10 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Daily Streak Active</div>
                <div className="text-[11px] text-slate-400 font-mono">14 Consecutive Days Logged</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
