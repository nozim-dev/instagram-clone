import React from "react";
import Aside from "../Components/Aside/Aside";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  function RightClick(event) {
    event.preventDefault(); // Prevent the default right-click menu behavior
  }

  document.onkeydown = function (e) {
    // disable F12 key
    if (e.keyCode == 123) {
      return false;
    }

    // disable I key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      return false;
    }

    // disable C key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 67) {
      return false;
    }

    // disable J key
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      return false;
    }

    // disable U key
    if (e.ctrlKey && e.keyCode == 85) {
      return false;
    }
  };
  return (
    <div onContextMenu={RightClick} className="Container">
      <Aside />
      <Outlet />
    </div>
  );
};

export default HomeLayout;
