import React from 'react';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-8 md:mb-0">
            <Zap className="w-8 h-8 text-orange-400" />
            <span className="ml-2 text-xl font-bold">Vtrone</span>
          </div>
          
          <div className="flex space-x-8">
            <a href="#" className="hover:text-orange-400 transition-colors">About</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Products</a>
            <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Vtrone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}