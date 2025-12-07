import React, { useState, useEffect } from 'react';
import { Star, ShieldCheck, Wrench, Award, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Nexa Baleno Owner",
    content: "Absolutely premium experience! The staff at Sambhav Automobiles is very professional. They fixed the dent on my Baleno perfectly. It looks brand new.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Arena Brezza Owner",
    content: "Best service center in the city. Transparent pricing and they actually used genuine parts. The cost calculator on the website was very accurate.",
    rating: 5
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Nexa Grand Vitara Owner",
    content: "I was worried about my new Grand Vitara's first service, but they handled it with care. The pickup and drop facility was very convenient.",
    rating: 5
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Arena Swift Owner",
    content: "20 years of experience really shows. They diagnosed a rattling sound in my Swift that three other mechanics couldn't find. Highly recommended!",
    rating: 5
  }
];

const TrustSection: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-scroll testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 border-b border-gray-100 pb-12">
          <div className="flex flex-col items-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-nexa-blue/5 rounded-full flex items-center justify-center text-nexa-blue mb-4">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-nexa-blue font-display">Authorized Service</h3>
            <p className="text-sm text-gray-500 mt-2">Official Maruti Suzuki Service Partner</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold mb-4">
              <Wrench className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-nexa-blue font-display">100% Genuine Parts</h3>
            <p className="text-sm text-gray-500 mt-2">Only OEM Parts & Accessories</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-nexa-blue/5 rounded-full flex items-center justify-center text-nexa-blue mb-4">
              <Award className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-nexa-blue font-display">20+ Years Experience</h3>
            <p className="text-sm text-gray-500 mt-2">Serving customers since 2003</p>
          </div>

          <div className="flex flex-col items-center text-center p-4 hover:transform hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center text-accent-gold mb-4">
              <Star className="w-8 h-8 fill-current" />
            </div>
            <h3 className="text-lg font-bold text-nexa-blue font-display">5-Star Rated</h3>
            <p className="text-sm text-gray-500 mt-2">Top rated on Google Reviews</p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-nexa-blue mb-2">What Our Customers Say</h2>
            <div className="w-16 h-1 bg-accent-gold mx-auto"></div>
          </div>

          <div className="relative bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100">
            <Quote className="absolute top-8 left-8 text-nexa-blue/10 w-16 h-16 rotate-180" />
            
            <div className="relative z-10 text-center px-4 md:px-12">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-gold fill-current" />
                ))}
              </div>
              
              <p className="text-xl md:text-2xl text-gray-700 font-light italic mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].content}"
              </p>
              
              <div>
                <h4 className="text-lg font-bold text-nexa-blue">{testimonials[currentTestimonial].name}</h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">{testimonials[currentTestimonial].role}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-nexa-blue hover:bg-nexa-blue hover:text-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow-md text-nexa-blue hover:bg-nexa-blue hover:text-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentTestimonial(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentTestimonial === idx ? 'bg-nexa-blue w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;