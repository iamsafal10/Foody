import React from "react";
import ItemCard from "./ItemCard";

const Cart = () => {
  return (
    <div className="w-full max-w-sm min-h-screen bg-gray-100 p-4 flex flex-col justify-between shadow-xl">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Order</h1>

          <button className="text-2xl text-gray-500 hover:text-black transition-all">
            🛒
          </button>
        </div>

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <ItemCard />
      </div>

      {/* Bottom Section */}
      <div className="mt-10">
        <div className="flex justify-between text-lg font-semibold text-gray-800 mb-5">
          <span>Total Items :</span>

          <span className="text-gray-800">2</span>
        </div>
        <div className="flex justify-between text-lg font-semibold text-gray-800 mb-5">
          <span>Total Amount :</span>

          <span className="text-green-500">₹130</span>
        </div>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-2xl text-lg font-semibold transition-all duration-300">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
