import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!formState.name || !formState.email || !formState.message) return;
    
    setStatus('sending');
    setTimeout(() => {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 md:px-12 relative">
      {/* Floating background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-lavender/10 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-pink/10 rounded-full blur-3xl animate-float-slower"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16 relative z-10">
        <div className="lg:w-1/3 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-serif text-accent-brown mb-8 animate-fade-in-up">Get In Touch</h2>
          <p className="text-accent-brown/60 mb-10 animate-fade-in-up-delayed">
            Whether you have a project in mind , my inbox is always open.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300 animate-fade-in-up-more-delayed">
              <div className="w-12 h-12 bg-lavender/10 flex items-center justify-center rounded-2xl text-lavender group-hover:bg-lavender group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-lavender font-bold">Email Me</p>
                <p className="text-accent-brown font-medium group-hover:text-lavender transition-colors duration-300">hadil.benzaid@univ-constantine2.dz</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300 animate-fade-in-up-most-delayed">
              <div className="w-12 h-12 bg-lavender/10 flex items-center justify-center rounded-2xl text-lavender group-hover:bg-lavender group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-lavender font-bold">Professional Profile</p>
                <p className="text-accent-brown font-medium group-hover:text-lavender transition-colors duration-300">linkedin.com/in/Benzaid-hadil</p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-2/3 animate-slide-in-right">
          <div className="bg-accent-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-lavender/5 hover:shadow-2xl transition-all duration-700 relative overflow-hidden animate-float-gentle">
            <div className="absolute inset-0 bg-gradient-to-br from-lavender/5 via-transparent to-accent-pink/5 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="transform transition-all duration-500 animate-fade-in-scale" style={{ transform: focusedField === 'name' ? 'scale(1.02)' : 'scale(1)' }}>
                  <label className="block text-xs uppercase tracking-widest text-lavender-dark font-bold mb-2 ml-1">Your Name</label>
                  <input 
                    type="text" 
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white border border-lavender/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lavender-light/50 focus:border-lavender transition-all duration-500 hover:border-lavender/40"
                    placeholder="Name"
                  />
                </div>
                <div className="transform transition-all duration-500 animate-fade-in-scale-delayed" style={{ transform: focusedField === 'email' ? 'scale(1.02)' : 'scale(1)' }}>
                  <label className="block text-xs uppercase tracking-widest text-lavender-dark font-bold mb-2 ml-1">Your Email</label>
                  <input 
                    type="email" 
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-white border border-lavender/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lavender-light/50 focus:border-lavender transition-all duration-500 hover:border-lavender/40"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-8 transform transition-all duration-500 animate-fade-in-scale-more-delayed" style={{ transform: focusedField === 'message' ? 'scale(1.02)' : 'scale(1)' }}>
                <label className="block text-xs uppercase tracking-widest text-lavender-dark font-bold mb-2 ml-1">Message</label>
                <textarea 
                  rows={4} 
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-white border border-lavender/20 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-lavender-light/50 focus:border-lavender transition-all duration-500 resize-none hover:border-lavender/40"
                  placeholder="Let's collaborate on something amazing..."
                />
              </div>
              <button 
                onClick={handleSubmit}
                disabled={status === 'sending'}
                className="w-full bg-lavender text-white font-serif italic text-xl py-4 rounded-xl hover:bg-pink transition-all duration-500 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-2xl disabled:opacity-50 flex items-center justify-center gap-3 relative overflow-hidden group animate-fade-in-scale-most-delayed"
              >
                <span className="relative z-10">
                  {status === 'sending' ? 'Sending ...' : 'Send Message'}
                </span>
                {status === 'success' && <svg className="w-6 h-6 animate-bounce relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>}
                
                <span className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-700 rounded-xl"></span>
              </button>
              {status === 'success' && (
                <p className="mt-4 text-center text-green-600 font-medium text-sm animate-bounce-in">
                  Thank you! Your message has been sent 
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in-scale {
          from { opacity: 0; transform: scale(0.95) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes bounce-in {
          0% { opacity: 0; transform: scale(0.3); }
          50% { opacity: 1; transform: scale(1.05); }
          70% { transform: scale(0.9); }
          100% { transform: scale(1); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, -30px); }
        }
        @keyframes float-slower {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-40px, 40px); }
        }
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .animate-slide-in-left { animation: slide-in-left 1.5s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 1.5s ease-out; }
        .animate-bounce-in { animation: bounce-in 1s ease-out; }
        .animate-float-slow { animation: float-slow 30s ease-in-out infinite; }
        .animate-float-slower { animation: float-slower 35s ease-in-out infinite; }
        .animate-float-gentle { animation: float-gentle 10s ease-in-out infinite; }
        
        .animate-fade-in-up { animation: fade-in-up 1.5s ease-out 0.3s backwards; }
        .animate-fade-in-up-delayed { animation: fade-in-up 1.5s ease-out 0.6s backwards; }
        .animate-fade-in-up-more-delayed { animation: fade-in-up 1.5s ease-out 0.9s backwards; }
        .animate-fade-in-up-most-delayed { animation: fade-in-up 1.5s ease-out 1.2s backwards; }
        
        .animate-fade-in-scale { animation: fade-in-scale 1.2s ease-out 0.7s backwards; }
        .animate-fade-in-scale-delayed { animation: fade-in-scale 1.5s ease-out 0.9s backwards; }
        .animate-fade-in-scale-more-delayed { animation: fade-in-scale 1.5s ease-out 1.1s backwards; }
        .animate-fade-in-scale-most-delayed { animation: fade-in-scale 1.5s ease-out 1.3s backwards; }   `}</style>
    </div>
  );
};

export default Contact;