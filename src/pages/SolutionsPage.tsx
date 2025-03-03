import React from 'react';
import SolutionsSection from '../components/SolutionsSection';
import ProductsSection from '../components/ProductsSection';

export default function SolutionsPage() {
  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-800">Our Solutions</h1>
        <SolutionsSection />
        <ProductsSection />
      </div>
    </div>
  );
}