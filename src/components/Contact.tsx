import React, { useState } from 'react';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare } from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#525252', '#a3a3a3', '#171717'],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 },
      });
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Heading */}
        <div className="pb-8 border-b border-neutral-200 dark:border-neutral-800">
          <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500 dark:text-neutral-400 mb-3 uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Contact</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-4xl text-neutral-950 dark:text-neutral-50 font-normal">
            Let&apos;s Build Something Remarkable
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-12 items-start">
          {/* Left Column: Direct Email & Editorial invite */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 font-light leading-relaxed">
              Whether you are looking to assemble a bespoke web app, modernize an existing design system, or explore a strategic advisory role, I&apos;d love to hear from you.
            </p>

            {/* Email quick card */}
            <div className="p-6 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/40 dark:bg-neutral-900/40 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-500">
                <Mail className="w-3.5 h-3.5" />
                <span>DIRECT INBOX</span>
              </div>
              <div className="font-mono-code text-sm sm:text-base text-neutral-900 dark:text-neutral-100 break-all select-all font-medium">
                {portfolioData.personal.email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-xs font-mono-code text-neutral-800 dark:text-neutral-200 hover:bg-neutral-200/50 dark:hover:bg-neutral-700 transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-emerald-600 dark:text-emerald-400">Email Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy to clipboard</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Handles */}
            <div className="space-y-2 pt-2">
              <div className="text-xs font-mono-code text-neutral-400 uppercase tracking-wider">
                Around the Web
              </div>
              <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
                {portfolioData.personal.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 flex items-center justify-between text-xs font-mono-code text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-neutral-100 transition-colors"
                  >
                    <span>{social.name}</span>
                    <span className="text-neutral-400 dark:text-neutral-500">{social.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-100/30 dark:bg-neutral-900/30">
              <h3 className="font-editorial text-xl font-medium text-neutral-900 dark:text-neutral-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">
                Expect a response within 24 to 48 hours.
              </p>

              {isSubmitted ? (
                <div className="p-6 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-fade-in">
                  <div className="w-9 h-9 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h4 className="font-editorial text-lg text-emerald-900 dark:text-emerald-200 font-medium">
                    Message Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-emerald-700 dark:text-emerald-300">
                    Thank you for reaching out. I will review your note and get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono-code text-neutral-600 dark:text-neutral-400 mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Vance"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-hidden focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono-code text-neutral-600 dark:text-neutral-400 mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="elena@company.com"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-hidden focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono-code text-neutral-600 dark:text-neutral-400 mb-1.5"
                    >
                      Project Details / Message *
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about the goals, timeline, or scope of your project..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 text-sm focus:outline-hidden focus:ring-1 focus:ring-neutral-900 dark:focus:ring-neutral-100 transition-colors resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-white dark:bg-neutral-100 dark:hover:bg-neutral-200 dark:text-neutral-900 text-xs font-medium tracking-wide uppercase transition-all shadow-xs disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Sending note...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Transmit Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
