import React, { useState, useEffect } from 'react';
import { Terminal, MessageSquareCode, Globe, Menu, X, Mail, Download, Sparkles } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenAIPersona: () => void;
  onOpenTerminal: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onToggleLang,
  onOpenAIPersona,
  onOpenTerminal,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: lang === 'bn' ? 'পরিচিতি' : 'About' },
    { href: '#projects', label: lang === 'bn' ? 'প্রজেক্টস' : 'Projects' },
    { href: '#skills', label: lang === 'bn' ? 'দক্ষতা' : 'Skills' },
    { href: '#experience', label: lang === 'bn' ? 'অভিজ্ঞতা' : 'Journey' },
    { href: '#contact', label: lang === 'bn' ? 'যোগাযোগ' : 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-indigo-600 p-[1px] transition-transform duration-300 group-hover:scale-105 shadow-md shadow-sky-500/20">
            <div className="w-full h-full bg-[#090d16] rounded-xl flex items-center justify-center font-mono font-bold text-sky-400 text-sm">
              MNA
            </div>
          </div>
          <div>
            <div className="font-bold text-slate-100 flex items-center gap-2 text-base leading-tight">
              <span>{PERSONAL_INFO.shortName}</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="Available for hire" />
            </div>
            <div className="text-xs text-slate-400 font-mono">
              {lang === 'bn' ? 'ফুল-স্ট্যাক ও এআই' : 'Full-Stack & AI'}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-sky-400 hover:bg-slate-800/60 transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions & Utilities */}
        <div className="hidden md:flex items-center gap-2.5">
          {/* AI Persona Trigger */}
          <button
            onClick={onOpenAIPersona}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-gradient-to-r from-sky-500/10 to-indigo-500/10 hover:from-sky-500/20 hover:to-indigo-500/20 text-sky-300 border border-sky-500/30 transition-all shadow-sm group cursor-pointer"
            title="Ask AI Persona (Powered by gemini-4-argon High Thinking)"
          >
            <Sparkles className="w-3.5 h-3.5 text-sky-400 animate-spin-slow group-hover:scale-110 transition-transform" />
            <span>AI Persona</span>
            <span className="text-[10px] bg-sky-500/20 px-1 py-0.2 rounded text-sky-300 font-mono">Argon</span>
          </button>

          {/* Interactive Terminal */}
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 hover:border-slate-700 transition-colors cursor-pointer"
            title={lang === 'bn' ? 'টার্মিনাল খুলুন' : 'Open Developer CLI'}
          >
            <Terminal className="w-4 h-4" />
          </button>

          {/* Resume Viewer */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-slate-400" />
            <span>CV</span>
          </button>

          {/* Language Toggle */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
            title="Toggle Language"
          >
            <Globe className="w-3.5 h-3.5 text-sky-400" />
            <span className="font-semibold">{lang === 'en' ? 'বাংলা' : 'EN'}</span>
          </button>

          {/* Contact Button */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-md shadow-sky-500/20 transition-all hover:shadow-sky-500/30"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'হায়ার করুন' : 'Hire Me'}</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleLang}
            className="px-2 py-1 rounded-lg text-xs bg-slate-900 border border-slate-800 text-sky-400 font-bold"
          >
            {lang === 'en' ? 'বাংলা' : 'EN'}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c111d] border-b border-slate-800 px-4 py-4 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800 hover:text-sky-400"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAIPersona();
              }}
              className="flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/30"
            >
              <Sparkles className="w-4 h-4" />
              <span>AI Persona (High Thinking)</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              <Terminal className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
