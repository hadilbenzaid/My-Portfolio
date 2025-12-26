import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lavender text-white/90 py-12 px-6 relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        <div className="text-center md:text-left transform hover:scale-105 transition-transform duration-300">
          <div className="text-2xl font-serif font-bold tracking-tighter mb-2 hover:text-lavender-light transition-colors">
            Benzaid Hadil<span className="text-white">.</span>
          </div>
          <p className="text-white/50 text-xs tracking-widest uppercase">
            Designed for Web Application Design Course (M1.STIC)
          </p>
        </div>

        <div className="flex gap-6">
          <a 
            href="#" 
            className="hover:text-lavender-light transition-all text-white/70 transform hover:scale-110 hover:-translate-y-1 duration-300 relative group"
          >
            Instagram
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lavender-light transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#" 
            className="hover:text-lavender-light transition-all text-white/70 transform hover:scale-110 hover:-translate-y-1 duration-300 relative group"
          >
            LinkedIn
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lavender-light transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a 
            href="#" 
            className="hover:text-lavender-light transition-all text-white/70 transform hover:scale-110 hover:-translate-y-1 duration-300 relative group"
          >
            GitHub
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lavender-light transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        <div className="text-white/40 text-xs font-medium flex items-center gap-2">
          &copy; {new Date().getFullYear()} — Made with React
        </div>
      </div>

      <style>{`
        @keyframes pulse-heart {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .animate-pulse-heart {
          animation: pulse-heart 1.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;