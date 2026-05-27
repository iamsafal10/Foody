import React, { useEffect, useState } from "react";
import FoodData from "../../data/FoodData";
import { setCategory } from "../slices/CategorySlice";
import { useDispatch, useSelector } from "react-redux";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);
  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((item) => item.category)),
    ];
    setCategories(uniqueCategories);
  };
  useEffect(() => {
    listUniqueCategories();
  }, []);
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);
  return (
    <div className="mx-4 sm:mx-6 lg:mx-10 mt-6 sm:mt-8 mb-10">
      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
        Get the best food here
      </div>

      <div className="flex flex-wrap gap-3 sm:gap-4">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-4 sm:px-5 py-2 text-sm sm:text-base rounded-xl font-medium shadow-sm transition-all duration-200 hover:cursor-pointer hover:scale-105 ${
            selectedCategory === "All"
              ? "bg-green-500 text-white"
              : "bg-slate-100 hover:bg-green-100 hover:text-green-700"
          }`}
        >
          All
        </button>

        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => dispatch(setCategory(category))}
              className={`px-4 sm:px-5 py-2 text-sm sm:text-base rounded-xl font-medium shadow-sm transition-all duration-200 hover:cursor-pointer hover:scale-105 ${
                selectedCategory === category
                  ? "bg-green-500 text-white"
                  : "bg-slate-100 hover:bg-green-100 hover:text-green-700"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
