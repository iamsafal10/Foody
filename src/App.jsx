import { useState } from "react";
import AppLogo from "./assets/diet.png";
import "./App.css";
import Home from "./pages/Home";
import Success from "./pages/Success";
import Error from "./pages/Error";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/success" element={<Success />} />
      <Route path="/*" element="{<Error/>" />
    </>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
