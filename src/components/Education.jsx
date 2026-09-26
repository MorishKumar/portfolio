import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education } from '../data/portfolioData';

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
            <GraduationCap size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Education
            </h2>
          </div>
        </div>

        {/* Education Timeline Cards */}
        <div className="space-y-4">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:shadow-xs transition-all duration-200"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-xs font-bold text-stone-800 dark:text-stone-300 mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 text-xs font-bold border border-stone-200 dark:border-stone-700 w-fit">
                  <Award size={13} className="text-stone-700 dark:text-stone-300" />
                  {edu.year}
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {edu.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
