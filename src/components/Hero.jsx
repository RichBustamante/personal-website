import React from 'react';
import { Sparkles, Code2 } from 'lucide-react';

const Hero = ({ setActiveModal }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black z-10" />
        <img 
          src="/tcnj-library.jpg" 
          alt="Background" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 overflow-hidden z-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-30 text-center max-w-5xl">
        <div className="mb-6 flex justify-center">
          <Sparkles className="w-12 h-12 text-purple-400" style={{ animation: 'float 3s ease-in-out infinite' }} />
        </div>
        <h1 
          className="text-7xl md:text-8xl font-black mb-6 leading-tight"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            animation: 'slideUp 0.8s ease-out'
          }}
        >
          Developing Software
          <br />
          <span className="gradient-text">For The Daily User</span>
        </h1>
        <p 
          className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          style={{ animation: 'slideUp 0.8s ease-out 0.2s backwards' }}
        >
          Software Engineer passionate about building beautiful, performant, and responsive web and
          software applications that users love to interact with.
        </p>
        <div 
          className="flex gap-4 justify-center"
          style={{ animation: 'slideUp 0.8s ease-out 0.4s backwards' }}
        >
          <button
            onClick={() => setActiveModal('projects')}
            className="px-8 py-4 bg-white text-black rounded-lg hover:bg-zinc-200 transition-all font-semibold shadow-xl flex items-center gap-2"
          >
            <Code2 className="w-5 h-5" />
            View Projects
          </button>
          <button
            onClick={() => setActiveModal('about')}
            className="px-8 py-4 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-all font-semibold border border-zinc-700"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
