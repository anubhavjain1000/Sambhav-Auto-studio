import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import CostCalculator from './components/CostCalculator';
import BookingForm from './components/BookingForm';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative">
      <Header />
      <main>
        <Hero />
        <Services />
        <CostCalculator />
        <BookingForm />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;