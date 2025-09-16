const ProductCard = ({ product, addToCart }) => {
  const { name, price, image, rating, reviews } = product;

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg card-hover flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-24 h-24 mb-4 rounded-lg" />
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <div className="flex items-center mb-2">
        <span className="text-sm text-yellow-400">
          {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
        </span>
        <span className="text-xs text-gray-500 ml-2">({reviews})</span>
      </div>
      <span className="text-xl font-bold text-blue-600 mb-4">${price}</span>
      <button
        className="add-to-cart-btn w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-full transition-colors hover:bg-blue-600"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;