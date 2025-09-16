import "./App.css"
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
//components
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

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
     toast.success(`${product.name} added to cart`);
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
const removeFromCart = (productId) => {
  setCartItems(prevItems =>
    prevItems.filter(item => item.id !== productId)
  );
};

  return (
    <div className="text-gray-800">
      <Toaster/>
      <Header
        onCartClick={() => setIsCartOpen(true)} 
        onLoginClick={() => setIsLoginOpen(true)}

        cartCount={cartItems.reduce((count, item) => count + item.quantity, 0)}
         />
         <main className="space-y-16 py-12">
          <Hero />
          <Trending addToCart={addToCart} />
          <Features />
          <Products addToCart={addToCart} />
          <Dashboard />
          <FAQ />
          <Contact />
         </main>
         <Footer />

         {isCartOpen && <CartModal cartItems={cartItems} onClose={() => setIsCartOpen(false)}  removeFromCart={removeFromCart}
 />} 
         {isLoginOpen && <AuthModal onClose={() => setIsLoginOpen(false)} />} 

    </div>
  );
}

export default App;
