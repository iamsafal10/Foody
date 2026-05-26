import React from "react";
import { useState } from "react";
import AppLogo from "../assets/diet.png";
import Navbar from "../components/Navbar";
import CategoryMenu from "../components/CategoryMenu";
import Foods from "../components/Foods";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <Foods />
      <Cart />
    </>
  );
};

export default Home;
