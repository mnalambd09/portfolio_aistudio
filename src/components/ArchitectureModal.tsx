import React from 'react';
import { X, Layers, Server, Cpu, Database, Network, ArrowRight, ExternalLink, Github } from 'lucide-react';
import { Project, Language } from '../types';

interface ArchitectureModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  project,
  onClose,
  lang,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#0c121e] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-4 sm:p-6 bg-slate-900 border-b border-slate-800 flex items-start justify-between">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
                {lang === 'bn' ? 'সিস্টেম আর্কিটেকচার ব্লুপ্রিন্ট' : 'System Architecture Blueprint'}
              </span>
              <span className="text-xs font-mono text-slate-400">
                ID: {project.id}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              {lang === 'bn' ? project.titleBn : project.title}
            </h2>
            <p className="text-sm text-slate-300">
              {lang === 'bn' ? project.taglineBn : project.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          
          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 space-y-1"
              >
                <div className="text-xs text-slate-400 font-mono">
                  {lang === 'bn' ? m.labelBn : m.label}
                </div>
                <div className="text-xl font-bold text-sky-400 font-mono">
                  {m.value}
                </div>
              </div>
            ))}
          </div>

          {/* Architectural Overview */}
          <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Network className="w-4 h-4 text-sky-400" />
              <span>{lang === 'bn' ? 'আর্কিটেকচার সারাংশ ও দর্শন' : 'Architectural Summary & Rationale'}</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {lang === 'bn' ? project.architectureSummaryBn : project.architectureSummary}
            </p>
          </div>

          {/* Layer-by-Layer Components */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              <span>{lang === 'bn' ? 'সিস্টেম লেয়ার ও কম্পোনেন্ট বিভাজন' : 'Layer-by-Layer Component Breakdown'}</span>
            </h3>

            <div className="space-y-2.5">
              {project.architectureComponents.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:border-slate-700 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/60 px-2 py-0.5 rounded border border-sky-800/50">
                        {comp.layer}
                      </span>
                      <span className="text-sm font-semibold text-slate-200">
                        {comp.tech}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      {comp.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full Tech Stack Tags */}
          <div className="space-y-2">
            <div className="text-xs font-mono text-slate-400">
              {lang === 'bn' ? 'ব্যবহৃত টেকনোলজি ও টুলস:' : 'Tech Stack Stacked:'}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Designed & Engineered by {lang === 'bn' ? 'মোঃ নুরুল আলম' : 'Md. Nurul Alam'}
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
