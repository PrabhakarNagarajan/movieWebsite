import React from "react";
import NavListItem from "../Components/NavListItem";
import navlistData from "../data/navListData";
import "./header.css";
import Search from "../Components/Search";
import MainButton from "../Components/Button";

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
      <Search />
      <MainButton
        icon={<ion-icon name="log-in-outline"></ion-icon>}
        name="Sign In"
      />
    </header>
  );
};

export default Header;
