import Header from "./components/Header";
function App() {


  return (
    <div className="text-gray-800">
      <Header
        onCartClick={() => setIsCartOpen(true)} 
        onLoginClick={() => setIsLoginOpen(true)}
         />
      
    </div>
  );
}

export default App;
