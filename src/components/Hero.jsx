import React from 'react';
import { ArrowRight, Download, Mail, Github, Linkedin, Sparkles, MousePointer, ChevronsDown } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-36 md:pb-24 overflow-hidden">
      {/* Soft Light Background Glows - Warm Stone & Taupe */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-stone-200/50 via-amber-100/30 to-stone-200/40 dark:from-stone-900/30 dark:to-stone-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-stone-100/40 dark:bg-stone-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        {/* Profile Avatar Badge & Status */}
        <div className="flex flex-col items-center gap-3.5">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-tr from-stone-400 via-stone-600 to-amber-600 shadow-md hover:scale-105 transition-transform duration-300">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full rounded-full object-cover shadow-inner"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800/70 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 text-xs font-semibold tracking-wide shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-stone-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-stone-600 dark:bg-stone-300"></span>
            </span>
            <Sparkles size={12} className="text-stone-700 dark:text-stone-300" />
            <span>{personalInfo.statusBadge}</span>
          </div>
        </div>

        {/* Title & Bio */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Hi 👋 I'm{' '}
            <span className="text-stone-800 dark:text-stone-200 underline decoration-stone-300 dark:decoration-stone-700 underline-offset-4">
              {personalInfo.name}
            </span>
          </h1>
          <p className="mt-2 text-xl sm:text-2xl font-bold text-stone-700 dark:text-stone-300 tracking-tight">
            {personalInfo.title}
          </p>
          <p className="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-1">
            ({personalInfo.altTitle})
          </p>
        </div>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto">
          {personalInfo.shortIntro}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 dark:bg-stone-100 dark:hover:bg-stone-200 text-white dark:text-stone-900 font-semibold text-xs sm:text-sm transition-all shadow-xs"
          >
            <span>View Projects</span>
            <ArrowRight size={15} />
          </a>

          <a
            href={personalInfo.resumeUrl}
            download="Morish_Kumar_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-800 font-semibold text-xs sm:text-sm transition-all shadow-2xs"
          >
            <Download size={15} />
            <span>Download Resume</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200/70 dark:bg-slate-800 hover:bg-slate-300/70 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-all"
          >
            <Mail size={15} />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-3 border-t border-slate-200/60 dark:border-slate-800/80 mt-8">
          <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 mr-2">Connect:</span>
          
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-stone-100 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200/80 dark:border-slate-800 transition-colors"
          >
            <Github size={14} />
            <span>GitHub</span>
          </a>

          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-stone-100 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200/80 dark:border-slate-800 transition-colors"
          >
            <Linkedin size={14} />
            <span>LinkedIn</span>
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white dark:bg-slate-800 hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-stone-100 text-slate-700 dark:text-slate-300 text-xs font-semibold border border-slate-200/80 dark:border-slate-800 transition-colors"
          >
            <Mail size={14} />
            <span>Email</span>
          </a>
        </div>

        {/* Scroll Mouse Indicator */}
        <div className="pt-6 flex flex-col items-center justify-center gap-1.5 text-slate-400 dark:text-slate-500 animate-bounce cursor-pointer">
          <a href="#about" className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest hover:text-stone-800 dark:hover:text-stone-200 transition-colors">
            <MousePointer size={14} />
            <span>Scroll to explore</span>
            <ChevronsDown size={14} />
          </a>
        </div>

      </div>
    </section>
  );
}
