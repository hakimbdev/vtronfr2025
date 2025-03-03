import React from 'react';

const coreValues = [
  {
    title: "Sustainability",
    description: "We are committed to environmental preservation and promoting sustainable energy solutions.",
    icon: "🌱"
  },
  {
    title: "Innovation",
    description: "We continuously push boundaries in clean energy solutions and technological advancement.",
    icon: "💡"
  },
  {
    title: "Integrity",
    description: "We maintain the highest ethical standards in all our business operations and relationships.",
    icon: "🤝"
  },
  {
    title: "Adaptability",
    description: "We evolve with market needs and embrace change to better serve our customers.",
    icon: "🔄"
  },
  {
    title: "Responsibility",
    description: "We are accountable to our stakeholders and committed to making a positive impact.",
    icon: "⭐"
  }
];

export default function VisionPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Vision & Mission</h1>
        
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Vision</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To be a leader in providing renewable energy solutions for residential, commercial, and industrial use, envisioning a future where clean and sustainable energy is accessible to all.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Mission</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              To deliver pioneering energy solutions that are accessible, reliable, and environmentally responsible, driving the transition to a sustainable future through innovation and customer satisfaction.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3 text-orange-700">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}