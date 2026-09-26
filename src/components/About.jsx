import React from 'react';
import { User, GraduationCap, Code, Compass } from 'lucide-react';
import { aboutMe, personalInfo } from '../data/portfolioData';

export function About() {
  return (
    <section id="about" className="py-20 bg-white/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
            <User size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              {aboutMe.heading}
            </h2>
          </div>
        </div>

        {/* Content Body with Profile Photo */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs space-y-6">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl p-1 bg-gradient-to-tr from-stone-300 via-stone-500 to-amber-600 shrink-0 shadow-md">
              <img
                src={personalInfo.profileImage}
                alt={personalInfo.name}
                className="w-full h-full rounded-[14px] object-cover"
              />
            </div>

            <div className="space-y-3.5 flex-1 text-center md:text-left">
              {aboutMe.paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Highlight Badges - Stone, Purple, Amber */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-stone-100/80 dark:bg-slate-800/50 border border-stone-200 dark:border-slate-800">
              <GraduationCap className="text-stone-800 dark:text-stone-300 shrink-0" size={18} />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-stone-700 dark:text-stone-300">Education</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">MCA & B.Sc.</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-50/60 dark:bg-slate-800/50 border border-purple-100 dark:border-slate-800">
              <Code className="text-purple-600 dark:text-purple-400 shrink-0" size={18} />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-purple-600">Specialization</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">MERN & Full-Stack</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/60 dark:bg-slate-800/50 border border-amber-100 dark:border-slate-800">
              <Compass className="text-amber-600 dark:text-amber-400 shrink-0" size={18} />
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-amber-600">Mentorship</p>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">DSA & Java Tutor</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
