import React, { useState, useEffect } from 'react';

export function Preloader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 200);
          setTimeout(() => onComplete && onComplete(), 600);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#f5f5f7] dark:bg-slate-950 text-slate-900 dark:text-white transition-opacity duration-500 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center mb-8 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-2 text-slate-900 dark:text-white">
          <span>Morish </span>
          <span className="text-stone-800 dark:text-stone-200">
            Kumar
          </span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium tracking-wide">
          Software Developer & Full-Stack Developer
        </p>
      </div>

      {/* Progress Bar Track */}
      <div className="w-52 sm:w-60 h-1.5 bg-slate-200/80 dark:bg-slate-800 rounded-full overflow-hidden relative">
        <div
          className="h-full bg-stone-800 dark:bg-stone-200 transition-all duration-100 ease-out rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress Percentage */}
      <span className="mt-3 text-xs font-mono font-semibold text-stone-700 dark:text-stone-300">
        {progress}%
      </span>
    </div>
  );
}
