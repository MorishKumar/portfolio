import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Copyright & Title */}
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-medium text-slate-300">
              © 2026 {personalInfo.name}
            </p>
            <p className="text-xs text-slate-500">
              {personalInfo.title}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm font-medium">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            title="Back to top"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>

        </div>
      </div>
    </footer>
  );
}
