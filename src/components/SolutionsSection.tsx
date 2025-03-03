import React from 'react';
import { Sun, Battery, Box, Car } from 'lucide-react';

const solutions = [
  {
    icon: Sun,
    title: "Solar Power Systems",
    description: "Advanced solar solutions for sustainable power generation"
  },
  {
    icon: Battery,
    title: "Portable Power Stations",
    description: "Reliable and efficient portable energy storage solutions"
  },
  {
    icon: Box,
    title: "Energy Storage Solutions",
    description: "Cutting-edge battery technology for various applications"
  },
  {
    icon: Car,
    title: "Commercial Electric Vehicles",
    description: "Innovative EV solutions for sustainable transportation"
  }
];

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <solution.icon className="w-16 h-16 mb-6 text-orange-600" />
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}