import React from 'react';
import { Calendar, Snowflake, Disc, Sparkles, Car, Shield } from 'lucide-react';

const services = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Periodic Service",
    price: "Starting ₹2,999",
    desc: "Comprehensive maintenance including oil change, filter replacement, and 60-point checkup.",
    link: "#booking"
  },
  {
    icon: <Snowflake className="w-8 h-8" />,
    title: "AC Service & Repair",
    price: "Starting ₹1,499",
    desc: "Complete AC cooling coil cleaning, gas top-up, and compressor check for perfect cooling.",
    link: "#booking"
  },
  {
    icon: <Disc className="w-8 h-8" />,
    title: "Wheel Care",
    price: "Starting ₹899",
    desc: "Computerized wheel alignment and balancing to ensure tyre longevity and smooth drive.",
    link: "#booking"
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: "Detailing & Polishing",
    price: "Starting ₹1,199",
    desc: "Interior dry cleaning, rubbing polishing, and ceramic coating for showroom shine.",
    link: "#booking"
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Body Shop & Painting",
    price: "Per Panel ₹2,499",
    desc: "State-of-the-art paint booth, dent removal, and exact color matching guarantee.",
    link: "#booking"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Insurance & Warranty",
    price: "Get Quote",
    desc: "Cashless insurance renewal and extended warranty plans for peace of mind.",
    link: "#booking"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent-gold font-bold tracking-widest uppercase text-sm">Our Expertise</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nexa-blue mb-4 mt-2">Premium Services</h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
             Choose from our range of specialized services designed to give your car the care it deserves.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="w-14 h-14 bg-nexa-blue/5 rounded-2xl flex items-center justify-center text-nexa-blue group-hover:bg-nexa-blue group-hover:text-accent-gold transition-colors mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-display">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="text-lg font-bold text-nexa-blue">
                  {service.price}
                </div>
              </div>
              
              <div className="px-8 pb-8 pt-0 mt-auto">
                <a 
                  href={service.link}
                  className="block w-full py-3 border-2 border-nexa-blue text-nexa-blue font-bold text-center rounded uppercase hover:bg-nexa-blue hover:text-white transition-colors"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;