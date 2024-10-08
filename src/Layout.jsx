import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar"


function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
