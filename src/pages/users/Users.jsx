import React from "react";
import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./users.css";

const Users = () => {
  return (
    <div className="users">
      <Sidebar />
      <div className="user-container">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
};

export default Users;
