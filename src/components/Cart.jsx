import React from "react";
import { ImCross } from "react-icons/im";
import ItemCard from "./ItemCard";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../slices/CartSlice";

const Cart = ({ setShowCart }) => {
  const items = useSelector((state) => state.cart.cartItems);
  console.log(items);
  const dispatch = useDispatch();
  return (
    <div className="w-full max-w-sm min-h-screen bg-gray-100 p-4 flex flex-col justify-between shadow-xl">
      {/* Top Section */}
      <div>
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Orders</h1>
          <ImCross
            onClick={() => setShowCart(false)}
            className="cursor-pointer text-gray-600 hover:text-red-500 transition-all"
          />

          <button className="text-2xl text-gray-500 hover:text-black transition-all"></button>
        </div>
        {items.map((item) => (
          <ItemCard
            key={item.id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
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
