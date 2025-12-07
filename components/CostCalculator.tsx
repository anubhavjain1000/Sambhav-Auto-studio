import React, { useState } from 'react';
import { MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

const SERVICE_TYPES = [
  "Periodic Maintenance Service",
  "AC Service & Repair",
  "Body Shop / Denting Painting",
  "Accident Repair",
  "General Repair",
  "Accessories / Modification"
];

const CostCalculator: React.FC = () => {
  const [vrn, setVrn] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!vrn || !mobile || !service) return;

    setLoading(true);

    // Simulate saving to Google Sheets (Backend logic would go here)
    console.log("Submitting to sheet:", { vrn, mobile, service });

    // Prepare WhatsApp Message
    const message = `*Request for Official Quotation*%0A%0A` +
      `*Vehicle No:* ${vrn.toUpperCase()}%0A` +
      `*Mobile:* ${mobile}%0A` +
      `*Service Required:* ${service}%0A%0A` +
      `_I am interested in the Flat ₹600 OFF offer._`;

    const whatsappUrl = `https://wa.me/919876543210?text=${message}`;

    setTimeout(() => {
      setLoading(false);
      window.open(whatsappUrl, '_blank');
    }, 1000);
  };

  return (
    <section id="calculator" className="py-16 bg-gradient-to-br from-nexa-blue to-[#001f52] text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-5/12 text-center lg:text-left">
             <div className="inline-flex items-center gap-2 bg-accent-gold/20 border border-accent-gold/30 rounded-full px-4 py-1.5 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"></span>
                <span className="text-accent-gold text-xs font-bold tracking-wider uppercase">Limited Time Offer</span>
             </div>
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight mb-4">
              Get Your Official <br />
              <span className="text-accent-gold">Service Quotation</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Don't overpay for car service. Get a transparent, itemized quotation directly from our service advisors before you book.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10 hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="bg-green-500/20 p-3 rounded-full text-green-400">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">100% Genuine Parts</p>
                  <p className="text-xs text-gray-400">Maruti Suzuki Authorized</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:w-7/12 w-full">
            <div className="bg-white text-gray-800 rounded-2xl shadow-2xl p-6 md:p-8 relative">
              <div className="absolute top-0 right-0 bg-accent-gold text-nexa-blue text-xs font-bold px-4 py-2 rounded-bl-xl rounded-tr-xl uppercase tracking-wider">
                Instant Quote
              </div>

              <h3 className="text-2xl font-bold font-display text-nexa-blue mb-2">Get Price Estimate</h3>
              <p className="text-sm text-gray-500 mb-6">Enter your vehicle details below to receive a quote via WhatsApp.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Vehicle Registration No. (VRN)</label>
                    <input 
                      type="text" 
                      placeholder="MH 02 AB 1234"
                      value={vrn}
                      onChange={(e) => setVrn(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none uppercase"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number</label>
                    <input 
                      type="tel" 
                      placeholder="98765 43210"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Service Type</label>
                  <select 
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                    required
                  >
                    <option value="">Select Service Required</option>
                    {SERVICE_TYPES.map((type, i) => (
                      <option key={i} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="w-full py-4 bg-green-600 text-white font-bold text-lg uppercase tracking-wider rounded hover:bg-green-700 transition-all shadow-lg shadow-green-600/30 flex items-center justify-center gap-2"
                >
                  {loading ? 'Processing...' : (
                    <>
                      <MessageCircle size={24} />
                      Send Quotation on WhatsApp
                    </>
                  )}
                </button>
              </form>

              <div className="mt-6 pt-4 border-t border-gray-100 text-center">
                <p className="text-xs text-gray-500 mb-2">
                  * Final price subject to physical inspection. Official Maruti Suzuki quotation.
                </p>
                <div className="inline-block bg-blue-50 text-nexa-blue px-3 py-1 rounded text-sm font-bold border border-blue-100">
                  🎉 Flat ₹600 OFF if booked today!
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CostCalculator;