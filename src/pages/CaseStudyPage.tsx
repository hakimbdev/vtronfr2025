import React from 'react';

const caseStudies = [
  {
    title: "Solar-Powered Community Center",
    location: "Bauchi, Nigeria",
    challenge: "Limited access to reliable electricity affecting community services",
    solution: "Installation of V400 Power Station with solar panels",
    impact: "24/7 power supply, enabling educational and healthcare services",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Agricultural Cold Storage",
    location: "Kano, Nigeria",
    challenge: "Post-harvest losses due to inadequate storage facilities",
    solution: "Implementation of solar-powered cold storage using V1000 Power Station",
    impact: "50% reduction in food waste, increased farmer income",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Commercial EV Fleet",
    location: "Lagos, Nigeria",
    challenge: "High operational costs and environmental impact of delivery vehicles",
    solution: "Electric vehicle fleet powered by Vtrone charging stations",
    impact: "60% reduction in operating costs, zero emissions",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];

export default function CaseStudyPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Case Studies</h1>
        
        <div className="max-w-6xl mx-auto space-y-16">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-4 text-gray-800">{study.title}</h2>
                  <p className="text-orange-600 font-medium mb-6">{study.location}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800">Challenge:</h3>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Solution:</h3>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Impact:</h3>
                      <p className="text-gray-600">{study.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}