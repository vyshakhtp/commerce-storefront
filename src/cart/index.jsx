import React, { useContext } from "react";
import { CartContext } from "../CartContext.jsx";
import { useNavigate } from "react-router-dom";

const MyCart = () => {
  const { items, addItemToCart, removeItemFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">🛒 My Cart</h1>

      {items.length > 0 ? (
        <>
          <div className="space-y-6">
            {items.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 border rounded-lg shadow-sm bg-white hover:shadow-md transition duration-200"
              >
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="w-20 h-20 object-contain rounded mr-4"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80";
                  }}
                />

                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-700">{product.name}</h2>
                  <p className="text-sm text-gray-500">Quantity: {product.quantity}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => addItemToCart(product)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold px-4 py-2 rounded"
                  >
                    +1
                  </button>
                  <button
                    onClick={() => removeItemFromCart(product.id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold px-4 py-2 rounded"
                  >
                    -1
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Total & Buy Now */}
          <div className="mt-8 flex flex-col items-center">
            <p className="text-xl font-semibold mb-4">Total: Rs. {totalPrice}</p>
            <button
              onClick={() => navigate("/checkout")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded text-lg"
            >
              Buy Now
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500 text-lg">Your cart is empty. 🛍️</p>
      )}
    </div>
  );
};

export default MyCart;
