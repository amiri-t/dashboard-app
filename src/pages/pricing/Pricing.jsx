import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./pricing.css";

const Pricing = () => {
  return (
    <div className="pricing">
      <Sidebar />
      <div className="pricing-container">
        <Navbar />
        <h2 className="title">Pricing</h2>
        <div className="offers">
          <div className="offer basic">
            <div className="top">
              <h2>BASIC</h2>
              <hr className="line" />
              <div className="price">
                <div className="left">
                  <h3>$28</h3>
                </div>
                <div className="right">
                  <h3>00</h3>
                  <h4>/mo.</h4>
                </div>
              </div>
            </div>
            <div className="features">
              <p>5 Users</p>
              <p>150 Downloads</p>
              <p>25 GB Space</p>
              <p>1 Email Account</p>
              <p>Free Upgrades</p>
            </div>
            <button>ORDER NOW</button>
          </div>
          <div className="offer popular">
            <div className="top">
              <div className="pop">Popular</div>
              <h2>BASIC</h2>
              <hr className="pop-line" />
              <div className="price">
                <div className="left">
                  <h3>$28</h3>
                </div>
                <div className="right">
                  <h3>00</h3>
                  <h4>/mo.</h4>
                </div>
              </div>
            </div>
            <div className="features">
              <p>5 Users</p>
              <p>150 Downloads</p>
              <p>25 GB Space</p>
              <p>1 Email Account</p>
              <p>Free Upgrades</p>
            </div>
            <button>ORDER NOW</button>
          </div>
          <div className="offer premium">
            <div className="top">
              <h2>BASIC</h2>
              <hr className="line" />
              <div className="price">
                <div className="left">
                  <h3>$28</h3>
                </div>
                <div className="right">
                  <h3>00</h3>
                  <h4>/mo.</h4>
                </div>
              </div>
            </div>
            <div className="features">
              <p>5 Users</p>
              <p>150 Downloads</p>
              <p>25 GB Space</p>
              <p>1 Email Account</p>
              <p>Free Upgrades</p>
            </div>
            <button>ORDER NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
