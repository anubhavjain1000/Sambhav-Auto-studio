import React from 'react';
import { Car, Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-nexa-dark text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-white p-1.5 rounded-full">
                 <Car className="text-nexa-blue w-6 h-6" />
              </div>
               <div className="flex flex-col">
                <span className="text-xl font-bold font-display tracking-wider">SAMBHAV</span>
                <span className="text-[10px] tracking-[0.2em] font-medium text-accent-gold">AUTOMOBILES</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner for premium Maruti Suzuki service. We ensure your car performs at its best with genuine parts and expert care.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-nexa-blue transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-nexa-blue transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold hover:text-nexa-blue transition-colors">
                <Twitter size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-accent-gold transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-accent-gold transition-colors">Our Services</a></li>
              <li><a href="#booking" className="hover:text-accent-gold transition-colors">Book Appointment</a></li>
              <li><a href="#calculator" className="hover:text-accent-gold transition-colors">Cost Estimator</a></li>
              <li><a href="#contact" className="hover:text-accent-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6 text-white">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#booking" className="hover:text-accent-gold transition-colors">Periodic Maintenance</a></li>
              <li><a href="#booking" className="hover:text-accent-gold transition-colors">Denting & Painting</a></li>
              <li><a href="#booking" className="hover:text-accent-gold transition-colors">Car Detailing</a></li>
              <li><a href="#booking" className="hover:text-accent-gold transition-colors">Wheel Alignment</a></li>
              <li><a href="#booking" className="hover:text-accent-gold transition-colors">Insurance Renewal</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold font-display mb-6 text-white">Get in Touch</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent-gold shrink-0 mt-0.5" />
                <span>Plot No. 123, Industrial Area,<br/>Sector 5, Mumbai - 400001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent-gold shrink-0" />
                <span>service@sambhavauto.com</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            &copy; 2026 Sambhav Automobiles. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;