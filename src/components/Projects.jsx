import React, { useState } from 'react';
import { FolderGit2, ExternalLink, Github, Info } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

const projectCategoryColors = {
  "Full-Stack": "bg-stone-100 text-stone-800 border-stone-200 dark:bg-stone-800 dark:text-stone-200 dark:border-stone-700",
  "React / Node": "bg-purple-50 text-purple-700 border-purple-100",
  "Frontend": "bg-amber-50 text-amber-700 border-amber-100"
};

export function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'Full-Stack', 'React / Node', 'Frontend'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white/80 dark:bg-slate-900/40 border-y border-slate-200/70 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-stone-100 dark:bg-stone-800/80 text-stone-800 dark:text-stone-200 border border-stone-200 dark:border-stone-700">
              <FolderGit2 size={18} />
            </div>
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Featured Projects
              </h2>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-1 p-1 rounded-full bg-slate-200/70 dark:bg-slate-800/60">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 shadow-2xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200/80 dark:border-slate-800/80 shadow-2xs hover:shadow-md hover:border-stone-400 dark:hover:border-stone-600 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Top Category Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${projectCategoryColors[project.category] || "bg-slate-50 text-slate-700 border-slate-200"}`}>
                    {project.category}
                  </span>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center gap-1 text-xs font-semibold text-slate-500 hover:text-stone-800 dark:hover:text-stone-200 transition-colors"
                  >
                    <Info size={13} />
                    <span>Details</span>
                  </button>
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-stone-800 dark:group-hover:text-stone-200 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1 mt-3.5">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="flex items-center justify-between pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold text-stone-800 dark:text-stone-200 hover:underline"
                >
                  View Features →
                </button>

                <div className="flex items-center gap-1.5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    title="GitHub Repository"
                  >
                    <Github size={16} />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg text-stone-800 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                    title="Live Demo"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
