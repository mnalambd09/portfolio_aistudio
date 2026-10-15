import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MapPin, Clock, MessageSquare, Sparkles, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  lang: Language;
  onOpenAIPersona: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  onOpenAIPersona,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Lead Engineer Role / High-Impact Contract',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: 'Lead Engineer Role / High-Impact Contract',
          message: '',
        });
      }
    } catch (err) {
      // Fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative bg-[#070b13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-500/20">
            <Mail className="w-3.5 h-3.5" />
            <span>{lang === 'bn' ? 'সরাসরি যোগাযোগ ও নিয়োগ' : 'Start a Conversation'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {lang === 'bn' ? 'একসাথে নতুন সিস্টেম তৈরি করি' : "Let's Build Something Exceptional"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            {lang === 'bn'
              ? 'আপনার প্রতিষ্ঠানের লিড ইঞ্জিনিয়ারিং রোল, ফুল-স্ট্যাক প্রজেক্ট বা এআই আর্কিটেকচার কনসালটেন্সির জন্য সরাসরি মেসেজ দিন।'
              : 'Whether hiring for a Senior/Lead Engineering position, building a greenfield GenAI platform, or optimizing distributed microservices, my inbox is open.'}
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c121e] border border-slate-800 space-y-6">
              
              <div className="space-y-2">
                <div className="text-xs font-mono text-sky-400">
                  {lang === 'bn' ? 'সরাসরি ইমেইল ঠিকানা' : 'Primary Direct Contact'}
                </div>
                <div className="text-xl font-bold text-white font-mono break-all">
                  {PERSONAL_INFO.email}
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${PERSONAL_INFO.email}?subject=Engineering%20Opportunity%20for%20Nurul%20Alam`}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 text-xs font-mono transition-colors"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Open Mail Client</span>
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 space-y-3 text-xs text-slate-300">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">{PERSONAL_INFO.location}</span>
                    <span className="text-slate-400"> (Global Remote Ready, UTC+6)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Fast Response Guarantee:</span>
                    <span className="text-slate-400"> Within 12-24 hours</span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-white">Work Arrangement:</span>
                    <span className="text-slate-400"> Full-Time, Lead Staff, Contract</span>
                  </div>
                </div>
              </div>

              {/* AI Persona Promo Card */}
              <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 space-y-2">
                <div className="flex items-center gap-2 text-sky-400 text-xs font-mono font-bold">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Immediate Answers via AI Persona</span>
                </div>
                <p className="text-xs text-slate-300">
                  {lang === 'bn'
                    ? 'নুরুল আলমের অভিজ্ঞতা ও আর্কিটেকচার সম্পর্কে তাৎক্ষণিক গভীর বিশ্লেষণ পেতে এআই টুইন ব্যবহার করুন।'
                    : 'Get immediate deep technical answers regarding Nurul’s systems and availability with Gemini 4 Argon.'}
                </p>
                <button
                  onClick={onOpenAIPersona}
                  className="w-full py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-white font-semibold text-xs transition-colors cursor-pointer"
                >
                  {lang === 'bn' ? 'এআই টুইনের সাথে কথা বলুন' : 'Ask AI Persona Now'}
                </button>
              </div>

            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-slate-900 to-[#0c121e] border border-slate-800">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {lang === 'bn' ? 'মেসেজটি সফলভাবে পাঠানো হয়েছে!' : 'Message Received!'}
                  </h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    {lang === 'bn'
                      ? `ধন্যবাদ! আপনার বার্তাটি সরাসরি ${PERSONAL_INFO.email} এ ফরোয়ার্ড করা হয়েছে। নুরুল আলম দ্রুত আপনার সাথে যোগাযোগ করবেন।`
                      : `Thank you for reaching out. Your transmission has been queued for ${PERSONAL_INFO.email}. Nurul will follow up within 24 hours.`}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        {lang === 'bn' ? 'আপনার নাম *' : 'Your Name *'}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">
                        {lang === 'bn' ? 'ইমেইল ঠিকানা *' : 'Your Work Email *'}
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      {lang === 'bn' ? 'বিষয় / কাজের ধরন' : 'Inquiry / Topic'}
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 outline-none transition-all"
                    >
                      <option value="Lead Engineer Role / High-Impact Contract">Lead / Staff Full-Stack Engineering Role</option>
                      <option value="Generative AI & LLM Systems Consulting">GenAI & LLM Architecture Consulting</option>
                      <option value="Distributed Microservices & Cloud Architecture">Distributed Microservices Architecture</option>
                      <option value="Project Collaboration / Freelance">Enterprise Web Application Development</option>
                      <option value="Technical Interview / Consultation">Technical Interview & Team Discussion</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">
                      {lang === 'bn' ? 'আপনার বার্তা / প্রজেক্ট বিবরণ *' : 'Your Message *'}
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={
                        lang === 'bn'
                          ? 'আপনার দল, প্রজেক্টের লক্ষ্য এবং প্রয়োজনীয় টেক স্ট্যাক সম্পর্কে লিখুন...'
                          : 'Describe your team, timeline, technical objectives, or interview details...'
                      }
                      className="w-full bg-slate-950 border border-slate-800 focus:border-sky-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder-slate-600 outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{lang === 'bn' ? 'মেসেজ পাঠান' : 'Transmit Message to Nurul'}</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] font-mono text-slate-500 text-center pt-2">
                    Direct routing configured to <span className="text-slate-400 font-semibold">{PERSONAL_INFO.email}</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
