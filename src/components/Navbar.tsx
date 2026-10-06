import React, { useState, useEffect } from 'react';
import { Terminal, ArrowUpRight, Sparkles, ChevronRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenOnboarding: () => void;
  onJumpToDashboard: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOnboarding, onJumpToDashboard }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        scrolled 
          ? 'bg-[#07090E]/90 backdrop-blur-md border-white/10 shadow-lg shadow-black/40' 
          : 'bg-[#07090E]/60 backdrop-blur-sm border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Zone 1: Wordmark / Brand */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-md"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 via-indigo-600 to-blue-600 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
            <Terminal className="w-4 h-4 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex items-baseline">
            <span className="text-lg font-bold tracking-tight text-white font-mono">Career</span>
            <span className="text-lg font-bold tracking-tight text-indigo-400 font-mono">OS</span>
          </div>
        </a>

        {/* Zone 2: Navigation Links (single-line, clean text with hover state) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a 
            href="#product" 
            onClick={(e) => { e.preventDefault(); onJumpToDashboard(); }}
            className="hover:text-white transition-colors"
          >
            Product
          </a>
          <a href="#how-it-works" className="hover:text-white transition-colors">
            How It Works
          </a>
          <a href="#for-students" className="hover:text-white transition-colors">
            For Students
          </a>
          <a href="#roadmap" className="hover:text-white transition-colors">
            Roadmap
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button 
            onClick={onJumpToDashboard}
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md transition-colors"
          >
            Live Demo
          </button>
          
          <button
            onClick={onOpenOnboarding}
            className="relative inline-flex items-center justify-center px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg shadow-sm shadow-indigo-900/30 transition-all duration-150 group"
          >
            <span>Get Started</span>
            <ChevronRight className="w-3.5 h-3.5 ml-1 text-indigo-200 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B0E17] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <a 
            href="#product" 
            onClick={() => { setMobileMenuOpen(false); onJumpToDashboard(); }}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            Product
          </a>
          <a 
            href="#how-it-works" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            How It Works
          </a>
          <a 
            href="#for-students" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            For Students
          </a>
          <a 
            href="#roadmap" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            Roadmap
          </a>
          <a 
            href="#about" 
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-md"
          >
            About
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenOnboarding(); }}
              className="w-full py-2.5 text-xs font-semibold text-center text-white bg-indigo-600 rounded-lg shadow-sm"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
