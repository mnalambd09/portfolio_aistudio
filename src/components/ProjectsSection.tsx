import React, { useState } from 'react';
import { ArrowUpRight, Github, ExternalLink, Cpu, Sparkles, Network, Filter } from 'lucide-react';
import { Project, Language } from '../types';
import { PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  lang: Language;
  onSelectProject: (p: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  lang,
  onSelectProject,
}) => {
  const [filter, setFilter] = useState<'all' | 'ai' | 'fullstack' | 'cloud'>('all');

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const categories = [
    { id: 'all', label: lang === 'bn' ? 'সকল প্রজেক্টস' : 'All Systems' },
    { id: 'ai', label: lang === 'bn' ? 'জেনারেটিভ এআই ও এলএলএম' : 'Generative AI & LLMs' },
    { id: 'fullstack', label: lang === 'bn' ? 'ফুল-স্ট্যাক ও মাইক্রোসার্ভিস' : 'Full-Stack Platforms' },
    { id: 'cloud', label: lang === 'bn' ? 'ক্লাউড ও অবজারভেবিলিটি' : 'Cloud & DevOps' },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
              <Cpu className="w-3.5 h-3.5" />
              <span>{lang === 'bn' ? 'প্রোডাকশন-গ্রেড আর্কিটেকচার' : 'Production Systems Portfolio'}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {lang === 'bn' ? 'উল্লেখযোগ্য প্রজেক্ট ও সিস্টেমস' : 'Featured Engineering Systems'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
              {lang === 'bn'
                ? 'উচ্চ ট্র্যাফিক ও লো-ল্যাটেন্সির জন্য ডিজাইন করা বাস্তব প্রোডাকশন প্ল্যাটফর্ম এবং ডিস্ট্রিবিউটেড সিস্টেম।'
                : 'Selected real-world architectures built for enterprise scale, extreme throughput, and AI-native reasoning.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id as any)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  filter === c.id
                    ? 'bg-sky-500 text-white shadow-md shadow-sky-500/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c121e] border border-slate-800/90 hover:border-sky-500/40 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/5 group"
            >
              <div className="space-y-4">
                {/* Top Badge & Category */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono text-sky-400 bg-sky-500/10 px-2.5 py-0.5 rounded-full border border-sky-500/20 uppercase">
                    {p.category}
                  </span>

                  {p.featured && (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                      <Sparkles className="w-3 h-3" />
                      <span>Featured</span>
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {lang === 'bn' ? p.titleBn : p.title}
                  </h3>
                  <p className="text-xs text-sky-400/90 font-mono mt-1">
                    {lang === 'bn' ? p.taglineBn : p.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {lang === 'bn' ? p.descriptionBn : p.description}
                </p>

                {/* Metrics Grid */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-slate-800/80 bg-slate-950/40 rounded-xl px-3">
                  {p.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-0.5 text-center">
                      <div className="text-[10px] text-slate-400 truncate">
                        {lang === 'bn' ? m.labelBn : m.label}
                      </div>
                      <div className="text-xs font-bold font-mono text-sky-300 truncate">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {p.tags.slice(0, 5).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-slate-950 text-[11px] font-mono text-slate-400 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                  {p.tags.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-500">
                      +{p.tags.length - 5}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectProject(p)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-sky-400 hover:text-sky-300 group/btn cursor-pointer"
                >
                  <Network className="w-3.5 h-3.5 text-sky-400" />
                  <span>{lang === 'bn' ? 'আর্কিটেকচার ব্লুপ্রিন্ট' : 'Inspect Architecture'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-2">
                  {p.githubUrl && (
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
                      title="Source Code"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
