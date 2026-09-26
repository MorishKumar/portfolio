import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhatIDo } from './components/WhatIDo';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Certifications } from './components/Certifications';
import { WhyHireMe } from './components/WhyHireMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="min-h-screen bg-[#f5f5f7] dark:bg-slate-950 text-slate-800 dark:text-slate-100 selection:bg-stone-800 selection:text-white transition-colors duration-300">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {!loading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <WhatIDo />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <WhyHireMe />
            <Contact />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}
