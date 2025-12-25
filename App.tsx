
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-lavender-light selection:text-white">
      <Header isScrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>
        
        <section id="projects" className="bg-white py-24">
          <Projects />
        </section>
        
        <section id="skills" className="bg-accent-pink/30 py-24">
          <Skills />
        </section>
        
        <section id="contact" className="bg-white py-24">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
