import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2560&auto=format&fit=crop" 
          alt="Premium Car Service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-nexa-dark/90 to-nexa-blue/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center md:text-left md:flex md:items-center">
        <div className="md:w-2/3 lg:w-1/2 space-y-6">
          <div className="inline-block px-3 py-1 border border-accent-gold/50 rounded-full bg-nexa-dark/50 backdrop-blur-sm">
            <span className="text-accent-gold text-xs font-bold tracking-[0.2em] uppercase">
              Authorized Maruti Suzuki Service
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight">
            Your Nexa & Arena <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold to-white">
              Deserve Premium Care
            </span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl font-light max-w-xl leading-relaxed">
            Experience world-class maintenance, genuine parts, and transparent pricing at Sambhav Automobiles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#booking" 
              className="px-8 py-4 bg-accent-gold text-nexa-blue font-bold uppercase tracking-wide rounded hover:bg-white transition-all flex items-center justify-center gap-2 group"
            >
              Book Service
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#calculator" 
              className="px-8 py-4 border border-white text-white font-bold uppercase tracking-wide rounded hover:bg-white hover:text-nexa-blue transition-all text-center"
            >
              Estimate Cost
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-1.5 bg-accent-gold rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;