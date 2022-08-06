import React from "react";
import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Total from "../../components/total/Total";
import Widgets from "../../components/widgets/Widgets";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="home-container">
        <Navbar />
        <Widgets />
        <div className="charts">
          <Total />
          <Chart title="Last 6 Month (Revenue)" aspect={2 / 1} />
        </div>
      </div>
    </div>
  );
};

export default Home;
