import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutModal from './components/modals/AboutModal';
import ProjectsModal from './components/modals/ProjectsModal';
import ContactModal from './components/modals/ContactModal';
import './styles/globals.css';

function App() {
  const [activeModal, setActiveModal] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar 
        scrolled={scrolled} 
        setActiveModal={setActiveModal} 
      />
      <Hero setActiveModal={setActiveModal} />
      
      <AboutModal 
        isOpen={activeModal === 'about'} 
        onClose={() => setActiveModal(null)} 
      />
      <ProjectsModal 
        isOpen={activeModal === 'projects'} 
        onClose={() => setActiveModal(null)} 
      />
      <ContactModal 
        isOpen={activeModal === 'contact'} 
        onClose={() => setActiveModal(null)} 
      />
    </div>
  );
}

export default App;
