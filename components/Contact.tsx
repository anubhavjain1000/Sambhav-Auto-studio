import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12">
          
          <div className="md:w-1/2 space-y-8">
            <div>
              <h2 className="text-3xl font-display font-bold text-nexa-blue mb-6">Visit Us</h2>
              <p className="text-gray-600 mb-6">
                Conveniently located to serve you better. Drop by our service center for a premium experience.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-nexa-blue/10 rounded-full flex items-center justify-center text-nexa-blue mr-4 shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600">Plot No. 123, Industrial Area, Sector 5<br/>Near City Center, Mumbai - 400001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-nexa-blue/10 rounded-full flex items-center justify-center text-nexa-blue mr-4 shrink-0">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Phone</h4>
                  <p className="text-gray-600">+91 98765 43210 <br/> +91 98765 43211</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-nexa-blue/10 rounded-full flex items-center justify-center text-nexa-blue mr-4 shrink-0">
                  <Mail />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600">service@sambhavauto.com</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="w-12 h-12 bg-nexa-blue/10 rounded-full flex items-center justify-center text-nexa-blue mr-4 shrink-0">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600">Mon - Sat: 09:00 AM - 07:00 PM <br/> Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 h-80 md:h-auto min-h-[400px] bg-gray-200 rounded-xl overflow-hidden shadow-lg relative">
             {/* Map Placeholder */}
             <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
                <p className="text-gray-500 font-semibold">Google Map Embed Placeholder</p>
             </div>
             {/* In a real app, use an iframe here */}
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30711.02636750085!2d72.85!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Map"
                className="absolute inset-0"
              ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;