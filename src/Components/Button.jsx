import React from "react";
import "./button.css";
const MainButton = ({ icon, name, color = "#ffffff", bgColor = "#ff3700" }) => {
  return (
    <a
      href="#"
      className="mainBtn"
      style={{ color: color, background: bgColor }}
    >
      {icon} {name}
    </a>
  );
};

export default MainButton;
