import React from 'react';

const Gallery: React.FC = () => {
  const images = [
    "https://images.unsplash.com/photo-1632823471448-f5429a3930b0?q=80&w=800&auto=format&fit=crop", // Workshop
    "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop", // Mechanic
    "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=800&auto=format&fit=crop", // Paint Booth
    "https://images.unsplash.com/photo-1597500331043-34e8574d6428?q=80&w=800&auto=format&fit=crop", // Lounge
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-display font-bold text-nexa-blue mb-10 text-center">State-of-the-art Facilities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {images.map((src, idx) => (
            <div key={idx} className="group relative h-64 overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img 
                src={src} 
                alt={`Facility ${idx + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-nexa-blue/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-bold tracking-widest uppercase text-sm border border-white px-4 py-2">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;