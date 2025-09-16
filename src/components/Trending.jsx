import ProductCard from './ProductCard';

const trendingProducts = [
    { id: 1, name: "iPhone 15 Pro", price: 999, category: "phones", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 5, reviews: 234 },
    { id: 2, name: "MacBook Pro M3", price: 1999, category: "laptops", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=💻", rating: 5, reviews: 156 },
    { id: 3, name: "AirPods Pro", price: 249, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=🎧", rating: 4, reviews: 89 },
    { id: 6, name: "Apple Watch Ultra", price: 799, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=⌚", rating: 5, reviews: 145 },
    { id: 7, name: "iPad Pro", price: 1099, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 5, reviews: 203 },
];

const Trending = ({ addToCart }) => {
  return (
    <section id="trending" className="py-12">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center md:text-left">🔥 Trending Now</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {trendingProducts.map(product => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;