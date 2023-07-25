import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import "../css/navbar.css";

function MainLayouts() {
  return (
    <div className="backgroundOf">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayouts;
