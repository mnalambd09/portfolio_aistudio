import React from 'react';
import { Briefcase, Calendar, MapPin, GraduationCap, Award, Quote, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { EXPERIENCES, TESTIMONIALS } from '../data/portfolioData';

interface ExperienceTimelineProps {
  lang: Language;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ lang }) => {
  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'ক্যারিয়ার ট্রাজেক্টরি ও অভিজ্ঞতা' : 'Career Trajectory & Track Record'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? 'অভিজ্ঞতা ও পেশাদার যাত্রা' : 'Work Experience & Impact'}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'bn'
              ? 'স্টার্টআপ থেকে এন্টারপ্রাইজ স্কেলে উচ্চ ক্ষমতাসম্পন্ন সিস্টেম পরিচালনা ও টিম লিডিং এর ধারাবাহিক ইতিহাস।'
              : 'Proven track record of engineering leadership, scalable microservices migrations, and high-impact system deliveries.'}
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 md:ml-40 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative pl-6 sm:pl-8 group">
              
              {/* Timeline Node Point */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#090d16] border-2 border-sky-400 group-hover:scale-125 transition-transform" />

              {/* Date Column on Desktop */}
              <div className="hidden sm:block absolute -left-36 md:-left-44 top-1 text-right w-28 md:w-36">
                <span className="text-xs font-mono font-bold text-sky-400 bg-sky-950/40 px-2 py-0.5 rounded border border-sky-900/50">
                  {lang === 'bn' ? exp.periodBn : exp.period}
                </span>
                <div className="text-[11px] text-slate-500 font-mono mt-1">
                  {lang === 'bn' ? exp.typeBn : exp.type}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c121e] border border-slate-800 group-hover:border-slate-700 transition-all space-y-4">
                
                {/* Header info */}
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {lang === 'bn' ? exp.roleBn : exp.role}
                    </h3>
                    <div className="text-sky-400 text-sm font-semibold">
                      {lang === 'bn' ? exp.companyBn : exp.company}
                    </div>
                  </div>

                  {/* Mobile Date tag */}
                  <div className="sm:hidden text-xs font-mono text-sky-400 bg-sky-950 px-2 py-0.5 rounded border border-sky-800">
                    {lang === 'bn' ? exp.periodBn : exp.period}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  <span>{exp.location}</span>
                </div>

                {/* Responsibilities list */}
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {(lang === 'bn' ? exp.responsibilitiesBn : exp.responsibilities).map((resp, rIdx) => (
                    <li key={rIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/80">
                  {exp.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded bg-slate-950 text-[11px] font-mono text-slate-400 border border-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Education & Credentials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Degree */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400 flex-shrink-0">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-sky-400">
                {lang === 'bn' ? 'অ্যাকাডেমিক শিক্ষা' : 'Formal Education'}
              </div>
              <h3 className="font-bold text-white text-base">
                {lang === 'bn' ? 'বি.এস.সি ইন কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (CSE)' : 'B.Sc. in Computer Science & Engineering'}
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'bn' ? 'প্রথম শ্রেণি, মেজর ইন সফটওয়্যার সিস্টেমস ও অ্যালগরিদম' : 'First Class with Distinction, Major in Distributed Systems & Algorithms'}
              </p>
              <div className="text-xs text-slate-500 font-mono pt-1">
                Dhaka, Bangladesh
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-mono text-emerald-400">
                {lang === 'bn' ? 'পেশাদার সার্টিফিকেশন' : 'Verified Certifications'}
              </div>
              <h3 className="font-bold text-white text-base">
                AWS Certified Solutions Architect & GCP Cloud Engineer
              </h3>
              <p className="text-xs text-slate-400">
                {lang === 'bn' ? 'ডিস্ট্রিবিউটেড ক্লাউড আর্কিটেকচার, কন্টেইনারাইজেশন ও সিকিউরিটি ভেরিফাইড' : 'Demonstrated mastery in cloud topologies, microservices scaling, and high availability.'}
              </p>
              <div className="text-xs text-slate-500 font-mono pt-1">
                Cloud Native Computing Foundation (CNCF) Contributor
              </div>
            </div>
          </div>

        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <div className="text-center mb-10 space-y-2">
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider">
              {lang === 'bn' ? 'ইঞ্জিনিয়ারিং লিডারদের অভিমত' : 'Peer & Leadership Endorsements'}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">
              {lang === 'bn' ? 'সহকর্মী ও ক্লায়েন্টদের মূল্যায়ন' : 'What Engineering Leaders Say'}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-[#0b101a] border border-slate-800 flex flex-col justify-between space-y-4 relative"
              >
                <Quote className="w-8 h-8 text-slate-700/60 absolute top-4 right-4" />
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic relative z-10">
                  "{lang === 'bn' ? t.quoteBn : t.quote}"
                </p>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-800/80">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-700"
                  />
                  <div>
                    <div className="text-sm font-bold text-white">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.title}, {t.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
