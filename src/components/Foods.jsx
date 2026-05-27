import React from "react";
import FoodCard from "./FoodCard";
import { useState, useEffect, useCallback, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import FoodData from "../../data/FoodData";
import { useSelector, useDispatch } from "react-redux";

const Foods = () => {
  const selectedCategory = useSelector((state) => state.category.category);
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    // fetch("https://fakestoreapi.com/products")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // console.log(data);
    //     setFoodItems(data);
    //   })
    //   .catch((err) => console.log(err));
    setFoodItems(FoodData);
  }, []);
  const handleToast = (name) => toast.success(`${name} added to cart`);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="foods flex flex-wrap justify-center gap-6">
        {foodItems.map((item) => {
          if (
            selectedCategory === item.category ||
            selectedCategory === "All"
          ) {
            return (
              <FoodCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                desc={item.description}
                rating={item.rating}
                image={item.image}
                handleToast={handleToast}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export default Foods;
