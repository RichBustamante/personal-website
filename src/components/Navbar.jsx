import React from 'react';
import { Download } from 'lucide-react';

const Navbar = ({ scrolled, setActiveModal }) => {
  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/Bustamante_Richard_Resume.pdf';
    link.download = 'Bustamante_Richard_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? 'bg-black bg-opacity-90 backdrop-blur-md border-b border-zinc-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="gradient-text" style={{ fontFamily: "'Playfair Display', serif" }}>
              Richard Bustamante
            </span>
          </div>
          <div className="flex items-center gap-8">
            <button
              onClick={() => setActiveModal('about')}
              className="nav-link text-zinc-300 hover:text-white font-medium"
            >
              About Me
            </button>
            <button
              onClick={() => setActiveModal('projects')}
              className="nav-link text-zinc-300 hover:text-white font-medium"
            >
              Projects
            </button>
            <button
              onClick={handleResumeDownload}
              className="nav-link text-zinc-300 hover:text-white font-medium flex items-center gap-2"
              title="Download Resume"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>
            <button
              onClick={() => setActiveModal('contact')}
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all font-medium shadow-lg shadow-purple-500/30"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
