import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="font-serif text-2xl font-bold text-navy">
            <span className="flex items-center">
              <span className="mr-1" role="img" aria-label="books">📚</span>
              Billy<span className="text-sage">Essays</span>
            </span>
          </a>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="nav-link">Services</a>
          <a href="#how-it-works" className="nav-link">How It Works</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#about" className="nav-link">About</a>
          <a href="https://wa.me/254746220913" target="_blank" rel="noopener noreferrer" className="nav-link flex items-center">
            <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
          </a>
          
        </nav>
        
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-2">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <a href="#services" className="nav-link" onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#how-it-works" className="nav-link" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#pricing" className="nav-link" onClick={() => setIsMenuOpen(false)}>Pricing</a>
            <a href="https://wa.me/254746220913" target="_blank" rel="noopener noreferrer" className="nav-link flex items-center" onClick={() => setIsMenuOpen(false)}>
              <FaWhatsapp className="w-6 h-6 text-[#25D366]" />
            </a>
            <a href="#get-started" className="btn-primary inline-block text-center" onClick={() => setIsMenuOpen(false)}>Get Started</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
