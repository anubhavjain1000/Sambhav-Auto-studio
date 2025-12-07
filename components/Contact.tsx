import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', mobile: '', message: '' });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.mobile) return;
    
    // Construct WhatsApp message
    const text = `*New Inquiry via Website*%0A*Name:* ${form.name}%0A*Mobile:* ${form.mobile}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/919876543210?text=${text}`, '_blank');
    setForm({ name: '', mobile: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nexa-blue mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-accent-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Contact Info & Form */}
          <div className="space-y-10">
            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="tel:+919876543210" 
                className="flex items-center justify-center gap-2 p-4 bg-nexa-blue text-white rounded-lg hover:bg-nexa-dark transition-colors shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="font-bold">Call Now</span>
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                className="flex items-center justify-center gap-2 p-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-bold">WhatsApp</span>
              </a>
            </div>

            {/* Info Details */}
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-6 border border-gray-100">
               <div className="flex items-start">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-nexa-blue mr-4 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Address</h4>
                  <p className="text-gray-600 text-sm mt-1">Plot No. 123, Industrial Area, Sector 5<br/>Near City Center, Mumbai - 400001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-nexa-blue mr-4 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Email</h4>
                  <p className="text-gray-600 text-sm mt-1">service@sambhavauto.com</p>
                </div>
              </div>

               <div className="flex items-start">
                <div className="w-10 h-10 bg-white rounded-full shadow flex items-center justify-center text-nexa-blue mr-4 shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Working Hours</h4>
                  <p className="text-gray-600 text-sm mt-1">Mon - Sat: 09:00 AM - 07:00 PM <br/> Sun: Closed</p>
                </div>
              </div>
            </div>

            {/* Quick Contact Form */}
            <div>
              <h3 className="text-xl font-bold text-nexa-blue mb-4">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({...form, name: e.target.value})}
                    className="w-full p-3 bg-white border border-gray-300 rounded focus:border-nexa-blue outline-none"
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Mobile Number"
                    value={form.mobile}
                    onChange={(e) => setForm({...form, mobile: e.target.value})}
                    className="w-full p-3 bg-white border border-gray-300 rounded focus:border-nexa-blue outline-none"
                    required
                  />
                </div>
                <textarea 
                  placeholder="How can we help you?"
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  className="w-full p-3 bg-white border border-gray-300 rounded focus:border-nexa-blue outline-none"
                ></textarea>
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-accent-gold text-nexa-blue font-bold rounded hover:bg-yellow-500 transition-colors w-full md:w-auto flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Submit Request
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="h-[500px] bg-gray-200 rounded-xl overflow-hidden shadow-lg border-4 border-white relative z-10">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.732411653931!2d72.85!3d19.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzEyLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Map"
                className="w-full h-full"
              ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;