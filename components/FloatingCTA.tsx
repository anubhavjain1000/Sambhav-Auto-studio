import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 pointer-events-none">
      {/* Spacer for Chatbot Button */}
      <div className="h-14 w-14 mb-2"></div>
      
      <a 
        href="https://wa.me/919540928019" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-110 pointer-events-auto"
        title="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
      <a 
        href="tel:+919876543210" 
        className="w-14 h-14 bg-nexa-blue rounded-full flex items-center justify-center text-white shadow-lg hover:bg-nexa-dark transition-transform hover:scale-110 pointer-events-auto"
        title="Call Now"
      >
        <Phone size={24} />
      </a>
    </div>
  );
};

export default FloatingCTA;