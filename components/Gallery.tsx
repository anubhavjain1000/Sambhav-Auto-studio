import React from 'react';

const Gallery: React.FC = () => {
  const portfolio = [
    {
      before: "https://images.unsplash.com/photo-1599818815250-1376e10db7c1?q=80&w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
      title: "Full Body Painting",
      desc: "Scratches to Showroom Shine"
    },
    {
      before: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?q=80&w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop",
      title: "Interior Detailing",
      desc: "Deep Cleaning & Sanitization"
    },
    {
      before: "https://images.unsplash.com/photo-1582200888267-3475d4a1387d?q=80&w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1586335960481-9b164a66a1a0?q=80&w=800&auto=format&fit=crop",
      title: "Dent Removal",
      desc: "Precision Dent Repair"
    },
    {
      before: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=800&auto=format&fit=crop",
      after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
      title: "Engine Restoration",
      desc: "Performance Tuning"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-sm">Our Work</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nexa-blue mb-4 mt-2">Transformation Gallery</h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Witness the quality of our craftsmanship. From accidental repairs to premium detailing, we restore your car to its glory.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {portfolio.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-2 gap-0.5">
                <div className="relative h-48 sm:h-64 group">
                  <img 
                    src={item.before} 
                    alt={`Before ${item.title}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 left-2 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
                    BEFORE
                  </div>
                </div>
                <div className="relative h-48 sm:h-64 group">
                  <img 
                    src={item.after} 
                    alt={`After ${item.title}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-2 right-2 bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                    AFTER
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-gray-100 text-center">
                <h3 className="text-lg font-bold text-nexa-blue">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
           <a 
              href="#booking"
              className="inline-block px-8 py-3 bg-nexa-blue text-white font-bold rounded hover:bg-nexa-dark transition-colors uppercase tracking-wide text-sm"
            >
              Book A Service For Your Car
            </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;