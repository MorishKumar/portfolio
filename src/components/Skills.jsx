import React from 'react';
import { Cpu, Code2, Layout, Server, Database, Wrench, BookOpen, BarChart3 } from 'lucide-react';
import { skillProficiencies, technicalSkills } from '../data/portfolioData';

const categoryConfig = {
  "Programming Languages": { icon: <Code2 size={16} className="text-stone-800 dark:text-stone-200" />, badge: "bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700" },
  "Frontend": { icon: <Layout size={16} className="text-purple-600" />, badge: "bg-purple-50 text-purple-700 border-purple-100" },
  "Backend": { icon: <Server size={16} className="text-teal-600" />, badge: "bg-teal-50 text-teal-700 border-teal-100" },
  "Databases": { icon: <Database size={16} className="text-amber-600" />, badge: "bg-amber-50 text-amber-700 border-amber-100" },
  "Tools & Workflow": { icon: <Wrench size={16} className="text-rose-600" />, badge: "bg-rose-50 text-rose-700 border-rose-100" },
  "Computer Science": { icon: <BookOpen size={16} className="text-slate-600" />, badge: "bg-slate-100 text-slate-700 border-slate-200" }
};

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Cpu size={14} />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Skills & Proficiency
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
            A comprehensive breakdown of my core software engineering proficiencies & toolchains.
          </p>
        </div>

        {/* Skill Proficiency Progress Bars */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs space-y-6">
          <div className="flex items-center gap-2 mb-2 pb-3 border-b border-slate-100 dark:border-slate-800">
            <BarChart3 size={18} className="text-stone-800 dark:text-stone-200" />
            <h3 className="font-bold text-base text-slate-900 dark:text-white">
              Core Technical Competencies
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
            {skillProficiencies.map((skill, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <span>{skill.name}</span>
                  <span className="font-mono text-stone-800 dark:text-stone-200 font-bold">{skill.level}%</span>
                </div>
                
                {/* Progress Bar Track */}
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden relative">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-stone-800 via-stone-600 to-amber-600 transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categorized Skill Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {technicalSkills.map((item, index) => {
            const config = categoryConfig[item.category] || { icon: <Code2 size={16} className="text-stone-800" />, badge: "bg-slate-50 text-slate-700 border-slate-200" };
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:shadow-xs transition-all duration-200"
              >
                <div className="flex items-center gap-2.5 mb-3.5 pb-2.5 border-b border-slate-100 dark:border-slate-800">
                  <div className={`p-1.5 rounded-lg border ${config.badge}`}>
                    {config.icon}
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    {item.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {item.skills.map((s, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:bg-stone-100 dark:hover:bg-stone-800 hover:text-stone-900 dark:hover:text-stone-100 hover:border-stone-300 dark:hover:border-stone-700 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
