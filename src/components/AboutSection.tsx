import React from 'react';

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">About Us</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Vtrone designs and delivers advanced energy solutions for individuals, businesses, and communities. We specialize in products ranging from solar-powered generators to portable energy storage systems.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Standing at the forefront of the clean energy revolution, we focus on harnessing solar energy and transforming it into dependable power solutions that meet the diverse needs of our customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}