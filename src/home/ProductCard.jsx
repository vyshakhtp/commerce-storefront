import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext.jsx";

const ProductCard = ({ id, name, price, imageURL, rating }) => {
  const { addItemToCart } = useContext(CartContext);
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();

  const addToCart = () => {
    addItemToCart({ id, name, price, imageURL });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000); // hide toast after 2s
  };

  const buyNow = () => {
    addItemToCart({ id, name, price, imageURL });
    navigate(`/checkout/${id}`); // Redirect to checkout page (create this if needed)
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'}>
          ★
        </span>
      );
    }
    return stars;
  };
  


  return (
    
    <div className="relative">
      <div className="p-4 border shadow rounded bg-white hover:shadow-md transition">
        <img src={imageURL} alt={name} className="w-full h-48 object-contain bg-white rounded mb-3" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="text-gray-500 mb-1">Rs. {price}</div>

        {/* ⭐ Ratings */}
        <div className="mb-2 text-xl">{renderStars(parseInt(rating))}</div>

        <div className="flex flex-wrap gap-2">
          <button
            onClick={addToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
          <Link
            to={`/product/${id}`}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded"
          >
            More Details
          </Link>
          <button
            onClick={buyNow}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* ✅ Toast Message */}
      {showToast && (
        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md animate-bounce">
          ✅ Added to Cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
