import React, { useState } from 'react';
import { 
  ScanEye, 
  Map, 
  Hammer, 
  LineChart, 
  RefreshCw, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';

export const SolutionSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      key: 'ASSESS',
      title: 'Assess',
      tagline: 'Deep Diagnostic Profile',
      icon: ScanEye,
      description: 'Ingests your college branch, current semester, GitHub repos, and target dream role. Pinpoints exact skill deficiencies compared to live tech hiring benchmarks.',
      mechanism: 'Extracts real-time skill delta across 120+ industry engineering competencies.',
      outcome: 'No guesswork on what to learn first.'
    },
    {
      key: 'PLAN',
      title: 'Plan',
      tagline: '4-Year Dynamic Blueprint',
      icon: Map,
      description: 'Transforms college chaos into a structured 8-semester roadmap. Deconstructs years into semesters, months into sprint themes, and weeks into bite-sized missions.',
      mechanism: 'Milestone dependency graph ensures you learn foundational algorithms before advanced architectures.',
      outcome: 'Clear, semester-by-semester clarity.'
    },
    {
      key: 'BUILD',
      title: 'Build',
      tagline: 'Proof-of-Work Execution',
      icon: Hammer,
      description: 'Assigns production-grade projects with live architecture guidance, unguided challenges, hackathons, and open-source contributions that hiring managers value.',
      mechanism: 'Provides system architecture schematics, test criteria, and CI/CD deployment milestones.',
      outcome: 'Tangible software with live links.'
    },
    {
      key: 'TRACK',
      title: 'Track',
      tagline: 'Continuous Evidence Sync',
      icon: LineChart,
      description: 'Monitors commit velocity, LeetCode problem patterns, and milestone completions. Quantifies your Career Readiness score dynamically as work is submitted.',
      mechanism: 'Automated telemetry sync from GitHub commits and task completion times.',
      outcome: 'Verifiable proof, not claimed certificates.'
    },
    {
      key: 'ADAPT',
      title: 'Adapt',
      tagline: 'Autonomous Rescheduling',
      icon: RefreshCw,
      description: 'Exam week or college midterms approaching? Stumbled on dynamic programming? CareerOS automatically reschedules tasks and rebalances workload without guilt.',
      mechanism: 'Adaptive scheduling loop recalibrates velocity to prevent burnout and keep placement trajectory true.',
      outcome: 'A plan that survives real engineering college life.'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 border-t border-white/5 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Autonomous Career Runtime
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Meet your Career Copilot.
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            This isn't a chatbot. It's an agent that moves your career forward.
          </p>
        </div>

        {/* Visual Flow: ASSESS → PLAN → BUILD → TRACK → ADAPT */}
        <div className="mb-12">
          {/* Stepper tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 sm:gap-3 p-1.5 bg-[#0B0E17] border border-white/5 rounded-xl">
            {steps.map((s, idx) => {
              const Icon = s.icon;
              const isActive = activeStep === idx;
              return (
                <button
                  key={s.key}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center justify-center py-3.5 px-3 rounded-lg transition-all text-left group ${
                    isActive 
                      ? 'bg-indigo-600/90 text-white shadow-md shadow-indigo-950' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-1.5 mb-1">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                    <span className="font-mono text-xs font-bold tracking-wider">{s.key}</span>
                  </div>
                  <span className={`text-[11px] truncate max-w-full ${isActive ? 'text-indigo-100' : 'text-slate-400'}`}>
                    {s.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Feature Box */}
        <div className="rounded-2xl bg-[#0B0F19] border border-white/10 p-6 sm:p-8 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                <span>Phase 0{activeStep + 1} of 05</span>
                <span className="text-slate-600">·</span>
                <span>{steps[activeStep].tagline}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {steps[activeStep].title}: {steps[activeStep].tagline}
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3.5 rounded-lg bg-slate-900/60 border border-white/5 space-y-1">
                  <div className="text-xs font-mono text-slate-400">Runtime Mechanism</div>
                  <div className="text-xs text-slate-200">{steps[activeStep].mechanism}</div>
                </div>

                <div className="p-3.5 rounded-lg bg-indigo-950/20 border border-indigo-500/15 space-y-1">
                  <div className="text-xs font-mono text-indigo-300">Concrete Outcome</div>
                  <div className="text-xs text-white font-medium">{steps[activeStep].outcome}</div>
                </div>
              </div>
            </div>

            {/* Interactive Step Preview Visual */}
            <div className="lg:col-span-5 bg-slate-900/80 rounded-xl border border-white/5 p-5 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between pb-3 border-b border-white/5 text-slate-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  agent://pipeline/{steps[activeStep].key.toLowerCase()}
                </span>
                <span className="text-[11px] text-indigo-400">ACTIVE</span>
              </div>

              {activeStep === 0 && (
                <div className="space-y-2 text-slate-300">
                  <div className="text-slate-400">// Diagnostic Scan Complete</div>
                  <div className="text-white">Branch: Computer Science (Sem 4)</div>
                  <div className="text-white">Target Role: AI/ML Engineer</div>
                  <div className="text-emerald-400">✓ Python & Git: Intermediate Verified</div>
                  <div className="text-amber-400">! Critical Gap: Vector Math & SQL</div>
                  <div className="text-indigo-400">→ Generating customized semester 4 sprint plan...</div>
                </div>
              )}

              {activeStep === 1 && (
                <div className="space-y-2 text-slate-300">
                  <div className="text-slate-400">// 4-Year Graph Compiled</div>
                  <div className="text-white">Sem 1-3: Foundations (Conquered)</div>
                  <div className="text-indigo-300 font-semibold">▶ Sem 4: ML & Vector Math (Current Sprint)</div>
                  <div className="text-slate-400">Sem 5: PyTorch & Distributed Systems</div>
                  <div className="text-slate-400">Sem 6: Off-campus Summer Internships</div>
                  <div className="text-slate-400">Sem 7: Placement Drives & Negotiation</div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-2 text-slate-300">
                  <div className="text-slate-400">// Project Assigned: Proof of Work</div>
                  <div className="text-white font-semibold">Project: AI Study Assistant (RAG Pipeline)</div>
                  <div className="text-slate-400">Tech: FastAPI + ChromaDB + OpenAI Embeddings</div>
                  <div className="text-emerald-400">Milestone 1: Vector indexing [PASSED]</div>
                  <div className="text-amber-400">Milestone 2: Token cache layer [IN PROGRESS]</div>
                  <div className="text-indigo-400">→ Auto-syncing commit to public portfolio...</div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-2 text-slate-300">
                  <div className="text-slate-400">// Verification & Telemetry</div>
                  <div className="flex justify-between">
                    <span>Career Readiness Index:</span>
                    <span className="text-emerald-400 font-bold">42% (Target: 85%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Verified GitHub Commits:</span>
                    <span className="text-white">128 this semester</span>
                  </div>
                  <div className="flex justify-between">
                    <span>LeetCode Patterns:</span>
                    <span className="text-white">42 / 120 mastered</span>
                  </div>
                  <div className="text-indigo-400">Streak: 14 consecutive daily sprints</div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-2 text-slate-300">
                  <div className="text-amber-400">! Campus Event Detected: Midterm Exams (10 Days)</div>
                  <div className="text-slate-400">// Agent Autonomous Intervention</div>
                  <div className="text-white">Reduced daily dev load: 60m → 20m maintenance</div>
                  <div className="text-white">Paused complex system design milestone</div>
                  <div className="text-emerald-400">✓ Rescheduled gracefully without placement loss</div>
                </div>
              )}

              <div className="pt-2 flex justify-between text-[11px] text-slate-400 border-t border-white/5">
                <span>Cycle time: ~200ms</span>
                <span 
                  onClick={() => setActiveStep((activeStep + 1) % steps.length)}
                  className="text-indigo-400 hover:text-white cursor-pointer"
                >
                  Next phase →
                </span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
