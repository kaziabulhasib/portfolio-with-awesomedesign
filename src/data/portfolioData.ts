import type { PortfolioData } from '../types/portfolio';

/**
 * PORTFOLIO DATA CONFIGURATION
 * ------------------------------------------------------------------
 * You can customize all your personal info, projects, experience,
 * skills, and articles directly in this single file.
 */
export const portfolioData: PortfolioData = {
  personal: {
    name: 'Alex Rivera',
    initials: 'AR',
    role: 'Senior Frontend & Full-Stack Developer',
    tagline: 'Designing calm, high-performance interfaces with meticulous attention to typography, typography balance, and modern web architecture.',
    editorialQuote: '“Simplicity is not the lack of clutter, but the mastery of proportion, clarity, and purpose.”',
    bioParagraphs: [
      'I am an engineer and interface craftsman with 6+ years of experience building modern web products. My work bridges the space between rigorous software engineering and restrained, intentional visual design.',
      'Currently focused on building responsive web apps with React, TypeScript, Next.js, Tailwind CSS, and scalable cloud architectures. I care deeply about web performance, accessible interaction design, and developer ergonomics.',
      'When not coding, I write about web performance, experiment with generative typography, and explore minimalist architectural photography.'
    ],
    status: {
      available: true,
      text: 'Available for select contract & full-time roles'
    },
    location: {
      city: 'San Francisco',
      country: 'USA',
      timezone: 'America/Los_Angeles'
    },
    email: 'alex.rivera.dev@example.com',
    socials: [
      {
        name: 'GitHub',
        label: 'github.com/alexrivera',
        url: 'https://github.com',
        handle: '@alexrivera'
      },
      {
        name: 'LinkedIn',
        label: 'linkedin.com/in/alexrivera-dev',
        url: 'https://linkedin.com',
        handle: 'in/alexrivera-dev'
      },
      {
        name: 'X (Twitter)',
        label: 'x.com/alexrivera_dev',
        url: 'https://x.com',
        handle: '@alexrivera_dev'
      },
      {
        name: 'ReadCV',
        label: 'read.cv/alexrivera',
        url: 'https://read.cv',
        handle: 'alexrivera'
      }
    ]
  },

  projects: [
    {
      id: 'lumina-analytics',
      title: 'Lumina Analytics',
      tagline: 'Real-time telemetry dashboard designed for high-density streaming metrics.',
      category: 'Full Stack',
      year: '2025',
      featured: true,
      role: 'Lead Architect & Designer',
      metrics: '40% faster rendering latency & 120k daily active queries',
      description: 'A minimalist analytics suite for engineering teams to monitor microservices and edge request latencies in real time without cognitive fatigue.',
      longDescription: 'Lumina was conceived to rethink the overwhelming complexity of modern cloud monitoring dashboards. By employing calm typography, muted grayscale accents, and micro-sparklines, Lumina lets engineers spot anomalies in sub-second streaming data without visual distraction. Built with an optimized canvas rendering pipeline and WebSocket streaming protocol.',
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Next.js', 'PostgreSQL', 'WebSockets'],
      liveUrl: 'https://example.com/lumina',
      githubUrl: 'https://github.com/example/lumina-analytics',
      highlights: [
        'Custom WebGL virtualized canvas graph pipeline handling 50k points at 60fps',
        'End-to-end type-safe API schema with zero runtime serialization overhead',
        'Built keyboard-first shortcuts for instant filter slicing and triage logs'
      ]
    },
    {
      id: 'verve-design-system',
      title: 'Verve UI & Token Engine',
      tagline: 'An accessible, headless component system tailored for editorial digital publications.',
      category: 'Frontend / UI',
      year: '2024',
      featured: true,
      role: 'Design Systems Engineer',
      metrics: 'Adopted by 14 product teams; 100% WCAG AAA compliance',
      description: 'A production-grade, headless UI token library and component toolkit prioritizing fluid typography, dark mode balance, and strict keyboard navigation.',
      longDescription: 'Verve solves the challenge of maintaining brand consistency across multi-brand digital publishers. It features a custom design token compiler that translates Figma primitives into CSS variables and typed React hooks, with built-in automated accessibility regression testing.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'Storybook', 'Framer Motion'],
      liveUrl: 'https://example.com/verve',
      githubUrl: 'https://github.com/example/verve-tokens',
      highlights: [
        '100% keyboard accessible with zero focus trapping bugs in automated audits',
        'Sub-15kb bundle size footprint through aggressive tree-shaking primitives',
        'Automated visual regression tests running against 4 viewport dimensions'
      ]
    },
    {
      id: 'chronicle-markdown',
      title: 'Chronicle Workspace',
      tagline: 'Distraction-free markdown editor for technical writers and long-form essays.',
      category: 'Full Stack',
      year: '2024',
      featured: true,
      role: 'Sole Creator',
      metrics: '28k GitHub stars & 45k monthly writers',
      description: 'A local-first, distraction-free markdown studio with instant LaTeX rendering, bidirectional linking, and offline sync via CRDTs.',
      longDescription: 'Chronicle brings the tactile feel of fine editorial print publishing into the browser. It features bidirectional link graph visualization, offline persistence with IndexedDB, and automatic export to PDF with custom typography stylesheets.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Y.js CRDTs', 'Vite', 'IndexedDB'],
      liveUrl: 'https://example.com/chronicle',
      githubUrl: 'https://github.com/example/chronicle-workspace',
      highlights: [
        'Conflict-free offline replication engine with Y.js and Web Workers',
        'Custom typography engine supporting dynamic optical font sizing',
        'Zero telemetry, local encryption by default with export to markdown & PDF'
      ]
    },
    {
      id: 'spectral-cli',
      title: 'Spectral CLI & Engine',
      tagline: 'Open-source benchmark utility for measuring Web Vitals and font layout shifts.',
      category: 'Open Source',
      year: '2023',
      featured: false,
      role: 'Maintainer',
      metrics: 'Over 850k npm lifetime downloads',
      description: 'A fast developer CLI and GitHub Action that identifies typography-induced cumulative layout shifts (CLS) before pull requests merge.',
      longDescription: 'Web fonts frequently cause disruptive cumulative layout shifts when fallback metrics mismatch. Spectral calculates exact font metric overrides (ascent, descent, line-gap) to eliminate layout jumps entirely.',
      technologies: ['Node.js', 'TypeScript', 'Chromium Headless', 'Tailwind CSS', 'GitHub Actions'],
      liveUrl: 'https://example.com/spectral',
      githubUrl: 'https://github.com/example/spectral-cli',
      highlights: [
        'Precise font metric calculations from raw TTF/WOFF2 font tables',
        'CLI output formatted as clean markdown tables for CI/CD status comments',
        'Lightweight footprint with zero native C++ compiler requirements'
      ]
    }
  ],

  experience: [
    {
      id: 'exp-1',
      period: '2023 — Present',
      role: 'Senior Frontend Engineer',
      company: 'Kinetic Labs',
      companyUrl: 'https://example.com',
      location: 'San Francisco, CA (Remote)',
      type: 'Full-time',
      description: 'Leading client architecture and design systems for enterprise-grade collaborative workflow tools.',
      achievements: [
        'Rebuilt the flagship web application with React, reducing page load latency by 45% and eliminating unnecessary client re-renders.',
        'Established company-wide frontend standards, automated CI accessibility gates, and shared component primitives.',
        'Mentored 6 junior and mid-level engineers through bi-weekly architectural design reviews and pairing sessions.'
      ],
      technologies: ['React 19', 'TypeScript', 'Tailwind CSS', 'Next.js', 'GraphQL', 'Jest']
    },
    {
      id: 'exp-2',
      period: '2021 — 2023',
      role: 'Full Stack Engineer',
      company: 'Aura Studio',
      companyUrl: 'https://example.com',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Engineered high-performance web applications and headless e-commerce platforms for global creative brands.',
      achievements: [
        'Delivered 9 bespoke web experiences featuring custom scroll interactions, 3D Canvas visualizers, and sub-1s Core Web Vitals.',
        'Architected real-time inventory synchronization services handling 5,000+ orders during flash product releases.',
        'Spearheaded transition from legacy CSS to modern utility-based architecture with Tailwind CSS, accelerating delivery speed by 3x.'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'Redis']
    },
    {
      id: 'exp-3',
      period: '2019 — 2021',
      role: 'Frontend Developer',
      company: 'Monolith Media',
      companyUrl: 'https://example.com',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Developed editorial publishing frontends, custom CMS preview pipelines, and interactive storytelling layouts.',
      achievements: [
        'Built dynamic responsive editorial templates visited by 2.4M unique readers monthly.',
        'Integrated headless CMS content previews with optimistic real-time rendering.',
        'Optimized responsive asset delivery, dropping mobile data payloads by 60%.'
      ],
      technologies: ['JavaScript (ES6+)', 'React', 'TypeScript', 'Sass', 'Webpack', 'REST APIs']
    }
  ],

  skills: [
    {
      title: 'Frontend Architecture',
      description: 'Building resilient, type-safe, and high-performance user interfaces.',
      skills: [
        { name: 'React / Next.js', highlight: true },
        { name: 'TypeScript', highlight: true },
        { name: 'Tailwind CSS', highlight: true },
        { name: 'HTML5 / Semantic Web' },
        { name: 'CSS Architecture & Tokens' },
        { name: 'State Machines & Zustand' },
        { name: 'Framer Motion & Micro-interactions' },
        { name: 'Web Performance & Core Web Vitals' }
      ]
    },
    {
      title: 'Backend & Systems',
      description: 'Crafting robust APIs, streaming protocols, and cloud services.',
      skills: [
        { name: 'Node.js / Express', highlight: true },
        { name: 'REST & GraphQL APIs' },
        { name: 'PostgreSQL & Prisma' },
        { name: 'Redis & Caching' },
        { name: 'WebSockets & SSE' },
        { name: 'Serverless Functions' }
      ]
    },
    {
      title: 'Tooling, Testing & DevOps',
      description: 'Maintaining pristine developer experience and reliable continuous delivery.',
      skills: [
        { name: 'Vite & Modern Bundlers', highlight: true },
        { name: 'Git & GitHub Actions', highlight: true },
        { name: 'Vitest / Jest / Playwright' },
        { name: 'Docker basics' },
        { name: 'Vercel / Cloudflare Workers' },
        { name: 'Figma to Code Workflow' }
      ]
    },
    {
      title: 'Design Philosophy & Accessibility',
      description: 'Focusing on humane ergonomics, typography, and inclusivity.',
      skills: [
        { name: 'WCAG AAA Accessibility', highlight: true },
        { name: 'Editorial Typography' },
        { name: 'Information Hierarchy' },
        { name: 'Responsive Breakpoint Strategy' },
        { name: 'Design Tokens & Theming' }
      ]
    }
  ],

  articles: [
    {
      id: 'article-1',
      title: 'The Calming Geometry of Editorial Web Interfaces',
      publication: 'Substack / Medium',
      date: 'Jan 2025',
      readTime: '6 min read',
      summary: 'Why modern web design is shedding noisy visual gimmicks in favor of classical typographic grids, deliberate negative space, and readable proportions.',
      link: 'https://example.com/editorial-web'
    },
    {
      id: 'article-2',
      title: 'Eliminating Layout Shift in Web Fonts Without Guesswork',
      publication: 'Frontend Weekly',
      date: 'Nov 2024',
      readTime: '8 min read',
      summary: 'A deep dive into font fallback metric overrides, font-display strategies, and preventing layout jumps on low-bandwidth connections.',
      link: 'https://example.com/font-layout-shifts'
    },
    {
      id: 'article-3',
      title: 'Designing for the 60fps Budget in React 19',
      publication: 'Tech Notes',
      date: 'Aug 2024',
      readTime: '5 min read',
      summary: 'Practical mental models for handling real-time streaming data, memoization traps, and concurrent rendering without lag.',
      link: 'https://example.com/react-performance'
    }
  ]
};
