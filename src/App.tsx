/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  INITIAL_STUDENT_PROFILE, 
  INITIAL_TASKS, 
  INITIAL_SKILLS, 
  INITIAL_MILESTONES, 
  INITIAL_PROJECTS, 
  INITIAL_RESUME_DATA, 
  INITIAL_COPILOT_MESSAGES,
  StudentProfile,
  Task,
  SkillItem,
  Milestone,
  ProjectProof,
  ResumeData,
  CopilotChatMessage
} from './data/careerOSData';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { DashboardPrototype } from './components/DashboardPrototype';
import { FourYearJourneySection } from './components/FourYearJourneySection';
import { AgenticSection } from './components/AgenticSection';
import { SkillGapSection } from './components/SkillGapSection';
import { ProofOfWorkSection } from './components/ProofOfWorkSection';
import { DynamicResumeSection } from './components/DynamicResumeSection';
import { ComparisonSection } from './components/ComparisonSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';
import { OnboardingModal } from './components/OnboardingModal';

export default function App() {
  const [profile, setProfile] = useState<StudentProfile>(INITIAL_STUDENT_PROFILE);
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [skills, setSkills] = useState<SkillItem[]>(INITIAL_SKILLS);
  const [milestones, setMilestones] = useState<Milestone[]>(INITIAL_MILESTONES);
  const [projects, setProjects] = useState<ProjectProof[]>(INITIAL_PROJECTS);
  const [resume, setResume] = useState<ResumeData>(INITIAL_RESUME_DATA);
  const [copilotMessages, setCopilotMessages] = useState<CopilotChatMessage[]>(INITIAL_COPILOT_MESSAGES);
  
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isCopilotTyping, setIsCopilotTyping] = useState(false);

  // Toggle task completion and reactively update stats
  const handleToggleTask = (taskId: string) => {
    setTasks(prevTasks => {
      const updated: Task[] = prevTasks.map(t => {
        if (t.id === taskId) {
          const nextStatus: 'completed' | 'in_progress' = t.status === 'completed' ? 'in_progress' : 'completed';
          return { ...t, status: nextStatus };
        }
        return t;
      });

      // Calculate new completed tasks
      const completedCount = updated.filter(t => t.status === 'completed').length;
      const baseScore = 38;
      const delta = completedCount * 4;
      const newScore = Math.min(95, baseScore + delta);

      setProfile(prev => ({
        ...prev,
        readinessScore: newScore,
        activeStreak: completedCount > 0 ? 15 : 14,
        completedTasksCount: 38 + completedCount
      }));

      // Also boost Python / ML skill slightly
      setSkills(prevSkills => prevSkills.map(s => {
        if (s.name.includes("Python") || s.name.includes("Machine Learning")) {
          return { ...s, percentage: Math.min(92, s.percentage + 2) };
        }
        return s;
      }));

      return updated;
    });
  };

  // Copilot interactive response engine
  const handleSendMessageToCopilot = (text: string) => {
    const userMsg: CopilotChatMessage = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setCopilotMessages(prev => [...prev, userMsg]);
    setIsCopilotTyping(true);

    // Simulate intelligent agent deliberation and tailored reply
    setTimeout(() => {
      let replyText = "I've logged that request into your Semester 4 execution backlog.";
      let suggestions: { label: string; actionKey: string }[] = [];

      const lower = text.toLowerCase();
      if (lower.includes("project") || lower.includes("build")) {
        replyText = `Based on your goal (${profile.targetRole}), the highest leverage project right now is containerizing your FastAPI study assistant with Docker and integrating automated evaluation metrics. This covers 3 recruiter criteria: backend speed, vector embeddings, and cloud deployment.`;
        suggestions = [
          { label: "View Study Assistant Spec", actionKey: "show_task" },
          { label: "Review Skill Gap Impact", actionKey: "show_skills" }
        ];
      } else if (lower.includes("audit") || lower.includes("skill") || lower.includes("benchmark")) {
        replyText = `Audit complete for ${profile.targetRole}: Python is Strong (76%), but SQL optimization and MLOps deployment pipelines are lagging at 38% and 20%. I recommend prioritizing 2 weeks of query execution planning and indexing benchmarks.`;
        suggestions = [
          { label: "Open Skill Matrix", actionKey: "show_skills" },
          { label: "Auto-Assign SQL Mission", actionKey: "show_task" }
        ];
      } else if (lower.includes("exam") || lower.includes("workload") || lower.includes("test")) {
        replyText = `Exam Mode activated! I've automatically scaled your daily dev routine from 60 min down to a 20-minute conceptual refresher to preserve your streak without adding academic stress. Your major project milestones have been gracefully shifted by 10 days.`;
        suggestions = [
          { label: "View Adjusted Roadmap", actionKey: "show_task" }
        ];
      } else {
        replyText = `Acknowledged. I've analyzed your current trajectory for ${profile.targetRole}. Your next recommended action is finishing the vectorized NumPy module (~40 min), which unlocks Milestone 4.`;
        suggestions = [
          { label: "Start Today's Sprint", actionKey: "show_task" },
          { label: "Sync to Resume", actionKey: "show_resume" }
        ];
      }

      const copilotReply: CopilotChatMessage = {
        id: `msg-${Date.now() + 1}`,
        sender: 'copilot',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actionSuggestions: suggestions
      };

      setCopilotMessages(prev => [...prev, copilotReply]);
      setIsCopilotTyping(false);
    }, 750);
  };

  const handleCompleteOnboarding = (updatedProfile: Partial<StudentProfile>) => {
    setProfile(prev => ({
      ...prev,
      ...updatedProfile
    }));

    // Update resume title to match target role
    if (updatedProfile.targetRole) {
      setResume(prev => ({
        ...prev,
        title: `Aspiring ${updatedProfile.targetRole}`
      }));
    }

    // Smooth scroll to product dashboard
    setTimeout(() => {
      const el = document.getElementById('product');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  const handleJumpToDashboard = () => {
    const el = document.getElementById('product');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToHowItWorks = () => {
    const el = document.getElementById('how-it-works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroTask = tasks[0];
  const isHeroTaskCompleted = heroTask?.status === 'completed';

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      
      {/* 1. Navigation */}
      <Navbar 
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onJumpToDashboard={handleJumpToDashboard}
      />

      {/* 2. Hero */}
      <Hero 
        profile={profile}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onScrollToHowItWorks={handleScrollToHowItWorks}
        onCompleteTaskInHero={() => handleToggleTask(heroTask.id)}
        heroTaskCompleted={isHeroTaskCompleted}
      />

      {/* 3. The Problem */}
      <ProblemSection />

      {/* 4. The Solution */}
      <SolutionSection />

      {/* 5. Product Dashboard Mockup (interactive centerpiece) */}
      <DashboardPrototype 
        profile={profile}
        tasks={tasks}
        skills={skills}
        milestones={milestones}
        projects={projects}
        resume={resume}
        copilotMessages={copilotMessages}
        onToggleTask={handleToggleTask}
        onSendMessageToCopilot={handleSendMessageToCopilot}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        isCopilotTyping={isCopilotTyping}
      />

      {/* 6. Four-Year Journey */}
      <FourYearJourneySection />

      {/* 7. Agentic AI Section */}
      <AgenticSection />

      {/* 8. Skill Gap Intelligence */}
      <SkillGapSection onOpenOnboarding={() => setIsOnboardingOpen(true)} />

      {/* 9. Proof of Work */}
      <ProofOfWorkSection />

      {/* 10. Dynamic Resume */}
      <DynamicResumeSection 
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onJumpToDashboardResume={handleJumpToDashboard}
      />

      {/* 11. Comparison Table */}
      <ComparisonSection />

      {/* 12. Final CTA */}
      <FinalCTASection 
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
        onExplorePlatform={handleJumpToDashboard}
      />

      {/* 13. Footer */}
      <Footer 
        onJumpToDashboard={handleJumpToDashboard}
        onOpenOnboarding={() => setIsOnboardingOpen(true)}
      />

      {/* Interactive Onboarding Wizard Modal */}
      <OnboardingModal 
        isOpen={isOnboardingOpen}
        onClose={() => setIsOnboardingOpen(false)}
        onCompleteOnboarding={handleCompleteOnboarding}
      />

    </div>
  );
}
