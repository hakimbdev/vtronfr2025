import React from 'react';

export default function AboutPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">About Vtrone</h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">Our Story</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Vtrone designs and delivers advanced energy solutions for individuals, businesses, and communities. We specialize in products ranging from solar-powered generators to portable energy storage systems.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              Standing at the forefront of the clean energy revolution, we focus on harnessing solar energy and transforming it into dependable power solutions that meet the diverse needs of our customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Commitment</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to providing sustainable energy solutions that empower communities and businesses while protecting our environment for future generations.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">Our Impact</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our innovative solutions, we're helping businesses and communities transition to clean energy, reducing carbon footprints, and creating a more sustainable future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}