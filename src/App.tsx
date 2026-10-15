/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, Terminal as TerminalIcon, MessageSquare } from 'lucide-react';
import { Language, Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AIPersonaModal } from './components/AIPersonaModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';
import { ResumeViewerModal } from './components/ResumeViewerModal';

export default function App() {
  // Default to Bengali since user requested in Bengali ("amar jonno ekta portfolio website banao"), with instant 1-click toggle to English
  const [lang, setLang] = useState<Language>('bn');
  const [isAIPersonaOpen, setIsAIPersonaOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Global keyboard shortcut to open terminal or AI Persona
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' && !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'bn' : 'en'));
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-sky-500/30 selection:text-sky-300 relative">
      
      {/* Background Grid & Ambient Lighting */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none z-0" />
      <div className="fixed inset-0 bg-radial-gradient from-transparent via-[#090d16]/80 to-[#090d16] pointer-events-none z-0" />

      {/* Main App Bar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenAIPersona={() => setIsAIPersonaOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Page Sections */}
      <main className="relative z-10">
        <Hero
          lang={lang}
          onOpenAIPersona={() => setIsAIPersonaOpen(true)}
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        <ProjectsSection
          lang={lang}
          onSelectProject={(p) => setSelectedProject(p)}
        />

        <SkillsMatrix lang={lang} />

        <ExperienceTimeline lang={lang} />

        <ContactSection
          lang={lang}
          onOpenAIPersona={() => setIsAIPersonaOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenAIPersona={() => setIsAIPersonaOpen(true)}
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Persistent Floating AI Persona Widget in bottom-right corner */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        <button
          onClick={() => setIsAIPersonaOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-xl shadow-sky-500/30 border border-sky-400/40 hover:scale-105 transition-all group cursor-pointer"
          title="Chat with Md. Nurul Alam's AI Twin (Gemini 4 Argon High Thinking)"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 animate-spin-slow group-hover:rotate-12 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-[#090d16] animate-pulse" />
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold leading-tight flex items-center gap-1.5">
              <span>{lang === 'bn' ? 'নুরুল আলমের এআই পার্সোনা' : "Nurul's AI Twin"}</span>
              <span className="text-[10px] bg-white/20 px-1 py-0.2 rounded font-mono">Argon</span>
            </div>
            <div className="text-[10px] text-sky-100 font-mono">
              High Thinking Mode
            </div>
          </div>
        </button>
      </div>

      {/* Interactive Modals */}
      <AIPersonaModal
        isOpen={isAIPersonaOpen}
        onClose={() => setIsAIPersonaOpen(false)}
        lang={lang}
      />

      <ArchitectureModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
      />

      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        lang={lang}
      />

      <ResumeViewerModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        lang={lang}
      />

    </div>
  );
}
