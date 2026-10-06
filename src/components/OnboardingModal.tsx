import React, { useState } from 'react';
import { 
  X, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Loader2, 
  Terminal, 
  Briefcase, 
  GraduationCap, 
  Layers, 
  Code,
  CheckCircle2
} from 'lucide-react';
import { 
  BRANCH_OPTIONS, 
  CAREER_GOALS_OPTIONS, 
  StudentProfile, 
  SkillItem, 
  Milestone, 
  Task 
} from '../data/careerOSData';

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCompleteOnboarding: (
    updatedProfile: Partial<StudentProfile>,
    updatedSkills?: SkillItem[],
    updatedMilestones?: Milestone[],
    updatedTasks?: Task[]
  ) => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  onClose,
  onCompleteOnboarding
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedBranch, setSelectedBranch] = useState<string>(BRANCH_OPTIONS[0]);
  const [selectedYear, setSelectedYear] = useState<number>(2);
  const [selectedGoalId, setSelectedGoalId] = useState<string>(CAREER_GOALS_OPTIONS[0].id);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([
    "Python", "Git & GitHub", "C++", "Data Structures"
  ]);

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);

  if (!isOpen) return null;

  const availableSkillsPool = [
    "Python", "C++", "JavaScript", "TypeScript", "Java", 
    "Git & GitHub", "SQL & Databases", "Data Structures", 
    "React / Next.js", "Docker", "Machine Learning", 
    "Linux CLI", "FastAPI / Node.js", "Cloud (AWS/GCP)"
  ];

  const toggleSkill = (skill: string) => {
    if (selectedSkills.includes(skill)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skill));
    } else {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleStartGeneration = () => {
    setIsGenerating(true);
    setGenerationStep(1);

    const timer1 = setTimeout(() => setGenerationStep(2), 700);
    const timer2 = setTimeout(() => setGenerationStep(3), 1500);
    const timer3 = setTimeout(() => setGenerationStep(4), 2300);

    const timerFinal = setTimeout(() => {
      const selectedGoal = CAREER_GOALS_OPTIONS.find(g => g.id === selectedGoalId) || CAREER_GOALS_OPTIONS[0];
      
      const newSemester = selectedYear === 1 ? 2 : selectedYear === 2 ? 4 : selectedYear === 3 ? 6 : 7;
      
      onCompleteOnboarding({
        branch: selectedBranch,
        year: selectedYear,
        semester: newSemester,
        targetRole: selectedGoal.title,
        readinessScore: selectedYear === 1 ? 22 : selectedYear === 2 ? 44 : selectedYear === 3 ? 64 : 82
      });

      setIsGenerating(false);
      onClose();
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timerFinal);
    };
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      
      <div className="relative w-full max-w-2xl rounded-2xl bg-[#090C16] border border-white/10 shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header Bar */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0B0F1C]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center text-white">
              <Terminal className="w-3.5 h-3.5" />
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-white">
              CAREEROS SETUP ENGINE · STEP 0{step} OF 04
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          
          {isGenerating ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 border border-indigo-500/40 flex items-center justify-center text-indigo-400 relative">
                <Loader2 className="w-8 h-8 animate-spin" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  Initializing Your Career Operating System
                </h3>
                <p className="text-xs text-slate-400 max-w-md font-mono">
                  Synthesizing university curriculum with 2026 tech hiring benchmarks...
                </p>
              </div>

              {/* Step checklist */}
              <div className="w-full max-w-md bg-slate-900/60 p-4 rounded-xl border border-white/5 space-y-2.5 text-left font-mono text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Parsed academic branch: {selectedBranch}</span>
                </div>

                <div className={`flex items-center gap-2 ${generationStep >= 2 ? 'text-slate-300' : 'text-slate-500'}`}>
                  {generationStep >= 2 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <Loader2 className="w-4 h-4 animate-spin shrink-0 text-indigo-400" />
                  )}
                  <span>Mapping skill gaps against 2026 target role requirements...</span>
                </div>

                <div className={`flex items-center gap-2 ${generationStep >= 3 ? 'text-slate-300' : 'text-slate-500'}`}>
                  {generationStep >= 3 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-slate-600 shrink-0" />
                  )}
                  <span>Synthesizing semester milestones & daily missions...</span>
                </div>

                <div className={`flex items-center gap-2 ${generationStep >= 4 ? 'text-emerald-400 font-bold' : 'text-slate-500'}`}>
                  {generationStep >= 4 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-slate-600 shrink-0" />
                  )}
                  <span>CareerOS Kernel ready. Launching workspace...</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* STEP 1: Branch Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      What is your engineering branch?
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      CareerOS accounts for your university syllabus to prevent academic schedule conflicts.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BRANCH_OPTIONS.map((branch) => (
                      <button
                        key={branch}
                        onClick={() => setSelectedBranch(branch)}
                        className={`p-4 rounded-xl text-left border transition-all ${
                          selectedBranch === branch
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-950'
                            : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-semibold">{branch}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Current College Year */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Which year of college are you currently in?
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Our copilot tailors your urgency — from foundational exploration to intense placement sprints.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { yr: 1, label: "1st Year", sems: "Semesters 1 & 2", desc: "Foundations & Exploration" },
                      { yr: 2, label: "2nd Year", sems: "Semesters 3 & 4", desc: "Skills & Proof of Work" },
                      { yr: 3, label: "3rd Year", sems: "Semesters 5 & 6", desc: "Internships & Placements" },
                      { yr: 4, label: "4th Year", sems: "Semesters 7 & 8", desc: "Offers & Career Launch" }
                    ].map((item) => (
                      <button
                        key={item.yr}
                        onClick={() => setSelectedYear(item.yr)}
                        className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                          selectedYear === item.yr
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-950'
                            : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/10'
                        }`}
                      >
                        <div>
                          <div className="font-mono text-xs text-indigo-400 font-bold">{item.label}</div>
                          <div className="text-[11px] text-slate-400 mt-0.5">{item.sems}</div>
                        </div>
                        <div className="text-[11px] text-slate-300 mt-4 leading-snug">
                          {item.desc}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 3: Target Career Goal */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      What is your target career aspiration?
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Calibrates the skill radar, milestone dependencies, and assigned projects.
                    </p>
                  </div>

                  <div className="space-y-3 max-h-[320px] overflow-y-auto pr-1">
                    {CAREER_GOALS_OPTIONS.map((goal) => (
                      <button
                        key={goal.id}
                        onClick={() => setSelectedGoalId(goal.id)}
                        className={`w-full p-4 rounded-xl text-left border transition-all flex items-start justify-between gap-3 ${
                          selectedGoalId === goal.id
                            ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-950'
                            : 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-white/10'
                        }`}
                      >
                        <div className="space-y-1">
                          <div className="text-sm font-bold text-white">{goal.title}</div>
                          <div className="text-xs text-slate-400">{goal.focus}</div>
                          <div className="flex flex-wrap gap-1 pt-1">
                            {goal.targetSkills.slice(0, 4).map((ts, i) => (
                              <span key={i} className="text-[10px] font-mono text-indigo-300 bg-white/5 px-2 py-0.5 rounded">
                                {ts}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                            {goal.medianPackage}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 4: Current Skills Check */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight">
                      Select skills you currently have some familiarity with:
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Helps the agent skip redundant beginner tutorials and establish accurate day-one velocity.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 max-h-[260px] overflow-y-auto">
                    {availableSkillsPool.map((skill) => {
                      const isSelected = selectedSkills.includes(skill);
                      return (
                        <button
                          key={skill}
                          onClick={() => toggleSkill(skill)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                              : 'bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:border-white/10'
                          }`}
                        >
                          {isSelected && <Check className="w-3.5 h-3.5" />}
                          <span>{skill}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Navigation Actions Footer */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                {step > 1 ? (
                  <button
                    onClick={() => setStep(step - 1)}
                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}

                {step < 4 ? (
                  <button
                    onClick={() => setStep(step + 1)}
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-sm transition-colors"
                  >
                    <span>Continue</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                ) : (
                  <button
                    onClick={handleStartGeneration}
                    className="inline-flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-all font-mono"
                  >
                    <Sparkles className="w-4 h-4 text-indigo-200" />
                    <span>Generate My Career Roadmap</span>
                  </button>
                )}
              </div>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
