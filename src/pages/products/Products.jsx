import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./products.css";
import { RiComputerLine } from "react-icons/ri";
import { IoMdTv } from "react-icons/io";
import { GiConsoleController } from "react-icons/gi";
import { BsCartDash, BsPhone, BsKeyboard } from "react-icons/bs";
import { CgGames } from "react-icons/cg";

const Products = () => {
  return (
    <div className="products">
      <Sidebar />
      <div className="products-container">
        <Navbar />
        <div className="items">
          <div className="item">
            <div className="product-icon">
              <RiComputerLine className="icon" size={100} />
            </div>
            <div className="details">
              <span className="product-type">Computers</span>
              <span className="cart-icon">
                <BsCartDash className="cart" size={25} />
              </span>
            </div>
          </div>
          <div className="item">
            <div className="product-icon">
              <BsPhone className="icon" size={100} />
            </div>
            <div className="details">
              <span className="product-type">Phones</span>
              <span className="cart-icon">
                <BsCartDash className="cart" size={25} />
              </span>
            </div>
          </div>
          <div className="item">
            <div className="product-icon">
              <BsKeyboard className="icon" size={100} />
            </div>
            <div className="details">
              <span className="product-type">Accessories</span>
              <span className="cart-icon">
                <BsCartDash className="cart" size={25} />
              </span>
            </div>
          </div>
          <div className="item">
            <div className="product-icon">
              <IoMdTv className="icon" size={100} />
            </div>
            <div className="details">
              <span className="product-type">TV</span>
              <span className="cart-icon">
                <BsCartDash className="cart" size={25} />
              </span>
            </div>
          </div>
          <div className="item">
            <div className="product-icon">
              <CgGames className="icon" size={100} />
            </div>
            <div className="details">
              <span className="product-type">Consoles</span>
              <span className="cart-icon">
                <BsCartDash className="cart" size={25} />
              </span>
            </div>
          </div>
          <div className="item">
            <div className="product-icon">
              <GiConsoleController className="icon" size={100} />
            </div>
            <div className="details">
              <span className="product-type">Gaming</span>
              <span className="cart-icon">
                <BsCartDash className="cart" size={25} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
