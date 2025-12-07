import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CostCalculator from './components/CostCalculator';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import TrustSection from './components/TrustSection';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import { Car } from 'lucide-react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial asset loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-nexa-blue z-50 flex flex-col items-center justify-center">
        <div className="relative">
          <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin border-t-accent-gold"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Car className="w-10 h-10 text-white animate-pulse" />
          </div>
        </div>
        <div className="mt-6 text-center">
          <h1 className="text-3xl font-display font-bold text-white tracking-widest">SAMBHAV</h1>
          <p className="text-accent-gold text-xs tracking-[0.4em] mt-2 font-medium">PREMIUM CAR CARE</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative animate-fadeIn">
      <Header />
      <main>
        <Hero />
        <CostCalculator />
        <Services />
        <BookingForm />
        <Gallery />
        <TrustSection />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
      <Chatbot />
    </div>
  );
}

export default App;