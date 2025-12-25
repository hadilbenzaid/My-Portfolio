import React, { useEffect } from 'react';

interface HeaderProps {
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ isScrolled }) => {
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-12 py-4 ${
        isScrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-serif font-bold text-lavender-dark tracking-tighter transition-all duration-300 hover:scale-110 cursor-pointer">
          BH<span className="text-lavender">.</span>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              style={{ animationDelay: `${index * 100}ms` }}
              className="text-sm uppercase tracking-widest font-medium text-accent-brown/70 hover:text-lavender transition-all duration-300 hover:-translate-y-1 relative group animate-fade-in-down"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-lavender transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        <a 
          href="#contact" 
          className="md:hidden p-2 text-lavender-dark hover:scale-110 transition-transform"
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </a>
      </div>

      <style>{`
        @keyframes fade-in-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.6s ease-out forwards;
        }
      `}</style>
    </header>
  );
};

export default Header;