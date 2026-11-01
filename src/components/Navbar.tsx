import React, { useState, useEffect } from 'react';
import { Sun, Moon, ArrowUpRight, Menu, X, FileText } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Writing', href: '#writing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-50/85 dark:bg-neutral-950/85 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800/80 shadow-xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="group flex items-center gap-3 text-neutral-900 dark:text-neutral-100 no-underline"
          aria-label="Back to top"
        >
          <div className="w-9 h-9 rounded-md bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-950 flex items-center justify-center font-editorial font-bold text-lg tracking-wider transition-transform duration-300 group-hover:scale-105">
            {portfolioData.personal.initials}
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 leading-none">
              {portfolioData.personal.name}
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[11px] font-mono-code text-neutral-500 dark:text-neutral-400 leading-none">
                Available for work
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-normal text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center gap-3">
          {/* Resume button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono-code border border-neutral-300 dark:border-neutral-700 rounded-md hover:bg-neutral-200/50 dark:hover:bg-neutral-800 transition-colors text-neutral-700 dark:text-neutral-300 cursor-pointer"
            title="View Resume Summary"
          >
            <FileText className="w-3.5 h-3.5 text-neutral-500" />
            <span>CV</span>
          </button>

          {/* Theme switcher */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="p-2 text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 rounded-md hover:bg-neutral-200/60 dark:hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 transition-transform hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 transition-transform hover:-rotate-12" />
            )}
          </button>

          {/* Quick Contact Link */}
          <a
            href="#contact"
            className="flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-50 dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900 rounded-md transition-all duration-200 shadow-xs"
          >
            <span>Say Hello</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 text-neutral-600 dark:text-neutral-400 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-neutral-700 dark:text-neutral-300 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-200 dark:border-neutral-800 bg-neutral-50/98 dark:bg-neutral-950/98 backdrop-blur-xl px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-editorial text-neutral-800 dark:text-neutral-200 hover:text-neutral-950 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex items-center gap-2 text-xs font-mono-code px-3 py-2 border border-neutral-300 dark:border-neutral-700 rounded-md"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs font-medium px-4 py-2 bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 rounded-md"
            >
              Say Hello
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
