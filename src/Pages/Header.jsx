import React from "react";
import NavListItem from "../Components/NavListItem";
import navlistData from "../data/navListData";
import "./header.css";

const Header = () => {
  return (
    <header>
      <a href="/" className="logo">
        Cinema
      </a>
      <ul className="nav">
        {navlistData.map((nav) => (
          <NavListItem key={nav.id} nav={nav} />
        ))}
      </ul>
    </header>
  );
};

export default Header;
