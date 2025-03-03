import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <span className="text-gray-600">NO. 10 Aminu Street, Bauchi, Nigeria</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <span className="text-gray-600">info@vtrone.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-orange-500 flex-shrink-0" />
              <div className="text-gray-600">
                <p>+234 802 280 7580</p>
                <p>+234 812 770 6656</p>
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Business Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-gray-600">Sunday: Closed</p>
            </div>
          </div>
          
          <form className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-lg">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Email</label>
              <input 
                type="email" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">Message</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent h-32"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}