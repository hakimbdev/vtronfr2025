import React from 'react';

const coreValues = [
  { title: "Sustainability", description: "Committed to environmental preservation" },
  { title: "Innovation", description: "Pushing boundaries in clean energy solutions" },
  { title: "Integrity", description: "Maintaining highest ethical standards" },
  { title: "Adaptability", description: "Evolving with market needs" },
  { title: "Responsibility", description: "Accountable to our stakeholders" }
];

export default function VisionSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Vision</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 p-8 rounded-2xl shadow-lg">
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Vision Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be a leader in providing renewable energy solutions for residential, commercial, and industrial use, envisioning a future where clean and sustainable energy is accessible to all.
              </p>
            </div>
            
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Mission Statement</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To deliver pioneering energy solutions that are accessible, reliable, and environmentally responsible, driving the transition to a sustainable future through innovation and customer satisfaction.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Core Values</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coreValues.map((value, index) => (
                  <div key={index} className="bg-white/50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-orange-700 mb-2">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}