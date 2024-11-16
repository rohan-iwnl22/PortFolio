import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import HomePage from "./Pages/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <HomePage></HomePage>
    </>
  );
}

export default App;
