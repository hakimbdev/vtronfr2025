import React from 'react';
import { Zap, Battery, Shield, Cpu } from 'lucide-react';

const technologies = [
  {
    icon: Battery,
    title: "Advanced Battery Technology",
    description: "Our proprietary battery management system ensures optimal performance and longevity of power storage solutions."
  },
  {
    icon: Shield,
    title: "Safety Systems",
    description: "Multiple layers of protection including thermal management, short circuit prevention, and overcharge protection."
  },
  {
    icon: Cpu,
    title: "Smart Control Systems",
    description: "Intelligent power management and monitoring through advanced microprocessor control."
  },
  {
    icon: Zap,
    title: "Efficient Power Conversion",
    description: "High-efficiency power conversion technology minimizing energy loss during charging and discharging."
  }
];

const timeline = [
  {
    year: "2020",
    title: "Company Founded",
    description: "Vtrone established with a vision for sustainable energy"
  },
  {
    year: "2021",
    title: "First Product Launch",
    description: "Released the revolutionary V75 Portable Power Station"
  },
  {
    year: "2022",
    title: "R&D Breakthrough",
    description: "Developed proprietary battery management technology"
  },
  {
    year: "2023",
    title: "Global Expansion",
    description: "Expanded operations to international markets"
  }
];

export default function TechnologyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Technology & Innovation</h1>
        
        <div className="max-w-6xl mx-auto space-y-20">
          <section>
            <h2 className="text-3xl font-semibold mb-12 text-center">Our Technologies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <tech.icon className="w-12 h-12 text-orange-600 mb-6" />
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{tech.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-semibold mb-12 text-center">Innovation Timeline</h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200" />
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-1/2 pr-8 pl-8">
                      <div className={`bg-white p-6 rounded-xl shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="text-orange-500 font-bold mb-2">{item.year}</div>
                        <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-orange-500 rounded-full absolute left-1/2 transform -translate-x-1/2" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}