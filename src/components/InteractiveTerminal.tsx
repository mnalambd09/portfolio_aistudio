import React, { useState, useRef, useEffect } from 'react';
import { X, Terminal as TerminalIcon, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

interface CommandHistory {
  command: string;
  output: React.ReactNode;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    {
      command: 'init',
      output: (
        <div className="space-y-1 text-slate-300">
          <div className="text-emerald-400 font-bold">
            NurulOS v4.2-LTS (x86_64-pc-linux-gnu) - Md. Nurul Alam Developer Shell
          </div>
          <div className="text-slate-400">
            Type <span className="text-sky-400 font-bold">help</span> to view available commands. Type <span className="text-amber-400 font-bold">cat resume.md</span> or <span className="text-emerald-400 font-bold">sudo hire-nurul</span>.
          </div>
        </div>
      ),
    },
  ]);

  const [expanded, setExpanded] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    const parts = trimmed.split(' ');
    const mainCmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ').toLowerCase();

    let output: React.ReactNode = null;

    switch (mainCmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <div className="text-sky-400 font-semibold">Available Commands:</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
              <div><span className="text-emerald-400 font-mono">whoami</span> - Developer profile summary</div>
              <div><span className="text-emerald-400 font-mono">skills</span> - Engineering skill competencies</div>
              <div><span className="text-emerald-400 font-mono">projects</span> - Production systems list</div>
              <div><span className="text-emerald-400 font-mono">cat resume.md</span> - Display executive CV</div>
              <div><span className="text-emerald-400 font-mono">contact</span> - Email & contact credentials</div>
              <div><span className="text-emerald-400 font-mono">stats</span> - Quantified achievements & metrics</div>
              <div><span className="text-emerald-400 font-mono">sudo hire-nurul</span> - Initiate hiring pipeline</div>
              <div><span className="text-emerald-400 font-mono">clear</span> - Clear terminal buffer</div>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="space-y-1 text-slate-300">
            <div className="text-white font-bold">{PERSONAL_INFO.name} ({PERSONAL_INFO.shortName})</div>
            <div className="text-sky-400">{PERSONAL_INFO.title}</div>
            <div className="text-slate-400 text-xs">Based in {PERSONAL_INFO.location} • Available for Worldwide Remote</div>
            <div className="text-slate-300 text-xs mt-1">{PERSONAL_INFO.tagline}</div>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            <div><span className="text-sky-400 font-bold">Frontend:</span> React 19, TypeScript, Next.js, Tailwind CSS, Vite, Redux</div>
            <div><span className="text-indigo-400 font-bold">Backend:</span> Node.js, Go (Golang), Python (FastAPI), gRPC, WebSockets</div>
            <div><span className="text-purple-400 font-bold">AI & LLMs:</span> Gemini 4 Argon (High Thinking), Gemini 3.8 Flash, pgvector, RAG, Agents</div>
            <div><span className="text-emerald-400 font-bold">Databases:</span> PostgreSQL, Redis, MongoDB, Vector Indexes</div>
            <div><span className="text-amber-400 font-bold">DevOps:</span> Docker, Kubernetes, AWS, GCP, GitHub Actions, Linux</div>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="space-y-2 text-slate-300 text-xs">
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-sky-500/40 pl-2">
                <span className="text-sky-300 font-bold">{p.title}</span> ({p.category})
                <div className="text-slate-400">{p.tagline}</div>
                <div className="text-emerald-400 font-mono">{p.tags.join(' • ')}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'stats':
        output = (
          <div className="grid grid-cols-2 gap-2 text-xs font-mono">
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Experience:</span> <span className="text-white font-bold">{PERSONAL_INFO.yearsOfExperience}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Shipped:</span> <span className="text-sky-400 font-bold">{PERSONAL_INFO.completedProjects}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Uptime:</span> <span className="text-emerald-400 font-bold">{PERSONAL_INFO.uptimeRecord}</span>
            </div>
            <div className="p-2 bg-slate-900 rounded border border-slate-800">
              <span className="text-slate-400">Daily Tokens:</span> <span className="text-indigo-400 font-bold">15M+</span>
            </div>
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="space-y-1 text-xs text-slate-300">
            <div><span className="text-sky-400 font-mono">Email:</span> <span className="text-white font-bold">{PERSONAL_INFO.email}</span></div>
            <div><span className="text-sky-400 font-mono">Location:</span> {PERSONAL_INFO.location}</div>
            <div><span className="text-sky-400 font-mono">Status:</span> <span className="text-emerald-400 font-bold">{PERSONAL_INFO.availability}</span></div>
          </div>
        );
        break;

      case 'cat':
        if (arg === 'resume.md' || arg === 'cv.md') {
          output = (
            <div className="p-3 bg-slate-900 rounded border border-slate-800 text-xs font-mono text-slate-300 space-y-2">
              <div className="text-sky-400 font-bold text-sm"># Md. Nurul Alam - Senior Full-Stack & AI Systems Architect</div>
              <div>- Email: MNALAMBD09@gmail.com | Location: Dhaka, Bangladesh</div>
              <div>- Core: React 19, TypeScript, Go, Python, PostgreSQL, Gemini API, Docker, AWS</div>
              <div>- 7+ years of experience shipping scalable enterprise microservices and GenAI platforms.</div>
              <div className="text-emerald-400">&gt; Type 'sudo hire-nurul' or send an email to MNALAMBD09@gmail.com to proceed.</div>
            </div>
          );
        } else {
          output = <div className="text-rose-400 text-xs">File not found. Try: cat resume.md</div>;
        }
        break;

      case 'sudo':
        if (arg === 'hire-nurul' || arg === 'hire') {
          output = (
            <div className="p-3 bg-emerald-950/40 border border-emerald-500/50 rounded text-xs space-y-1.5 text-emerald-300">
              <div className="font-bold text-sm text-white">ACCESS GRANTED: Senior Engineering Talent Acquired! 🚀</div>
              <div>Priority dispatch routing directly to: <span className="text-sky-300 font-bold underline">{PERSONAL_INFO.email}</span></div>
              <div className="text-slate-300">"Looking forward to building exceptional, resilient systems for your team." - Nurul Alam</div>
            </div>
          );
        } else {
          output = <div className="text-rose-400 text-xs">sudo: command not allowed. Try: sudo hire-nurul</div>;
        }
        break;

      case 'clear':
        setHistory([]);
        return;

      default:
        output = (
          <div className="text-rose-400 text-xs">
            command not found: {trimmed}. Type <span className="text-sky-400 underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for options.
          </div>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: trimmed, output }]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div
        className={`w-full bg-[#080d16] border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden transition-all duration-300 ${
          expanded ? 'max-w-6xl h-[92vh]' : 'max-w-3xl h-[650px]'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 cursor-pointer" onClick={() => setExpanded(!expanded)} />
            </div>
            <div className="text-xs font-mono text-slate-300 flex items-center gap-1.5 ml-2">
              <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>nurul@dhaka-server:~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setExpanded(!expanded)}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800"
              title={expanded ? 'Minimize' : 'Maximize'}
            >
              {expanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Console Output Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 font-mono text-xs sm:text-sm space-y-4 bg-[#060a12]">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-slate-400">
                <span className="text-emerald-400">mna@dhaka:~$</span>
                <span className="text-slate-100 font-semibold">{item.command}</span>
              </div>
              <div className="pl-4">{item.output}</div>
            </div>
          ))}

          <div ref={bottomRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="p-3 bg-slate-900 border-t border-slate-800 font-mono text-xs sm:text-sm flex items-center gap-2">
          <span className="text-emerald-400 font-bold">mna@dhaka:~$</span>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
              setInput('');
            }}
            className="flex-1 flex items-center gap-2"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type help, whoami, skills, projects, sudo hire-nurul..."
              className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 outline-none border-none font-mono text-xs sm:text-sm"
              autoFocus
            />
            <button
              type="submit"
              className="p-1 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <CornerDownLeft className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
