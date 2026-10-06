import React, { useState } from 'react';
import { Bot, ArrowRight, Check, Sparkles, RefreshCw, Eye, Target, Play, CheckCircle2 } from 'lucide-react';

export const AgenticSection: React.FC = () => {
  const [demoState, setDemoState] = useState<'initial' | 'task_done' | 'next_ready'>('initial');

  const handleMarkDone = () => {
    setDemoState('task_done');
    setTimeout(() => {
      setDemoState('next_ready');
    }, 800);
  };

  const handleResetDemo = () => {
    setDemoState('initial');
  };

  return (
    <section className="py-24 border-t border-white/5 relative bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Autonomous Agent Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Not another chatbot. An agent that moves your career forward.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            Generic AI waits for you to type prompts and offers generic text. CareerOS runs an autonomous feedback loop that proactively assigns work, evaluates commits, and adapts your schedule.
          </p>
        </div>

        {/* Comparison: Generic AI vs Career Copilot */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Generic Chatbot */}
          <div className="p-6 rounded-xl bg-[#090C14] border border-white/5 space-y-4 opacity-80">
            <div className="flex items-center justify-between pb-3 border-b border-white/5">
              <span className="text-xs font-mono text-slate-400">Passive LLM Chatbot</span>
              <span className="text-[11px] font-mono text-rose-400">Ask → Answer</span>
            </div>
            <div className="space-y-2 text-xs text-slate-400 leading-relaxed">
              <p>• Requires you to know the right questions to prompt every day.</p>
              <p>• Has zero memory of your semester, completed projects, or past commits.</p>
              <p>• Cannot hold you accountable or check if you actually executed code.</p>
              <p>• Generates theoretical advice with zero integration into your resume.</p>
            </div>
          </div>

          {/* Career Copilot */}
          <div className="p-6 rounded-xl bg-indigo-950/20 border border-indigo-500/30 space-y-4 shadow-lg shadow-indigo-950/40">
            <div className="flex items-center justify-between pb-3 border-b border-indigo-500/20">
              <span className="text-xs font-mono text-indigo-300 font-semibold">CareerOS Agentic Loop</span>
              <span className="text-[11px] font-mono text-emerald-400 font-bold">Goal → Plan → Assign → Act → Check → Adapt</span>
            </div>
            <div className="space-y-2 text-xs text-slate-200 leading-relaxed">
              <p className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Proactively pushes prioritized daily sprints without waiting to be asked.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Maintains an immutable multi-year career state and skill dependency graph.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Verifies proof-of-work and automatically evolves your public portfolio and resume.</span>
              </p>
              <p className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span>Dynamically adjusts when exams, hackathons, or life events intervene.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Visual Agent Loop: OBSERVE → PLAN → ACT → CHECK → ADAPT */}
        <div className="mb-14 p-6 rounded-2xl bg-[#090C15] border border-white/10">
          <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-6 text-center">
            The Continuous Agent Execution Loop
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { step: "01", name: "OBSERVE", desc: "Reads semester, GitHub velocity & target role" },
              { step: "02", name: "PLAN", desc: "Synthesizes milestone dependency graph" },
              { step: "03", name: "ACT", desc: "Dispatches 30-45m high-leverage mission" },
              { step: "04", name: "CHECK", desc: "Validates code execution & metric proof" },
              { step: "05", name: "ADAPT", desc: "Recalibrates schedule & updates resume" }
            ].map((node, i) => (
              <div 
                key={node.step} 
                className="p-4 rounded-xl bg-slate-900/60 border border-white/5 text-center relative group hover:border-indigo-500/40 transition-colors"
              >
                <div className="text-[10px] font-mono text-indigo-400 mb-1">STEP {node.step}</div>
                <div className="text-sm font-bold text-white mb-1">{node.name}</div>
                <div className="text-[11px] text-slate-400 leading-normal">{node.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Real Product Conversation UI */}
        <div className="rounded-2xl bg-[#0B0F19] border border-white/10 p-6 sm:p-8 max-w-3xl mx-auto space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-white">Autonomous Agent Conversation Preview</div>
                <div className="text-[11px] text-slate-400 font-mono">Interactive Demonstration</div>
              </div>
            </div>

            <button
              onClick={handleResetDemo}
              className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-4">
            {/* AI Message */}
            <div className="flex flex-col items-start">
              <div className="text-[10px] font-mono text-indigo-400 mb-1">CareerOS Agent · 08:30 AM</div>
              <div className="max-w-xl p-4 rounded-xl rounded-bl-none bg-slate-900 border border-white/10 text-xs text-slate-200 leading-relaxed space-y-2">
                <p>
                  "You're aiming for an AI/ML role. Python fundamentals are done, but data handling needs work. Next milestone: Pandas + NumPy. Today's task: ~40 min."
                </p>
                <div className="p-2.5 rounded-lg bg-black/40 border border-white/5 flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-300">Task: Implement Vectorized Matrix Ops</span>
                  <span className="text-indigo-400">40m</span>
                </div>
              </div>
            </div>

            {/* Student action / response */}
            <div className="flex flex-col items-end">
              <div className="text-[10px] font-mono text-slate-400 mb-1">Aman (Student) · 09:12 AM</div>
              
              {demoState === 'initial' ? (
                <button
                  onClick={handleMarkDone}
                  className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl rounded-br-none text-xs font-semibold flex items-center gap-2 shadow-md shadow-indigo-600/30 transition-all active:scale-95"
                >
                  <span>Click to respond: "Done."</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <div className="p-3.5 rounded-xl rounded-br-none bg-indigo-600 text-white text-xs font-medium">
                  "Done."
                </div>
              )}
            </div>

            {/* AI Confirmation Response */}
            {demoState !== 'initial' && (
              <div className="flex flex-col items-start animate-fade-in">
                <div className="text-[10px] font-mono text-emerald-400 mb-1">CareerOS Agent · 09:13 AM</div>
                <div className="max-w-xl p-4 rounded-xl rounded-bl-none bg-slate-900 border border-emerald-500/20 text-xs text-slate-200 leading-relaxed space-y-2">
                  <p className="flex items-center gap-2 text-emerald-400 font-semibold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Progress updated. Your next task is ready.</span>
                  </p>
                  <p className="text-slate-300">
                    "+80 Points added to Data Analysis & ML Foundations. Career Readiness now at 44%. Resuming scheduled sprint tomorrow morning."
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
