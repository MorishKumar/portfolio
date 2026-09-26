import React from 'react';
import { Layers } from 'lucide-react';
import { whatIDo } from '../data/portfolioData';

const itemLightStyles = [
  { bg: 'bg-stone-100/90 dark:bg-stone-800/60 text-stone-800 dark:text-stone-200 border-stone-200 dark:border-stone-700' },
  { bg: 'bg-purple-50/80 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 border-purple-100 dark:border-purple-900/50' },
  { bg: 'bg-amber-50/80 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 border-amber-100 dark:border-amber-900/50' },
  { bg: 'bg-teal-50/80 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 border-teal-100 dark:border-teal-900/50' },
  { bg: 'bg-rose-50/80 dark:bg-rose-950/40 text-rose-600 dark:text-rose-400 border-rose-100 dark:border-rose-900/50' },
  { bg: 'bg-slate-100/80 dark:bg-slate-800/40 text-slate-700 dark:text-slate-300 border-slate-200/60 dark:border-slate-800/50' },
];

export function WhatIDo() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center gap-2.5 mb-8">
          <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
            <Layers size={18} />
          </div>
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
              What I Do
            </h2>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whatIDo.map((item, index) => {
            const style = itemLightStyles[index % itemLightStyles.length];
            return (
              <div
                key={index}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/80 shadow-2xs hover:shadow-md hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className={`text-2xl mb-3.5 p-2.5 w-fit rounded-xl border ${style.bg}`}>
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
