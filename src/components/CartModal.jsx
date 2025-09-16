const CartModal = ({ cartItems, onClose }) => {
  
  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
  
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-lg modal-content relative">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h3>
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors">
          <i className="fas fa-times text-xl"></i>
        </button>

        <div className="space-y-4 max-h-80 overflow-y-auto pr-2 mb-6">
          {cartItems.length > 0 ? (
            cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center border-b pb-2">
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                  </div>
                </div>
                <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-8">Your cart is empty.</p>
          )}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t pt-4">
          <span className="text-xl font-semibold mb-4 md:mb-0">Total: ${cartTotal.toFixed(2)}</span>
          <button 
            disabled={cartItems.length === 0}
            className="w-full md:w-auto bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
            <i className="fas fa-lock mr-2"></i> Confirm Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;