import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle2, Calendar, Tag, Layers } from 'lucide-react';
import type { Project } from '../types/portfolio';
import { GithubIcon } from './Icons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-neutral-950/70 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-neutral-50 dark:bg-neutral-900 border border-neutral-300 dark:border-neutral-700 rounded-xl p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-5 right-5 p-2 text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-lg hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-3 pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
            <span className="px-2 py-0.5 rounded-sm bg-neutral-200/70 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
              {project.category}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {project.year}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Layers className="w-3 h-3" />
              {project.role}
            </span>
          </div>

          <h2 className="font-editorial text-2xl sm:text-3xl text-neutral-950 dark:text-neutral-50 font-normal">
            {project.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Metric badge if available */}
        {project.metrics && (
          <div className="mt-5 p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200 dark:border-neutral-700/60 flex items-center gap-2 text-xs font-mono-code text-neutral-700 dark:text-neutral-300">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="font-semibold text-neutral-900 dark:text-neutral-100">Key Impact:</span>
            <span>{project.metrics}</span>
          </div>
        )}

        {/* Detailed Narrative */}
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
          <h3 className="font-editorial text-lg font-medium text-neutral-900 dark:text-neutral-100">
            Overview &amp; Architecture
          </h3>
          <p>{project.longDescription}</p>
        </div>

        {/* Key Architectural Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="mt-6">
            <h3 className="font-editorial text-lg font-medium text-neutral-900 dark:text-neutral-100 mb-3">
              Engineering Highlights
            </h3>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600 dark:text-neutral-300">
                  <CheckCircle2 className="w-4 h-4 text-neutral-800 dark:text-neutral-200 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Stack Tags */}
        <div className="mt-6 pt-5 border-t border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-3">
            <Tag className="w-3.5 h-3.5" />
            <span>Technologies &amp; Libraries:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono-code rounded-md bg-neutral-200/60 dark:bg-neutral-800 border border-neutral-300/60 dark:border-neutral-700/60 text-neutral-800 dark:text-neutral-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Links */}
        <div className="mt-8 pt-5 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-neutral-200 rounded-md transition-colors"
              >
                <span>Live Preview</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono-code border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/60 dark:hover:bg-neutral-800 text-neutral-800 dark:text-neutral-200 rounded-md transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="text-xs font-mono-code text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            Close (Esc)
          </button>
        </div>
      </div>
    </div>
  );
};
