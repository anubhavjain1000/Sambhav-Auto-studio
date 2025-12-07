import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CheckCircle, MapPin, Car } from 'lucide-react';
import { CAR_MODELS } from '../constants';
import { CarType } from '../types';

const SERVICE_TYPES = [
  "Periodic Maintenance Service",
  "AC Service & Repair",
  "General Repair",
  "Body Shop / Denting Painting",
  "Wheel Alignment & Balancing",
  "Car Spa & Detailing",
  "Accessories Fitment"
];

const TIME_SLOTS = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "01:00 PM", "01:30 PM", "02:00 PM", "02:30 PM",
  "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM"
];

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    channel: '', // 'NEXA' or 'ARENA'
    model: '',
    serviceType: '',
    date: '',
    timeSlot: '',
    pickupRequired: false,
    address: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Filter models based on selected channel
  const availableModels = CAR_MODELS.filter(
    car => !formData.channel || car.type === formData.channel
  );

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.trim() || !/^\d{10}$/.test(formData.mobile)) newErrors.mobile = "Valid 10-digit mobile required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid email required";
    if (!formData.channel) newErrors.channel = "Please select a channel";
    if (!formData.model) newErrors.model = "Please select your car model";
    if (!formData.serviceType) newErrors.serviceType = "Please select a service type";
    if (!formData.date) newErrors.date = "Please select a date";
    if (!formData.timeSlot) newErrors.timeSlot = "Please select a time slot";
    if (formData.pickupRequired && !formData.address.trim()) newErrors.address = "Pickup address is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleToggle = () => {
    setFormData(prev => ({ ...prev, pickupRequired: !prev.pickupRequired }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitted(true);
      
      // Prepare WhatsApp Message
      const message = `*New Service Booking Request*%0A%0A` +
        `*Customer:* ${formData.name}%0A` +
        `*Mobile:* ${formData.mobile}%0A` +
        `*Email:* ${formData.email}%0A` +
        `*Channel:* ${formData.channel}%0A` +
        `*Car Model:* ${formData.model}%0A` +
        `*Service:* ${formData.serviceType}%0A` +
        `*Date:* ${formData.date}%0A` +
        `*Time:* ${formData.timeSlot}%0A` +
        `*Pickup:* ${formData.pickupRequired ? 'Yes' : 'No'}%0A` +
        (formData.pickupRequired ? `*Address:* ${formData.address}` : '');

      const whatsappUrl = `https://wa.me/919876543210?text=${message}`; // Using dummy number from context

      // Small delay to show success state before opening WhatsApp
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <div className="bg-green-50 rounded-2xl p-12 border border-green-100 shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-display font-bold text-nexa-blue mb-4">Booking Request Sent!</h2>
            <p className="text-gray-600 text-lg mb-8">
              Thank you, {formData.name}. We are redirecting you to WhatsApp to finalize your appointment details with our service advisor.
            </p>
            <button 
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-nexa-blue text-white font-bold rounded hover:bg-nexa-dark transition-colors"
            >
              Book Another Service
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-white relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-2 bg-nexa-blue/5 rounded-full mb-4">
            <Car className="w-5 h-5 text-nexa-blue mr-2" />
            <span className="text-sm font-bold text-nexa-blue tracking-wide uppercase">Easy Scheduling</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-nexa-blue">
            Book Premium <span className="text-accent-gold">Service</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Experience hassle-free maintenance. Fill in the details below and we will confirm your slot instantly via WhatsApp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            
            {/* Left Panel: Customer Info */}
            <div className="p-8 md:p-10 bg-gray-50 md:col-span-1 border-b md:border-b-0 md:border-r border-gray-200">
              <h3 className="text-xl font-bold text-nexa-blue mb-6 font-display">Customer Details</h3>
              
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 bg-white border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all`}
                    placeholder="John Doe"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Mobile Number *</label>
                  <input 
                    type="tel" 
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className={`w-full p-3 bg-white border ${errors.mobile ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all`}
                    placeholder="9876543210"
                    maxLength={10}
                  />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 bg-white border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                   {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <label className="flex items-center cursor-pointer mb-4 group">
                  <div className="relative">
                    <input 
                      type="checkbox" 
                      className="sr-only" 
                      checked={formData.pickupRequired}
                      onChange={handleToggle}
                    />
                    <div className={`w-10 h-6 bg-gray-300 rounded-full shadow-inner transition-colors ${formData.pickupRequired ? '!bg-accent-gold' : ''}`}></div>
                    <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow transition-transform ${formData.pickupRequired ? 'translate-x-4' : ''}`}></div>
                  </div>
                  <div className="ml-3 text-gray-700 font-semibold group-hover:text-nexa-blue transition-colors">
                    Request Pickup & Drop
                  </div>
                </label>
                
                {formData.pickupRequired && (
                  <div className="animate-fadeIn">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Pickup Address *</label>
                    <textarea 
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      rows={3}
                      className={`w-full p-3 bg-white border ${errors.address ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all text-sm`}
                      placeholder="Enter complete address with landmark"
                    ></textarea>
                    {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                  </div>
                )}
              </div>
            </div>

            {/* Right Panel: Service Info */}
            <div className="p-8 md:p-10 md:col-span-2">
              <h3 className="text-xl font-bold text-nexa-blue mb-6 font-display">Service Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Channel *</label>
                  <div className="flex gap-4">
                    <label className={`flex-1 cursor-pointer border rounded-lg p-3 flex items-center justify-center transition-all ${formData.channel === CarType.NEXA ? 'bg-black text-white border-black ring-2 ring-offset-1 ring-black' : 'border-gray-300 hover:border-black'}`}>
                      <input 
                        type="radio" 
                        name="channel" 
                        value={CarType.NEXA} 
                        checked={formData.channel === CarType.NEXA} 
                        onChange={handleChange} 
                        className="sr-only"
                      />
                      <span className="font-bold tracking-widest">NEXA</span>
                    </label>
                    <label className={`flex-1 cursor-pointer border rounded-lg p-3 flex items-center justify-center transition-all ${formData.channel === CarType.ARENA ? 'bg-blue-600 text-white border-blue-600 ring-2 ring-offset-1 ring-blue-600' : 'border-gray-300 hover:border-blue-600'}`}>
                      <input 
                        type="radio" 
                        name="channel" 
                        value={CarType.ARENA} 
                        checked={formData.channel === CarType.ARENA} 
                        onChange={handleChange} 
                        className="sr-only"
                      />
                      <span className="font-bold tracking-widest">ARENA</span>
                    </label>
                  </div>
                   {errors.channel && <p className="text-red-500 text-xs mt-1">{errors.channel}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Car Model *</label>
                  <select 
                    name="model" 
                    value={formData.model} 
                    onChange={handleChange}
                    disabled={!formData.channel}
                    className={`w-full p-3 bg-gray-50 border ${errors.model ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all disabled:opacity-50`}
                  >
                    <option value="">{formData.channel ? 'Select Model' : 'Select Channel First'}</option>
                    {availableModels.map(car => (
                      <option key={car.id} value={car.name}>{car.name}</option>
                    ))}
                  </select>
                  {errors.model && <p className="text-red-500 text-xs mt-1">{errors.model}</p>}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type *</label>
                <select 
                  name="serviceType" 
                  value={formData.serviceType} 
                  onChange={handleChange}
                  className={`w-full p-3 bg-gray-50 border ${errors.serviceType ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all`}
                >
                  <option value="">Select Service Type</option>
                  {SERVICE_TYPES.map((service, idx) => (
                    <option key={idx} value={service}>{service}</option>
                  ))}
                </select>
                {errors.serviceType && <p className="text-red-500 text-xs mt-1">{errors.serviceType}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                   <div className="relative">
                     <Calendar className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                     <input 
                        type="date" 
                        name="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full pl-10 p-3 bg-gray-50 border ${errors.date ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all`} 
                      />
                   </div>
                   {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
                </div>
                
                <div>
                   <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Time *</label>
                   <div className="relative">
                     <Clock className="absolute left-3 top-3.5 text-gray-400 w-5 h-5" />
                     <select 
                        name="timeSlot"
                        value={formData.timeSlot}
                        onChange={handleChange}
                        className={`w-full pl-10 p-3 bg-gray-50 border ${errors.timeSlot ? 'border-red-500' : 'border-gray-300'} rounded focus:ring-2 focus:ring-nexa-blue outline-none transition-all appearance-none`}
                     >
                        <option value="">Select Slot</option>
                        {TIME_SLOTS.map((slot, idx) => (
                          <option key={idx} value={slot}>{slot}</option>
                        ))}
                     </select>
                   </div>
                   {errors.timeSlot && <p className="text-red-500 text-xs mt-1">{errors.timeSlot}</p>}
                </div>
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-nexa-blue text-white font-bold text-lg uppercase tracking-wider rounded hover:bg-nexa-dark transition-all transform hover:-translate-y-1 shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2"
              >
                Confirm Appointment
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;