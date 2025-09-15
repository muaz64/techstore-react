import { useState } from 'react';
import ProductCard from './ProductCard';

const allProducts = [
    { id: 1, name: "iPhone 15 Pro", price: 999, category: "phones", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 5, reviews: 234 },
    { id: 2, name: "MacBook Pro M3", price: 1999, category: "laptops", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=💻", rating: 5, reviews: 156 },
    { id: 3, name: "AirPods Pro", price: 249, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=🎧", rating: 4, reviews: 89 },
    { id: 4, name: "Samsung Galaxy S24", price: 899, category: "phones", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 4, reviews: 167 },
    { id: 5, name: "Dell XPS 13", price: 1299, category: "laptops", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=💻", rating: 4, reviews: 98 },
    { id: 6, name: "Apple Watch Ultra", price: 799, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=⌚", rating: 5, reviews: 145 },
    { id: 7, name: "iPad Pro", price: 1099, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 5, reviews: 203 },
    { id: 8, name: "Surface Laptop", price: 1199, category: "laptops", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=💻", rating: 4, reviews: 76 }
];

const Products = () => {
  
  const [currentFilter, setCurrentFilter] = useState('all');

  
  const filteredProducts = currentFilter === 'all' 
    ? allProducts 
    : allProducts.filter(p => p.category === currentFilter);

  const filterButtons = ['all', 'phones', 'laptops', 'accessories'];

  return (
    <section id="products" className="container mx-auto px-4 md:px-12 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Featured Products</h2>
        <div className="flex flex-wrap gap-2 md:space-x-2">
          {filterButtons.map((filter) => (
            <button
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`capitalize px-5 py-2 rounded-full font-medium transition-colors ${
                currentFilter === filter
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>
      
      <div id="productGrid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;