import React from "react";
import logo from "./img/logo.png";

const Header = () => {
  return (
    //Header box
    <div className="header">
    <div className="header-box">
      <div className="logo-box">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="search-box">
        <input type="text" placeholder="🔍 Search"></input>
      </div>
      <div className="icon-box">
        <ion-icon name="home-outline"></ion-icon>
        <ion-icon name="send-outline"></ion-icon>
        <ion-icon name="compass-outline"></ion-icon>
        <ion-icon name="heart-outline"></ion-icon>
        <ion-icon name="person-circle-outline"></ion-icon>
      </div>
    </div>
    </div>
  );
};

export default Header;
