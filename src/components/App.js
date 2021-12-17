import React from "react";
import Header from "./sections/Header";
import Home from "./pages/Home";
import Cupcakes from "./pages/Cupcakes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "../styles/styles.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cupcakes" element={<Cupcakes uri="cupcakes" title />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
