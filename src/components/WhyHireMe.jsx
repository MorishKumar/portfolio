import React from 'react';
import { Star, CheckCircle2, Target } from 'lucide-react';
import { whyHireMe, careerInterests } from '../data/portfolioData';

const strengthColors = [
  "bg-stone-100 text-stone-800 border-stone-200",
  "bg-purple-50 text-purple-600 border-purple-100",
  "bg-amber-50 text-amber-600 border-amber-100",
  "bg-teal-50 text-teal-600 border-teal-100",
  "bg-rose-50 text-rose-600 border-rose-100"
];

const interestColors = [
  "bg-stone-100/80 text-stone-800 border-stone-200",
  "bg-purple-50/80 text-purple-700 border-purple-100",
  "bg-amber-50/80 text-amber-700 border-amber-100",
  "bg-teal-50/80 text-teal-700 border-teal-100",
  "bg-rose-50/80 text-rose-700 border-rose-100",
  "bg-slate-100/80 text-slate-700 border-slate-200"
];

export function WhyHireMe() {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Why Hire Me */}
        <div>
          <div className="flex items-center gap-2.5 mb-8">
            <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
              <Star size={18} />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Why Hire Me / Key Strengths
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whyHireMe.map((item, idx) => {
              const colorClass = strengthColors[idx % strengthColors.length];
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs flex items-start gap-3 hover:border-slate-300 transition-colors"
                >
                  <div className={`p-1.5 rounded-lg border shrink-0 mt-0.5 ${colorClass}`}>
                    <CheckCircle2 size={16} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Career Interests */}
        <div className="pt-8 border-t border-slate-200/60 dark:border-slate-800/80">
          <div className="flex items-center gap-2.5 mb-5">
            <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
              <Target size={18} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Career Interests
              </h3>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {careerInterests.map((interest, idx) => {
              const badgeClass = interestColors[idx % interestColors.length];
              return (
                <span
                  key={idx}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold border ${badgeClass}`}
                >
                  {interest}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
