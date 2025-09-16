const Footer = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 mt-12">
      <div className="container mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Column 1: About */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">TechStore</h3>
          <p>Your trusted partner for premium electronics and exceptional service.</p>
        </div>
        
        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
            <li><a href="#trending" className="hover:text-white transition-colors">Trending</a></li>
            <li><a href="#dashboard" className="hover:text-white transition-colors">Dashboard</a></li>
            <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>
        
        {/* Column 3: Support */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="tel:+880TECHSTORE" className="hover:text-white transition-colors">
                <i className="fas fa-phone mr-2"></i> +880-TECH-STORE
              </a>
            </li>
            <li>
              <a href="mailto:support@techstore.com" className="hover:text-white transition-colors">
                <i className="fas fa-envelope mr-2"></i> support@techstore.com
              </a>
            </li>
          </ul>
        </div>
        
        {/* Column 4: Secure Payments */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Secure Payments</h3>
          <div className="flex justify-center md:justify-start space-x-4 text-3xl">
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-paypal"></i>
            <i className="fab fa-apple-pay"></i>
          </div>
        </div>
        
      </div>
      
      {/* Copyright Section */}
      <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500">
        © {currentYear} TechStore (Muaz Muhammad). All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;