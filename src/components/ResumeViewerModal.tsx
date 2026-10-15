import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Globe, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, EXPERIENCES, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ResumeViewerModal: React.FC<ResumeViewerModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in print:p-0 print:bg-white">
      <div className="w-full max-w-4xl max-h-[92vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden print:border-none print:shadow-none print:bg-white print:max-h-none print:w-full">
        
        {/* Top Action Bar (hidden when printing) */}
        <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-sky-400 bg-sky-500/10 px-2 py-0.5 rounded border border-sky-500/20">
              CV / Resume Preview
            </span>
            <span className="text-xs text-slate-400 font-mono">Md_Nurul_Alam_CV.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#090d16] print:bg-white print:text-black space-y-8 text-slate-200 font-sans">
          
          {/* Header */}
          <div className="border-b border-slate-800 pb-6 print:border-slate-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white print:text-black">
                  {lang === 'bn' ? PERSONAL_INFO.nameBn : PERSONAL_INFO.name}
                </h1>
                <div className="text-sky-400 font-semibold text-lg print:text-sky-700">
                  {lang === 'bn' ? PERSONAL_INFO.titleBn : PERSONAL_INFO.title}
                </div>
              </div>

              <div className="space-y-1 text-xs text-slate-400 print:text-slate-700 font-mono">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-sky-400 print:text-black" />
                  <span>{PERSONAL_INFO.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400 print:text-black" />
                  <span>{PERSONAL_INFO.location} (Open to Global Remote)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-indigo-400 print:text-black" />
                  <span>Experience: {PERSONAL_INFO.yearsOfExperience} Years</span>
                </div>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-300 print:text-slate-800 leading-relaxed">
              {lang === 'bn' ? PERSONAL_INFO.taglineBn : PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Technical Skills Overview */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 print:text-sky-800 font-mono border-b border-slate-800 print:border-slate-300 pb-1">
              Technical Core & Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="space-y-1">
                  <span className="font-bold text-white print:text-black">
                    {lang === 'bn' ? cat.titleBn : cat.title}:
                  </span>
                  <div className="text-slate-400 print:text-slate-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 print:text-sky-800 font-mono border-b border-slate-800 print:border-slate-300 pb-1">
              Professional Work History
            </h2>

            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div>
                    <h3 className="font-bold text-white print:text-black text-sm">
                      {lang === 'bn' ? exp.roleBn : exp.role}
                    </h3>
                    <div className="text-xs text-sky-400 print:text-sky-800 font-semibold">
                      {lang === 'bn' ? exp.companyBn : exp.company} • {exp.location}
                    </div>
                  </div>
                  <div className="text-xs font-mono text-slate-400 print:text-slate-600">
                    {lang === 'bn' ? exp.periodBn : exp.period}
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs text-slate-300 print:text-slate-800 list-disc pl-4">
                  {(lang === 'bn' ? exp.responsibilitiesBn : exp.responsibilities).map((r, rIdx) => (
                    <li key={rIdx}>{r}</li>
                  ))}
                </ul>

                <div className="text-[11px] font-mono text-slate-400 print:text-slate-600">
                  <span className="font-semibold text-slate-300 print:text-black">Technologies:</span>{' '}
                  {exp.technologies.join(', ')}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Credentials */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-sky-400 print:text-sky-800 font-mono border-b border-slate-800 print:border-slate-300 pb-1">
              Education & Certifications
            </h2>
            <div className="text-xs space-y-2">
              <div>
                <div className="font-bold text-white print:text-black">
                  Bachelor of Science in Computer Science & Engineering (B.Sc. in CSE)
                </div>
                <div className="text-slate-400 print:text-slate-600">
                  Dhaka, Bangladesh • Focus on Distributed Systems, Algorithms & AI
                </div>
              </div>
              <div>
                <div className="font-bold text-white print:text-black">
                  AWS Certified Solutions Architect & GCP Professional Cloud Architect
                </div>
                <div className="text-slate-400 print:text-slate-600">
                  Credentialed in High Availability, Serverless, and Kubernetes Cluster Orchestration
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="pt-4 border-t border-slate-800 print:border-slate-300 text-[11px] font-mono text-slate-500 print:text-slate-600 flex justify-between">
            <span>Direct Reference: Available upon request</span>
            <span>Contact: {PERSONAL_INFO.email}</span>
          </div>

        </div>

      </div>
    </div>
  );
};
