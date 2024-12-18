import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Import CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import JS (bao gồm Popper)
import ProductDetail from "./productdetail/ProductDetail";
import Search from "./search/Search";
import Header from "./page/Header";
import Footer from "./page/Footer";
import Body from "./page/Body";
import React from "react";
import "./CSS/Header.css";
import "./CSS/Body.css";
import "./App.css";
import "./CSS/Shop.css";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Body />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
