import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, User, Bot } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hello! I'm your Nexa Service Assistant. How can I help you with your car today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);

    try {
      // In a real deployment, process.env.API_KEY would be populated.
      // If the key is missing in this demo environment, we handle it gracefully.
      const apiKey = process.env.API_KEY;
      
      if (!apiKey) {
        // Fallback simulation if no key is present in this specific preview env
        setTimeout(() => {
          setMessages(prev => [...prev, { role: 'model', text: "I can help you book a service or estimate costs. Please use the 'Book Service' or 'Cost Calculator' sections for accurate details." }]);
          setIsLoading(false);
        }, 1000);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      
      const systemInstruction = `You are a helpful and polite AI assistant for "Sambhav Automobiles", a premium Maruti Suzuki NEXA & ARENA authorized service center.
      
      Key Information:
      - Services: Periodic Service (starts ₹2999), AC Service (starts ₹1499), Wheel Care (starts ₹899), Detailing, Body Shop, Insurance.
      - Offers: Flat ₹600 OFF if booked today.
      - Features: 100% Genuine Parts, Pick & Drop available, 20+ Years Experience.
      - Location: Plot No. 123, Industrial Area, Sector 5, Mumbai.
      - Contact: 9876543210.
      
      Guidelines:
      - Keep answers concise and professional.
      - If a user wants to book, guide them to the booking form on the page.
      - If asking for price, give the starting price and mention "final price after inspection".
      - Be courteous and use the brand tone (Premium, Professional).`;

      const model = ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `System: ${systemInstruction}\n\nUser: ${userMessage}` }] }
        ],
      });

      const response = await model;
      const text = response.response.text();
      
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chat error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please try calling us directly." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Chat Window */}
      <div 
        className={`bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 sm:w-96 mb-20 overflow-hidden transition-all duration-300 origin-bottom-right pointer-events-auto ${
          isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 h-0 w-0 mb-0'
        }`}
      >
        {/* Header */}
        <div className="bg-nexa-blue text-white p-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-accent-gold" />
            </div>
            <div>
              <h3 className="font-bold text-sm">Sambhav AI Assistant</h3>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                <span className="text-[10px] text-gray-200">Online</span>
              </div>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white hover:bg-white/10 p-1 rounded transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="h-80 overflow-y-auto p-4 bg-gray-50 space-y-3">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  msg.role === 'user' 
                    ? 'bg-nexa-blue text-white rounded-tr-none' 
                    : 'bg-white text-gray-700 border border-gray-200 rounded-tl-none shadow-sm'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-200 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></span>
                <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-3 bg-white border-t border-gray-100 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Ask about service, price..."
            className="flex-1 bg-gray-100 border-none rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-nexa-blue/50 outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className={`p-2 rounded-full ${
              input.trim() 
                ? 'bg-nexa-blue text-white hover:bg-nexa-dark' 
                : 'bg-gray-200 text-gray-400'
            } transition-colors`}
          >
            <Send size={18} />
          </button>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`pointer-events-auto h-14 bg-white text-nexa-blue border-2 border-nexa-blue rounded-full flex items-center shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden ${
          isOpen ? 'w-14 justify-center' : 'w-auto px-4 gap-2'
        }`}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <>
             <div className="relative">
                <MessageSquare size={24} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
             </div>
             <span className="font-bold whitespace-nowrap">AI Help</span>
          </>
        )}
      </button>
    </div>
  );
};

export default Chatbot;