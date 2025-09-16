import "./App.css"
import { useState } from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Trending from "./components/Trending";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CartModal from "./components/CartModal";
import AuthModal from "./components/AuthModal";

function App() {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    {id: 1, name: "iPhone 15 Pro", price: 999, category: "phones", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 5, reviews: 234 },
    { id: 2, name: "MacBook Pro M3", price: 1999, category: "laptops", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=💻", rating: 5, reviews: 156 },
    { id: 3, name: "AirPods Pro", price: 249, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=🎧", rating: 4, reviews: 89 },
    { id: 4, name: "Samsung Galaxy S24", price: 899, category: "phones", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 4, reviews: 167 },
    { id: 5, name: "Dell XPS 13", price: 1299, category: "laptops", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=💻", rating: 4, reviews: 98 },
    { id: 6, name: "Apple Watch Ultra", price: 799, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=⌚", rating: 5, reviews: 145 },
    { id: 7, name: "iPad Pro", price: 1099, category: "accessories", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=📱", rating: 5, reviews: 203 },
    { id: 8, name: "Surface Laptop", price: 1199, category: "laptops", image: "https://placehold.co/150x150/e0e7ff/4338ca?text=💻", rating: 4, reviews: 76 }
  ]);


  const addToCart = (product) => {
  setCartItems(prevItems => {
    const existingItem = prevItems.find(item => item.id === product.id);
    if (existingItem) {
      return prevItems.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      return [...prevItems, { ...product, quantity: 1 }];
    }
  });
};

  return (
    <div className="text-gray-800">
      <Header
        onCartClick={() => setIsCartOpen(true)} 
        onLoginClick={() => setIsLoginOpen(true)}

        cartCount={cartItems.reduce((count, item) => count + item.quantity, 0)}
         />
         <main className="space-y-16 py-12">
          <Hero />
          <Trending />
          <Features />
          <Products addToCart={addToCart} />
          <Dashboard />
          <FAQ />
          <Contact />
         </main>
         <Footer />

         {isCartOpen && <CartModal cartItems={cartItems} onClose={() => setIsCartOpen(false)} />} 
         {isLoginOpen && <AuthModal onClose={() => setIsLoginOpen(false)} />} 

    </div>
  );
}

export default App;
