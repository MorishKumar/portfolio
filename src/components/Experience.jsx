import React, { useState } from 'react';
import { Briefcase, BookOpen, Calendar, MapPin, ChevronRight, Building2 } from 'lucide-react';
import { workExperience, teachingLeadership } from '../data/portfolioData';

export function Experience() {
  const [activeTab, setActiveTab] = useState('internships');

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700 text-xs font-bold uppercase tracking-wider mb-2">
            <Briefcase size={14} />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Experience & Leadership
          </h2>
        </div>

        {/* Tab Selection Pill */}
        <div className="flex justify-center mb-10">
          <div className="flex gap-1 p-1 rounded-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab('internships')}
              className={`flex items-center gap-2 py-2 px-5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'internships'
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Briefcase size={14} />
              <span>Development Internships</span>
            </button>

            <button
              onClick={() => setActiveTab('teaching')}
              className={`flex items-center gap-2 py-2 px-5 rounded-full text-xs font-bold transition-all ${
                activeTab === 'teaching'
                  ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen size={14} />
              <span>Teaching & Mentorship</span>
            </button>
          </div>
        </div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-stone-300 dark:border-stone-700 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-8">
          {(activeTab === 'internships' ? workExperience : teachingLeadership).map((item, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-stone-800 dark:bg-stone-200 ring-4 ring-white dark:ring-slate-950 shadow-md group-hover:scale-125 transition-transform" />

              <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:shadow-md transition-all duration-200 space-y-3">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-slate-800">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      <span>{item.role}</span>
                    </h3>
                    
                    <div className="flex items-center gap-2 text-xs font-bold text-stone-800 dark:text-stone-300 mt-1">
                      <Building2 size={14} />
                      <span>{item.company}</span>
                      {item.location && (
                        <span className="flex items-center gap-1 text-slate-400 font-normal">
                          • <MapPin size={12} /> {item.location}
                        </span>
                      )}
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold w-fit">
                    <Calendar size={12} />
                    <span>{item.period}</span>
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-1.5 pt-1">
                  <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-400">Key Contributions:</p>
                  <ul className="space-y-1">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                        <ChevronRight size={14} className="text-stone-600 dark:text-stone-400 shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="pt-3 flex flex-wrap gap-1.5 border-t border-slate-100 dark:border-slate-800">
                  {item.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded-full bg-stone-100 dark:bg-stone-800/70 text-stone-800 dark:text-stone-200 text-xs font-semibold border border-stone-200 dark:border-stone-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
