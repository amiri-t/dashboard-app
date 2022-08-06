import React from "react";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Orders from "./pages/orders/Orders";
import Pricing from "./pages/pricing/Pricing";
import Account from "./pages/account/Account";
import Settings from "./pages/settings/Settings";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/account" element={<Account />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
