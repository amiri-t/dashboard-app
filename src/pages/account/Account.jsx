import React from "react";
import "./account.css";
import { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { MdDriveFolderUpload } from "react-icons/md";
import { Link } from "react-router-dom";

const Account = () => {
  const [file, setFile] = useState("");
  const handleSave = () => {
    alert("Changes Saved Successfully");
  };
  return (
    <div className="account">
      <Sidebar />
      <div className="acc-container">
        <Navbar />
        <div className="account-data">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
            <div className="picture">
              <div>
                <label htmlFor="file">
                  Choose a Picture:{" "}
                  <MdDriveFolderUpload size={35} className="icon" />
                </label>
              </div>
              <div>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <div className="right">
            <form>
              <div className="info">
                <input type="text" placeholder="Enter Your Full Name..." />
                <input type="email" placeholder="Enter Your Email..." />
                <input type="tel" placeholder="Enter Your Phone Number..." />
                <input type="password" placeholder="Enter Your Password..." />
              </div>
            </form>
            <Link to={"/"}>
              <button onClick={handleSave}>Save Changes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
