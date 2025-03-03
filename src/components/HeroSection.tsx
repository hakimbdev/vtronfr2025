import React from 'react';
import { Zap } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-blue-900/90" />
      </div>
      
      <div className="relative h-full flex flex-col justify-center items-center text-white px-4">
        <div className="flex items-center mb-8">
          <Zap size={48} className="text-orange-400" />
          <h1 className="text-5xl md:text-7xl font-bold ml-4">Vtrone</h1>
        </div>
        
        <p className="text-xl md:text-2xl text-center max-w-2xl mb-12">
          Powering the future with innovative clean energy solutions
        </p>
        
        <div className="flex gap-6">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
          Place Your Order
          </button>
          <button className="border-2 border-white hover:bg-white hover:text-orange-900 text-white px-8 py-3 rounded-full font-semibold transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}