import "./App.css"
import Header from "./components/Header";
import Hero from "./components/Hero";
function App() {


  return (
    <div className="text-gray-800">
      <Header
        onCartClick={() => setIsCartOpen(true)} 
        onLoginClick={() => setIsLoginOpen(true)}
         />
         <main className="space-y-16 py-12">
          <Hero />
         </main>
      
    </div>
  );
}

export default App;
