import React from 'react';
import { Wrench, ShieldCheck, Droplet, Cog, Car, Battery } from 'lucide-react';

const services = [
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Periodic Maintenance",
    desc: "Scheduled servicing as per Maruti Suzuki guidelines to keep your car running like new."
  },
  {
    icon: <Cog className="w-8 h-8" />,
    title: "Running Repairs",
    desc: "Expert diagnosis and repair for brakes, suspension, clutch, and engine components."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Body Shop & Paint",
    desc: "State-of-the-art denting and painting booth with color matching technology."
  },
  {
    icon: <Droplet className="w-8 h-8" />,
    title: "Car Spa & Detailing",
    desc: "Premium interior cleaning, exterior polishing, and ceramic coating services."
  },
  {
    icon: <Battery className="w-8 h-8" />,
    title: "Battery & Tyres",
    desc: "Genuine battery replacement and tyre services including alignment and balancing."
  },
  {
    icon: <Car className="w-8 h-8" />,
    title: "Insurance Claims",
    desc: "Cashless facility with all major insurance providers for hassle-free claims."
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nexa-blue mb-4">Our Services</h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive care for your vehicle using state-of-the-art equipment and genuine parts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-accent-gold group"
            >
              <div className="w-16 h-16 bg-nexa-blue/5 rounded-full flex items-center justify-center text-nexa-blue group-hover:bg-nexa-blue group-hover:text-accent-gold transition-colors mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 font-display">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;