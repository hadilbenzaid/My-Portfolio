import React, { useEffect, useRef, useState } from 'react';
import { SKILL_CATEGORIES } from '../constants';

const Skills: React.FC = () => {
  const [visibleCategories, setVisibleCategories] = useState<number[]>([]);
  const categoriesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'));
            setVisibleCategories(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    categoriesRef.current.forEach((category) => {
      if (category) observer.observe(category);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-serif text-accent-brown mb-4">Mastery & Tools</h2>
          <p className="text-accent-brown/60">
            A visual representation of my current technical stack and the frameworks I have leveraged 
            throughout the M1.STIC semester.
          </p>
        </div>
        <div className="hidden md:block">
          <span className="text-lavender font-serif italic text-xl animate-pulse">Crafting elegance through code.</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILL_CATEGORIES.map((category, index) => (
          <div 
            key={category.title}
            ref={el => categoriesRef.current[index] = el}
            data-index={index}
            style={{
              opacity: visibleCategories.includes(index) ? 1 : 0,
              transform: visibleCategories.includes(index) ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
              transition: 'all 0.6s ease-out',
              transitionDelay: `${index * 150}ms`
            }}
            className="group p-8 bg-white/60 backdrop-blur-sm rounded-3xl border border-lavender/20 hover:border-lavender-light hover:bg-white/80 transition-all shadow-sm hover:shadow-xl hover:-translate-y-2"
          >
            <h3 className="text-xl font-serif text-lavender-dark mb-6 border-b border-lavender/10 pb-4 group-hover:text-lavender transition-colors flex items-center justify-between">
              {category.title}
              <span className="text-xs font-sans text-lavender/50 group-hover:text-lavender transition-colors">
                {category.skills.length} skills
              </span>
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skill}
                  style={{
                    animationDelay: `${skillIndex * 50}ms`
                  }}
                  className="px-4 py-2 bg-lavender/80 text-sm text-white font-medium rounded-xl shadow-sm hover:shadow-lg hover:bg-lavender-dark transition-all cursor-default transform hover:scale-110 hover:-rotate-2 animate-fade-in-skill opacity-0"
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Decorative floating elements */}
      <div className="absolute right-10 top-1/4 w-16 h-16 border-2 border-lavender/20 rounded-full animate-spin-slow"></div>
      <div className="absolute left-10 bottom-1/4 w-12 h-12 border-2 border-accent-pink/20 rounded-lg animate-bounce-slow"></div>

      <style>{`
        @keyframes fade-in-skill {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-fade-in-skill {
          animation: fade-in-skill 0.5s ease-out forwards;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Skills;