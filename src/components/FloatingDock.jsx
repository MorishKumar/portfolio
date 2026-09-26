import React, { useState, useEffect } from 'react';
import { Home, User, Cpu, Briefcase, FolderGit2, Mail } from 'lucide-react';

const dockItems = [
  { id: 'home', label: 'Home', icon: <Home size={18} /> },
  { id: 'about', label: 'About', icon: <User size={18} /> },
  { id: 'skills', label: 'Skills', icon: <Cpu size={18} /> },
  { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
  { id: 'projects', label: 'Projects', icon: <FolderGit2 size={18} /> },
  { id: 'contact', label: 'Contact', icon: <Mail size={18} /> },
];

export function FloatingDock() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of dockItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
      <div className="flex items-center gap-1 sm:gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800 shadow-xl backdrop-blur-md">
        {dockItems.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative group p-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? 'bg-indigo-600 text-white scale-110 shadow-md shadow-indigo-600/30'
                  : 'text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
              aria-label={item.label}
            >
              {item.icon}

              {/* Tooltip on Hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 hidden group-hover:flex flex-col items-center pointer-events-none">
                <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white text-[11px] font-semibold whitespace-nowrap shadow-md">
                  {item.label}
                </span>
                <span className="w-2 h-2 -mt-1 bg-slate-900 rotate-45"></span>
              </div>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
