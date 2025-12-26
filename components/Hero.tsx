import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      <div 
        className="absolute top-20 -left-20 w-64 h-64 bg-lavender-light/20 rounded-full blur-3xl animate-pulse-slow"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-pink/40 rounded-full blur-3xl animate-float"
        style={{
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      
      <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-lavender/10 rounded-full blur-2xl animate-float-delayed"></div>

      <div className="container mx-auto px-6 md:px-12 z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <span className="inline-block px-4 py-1 mb-6 text-xs uppercase tracking-widest text-lavender font-semibold bg-lavender/10 rounded-full animate-fade-in opacity-0">
            Junior React Developer
          </span>
          <h1 className="text-4xl md:text-7xl font-serif text-accent-brown mb-6 leading-tight animate-slide-up opacity-0">
            I'm <span className="text-lavender italic underline decoration-accent-pink decoration-4 hover:decoration-wavy transition-all">Benzaid Hadil</span>
          </h1>
          <p className="text-lg text-accent-brown/70 mb-10 leading-relaxed max-w-xl animate-slide-up-delayed opacity-0">
            A creative software engineer specializing in building elegant digital experiences. 
            Focused on bridging the gap between sophisticated design and high-performance React applications.
            M1.STIC Student @ 2025.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 animate-slide-up-more-delayed opacity-0">
            <a 
              href="#projects" 
              className="px-8 py-4 bg-lavender text-white rounded-lg shadow-lg hover:bg-lavender-dark transition-all transform hover:-translate-y-2 hover:shadow-2xl w-full sm:w-auto text-center font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-lavender-dark transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border-2 border-lavender/20 text-lavender rounded-lg hover:border-lavender hover:bg-lavender/5 transition-all transform hover:-translate-y-2 w-full sm:w-auto text-center font-medium"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center md:justify-end animate-slide-in-right ">
          <div className="relative animate-float-gentle">
            <div className="absolute inset-0 bg-lavender/20 rounded-2xl transform rotate-6 translate-x-4 translate-y-4 -z-10 transition-all duration-500 hover:rotate-12 hover:scale-105"></div>
            <img 
             src="/images/Logo.jpg" 
             alt="Professional Profile" 
             className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105 cursor-pointer"
             />
            <div className="absolute -top-4 -right-4 w-20 h-20 border-t-4 border-r-4 border-lavender rounded-tr-3xl opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 border-b-4 border-l-4 border-lavender rounded-bl-3xl opacity-50"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translate(0px, 0px); }
          33% { transform: translate(10px, -10px); }
          66% { transform: translate(-10px, 10px); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
.animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
.animate-float { animation: float 12s ease-in-out infinite; }
.animate-float-delayed { animation: float-delayed 15s ease-in-out infinite; }
.animate-float-gentle { animation: float-gentle 8s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 1.5s ease-out 0.2s forwards; }
.animate-slide-up { animation: slide-up 1.5s ease-out 0.4s forwards; }
.animate-slide-up-delayed { animation: slide-up 1.5s ease-out 0.6s forwards; }
.animate-slide-up-more-delayed { animation: slide-up 1.5s ease-out 0.8s forwards; }
.animate-slide-in-right { animation: slide-in-right 1.5s ease-out 0.6s forwards; }
      `}</style>
    </div>
  );
};

export default Hero;