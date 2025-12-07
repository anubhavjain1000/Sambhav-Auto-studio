import React from 'react';

const BookingForm: React.FC = () => {
  return (
    <section id="booking" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-nexa-blue">Book A Service</h2>
          <p className="mt-4 text-gray-600">Fill in the details below and our service advisor will confirm your appointment.</p>
        </div>

        <form className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Full Name</label>
              <input type="text" placeholder="Enter your name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Phone Number</label>
              <input type="tel" placeholder="+91 98765 43210" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Vehicle Number</label>
              <input type="text" placeholder="MH 01 AB 1234" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all uppercase" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Car Model</label>
              <input type="text" placeholder="e.g. Baleno" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Preferred Date</label>
              <input type="date" className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all" />
            </div>

             <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700">Service Type</label>
              <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all">
                <option>Periodic Maintenance</option>
                <option>Accidental Repair</option>
                <option>Washing & Cleaning</option>
                <option>Others</option>
              </select>
            </div>
          </div>

          <div className="mt-8">
            <button type="button" className="w-full py-4 bg-nexa-blue text-white font-bold text-lg uppercase tracking-wider rounded hover:bg-nexa-dark transition-colors shadow-lg shadow-blue-900/20">
              Confirm Appointment
            </button>
            <p className="text-center text-xs text-gray-400 mt-4">By booking, you agree to receive service updates via WhatsApp/SMS.</p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;