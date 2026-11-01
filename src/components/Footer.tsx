import React from 'react';
import { ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-neutral-100/50 dark:bg-neutral-950 text-neutral-600 dark:text-neutral-400">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-editorial text-lg text-neutral-900 dark:text-neutral-100">
              {portfolioData.personal.name}
            </div>
            <p className="text-xs font-mono-code text-neutral-500">
              {portfolioData.personal.role}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-mono-code text-neutral-700 dark:text-neutral-300">
              {portfolioData.personal.status.text}
            </span>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/50 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-neutral-500">
          <div>
            © {currentYear} {portfolioData.personal.name}. All rights reserved.
          </div>
          <div>
            Crafted with React, TypeScript &amp; Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  );
};
