import React from 'react';
import { ArrowUp, Heart, Terminal, Sparkles, Mail, Github, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
  onOpenAIPersona: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  lang,
  onOpenAIPersona,
  onOpenTerminal,
  onOpenResume,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080e] border-t border-slate-800/80 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px] shadow-sm">
                <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center font-mono font-bold text-sky-400 text-sm">
                  MNA
                </div>
              </div>
              <div>
                <div className="font-bold text-white text-base">
                  {lang === 'bn' ? PERSONAL_INFO.nameBn : PERSONAL_INFO.name}
                </div>
                <div className="text-xs text-sky-400 font-mono">
                  {PERSONAL_INFO.title}
                </div>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {lang === 'bn'
                ? 'উচ্চ ক্ষমতাসম্পন্ন ওয়েব প্ল্যাটফর্ম, স্থিতিস্থাপক মাইক্রোসার্ভিসেস এবং জেনারেটিভ এআই সিস্টেম তৈরিতে ৭+ বছরের অভিজ্ঞতা।'
                : 'Architecting ultra-scalable web platforms, resilient distributed microservices, and high-performance Generative AI engines.'}
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-sky-400 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              {lang === 'bn' ? 'নেভিগেশন' : 'Navigation'}
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'পরিচিতি ও সারাংশ' : 'About & Bio'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'প্রজেক্ট ও আর্কিটেকচার' : 'Projects & Systems'}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'দক্ষতা ও কোড প্যাটার্ন' : 'Skills & Code Patterns'}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'ক্যারিয়ার টাইমলাইন' : 'Experience & Track Record'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {lang === 'bn' ? 'যোগাযোগ ও নিয়োগ' : 'Contact & Inquiries'}
                </a>
              </li>
            </ul>
          </div>

          {/* Interactive tools */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              {lang === 'bn' ? 'ইন্টারেক্টিভ টুলস' : 'Developer Sandbox'}
            </div>
            <div className="space-y-2">
              <button
                onClick={onOpenAIPersona}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-sky-500/40 text-xs text-slate-300 transition-colors cursor-pointer group"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span>AI Twin (Gemini 4 Argon)</span>
                </span>
                <span className="text-[10px] font-mono text-sky-400 bg-sky-500/10 px-1.5 py-0.5 rounded">
                  High Thinking
                </span>
              </button>

              <button
                onClick={onOpenTerminal}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-emerald-500/40 text-xs text-slate-300 transition-colors cursor-pointer"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Terminal CLI Shell</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500">v4.2</span>
              </button>

              <button
                onClick={onOpenResume}
                className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-purple-500/40 text-xs text-slate-300 transition-colors cursor-pointer"
              >
                <span>Curriculum Vitae (PDF)</span>
                <span className="text-[10px] font-mono text-purple-400">Printable</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
