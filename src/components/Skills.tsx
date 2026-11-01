import React from 'react';
import { Cpu, Check } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            <span>Proficiencies &amp; Craft</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 font-normal">
            Technical Stack &amp; Architectural Focus
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {portfolioData.skills.map((category, index) => (
            <div
              key={category.title}
              className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/30 dark:bg-neutral-900/30 space-y-4"
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-editorial text-xl font-medium text-neutral-900 dark:text-neutral-100">
                  {category.title}
                </h3>
                <span className="text-xs font-mono-code text-neutral-400 dark:text-neutral-600">
                  0{index + 1}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {category.description}
              </p>

              {/* Skills list */}
              <div className="flex flex-wrap gap-2 pt-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono-code transition-colors ${
                      skill.highlight
                        ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 shadow-xs'
                        : 'bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300'
                    }`}
                  >
                    {skill.highlight && <Check className="w-3 h-3" />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
