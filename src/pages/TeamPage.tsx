import React from 'react';
import TeamSection from '../components/TeamSection';

export default function TeamPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Our Management Team</h1>
        <TeamSection />
      </div>
    </div>
  );
}