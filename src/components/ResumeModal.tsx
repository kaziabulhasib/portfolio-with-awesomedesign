import React, { useEffect } from 'react';
import { X, Printer, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl p-6 sm:p-10 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Controls Bar */}
        <div className="flex items-center justify-between pb-6 mb-6 border-b border-neutral-200 dark:border-neutral-800">
          <div className="text-xs font-mono-code text-neutral-500 uppercase tracking-widest">
            Curriculum Vitae / Resume
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              aria-label="Close"
              className="p-1.5 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Content Paper */}
        <div className="space-y-8 font-sans text-neutral-900 dark:text-neutral-100">
          {/* Header */}
          <div className="space-y-2">
            <h1 className="font-editorial text-3xl sm:text-4xl font-normal text-neutral-950 dark:text-white">
              {portfolioData.personal.name}
            </h1>
            <p className="font-mono-code text-xs text-neutral-500 dark:text-neutral-400">
              {portfolioData.personal.role} • {portfolioData.personal.location.city}, {portfolioData.personal.location.country}
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono-code text-neutral-600 dark:text-neutral-400 pt-1">
              <span>{portfolioData.personal.email}</span>
              <span>•</span>
              <a
                href={portfolioData.personal.socials[0].url}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                GitHub <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <span>•</span>
              <a
                href={portfolioData.personal.socials[1].url}
                target="_blank"
                rel="noreferrer"
                className="hover:underline flex items-center gap-1"
              >
                LinkedIn <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono-code uppercase tracking-widest text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {portfolioData.personal.bioParagraphs[0]} {portfolioData.personal.bioParagraphs[1]}
            </p>
          </div>

          {/* Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono-code uppercase tracking-widest text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1">
              Experience
            </h2>
            <div className="space-y-5">
              {portfolioData.experience.map((exp) => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-2">
                    <span className="text-sm font-semibold text-neutral-950 dark:text-neutral-50">
                      {exp.role} — <span className="font-normal text-neutral-700 dark:text-neutral-300">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-neutral-600 dark:text-neutral-300">
                    {exp.achievements.map((ach, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h2 className="text-xs font-mono-code uppercase tracking-widest text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1">
                Core Stack
              </h2>
              <p className="text-xs text-neutral-700 dark:text-neutral-300 leading-relaxed">
                React, TypeScript, Next.js, Node.js, Tailwind CSS, PostgreSQL, GraphQL, Vitest, CI/CD, Web Vitals, Design Systems.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-xs font-mono-code uppercase tracking-widest text-neutral-500 border-b border-neutral-200 dark:border-neutral-800 pb-1">
                Education
              </h2>
              <div className="text-xs text-neutral-700 dark:text-neutral-300">
                <div className="font-medium">B.S. in Computer Science</div>
                <div className="text-neutral-500">University of California, Berkeley (2015 – 2019)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-10 pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between text-[11px] font-mono-code text-neutral-400">
          <span>{portfolioData.personal.name} — Resume 2026</span>
          <button
            onClick={onClose}
            className="hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
