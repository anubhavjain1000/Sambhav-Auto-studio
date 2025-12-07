import React, { useState } from 'react';
import { CAR_MODELS } from '../constants';
import { CarType } from '../types';

const CostCalculator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<CarType | 'ALL'>('ALL');
  const [selectedCar, setSelectedCar] = useState<string>('');
  const [selectedService, setSelectedService] = useState<string>('');
  const [estimate, setEstimate] = useState<number | null>(null);

  const filteredCars = CAR_MODELS.filter(car => selectedType === 'ALL' || car.type === selectedType);

  const handleCalculate = () => {
    if (selectedCar && selectedService) {
      // Dummy calculation logic
      const baseCost = selectedService === 'general' ? 2500 : selectedService === 'major' ? 6500 : 1500;
      const modelFactor = 1.2; // Can be dynamic based on car model
      setEstimate(Math.round(baseCost * modelFactor));
    }
  };

  return (
    <section id="calculator" className="py-20 bg-nexa-blue text-white relative overflow-hidden">
      {/* Decorative bg elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Transparent <span className="text-accent-gold">Pricing</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Know the cost before you book. Use our service cost estimator to get an approximate value of your next scheduled maintenance. No hidden charges.
            </p>
            <ul className="space-y-4">
              {['Genuine Parts', 'Labor Included', 'Taxes Included'].map((item, i) => (
                <li key={i} className="flex items-center text-gray-200">
                  <div className="w-2 h-2 bg-accent-gold rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-white text-gray-800 rounded-xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold font-display text-nexa-blue mb-6">Service Cost Calculator</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Select Channel</label>
                  <div className="flex gap-4">
                    <button 
                      onClick={() => setSelectedType('ALL')}
                      className={`flex-1 py-2 rounded border ${selectedType === 'ALL' ? 'bg-nexa-blue text-white border-nexa-blue' : 'border-gray-300 text-gray-600'}`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setSelectedType(CarType.NEXA)}
                      className={`flex-1 py-2 rounded border ${selectedType === CarType.NEXA ? 'bg-black text-white border-black' : 'border-gray-300 text-gray-600'}`}
                    >
                      NEXA
                    </button>
                    <button 
                      onClick={() => setSelectedType(CarType.ARENA)}
                      className={`flex-1 py-2 rounded border ${selectedType === CarType.ARENA ? 'bg-blue-600 text-white border-blue-600' : 'border-gray-300 text-gray-600'}`}
                    >
                      ARENA
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Select Model</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nexa-blue focus:border-nexa-blue outline-none"
                    value={selectedCar}
                    onChange={(e) => setSelectedCar(e.target.value)}
                  >
                    <option value="">-- Choose Car --</option>
                    {filteredCars.map(car => (
                      <option key={car.id} value={car.id}>{car.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-600 mb-2">Service Type</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-nexa-blue focus:border-nexa-blue outline-none"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                  >
                    <option value="">-- Choose Service --</option>
                    <option value="general">Periodic Maintenance (Paid Service)</option>
                    <option value="major">Major Service (40k/80k km)</option>
                    <option value="oil">Oil Change & Filter</option>
                  </select>
                </div>

                <button 
                  onClick={handleCalculate}
                  className="w-full py-4 bg-accent-gold text-nexa-blue font-bold uppercase rounded hover:bg-yellow-500 transition-colors"
                >
                  Calculate Cost
                </button>

                {estimate !== null && (
                  <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded text-center">
                    <p className="text-gray-500 text-sm uppercase tracking-wide">Estimated Total</p>
                    <p className="text-3xl font-bold text-nexa-blue">₹ {estimate.toLocaleString()}</p>
                    <p className="text-xs text-gray-400 mt-1">*Final price may vary based on vehicle condition</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostCalculator;