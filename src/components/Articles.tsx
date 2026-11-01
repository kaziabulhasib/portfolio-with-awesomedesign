import React from 'react';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Articles: React.FC = () => {
  return (
    <section id="writing" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Essays &amp; Writing</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 font-normal">
            Thoughts on Architecture &amp; Typography
          </h2>
        </div>

        {/* Articles List */}
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {portfolioData.articles.map((article) => (
            <a
              key={article.id}
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="group py-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline no-underline hover:bg-neutral-100/40 dark:hover:bg-neutral-900/40 px-4 -mx-4 rounded-xl transition-colors"
            >
              {/* Meta */}
              <div className="md:col-span-3 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 space-y-1">
                <div>{article.date}</div>
                <div className="text-[11px] text-neutral-400 dark:text-neutral-600">
                  {article.publication} • {article.readTime}
                </div>
              </div>

              {/* Title and summary */}
              <div className="md:col-span-8 space-y-1.5">
                <h3 className="font-editorial text-xl sm:text-2xl text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-400 font-medium">
                  {article.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Arrow */}
              <div className="md:col-span-1 flex md:justify-end">
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
