import { useState } from "react";
import Home from "./pages/Home/Home";
import ProductList from "./pages/ProductList/ProductList";
import ProductPage from "./pages/Product/Product";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Cart from "./pages/Cart/Cart";
import Pay from "./components/Pay";
import Success from "./components/Success";
import { Routes, Route, Navigate } from "react-router-dom";
import Product from "./pages/Product/Product";

function App() {
  const user = true;
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/login"
          element={user ? <Navigate replace to={"/"} /> : <Login />}
        />
        <Route
          path="/register"
          element={user ? <Navigate replace to={"/"} /> : <Register />}
        />
      </Routes>
    </div>
  );
}

export default App;
