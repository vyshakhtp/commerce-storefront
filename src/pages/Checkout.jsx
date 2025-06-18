import React, { useContext, useState } from "react";
import { CartContext } from "../CartContext.jsx";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { items } = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    setOrderPlaced(true);

    // You can later save order to Supabase here

    setTimeout(() => {
      setOrderPlaced(false);
      navigate("/"); // Go back to home after placing order
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        Checkout
      </h1>

      {items.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No items in cart.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 border rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className="w-16 h-16 object-contain"
                  />
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium text-gray-800">
                  Rs. {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          <div className="text-right text-xl font-bold text-gray-700 mb-4">
            Total: Rs. {totalPrice}
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded text-lg"
          >
            Place Order
          </button>
        </>
      )}

      {orderPlaced && (
        <div className="mt-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
          🎉 Order placed successfully! Redirecting to home...
        </div>
      )}
    </div>
  );
};

export default Checkout;
