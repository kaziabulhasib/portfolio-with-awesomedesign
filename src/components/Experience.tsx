import React from 'react';
import { Briefcase, ArrowUpRight, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-widest">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 font-normal">
            Work Experience &amp; Engagements
          </h2>
        </div>

        {/* Timeline list */}
        <div className="divide-y divide-neutral-200 dark:border-neutral-800 dark:divide-neutral-800">
          {portfolioData.experience.map((item) => (
            <div key={item.id} className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Timeline date and location column */}
              <div className="md:col-span-4 space-y-2">
                <div className="font-mono-code text-sm font-medium text-neutral-900 dark:text-neutral-100">
                  {item.period}
                </div>
                <div className="text-xs text-neutral-500 dark:text-neutral-400 font-mono-code">
                  {item.location}
                </div>
                <span className="inline-block text-[11px] font-mono-code px-2 py-0.5 rounded-sm bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  {item.type}
                </span>
              </div>

              {/* Role, Company and achievements column */}
              <div className="md:col-span-8 space-y-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-editorial text-2xl text-neutral-950 dark:text-neutral-50 font-medium">
                      {item.role}
                    </h3>
                    <span className="text-neutral-400">at</span>
                    <a
                      href={item.companyUrl || '#'}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-1 font-editorial text-2xl text-neutral-900 dark:text-neutral-100 hover:text-neutral-600 dark:hover:text-neutral-300 underline underline-offset-4 decoration-neutral-300 dark:decoration-neutral-700"
                    >
                      <span>{item.company}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </div>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Achievements */}
                <div className="space-y-2 pt-2">
                  {item.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 shrink-0 mt-1" />
                      <span className="leading-relaxed">{achievement}</span>
                    </div>
                  ))}
                </div>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 pt-3">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-neutral-200/50 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
