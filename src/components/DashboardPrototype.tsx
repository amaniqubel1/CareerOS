import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Map, 
  CheckSquare, 
  BarChart3, 
  FolderGit2, 
  Globe, 
  FileText, 
  Bot, 
  Settings, 
  Clock, 
  Play, 
  Check, 
  ExternalLink, 
  Sparkles, 
  ArrowUpRight, 
  Send, 
  ChevronRight, 
  Flame, 
  TrendingUp, 
  Github, 
  Award, 
  AlertCircle, 
  Search,
  Filter,
  Download,
  Copy,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';
import { 
  StudentProfile, 
  Task, 
  SkillItem, 
  Milestone, 
  ProjectProof, 
  ResumeData, 
  CopilotChatMessage 
} from '../data/careerOSData';

interface DashboardPrototypeProps {
  profile: StudentProfile;
  tasks: Task[];
  skills: SkillItem[];
  milestones: Milestone[];
  projects: ProjectProof[];
  resume: ResumeData;
  copilotMessages: CopilotChatMessage[];
  onToggleTask: (taskId: string) => void;
  onSendMessageToCopilot: (text: string) => void;
  onOpenOnboarding: () => void;
  isCopilotTyping: boolean;
}

export const DashboardPrototype: React.FC<DashboardPrototypeProps> = ({
  profile,
  tasks,
  skills,
  milestones,
  projects,
  resume,
  copilotMessages,
  onToggleTask,
  onSendMessageToCopilot,
  onOpenOnboarding,
  isCopilotTyping
}) => {
  const [activeTab, setActiveTab] = useState<
    'overview' | 'roadmap' | 'tasks' | 'skills' | 'projects' | 'portfolio' | 'resume' | 'copilot' | 'settings'
  >('overview');

  const [copilotInput, setCopilotInput] = useState('');
  const [taskCategoryFilter, setTaskCategoryFilter] = useState<'all' | 'project' | 'dsa' | 'core' | 'portfolio'>('all');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!copilotInput.trim()) return;
    onSendMessageToCopilot(copilotInput);
    setCopilotInput('');
  };

  const handleQuickPrompt = (promptText: string) => {
    onSendMessageToCopilot(promptText);
  };

  const handleCopyPortfolio = () => {
    navigator.clipboard?.writeText(`https://${profile.portfolioUrl}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const filteredTasks = taskCategoryFilter === 'all' 
    ? tasks 
    : tasks.filter(t => t.category === taskCategoryFilter);

  const completedCount = tasks.filter(t => t.status === 'completed').length;

  return (
    <section id="product" className="py-20 border-t border-white/5 relative bg-[#06080D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-indigo-400 mb-1">
              Live Product Canvas
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The CareerOS Workspace
            </h2>
            <p className="text-sm text-slate-400 mt-1 max-w-xl">
              An interactive prototype demonstrating the autonomous copilot interface. Switch views, tick tasks, and interact with the agent console.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOnboarding}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-indigo-300 hover:text-white bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/30 rounded-lg transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Change Profile / Goal</span>
            </button>
          </div>
        </div>

        {/* Outer SaaS Window Frame */}
        <div className="rounded-2xl bg-[#090C15] border border-white/10 shadow-2xl shadow-black/80 overflow-hidden flex flex-col md:flex-row min-h-[720px]">
          
          {/* Left Sidebar */}
          <aside className="w-full md:w-64 bg-[#0B0F1A] border-r border-white/5 p-4 flex flex-col justify-between shrink-0">
            <div className="space-y-6">
              
              {/* Workspace Header in Sidebar */}
              <div className="flex items-center gap-3 px-2 py-1.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                  OS
                </div>
                <div className="truncate">
                  <div className="text-xs font-bold text-white tracking-tight truncate">CareerOS Runtime</div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">{profile.branch}</div>
                </div>
              </div>

              {/* Navigation Items (Single line, active states with subtle background) */}
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'overview'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <LayoutDashboard className="w-4 h-4 shrink-0" />
                  <span className="truncate">Overview</span>
                </button>

                <button
                  onClick={() => setActiveTab('roadmap')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'roadmap'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Map className="w-4 h-4 shrink-0" />
                  <span className="truncate">My Roadmap</span>
                </button>

                <button
                  onClick={() => setActiveTab('tasks')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'tasks'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <CheckSquare className="w-4 h-4 shrink-0" />
                    <span className="truncate">Today's Tasks</span>
                  </div>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-slate-300">
                    {tasks.filter(t => t.status !== 'completed').length}
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('skills')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'skills'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <BarChart3 className="w-4 h-4 shrink-0" />
                  <span className="truncate">Skills Matrix</span>
                </button>

                <button
                  onClick={() => setActiveTab('projects')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'projects'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <FolderGit2 className="w-4 h-4 shrink-0" />
                  <span className="truncate">Projects</span>
                </button>

                <button
                  onClick={() => setActiveTab('portfolio')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'portfolio'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Globe className="w-4 h-4 shrink-0" />
                  <span className="truncate">Live Portfolio</span>
                </button>

                <button
                  onClick={() => setActiveTab('resume')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'resume'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <FileText className="w-4 h-4 shrink-0" />
                    <span className="truncate">Dynamic Resume</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    {resume.atsScore} ATS
                  </span>
                </button>

                <button
                  onClick={() => setActiveTab('copilot')}
                  className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'copilot'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3 truncate">
                    <Bot className="w-4 h-4 shrink-0 text-indigo-400" />
                    <span className="truncate">AI Copilot</span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </button>

                <button
                  onClick={() => setActiveTab('settings')}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                    activeTab === 'settings'
                      ? 'bg-indigo-600/90 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Settings className="w-4 h-4 shrink-0" />
                  <span className="truncate">Settings</span>
                </button>
              </nav>
            </div>

            {/* Bottom Student Profile Card in Sidebar */}
            <div className="pt-4 border-t border-white/5 space-y-2">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-slate-900/40">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-xs">
                  {profile.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="truncate">
                  <div className="text-xs font-semibold text-white truncate">{profile.name}</div>
                  <div className="text-[11px] text-slate-400 font-mono truncate">Year {profile.year} · Sem {profile.semester}</div>
                </div>
              </div>

              <div className="flex items-center justify-between px-2 text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1 text-amber-400">
                  <Flame className="w-3.5 h-3.5" />
                  {profile.activeStreak} Day Streak
                </span>
                <span className="text-emerald-400 font-bold">{profile.readinessScore}% Ready</span>
              </div>
            </div>
          </aside>

          {/* Main Dashboard Canvas Area */}
          <main className="flex-1 bg-[#07090F] flex flex-col overflow-y-auto">
            
            {/* Top Workspace Header Bar */}
            <header className="px-6 py-4 border-b border-white/5 flex flex-wrap items-center justify-between gap-4 bg-[#080B13]">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Target Role:
                </span>
                <span className="text-sm font-bold text-white bg-slate-800/80 px-2.5 py-1 rounded-md border border-white/5">
                  {profile.targetRole}
                </span>
                <span className="text-xs text-slate-400 hidden sm:inline">· Semester {profile.semester} active sprint</span>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="text-slate-400">Career Readiness:</span>
                  <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${profile.readinessScore}%` }}
                    />
                  </div>
                  <span className="font-bold text-emerald-400 tabular-nums">{profile.readinessScore}%</span>
                </div>
              </div>
            </header>

            {/* TAB CONTENT 1: OVERVIEW (Default required mock view) */}
            {activeTab === 'overview' && (
              <div className="p-6 space-y-6">
                
                {/* Greeting & Headline */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                      Good morning, {profile.name.split(' ')[0]}. Let's make progress today.
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      Your career operating system has scheduled 1 high-priority mission and updated your placement trajectory.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-950/40 border border-indigo-500/20 px-2.5 py-1 rounded">
                      Daily Target: {profile.dailyTargetMinutes}m
                    </span>
                  </div>
                </div>

                {/* Today's Mission Priority Card */}
                {tasks.length > 0 && (
                  <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-950/40 via-slate-900/60 to-slate-900/40 border border-indigo-500/25 relative overflow-hidden">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-mono text-indigo-300">
                          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                          <span>Today's Primary Mission</span>
                          <span className="text-slate-600">·</span>
                          <Clock className="w-3.5 h-3.5" />
                          <span>~{tasks[0].durationMinutes} min</span>
                          <span className="text-slate-600">·</span>
                          <span className="text-amber-400 font-medium">+{tasks[0].points} PTS</span>
                        </div>

                        <h4 className={`text-base font-bold transition-colors ${tasks[0].status === 'completed' ? 'line-through text-slate-400' : 'text-white'}`}>
                          {tasks[0].title}
                        </h4>

                        <p className="text-xs text-slate-300 max-w-2xl">
                          {tasks[0].description}
                        </p>
                      </div>

                      <div className="shrink-0 flex items-center gap-3">
                        <button
                          onClick={() => onToggleTask(tasks[0].id)}
                          className={`px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all ${
                            tasks[0].status === 'completed'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : 'bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white shadow-md shadow-indigo-600/30'
                          }`}
                        >
                          {tasks[0].status === 'completed' ? (
                            <>
                              <Check className="w-4 h-4" />
                              <span>Completed</span>
                            </>
                          ) : (
                            <>
                              <Play className="w-3.5 h-3.5 fill-white" />
                              <span>Start Task</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3 Metric Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl bg-[#0B0E18] border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400">Career Readiness Score</div>
                    <div className="text-2xl font-mono font-bold text-emerald-400 tabular-nums">
                      {profile.readinessScore}%
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Based on live market benchmark criteria
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0E18] border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400">Current Velocity</div>
                    <div className="text-2xl font-mono font-bold text-amber-400 tabular-nums">
                      {profile.activeStreak} Days
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Consecutive daily coding routine
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0E18] border border-white/5 space-y-1">
                    <div className="text-xs text-slate-400">Verified Proof of Work</div>
                    <div className="text-2xl font-mono font-bold text-indigo-400 tabular-nums">
                      {projects.filter(p => p.status === 'completed').length} Projects
                    </div>
                    <div className="text-[11px] text-slate-400">
                      Synchronized to dynamic resume
                    </div>
                  </div>
                </div>

                {/* Two Column Layout: Skill Bars & Milestones */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  
                  {/* Left Column: Skill Bars */}
                  <div className="lg:col-span-6 p-5 rounded-xl bg-[#0B0E18] border border-white/5 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <BarChart3 className="w-4 h-4 text-indigo-400" />
                        <span>Core Competencies</span>
                      </h4>
                      <button 
                        onClick={() => setActiveTab('skills')}
                        className="text-xs text-indigo-400 hover:text-white transition-colors"
                      >
                        Detailed Matrix →
                      </button>
                    </div>

                    <div className="space-y-3.5">
                      {skills.slice(0, 4).map(skill => (
                        <div key={skill.id} className="space-y-1">
                          <div className="flex justify-between text-xs">
                            <span className="text-slate-200 font-medium">{skill.name}</span>
                            <span className="font-mono text-indigo-300 font-semibold tabular-nums">
                              {skill.percentage}%
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                            <div 
                              className="h-full bg-indigo-500 rounded-full transition-all duration-500" 
                              style={{ width: `${skill.percentage}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 text-[11px] text-slate-400 font-mono">
                      Target Role Benchmark: 85% average across core competencies.
                    </div>
                  </div>

                  {/* Right Column: Key Milestones */}
                  <div className="lg:col-span-6 p-5 rounded-xl bg-[#0B0E18] border border-white/5 space-y-4">
                    <div className="flex items-center justify-between pb-2 border-b border-white/5">
                      <h4 className="text-sm font-bold text-white flex items-center gap-2">
                        <Map className="w-4 h-4 text-indigo-400" />
                        <span>Semester Milestones</span>
                      </h4>
                      <button 
                        onClick={() => setActiveTab('roadmap')}
                        className="text-xs text-indigo-400 hover:text-white transition-colors"
                      >
                        Full 4-Year View →
                      </button>
                    </div>

                    <div className="space-y-3">
                      {/* Milestone 1: Done */}
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/40 border border-white/5">
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-white">Python Fundamentals</div>
                          <div className="text-[11px] text-slate-400">Semester 1 & 2 · Syntax, OOP & Unit Tests Verified</div>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400">DONE</span>
                      </div>

                      {/* Milestone 2: Current */}
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20">
                        <div className="w-6 h-6 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0 mt-0.5 animate-pulse">
                          <TrendingUp className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-white">Data Analysis & Predictive ML</div>
                          <div className="text-[11px] text-indigo-300">Semester 4 (Active Milestone · 45% Complete)</div>
                        </div>
                        <span className="text-[11px] font-mono text-indigo-400 font-bold">ACTIVE</span>
                      </div>

                      {/* Milestone 3: Upcoming */}
                      <div className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/20 border border-white/5 opacity-70">
                        <div className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 flex items-center justify-center shrink-0 mt-0.5">
                          <Clock className="w-3.5 h-3.5" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-semibold text-slate-300">ML Foundations & Deep Learning</div>
                          <div className="text-[11px] text-slate-500">Semester 5 · Neural Networks & PyTorch</div>
                        </div>
                        <span className="text-[11px] font-mono text-slate-500">UPCOMING</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            )}

            {/* TAB CONTENT 2: MY ROADMAP (4 Years / 8 Semesters) */}
            {activeTab === 'roadmap' && (
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">4-Year Engineering Career Roadmap</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Tailored specifically for {profile.branch} aiming for {profile.targetRole}.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-indigo-400">
                    Active Sprint: Year {profile.year}, Semester {profile.semester}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {milestones.map((m) => (
                    <div 
                      key={m.id}
                      className={`p-5 rounded-xl border transition-all ${
                        m.status === 'completed'
                          ? 'bg-slate-900/40 border-emerald-500/20'
                          : m.status === 'in_progress'
                            ? 'bg-indigo-950/30 border-indigo-500/40 shadow-lg shadow-indigo-950/50'
                            : 'bg-[#0B0E18] border-white/5 opacity-80'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-mono text-slate-400">{m.phase}</span>
                        <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded ${
                          m.status === 'completed'
                            ? 'bg-emerald-500/10 text-emerald-400'
                            : m.status === 'in_progress'
                              ? 'bg-indigo-500/20 text-indigo-300'
                              : 'bg-white/5 text-slate-400'
                        }`}>
                          {m.status === 'completed' ? 'COMPLETED' : m.status === 'in_progress' ? 'ACTIVE SPRINT' : 'UPCOMING'}
                        </span>
                      </div>

                      <h4 className="text-sm font-bold text-white mb-1.5">{m.title}</h4>
                      <p className="text-xs text-slate-300 mb-3">{m.deliverable}</p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {m.keySkills.map((k, i) => (
                          <span key={i} className="text-[11px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded">
                            {k}
                          </span>
                        ))}
                      </div>

                      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs font-mono">
                        <span className="text-slate-400">{m.completedTasks} / {m.tasksCount} Tasks Finished</span>
                        <span className="text-indigo-400">{m.progressPercentage}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: TODAY'S TASKS */}
            {activeTab === 'tasks' && (
              <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Task Execution Queue</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Autonomous copilot assigns high-impact micro-missions aligned with your milestone.
                    </p>
                  </div>

                  {/* Filter tabs */}
                  <div className="flex items-center gap-1 p-1 bg-slate-900 border border-white/5 rounded-lg text-xs">
                    {(['all', 'project', 'dsa', 'core', 'portfolio'] as const).map(cat => (
                      <button
                        key={cat}
                        onClick={() => setTaskCategoryFilter(cat)}
                        className={`px-2.5 py-1 rounded capitalize font-medium transition-colors ${
                          taskCategoryFilter === cat ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Task List */}
                <div className="space-y-3">
                  {filteredTasks.map(task => (
                    <div 
                      key={task.id}
                      className={`p-4 rounded-xl border transition-all flex items-start justify-between gap-4 ${
                        task.status === 'completed' 
                          ? 'bg-slate-900/30 border-white/5 opacity-70' 
                          : 'bg-[#0B0E18] border-white/10 hover:border-indigo-500/30'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <button
                          onClick={() => onToggleTask(task.id)}
                          className={`mt-0.5 w-5 h-5 rounded flex items-center justify-center transition-colors ${
                            task.status === 'completed'
                              ? 'bg-emerald-500 text-slate-950 font-bold'
                              : 'border border-slate-600 hover:border-indigo-400'
                          }`}
                        >
                          {task.status === 'completed' && <Check className="w-3.5 h-3.5" />}
                        </button>

                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-[11px] font-mono">
                            <span className="text-indigo-400 uppercase">{task.category}</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-slate-400">{task.durationMinutes} min</span>
                            <span className="text-slate-600">·</span>
                            <span className="text-amber-400">+{task.points} PTS</span>
                          </div>

                          <div className={`text-sm font-semibold ${task.status === 'completed' ? 'line-through text-slate-400' : 'text-white'}`}>
                            {task.title}
                          </div>

                          <div className="text-xs text-slate-400 max-w-xl">
                            {task.description}
                          </div>

                          <div className="text-[11px] text-slate-400 font-mono">
                            Milestone: {task.milestoneTitle}
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={() => onToggleTask(task.id)}
                        className={`shrink-0 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                          task.status === 'completed'
                            ? 'bg-slate-800 text-slate-400'
                            : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                        }`}
                      >
                        {task.status === 'completed' ? 'Completed' : 'Mark Done'}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: SKILLS MATRIX */}
            {activeTab === 'skills' && (
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Skill Gap Intelligence</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Benchmarked against current tier-1 job openings for {profile.targetRole}.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">
                    Live Role Match: 68%
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {skills.map(skill => (
                    <div key={skill.id} className="p-4 rounded-xl bg-[#0B0E18] border border-white/5 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs font-mono text-slate-400">{skill.category}</div>
                          <div className="text-sm font-bold text-white">{skill.name}</div>
                        </div>
                        <div className="text-right">
                          <span className={`text-[11px] font-mono px-2 py-0.5 rounded ${
                            skill.level === 'Strong' ? 'bg-emerald-500/10 text-emerald-400' :
                            skill.level === 'Intermediate' ? 'bg-blue-500/10 text-blue-400' :
                            skill.level === 'Beginner' ? 'bg-amber-500/10 text-amber-400' :
                            'bg-slate-800 text-slate-400'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-xs font-mono">
                          <span className="text-slate-400">Current: {skill.percentage}%</span>
                          <span className="text-indigo-400">Target: {skill.targetPercentage}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-800 overflow-hidden relative">
                          <div 
                            className="h-full bg-indigo-500 rounded-full"
                            style={{ width: `${skill.percentage}%` }}
                          />
                        </div>
                      </div>

                      {skill.isPriorityGap && (
                        <div className="text-[11px] text-amber-400 flex items-center gap-1.5 pt-1">
                          <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                          <span>Priority Gap: Assigned to current semester sprint</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: PROJECTS (Proof of Work) */}
            {activeTab === 'projects' && (
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">Proof-of-Work Projects</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Substantive software artifacts with live demos, tests, and clean GitHub repositories.
                    </p>
                  </div>
                  <div className="text-xs font-mono text-emerald-400">
                    {projects.filter(p => p.status === 'completed').length} Verified Complete
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {projects.map(proj => (
                    <div key={proj.id} className="p-5 rounded-xl bg-[#0B0E18] border border-white/5 space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-base font-bold text-white">{proj.title}</h4>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              proj.status === 'completed' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                            }`}>
                              {proj.status === 'completed' ? 'COMPLETED' : 'IN DEVELOPMENT'}
                            </span>
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5">{proj.tagline}</div>
                        </div>

                        <div className="flex items-center gap-2">
                          <a 
                            href={proj.githubUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-slate-300 hover:text-white bg-slate-800 rounded-md transition-colors"
                          >
                            <Github className="w-3.5 h-3.5" />
                            <span>Code</span>
                          </a>
                          <a 
                            href={proj.liveDemoUrl} 
                            target="_blank" 
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 px-3 py-1.5 text-xs text-white bg-indigo-600 hover:bg-indigo-500 rounded-md transition-colors"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Live Demo</span>
                          </a>
                        </div>
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-1.5">
                        {proj.techStack.map((tech, i) => (
                          <span key={i} className="text-[11px] font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-500/20 px-2 py-0.5 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Verified Metric */}
                      <div className="p-3 rounded-lg bg-slate-900/60 border border-white/5 text-xs text-slate-300 flex items-center justify-between">
                        <span className="text-slate-400">Verified Metric:</span>
                        <span className="font-mono text-emerald-400 font-semibold">{proj.verifiedMetric}</span>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-1">
                        {proj.highlights.map((h, i) => (
                          <div key={i} className="text-xs text-slate-400 flex items-start gap-2">
                            <span className="text-indigo-400 font-bold">·</span>
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT 6: LIVE PORTFOLIO */}
            {activeTab === 'portfolio' && (
              <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Live Student Portfolio</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Auto-generated public portfolio updated in real-time as tasks and projects complete.
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyPortfolio}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors"
                    >
                      {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedLink ? 'Copied!' : 'Copy Link'}</span>
                    </button>
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-950/40 px-2.5 py-1.5 rounded-lg border border-indigo-500/20">
                      careeros.me/aman-sharma
                    </span>
                  </div>
                </div>

                {/* Portfolio Preview Card */}
                <div className="p-6 rounded-2xl bg-[#0B0F19] border border-white/10 space-y-6">
                  <div className="flex items-center gap-4 pb-6 border-b border-white/5">
                    <div className="w-14 h-14 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                      AS
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">{profile.name}</h4>
                      <p className="text-xs text-indigo-400 font-mono">
                        {profile.branch} · Semester {profile.semester}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        Aspiring {profile.targetRole} · Building verified systems
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-mono uppercase text-slate-400 mb-3">Featured Proofs</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projects.slice(0, 2).map(p => (
                        <div key={p.id} className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                          <div className="text-sm font-semibold text-white">{p.title}</div>
                          <div className="text-xs text-slate-400">{p.tagline}</div>
                          <div className="text-[11px] font-mono text-emerald-400">{p.verifiedMetric}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 7: DYNAMIC RESUME */}
            {activeTab === 'resume' && (
              <div className="p-6 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-white">Dynamic ATS-Optimized Resume</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Automatically syncs verified tasks and project metrics directly into clean resume bullets.
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1.5 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>ATS Score: {resume.atsScore}/100</span>
                    </div>
                    <button 
                      onClick={() => alert("Resume exported! In production, this compiles a clean, single-page LaTeX PDF.")}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Export PDF</span>
                    </button>
                  </div>
                </div>

                {/* Simulated Clean One-Page Resume Sheet */}
                <div className="p-8 rounded-xl bg-white text-slate-900 font-sans shadow-xl max-w-3xl mx-auto space-y-5">
                  <div className="text-center border-b pb-4">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-950">{resume.fullName}</h2>
                    <div className="text-xs text-slate-600 font-medium mt-1">
                      {resume.title}
                    </div>
                    <div className="text-[11px] text-slate-500 font-mono mt-1 flex justify-center gap-3">
                      <span>{resume.email}</span>
                      <span>·</span>
                      <span>{resume.github}</span>
                      <span>·</span>
                      <span>{resume.portfolio}</span>
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                      Education
                    </h5>
                    {resume.education.map((edu, idx) => (
                      <div key={idx} className="text-xs mb-2">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>{edu.institutionOrCompany}</span>
                          <span className="font-mono text-[11px]">{edu.period}</span>
                        </div>
                        <div className="text-slate-600 italic">{edu.roleOrDegree}</div>
                        <ul className="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                          {edu.bulletPoints.map((bp, i) => <li key={i}>{bp}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                      Technical Projects (Verified Proof of Work)
                    </h5>
                    {resume.projects.map((proj, idx) => (
                      <div key={idx} className="text-xs mb-3">
                        <div className="flex justify-between font-bold text-slate-800">
                          <span>{proj.name} | <span className="font-normal text-slate-600">{proj.tech}</span></span>
                          <span className="font-mono text-[11px] text-indigo-700">{proj.link}</span>
                        </div>
                        <ul className="list-disc list-inside text-slate-700 mt-1 space-y-0.5">
                          {proj.bullets.map((b, i) => <li key={i}>{b}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div>
                    <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-300 pb-1 mb-2">
                      Technical Skills
                    </h5>
                    <div className="text-xs space-y-1">
                      {resume.skillsGrouped.map((sg, idx) => (
                        <div key={idx} className="flex">
                          <span className="font-semibold text-slate-800 w-44 shrink-0">{sg.category}:</span>
                          <span className="text-slate-700">{sg.items.join(', ')}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 8: AI COPILOT (Working Chat Console) */}
            {activeTab === 'copilot' && (
              <div className="flex-1 flex flex-col p-6 min-h-[500px]">
                <div className="flex items-center justify-between pb-4 border-b border-white/5">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-600/30 text-indigo-400 flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">CareerOS Agent Engine</h4>
                      <p className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Autonomous · Monitoring Semester 4 Milestones
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-slate-400">Context: {profile.targetRole}</span>
                </div>

                {/* Chat message history */}
                <div className="flex-1 py-4 space-y-4 overflow-y-auto">
                  {copilotMessages.map(msg => (
                    <div 
                      key={msg.id} 
                      className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                    >
                      <div className="text-[10px] font-mono text-slate-400 mb-1 px-1">
                        {msg.sender === 'user' ? 'You' : 'CareerOS Copilot'} · {msg.timestamp}
                      </div>

                      <div 
                        className={`max-w-xl p-3.5 rounded-xl text-xs leading-relaxed ${
                          msg.sender === 'user' 
                            ? 'bg-indigo-600 text-white rounded-br-none' 
                            : 'bg-[#0B0F1A] border border-white/10 text-slate-200 rounded-bl-none'
                        }`}
                      >
                        {msg.text}
                      </div>

                      {/* Interactive suggestions from Copilot */}
                      {msg.actionSuggestions && msg.actionSuggestions.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {msg.actionSuggestions.map((act, i) => (
                            <button
                              key={i}
                              onClick={() => {
                                if (act.actionKey === 'show_task') setActiveTab('tasks');
                                if (act.actionKey === 'show_skills') setActiveTab('skills');
                                if (act.actionKey === 'show_resume') setActiveTab('resume');
                                if (act.actionKey === 'start_timer') {
                                  alert("40-Minute Sprint Timer Started. Stay in flow!");
                                }
                              }}
                              className="px-2.5 py-1 text-[11px] font-mono text-indigo-300 bg-indigo-950/40 hover:bg-indigo-900/60 border border-indigo-500/20 rounded-md transition-colors"
                            >
                              → {act.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isCopilotTyping && (
                    <div className="flex items-center gap-2 text-xs font-mono text-slate-400 p-2">
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
                      <span>Copilot is formulating next execution step...</span>
                    </div>
                  )}
                </div>

                {/* Quick Prompts */}
                <div className="py-2 flex flex-wrap gap-2 border-t border-white/5">
                  <button
                    onClick={() => handleQuickPrompt("What specific projects should I build this semester for AI/ML roles?")}
                    className="text-[11px] text-slate-400 hover:text-white bg-slate-900/60 px-2.5 py-1 rounded border border-white/5 transition-colors"
                  >
                    + Recommended Projects
                  </button>
                  <button
                    onClick={() => handleQuickPrompt("Audit my current skills against Google and NVIDIA campus benchmarks.")}
                    className="text-[11px] text-slate-400 hover:text-white bg-slate-900/60 px-2.5 py-1 rounded border border-white/5 transition-colors"
                  >
                    + Benchmark Audit
                  </button>
                  <button
                    onClick={() => handleQuickPrompt("I have exams in 10 days. Adjust my daily workload.")}
                    className="text-[11px] text-slate-400 hover:text-white bg-slate-900/60 px-2.5 py-1 rounded border border-white/5 transition-colors"
                  >
                    + Exam Mode Adjustment
                  </button>
                </div>

                {/* Input form */}
                <form onSubmit={handleSendChat} className="pt-2 flex items-center gap-2">
                  <input
                    type="text"
                    value={copilotInput}
                    onChange={(e) => setCopilotInput(e.target.value)}
                    placeholder="Ask Copilot or command: 'Reschedule week 4' / 'Audit GitHub'..."
                    className="flex-1 bg-slate-900/90 border border-white/10 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send</span>
                  </button>
                </form>
              </div>
            )}

            {/* TAB CONTENT 9: SETTINGS */}
            {activeTab === 'settings' && (
              <div className="p-6 space-y-6 max-w-2xl">
                <div>
                  <h3 className="text-xl font-bold text-white">Student & Career Configuration</h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Adjust your academic parameters and target company preferences.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-[#0B0E18] border border-white/5 space-y-2">
                    <label className="text-xs font-semibold text-white">Branch of Engineering</label>
                    <input 
                      type="text" 
                      value={profile.branch} 
                      readOnly 
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-300"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0E18] border border-white/5 space-y-2">
                    <label className="text-xs font-semibold text-white">Target Dream Role</label>
                    <input 
                      type="text" 
                      value={profile.targetRole} 
                      readOnly 
                      className="w-full bg-slate-900 border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-300"
                    />
                  </div>

                  <div className="p-4 rounded-xl bg-[#0B0E18] border border-white/5 space-y-2">
                    <label className="text-xs font-semibold text-white">Target Placement Companies</label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {profile.targetCompanies.map((c, idx) => (
                        <span key={idx} className="text-xs font-mono text-indigo-300 bg-indigo-950/40 border border-indigo-500/20 px-2.5 py-1 rounded">
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={onOpenOnboarding}
                    className="w-full py-2.5 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                  >
                    Rerun Onboarding Wizard
                  </button>
                </div>
              </div>
            )}

          </main>

        </div>

      </div>
    </section>
  );
};
