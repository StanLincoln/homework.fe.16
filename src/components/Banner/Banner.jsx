import React from "react";
import "./banner.scss";
import logo from "./../img/Logo.svg";

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__box">
        <img src={logo} alt="logo" className="banner__logo" />
        <h1 className="banner__title">Checkout</h1>
        <div>
          <a className="banner__home" href="#">Home</a>
          <span>{" > "}</span>
          <a className="banner__link" href="#">Checkout</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
