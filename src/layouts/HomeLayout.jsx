import React from "react";
import Aside from "../Components/Aside/Aside";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="Container">
      <Aside />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
