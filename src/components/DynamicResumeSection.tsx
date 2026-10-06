import React, { useState } from 'react';
import { FileText, ArrowRight, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';
import { INITIAL_RESUME_DATA } from '../data/careerOSData';

interface DynamicResumeSectionProps {
  onOpenOnboarding: () => void;
  onJumpToDashboardResume: () => void;
}

export const DynamicResumeSection: React.FC<DynamicResumeSectionProps> = ({
  onOpenOnboarding,
  onJumpToDashboardResume
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'sync'>('preview');

  return (
    <section className="py-24 border-t border-white/5 relative bg-[#07090E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
              Zero-Friction Documentation
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Your resume should grow with you.
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              As you complete projects and build skills, your career profile continuously collects the evidence for a stronger resume. No frantic formatting before campus drives.
            </p>
          </div>

          <button
            onClick={onJumpToDashboardResume}
            className="inline-flex items-center gap-2 px-5 py-3 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg shadow-md shadow-indigo-600/30 transition-colors shrink-0"
          >
            <span>Build My Resume</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Dynamic Resume Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Explainer & Auto-Sync Stream */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-4">
              <h3 className="text-lg font-bold text-white">How Continuous Resume Synthesis Works</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Traditional resumes are static documents students invent in 4th year based on faded memories. CareerOS compiles your resume dynamically directly from verified task commits, benchmarked metrics, and GitHub telemetry.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Auto-Formatted Bullet Points</div>
                    <div className="text-[11px] text-slate-400">Action verb + Technical mechanism + Quantified outcome (Google XYZ formula).</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0 text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">ATS Algorithm Calibration</div>
                    <div className="text-[11px] text-slate-400">Parses against modern applicant tracking systems to ensure 85+ score pass rate.</div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-900/60 border border-white/5 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-md bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0 text-xs">
                    ✓
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">Live Artifact Verification</div>
                    <div className="text-[11px] text-slate-400">Embeds verified GitHub commit hashes and working demo links directly.</div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-2">
                  <span>ATS Benchmark Rating</span>
                  <span className="text-emerald-400 font-bold">{INITIAL_RESUME_DATA.atsScore} / 100</span>
                </div>
                <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                  <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${INITIAL_RESUME_DATA.atsScore}%` }} />
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual: Resume Preview UI (Education · Skills · Projects · Experience · Achievements) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-white text-slate-900 p-6 sm:p-8 shadow-2xl space-y-5 border border-slate-200">
              
              {/* Header */}
              <div className="border-b border-slate-300 pb-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-xl font-extrabold text-slate-950">{INITIAL_RESUME_DATA.fullName}</h4>
                  <span className="text-[10px] font-mono text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 font-semibold">
                    CAREEROS AUTO-SYNCED
                  </span>
                </div>
                <div className="text-xs font-medium text-slate-700 mt-0.5">{INITIAL_RESUME_DATA.title}</div>
                <div className="text-[11px] text-slate-500 font-mono mt-1 flex flex-wrap gap-2">
                  <span>{INITIAL_RESUME_DATA.email}</span>
                  <span>·</span>
                  <span>{INITIAL_RESUME_DATA.github}</span>
                  <span>·</span>
                  <span>{INITIAL_RESUME_DATA.portfolio}</span>
                </div>
              </div>

              {/* Education */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Education
                </div>
                {INITIAL_RESUME_DATA.education.map((edu, i) => (
                  <div key={i} className="text-xs space-y-0.5">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>{edu.institutionOrCompany}</span>
                      <span className="font-mono text-[11px]">{edu.period}</span>
                    </div>
                    <div className="text-slate-600 italic">{edu.roleOrDegree}</div>
                    <div className="text-slate-700 text-[11px]">{edu.bulletPoints[0]}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Technical Skills & Tooling
                </div>
                <div className="text-xs space-y-1">
                  {INITIAL_RESUME_DATA.skillsGrouped.map((s, i) => (
                    <div key={i} className="flex text-[11px]">
                      <span className="font-semibold text-slate-800 w-36 shrink-0">{s.category}:</span>
                      <span className="text-slate-700">{s.items.join(', ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Projects */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Verified Technical Projects
                </div>
                <div className="space-y-3">
                  {INITIAL_RESUME_DATA.projects.map((p, i) => (
                    <div key={i} className="text-xs space-y-1">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>{p.name} <span className="font-normal text-slate-600">({p.tech})</span></span>
                        <span className="font-mono text-[10px] text-indigo-700">{p.link}</span>
                      </div>
                      <ul className="list-disc list-inside text-slate-700 text-[11px] space-y-0.5">
                        {p.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience / Open Source */}
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-950 border-b border-slate-300 pb-1 mb-2">
                  Open Source & Engineering Experience
                </div>
                {INITIAL_RESUME_DATA.experience.map((exp, i) => (
                  <div key={i} className="text-xs space-y-0.5">
                    <div className="flex justify-between font-bold text-slate-800">
                      <span>{exp.institutionOrCompany} — {exp.roleOrDegree}</span>
                      <span className="font-mono text-[11px]">{exp.period}</span>
                    </div>
                    <ul className="list-disc list-inside text-slate-700 text-[11px] space-y-0.5">
                      {exp.bulletPoints.map((b, idx) => <li key={idx}>{b}</li>)}
                    </ul>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
