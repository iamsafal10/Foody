import React from "react";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
  return (
    <div>
      {/* Cart Item */}

      <div className="bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-all duration-300">
        {/* Left */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6978/6978255.png"
            alt="pizza"
            className="w-16 h-16 object-contain rounded-full bg-gray-100 p-1"
          />

          <div>
            <h2 className="font-semibold text-gray-800 text-sm sm:text-base">
              Margherita Pizza
            </h2>

            <p className="text-green-500 font-bold">₹130</p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
          <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all">
            -
          </button>

          <span className="font-semibold text-gray-700">1</span>

          <button className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all">
            +
          </button>
          <button className="text-red-500 hover:text-red-700 text-xl transition-all">
            <MdDelete className="text-red-500 text-2xl cursor-pointer hover:text-red-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
