import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-blue-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">R&L</span>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-white font-ibm-plex-bold">
                R&L Data Solutions
              </h1>
              <p className="text-xs text-gray-400 font-ibm-plex-light">
                Transformando dados em resultados
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#inicio" className="nav-link font-ibm-plex-medium">Início</a>
            <a href="#recursos" className="nav-link font-ibm-plex-medium">Recursos</a>
            <a href="#depoimentos" className="nav-link font-ibm-plex-medium">Depoimentos</a>
            <a href="#precos" className="nav-link font-ibm-plex-medium">Preços</a>
            <a href="#sobre" className="nav-link font-ibm-plex-medium">Sobre</a>
            <a href="#contato" className="nav-link font-ibm-plex-medium">Contato</a>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="button-outline font-ibm-plex-medium">Começar Agora</button>
            <button className="button font-ibm-plex-medium">Fale Conosco</button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-16 lg:top-20 left-0 right-0 bg-gray-900 border-t border-gray-700 shadow-lg">
            <nav className="flex flex-col space-y-2 p-4">
              <a href="#inicio" className="nav-link font-ibm-plex-medium py-2 px-4 rounded-lg hover:bg-white/10">Início</a>
              <a href="#recursos" className="nav-link font-ibm-plex-medium py-2 px-4 rounded-lg hover:bg-white/10">Recursos</a>
              <a href="#depoimentos" className="nav-link font-ibm-plex-medium py-2 px-4 rounded-lg hover:bg-white/10">Depoimentos</a>
              <a href="#precos" className="nav-link font-ibm-plex-medium py-2 px-4 rounded-lg hover:bg-white/10">Preços</a>
              <a href="#sobre" className="nav-link font-ibm-plex-medium py-2 px-4 rounded-lg hover:bg-white/10">Sobre</a>
              <a href="#contato" className="nav-link font-ibm-plex-medium py-2 px-4 rounded-lg hover:bg-white/10">Contato</a>
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <button className="w-full button-outline font-ibm-plex-medium">Começar Agora</button>
                <button className="w-full button font-ibm-plex-medium">Fale Conosco</button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;