import React from 'react';
import { Terminal } from 'lucide-react';

interface FooterProps {
  onJumpToDashboard: () => void;
  onOpenOnboarding: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onJumpToDashboard, onOpenOnboarding }) => {
  return (
    <footer className="bg-[#05070B] border-t border-white/5 py-16 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          
          {/* Brand Info */}
          <div className="space-y-3 max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-mono font-bold text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="text-base font-bold text-white tracking-tight font-mono">
                Career<span className="text-indigo-400">OS</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Your AI Career Copilot for Engineering. The autonomous operating system that transforms the 4-year B.Tech journey into verifiable proof of skill.
            </p>
          </div>

          {/* Links Grid */}
          <div className="flex flex-wrap gap-8 text-xs font-medium">
            <div className="space-y-2.5">
              <div className="font-mono uppercase text-slate-300 tracking-wider text-[11px]">Product</div>
              <ul className="space-y-2">
                <li>
                  <button onClick={onJumpToDashboard} className="hover:text-white transition-colors">
                    Dashboard Overview
                  </button>
                </li>
                <li>
                  <a href="#how-it-works" className="hover:text-white transition-colors">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#for-students" className="hover:text-white transition-colors">
                    4-Year Journey
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono uppercase text-slate-300 tracking-wider text-[11px]">Resources</div>
              <ul className="space-y-2">
                <li>
                  <button onClick={onOpenOnboarding} className="hover:text-white transition-colors">
                    Generate Roadmap
                  </button>
                </li>
                <li>
                  <a href="#roadmap" className="hover:text-white transition-colors">
                    Curriculum Index
                  </a>
                </li>
                <li>
                  <a href="#about" className="hover:text-white transition-colors">
                    About CareerOS
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-2.5">
              <div className="font-mono uppercase text-slate-300 tracking-wider text-[11px]">Legal & Trust</div>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security & Ethics</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Unboxed Metadata */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 CareerOS Technologies Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-3 font-mono text-[11px]">
            <span>Architecture v2.4</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>Zero AI Slop Guaranteed</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span className="text-emerald-400">Kernel Active</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
