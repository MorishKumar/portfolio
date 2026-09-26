import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const issuerStyles = {
  "Coding Ninjas": "bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700",
  "Coursera": "bg-purple-50 text-purple-700 border-purple-100",
  "Udemy": "bg-amber-50 text-amber-700 border-amber-100"
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-white/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
            <Award size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              Certifications & Courses
            </h2>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:shadow-xs transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${issuerStyles[cert.issuer] || "bg-slate-50 text-slate-700 border-slate-200"}`}>
                    {cert.issuer}
                  </span>
                  <CheckCircle size={16} className="text-stone-700 dark:text-stone-300" />
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {cert.title}
                </h3>
                
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">Focus: </span>
                  {cert.focus}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
