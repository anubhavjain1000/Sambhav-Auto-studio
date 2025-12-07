import React from 'react';
import { Car } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nexa-dark text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="bg-white p-1.5 rounded-full">
               <Car className="text-nexa-blue w-6 h-6" />
            </div>
             <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-wider">SAMBHAV</span>
              <span className="text-[10px] tracking-[0.2em] font-medium text-accent-gold">AUTOMOBILES</span>
            </div>
          </div>
          <div className="flex space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Sambhav Automobiles. All rights reserved. <br/>
            Authorized Service Center for Maruti Suzuki NEXA & ARENA.
          </p>
          <div className="mt-4 md:mt-0">
             <p className="text-xs text-gray-600">Designed for Excellence.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;