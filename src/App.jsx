import "./App.css"
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Trending from "./components/Trending";
import Features from "./components/Features";
import Dashboard from "./components/Dashboard";

function App() {


  return (
    <div className="text-gray-800">
      <Header
        onCartClick={() => setIsCartOpen(true)} 
        onLoginClick={() => setIsLoginOpen(true)}
         />
         <main className="space-y-16 py-12">
          <Hero />
          <Trending />
          <Features />
          <Products />
          <Dashboard />
         </main>
      
    </div>
  );
}

export default App;
