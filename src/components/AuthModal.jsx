import { useState } from 'react';

const AuthModal = ({ onClose }) => {
  
  const [isLoginView, setIsLoginView] = useState(true);

  // You would also have state here for form inputs
  // e.g., const [email, setEmail] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted");
    
    onClose(); 
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted");
    
    onClose(); 
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg modal-content relative">
        <h3 className="text-2xl font-bold mb-6 text-gray-800 text-center">
          {isLoginView ? 'Login to TechStore' : 'Create an Account'}
        </h3>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
          <i className="fas fa-times text-xl"></i>
        </button>

        
        {isLoginView && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label htmlFor="loginEmail" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="loginEmail" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
            </div>
            <div>
              <label htmlFor="loginPassword" className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" id="loginPassword" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 transition-colors" />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors">
              <i className="fas fa-sign-in-alt mr-2"></i> Login
            </button>
          </form>
        )}

        
        {!isLoginView && (
           <form onSubmit={handleSignupSubmit} className="space-y-4">
          
             <div>
               <label htmlFor="signupEmail" className="block text-sm font-medium text-gray-700">Email</label>
               <input type="email" id="signupEmail" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
             </div>
             <div>
               <label htmlFor="signupPassword" className="block text-sm font-medium text-gray-700">Password</label>
               <input type="password" id="signupPassword" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm" />
             </div>
             <button type="submit" className="w-full bg-green-600 text-white font-semibold py-3 rounded-full shadow-lg hover:bg-green-700 transition-colors">
               <i className="fas fa-user-plus mr-2"></i> Signup
             </button>
           </form>
        )}

        
        <p className="text-center text-gray-500 mt-4 text-sm">
          {isLoginView ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLoginView(!isLoginView)} className="text-blue-600 hover:underline">
            {isLoginView ? 'Signup now' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;