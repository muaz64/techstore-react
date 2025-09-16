import  { useState } from 'react';

const Header = ({ onCartClick, onLoginClick, cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <i className="fas fa-store-alt text-blue-600"></i> TechStore
          </a>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="#products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</a>
            <a href="#trending" className="text-gray-600 hover:text-blue-600 transition-colors">Trending</a>
            <a href="#dashboard" className="text-gray-600 hover:text-blue-600 transition-colors">Dashboard</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={onCartClick} className="relative text-gray-600 hover:text-blue-600 transition-colors hidden md:block" aria-label="Shopping Cart">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
            </button>
            <button onClick={onLoginClick} className="bg-blue-600 text-white font-semibold py-2 px-5 rounded-full shadow-lg hover:bg-blue-700 transition-colors hidden md:block">
              Login / Signup
            </button>
            <button onClick={onLoginClick} className="text-gray-600 hover:text-blue-600 transition-colors md:hidden" aria-label="Login/Signup">
              <i className="fas fa-user text-lg"></i>
            </button>
            <button onClick={onCartClick} className="relative text-gray-600 hover:text-blue-600 transition-colors md:hidden" aria-label="Shopping Cart">
              <i className="fas fa-shopping-cart text-lg"></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">{cartCount}</span>
            </button>
            <button onClick={() => setIsMenuOpen(true)} className="text-gray-600 hover:text-blue-600 transition-colors md:hidden" aria-label="Toggle Mobile Menu">
              <i className="fas fa-bars text-lg"></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <aside className={`md:hidden fixed inset-y-0 left-0 bg-white w-64 shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform z-40 p-6`}>
        <div className="flex justify-end mb-8">
          <button onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-blue-600">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>
        <nav className="flex flex-col space-y-4 text-lg">
          <a href="#home" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-colors">Home</a>
          <a href="#products" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-colors">Products</a>
          <a href="#trending" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-colors">Trending</a>
          <a href="#dashboard" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-colors">Dashboard</a>
          <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-colors">FAQ</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-gray-800 hover:bg-gray-100 p-2 rounded-lg transition-colors">Contact</a>
        </nav>
      </aside>
    </>
  );
};

export default Header;