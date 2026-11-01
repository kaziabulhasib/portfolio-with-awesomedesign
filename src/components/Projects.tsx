import React, { useState } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Full Stack', 'Frontend / UI', 'Open Source'];

  const filteredProjects =
    activeCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-widest">
              <span>Selected Index</span>
              <span>/</span>
              <span>Work ({portfolioData.projects.length})</span>
            </div>
            <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 font-normal">
              Featured Case Studies &amp; Software
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const count =
                category === 'All'
                  ? portfolioData.projects.length
                  : portfolioData.projects.filter((p) => p.category === category).length;

              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3 py-1.5 text-xs font-mono-code rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900'
                      : 'bg-neutral-200/50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white'
                  }`}
                >
                  {category} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Project List */}
        <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group py-10 transition-colors hover:bg-neutral-100/40 dark:hover:bg-neutral-900/40 rounded-xl px-4 -mx-4 cursor-pointer"
              onClick={() => onSelectProject(project)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Meta column */}
                <div className="lg:col-span-3 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400 dark:text-neutral-600">
                    <span>[{String(index + 1).padStart(2, '0')}]</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <span className="inline-block text-xs font-mono-code px-2 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                    {project.category}
                  </span>
                  {project.metrics && (
                    <div className="pt-2 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-mono-code">
                      <Sparkles className="w-3 h-3" />
                      <span className="text-[11px] leading-tight">{project.metrics}</span>
                    </div>
                  )}
                </div>

                {/* Content column */}
                <div className="lg:col-span-6 space-y-3">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-50 group-hover:underline underline-offset-4 decoration-neutral-400 dark:decoration-neutral-600 font-normal">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions column */}
                <div className="lg:col-span-3 flex lg:flex-col lg:items-end justify-between items-center gap-3 pt-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProject(project);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-900 dark:text-neutral-100 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-md hover:bg-neutral-200/50 dark:hover:bg-neutral-800"
                        title="Live Preview"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-md hover:bg-neutral-200/50 dark:hover:bg-neutral-800"
                        title="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
