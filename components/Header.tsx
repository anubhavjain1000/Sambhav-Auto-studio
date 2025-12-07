import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nexa-blue shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex items-center space-x-2">
          {/* Logo Placeholder - replaced with Icon for now */}
          <div className="bg-white p-1.5 rounded-full">
             <Car className="text-nexa-blue w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-bold font-display tracking-wider ${isScrolled ? 'text-white' : 'text-white'}`}>
              SAMBHAV
            </span>
            <span className={`text-[10px] tracking-[0.2em] font-medium ${isScrolled ? 'text-accent-gold' : 'text-gray-200'}`}>
              AUTOMOBILES
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className={`text-sm font-semibold uppercase tracking-wide hover:text-accent-gold transition-colors ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#booking"
            className="px-5 py-2 bg-accent-gold text-nexa-blue font-bold text-sm uppercase tracking-wide rounded hover:bg-white hover:text-nexa-blue transition-all transform hover:scale-105"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-nexa-blue border-t border-nexa-dark shadow-xl">
          <div className="flex flex-col p-4 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                className="text-white text-base font-medium py-2 border-b border-nexa-dark hover:text-accent-gold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="#booking"
              className="bg-accent-gold text-nexa-blue text-center py-3 font-bold uppercase rounded mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Service
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;