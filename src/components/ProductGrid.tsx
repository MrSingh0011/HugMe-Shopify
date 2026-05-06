'use client';
import { useState } from 'react';
import { products } from '@/data/products';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';

export default function ProductGrid() {
  const [activeType, setActiveType] = useState('all');

  const filtered = activeType === 'all' ? products : products.filter(p => p.type === activeType);

  return (
    <>
      <FilterBar activeType={activeType} onTypeChange={setActiveType} />
      <section className="section" style={{ paddingTop: 40, paddingBottom: 40, background: 'var(--off-white)' }}>
        <div className="section-header">
          <h2 className="section-title">New <em>Arrivals</em></h2>
          <a href="#" className="section-link">View All Products</a>
        </div>
        <div className="product-grid">
          {filtered.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </>
  );
}
