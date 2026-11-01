import React, { useState, useEffect } from 'react';
import { ArrowDown, Copy, Check, MapPin, Clock, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './Icons';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Live local time clock in the author's timezone
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: portfolioData.personal.location.timezone,
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        });
        setCurrentTime(formatter.format(now));
      } catch {
        setCurrentTime('10:45 AM');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    confetti({
      particleCount: 35,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#737373', '#a3a3a3', '#171717'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github':
        return <GithubIcon className="w-3.5 h-3.5" />;
      case 'linkedin':
        return <LinkedinIcon className="w-3.5 h-3.5" />;
      case 'x (twitter)':
      case 'twitter':
        return <TwitterIcon className="w-3.5 h-3.5" />;
      default:
        return <ExternalLink className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section id="about" className="pt-32 pb-20 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Meta badges: Location & Live Time */}
        <div className="flex flex-wrap items-center gap-4 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-8">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-900 border border-neutral-300/60 dark:border-neutral-800">
            <MapPin className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
            <span>
              {portfolioData.personal.location.city}, {portfolioData.personal.location.country}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-200/50 dark:bg-neutral-900 border border-neutral-300/60 dark:border-neutral-800">
            <Clock className="w-3 h-3 text-neutral-600 dark:text-neutral-400" />
            <span>Local Time: {currentTime || 'Loading...'}</span>
          </div>

          <div className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>{portfolioData.personal.status.text}</span>
          </div>
        </div>

        {/* Editorial Main Headline */}
        <div className="space-y-6 max-w-4xl">
          <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-neutral-950 dark:text-neutral-50">
            Architecting <span className="italic font-normal">minimal interfaces</span> with mathematical precision &amp; typographic warmth.
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 font-light leading-relaxed max-w-3xl">
            {portfolioData.personal.tagline}
          </p>

          {/* Editorial quote block */}
          <div className="border-l-2 border-neutral-900 dark:border-neutral-100 pl-4 py-1 italic font-editorial text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            {portfolioData.personal.editorialQuote}
          </div>
        </div>

        {/* Extended Bio Paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 mt-10 border-t border-neutral-200/80 dark:border-neutral-800/80">
          {portfolioData.personal.bioParagraphs.map((paragraph, index) => (
            <div key={index} className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              <span className="font-mono-code text-xs text-neutral-400 dark:text-neutral-600 block mb-2">
                0{index + 1} //
              </span>
              <p>{paragraph}</p>
            </div>
          ))}
        </div>

        {/* Actions & Social Links Bar */}
        <div className="mt-12 pt-8 flex flex-wrap items-center justify-between gap-6 border-t border-neutral-200/80 dark:border-neutral-800/80">
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900 text-xs font-medium tracking-wide uppercase transition-all shadow-xs"
            >
              <span>Explore Works</span>
              <ArrowDown className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-md border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200/60 dark:hover:bg-neutral-800/80 text-neutral-800 dark:text-neutral-200 text-xs font-mono-code transition-all cursor-pointer"
              title="Copy direct email address"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-emerald-600 dark:text-emerald-400">Copied to clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-neutral-500" />
                  <span>{portfolioData.personal.email}</span>
                </>
              )}
            </button>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-3">
            {portfolioData.personal.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-neutral-200/50 dark:hover:bg-neutral-800/60 rounded-md transition-colors"
                title={social.label}
              >
                {getSocialIcon(social.name)}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
