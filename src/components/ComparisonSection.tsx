import React from 'react';
import { Check, X } from 'lucide-react';

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      capability: "Personalized 4-Year Roadmap",
      genericAI: "Generic 1-page advice that repeats textbook course titles without semester sequence.",
      careerOS: "Dynamic 8-semester milestone graph personalized to college branch, current year, and target role.",
    },
    {
      capability: "Long-Term State Memory",
      genericAI: "Forgotten as soon as the browser tab closes or context window rolls over.",
      careerOS: "Persistent, immutable career state engine tracking every solved problem, PR, and milestone.",
    },
    {
      capability: "Daily Task Dispatch",
      genericAI: "Passive. Waits for user to ask 'What should I do today?' with zero context.",
      careerOS: "Proactive. Dispatches 30-45m high-leverage micro-sprints every morning aligned with milestones.",
    },
    {
      capability: "Progress Tracking & Velocity",
      genericAI: "None. No concept of completion percentage or placement countdown.",
      careerOS: "Live Career Readiness Index (0-100%) tracking streak velocity and milestone completion.",
    },
    {
      capability: "Adaptive Scheduling (Exams/Burnout)",
      genericAI: "Unaware of college schedules, midterm exams, or student burnout.",
      careerOS: "Auto-rebalances workload during exams and reorganizes sprints dynamically with zero loss.",
    },
    {
      capability: "Proof-of-Work Portfolio Tracking",
      genericAI: "Generates code snippets into chat bubbles without hosting or verification.",
      careerOS: "Publishes live verified portfolio artifacts at careeros.me with commit hashes and live URLs.",
    },
    {
      capability: "Continuous Resume Evolution",
      genericAI: "Rewrites raw text only when prompted, often hallucinating unverifiable metrics.",
      careerOS: "Auto-syncs verified project metrics into ATS-optimized bullet points directly from code execution.",
    },
    {
      capability: "Skill Gap Benchmark vs Real Jobs",
      genericAI: "Generic list of popular keywords without understanding current market shortages.",
      careerOS: "Deep diagnostic radar calibrated against active tier-1 engineering hiring criteria.",
    }
  ];

  return (
    <section className="py-24 border-t border-white/5 relative bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
            Architectural Differentiation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Why this isn't just ChatGPT.
          </h2>
          <p className="text-base text-slate-300 leading-relaxed max-w-2xl">
            A conversational chatbot is a question answering tool. CareerOS is a persistent, stateful execution engine built specifically for the 4-year engineering degree.
          </p>
        </div>

        {/* Elegant Comparison Table */}
        <div className="rounded-2xl bg-[#090C15] border border-white/10 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-[#0E1322]">
                  <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-slate-400 w-1/4">
                    Capability
                  </th>
                  <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-slate-400 w-[37.5%]">
                    Generic AI / Chatbots
                  </th>
                  <th className="py-4 px-6 text-xs font-mono uppercase tracking-wider text-indigo-400 w-[37.5%] bg-indigo-950/30">
                    <span className="flex items-center gap-1.5 font-bold">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      CareerOS Copilot Engine
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs sm:text-sm">
                {comparisonRows.map((row, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    
                    <td className="py-4 px-6 font-semibold text-white">
                      {row.capability}
                    </td>

                    <td className="py-4 px-6 text-slate-400 leading-relaxed">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.genericAI}</span>
                      </div>
                    </td>

                    <td className="py-4 px-6 text-slate-200 leading-relaxed bg-indigo-950/15">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="font-medium text-white">{row.careerOS}</span>
                      </div>
                    </td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
