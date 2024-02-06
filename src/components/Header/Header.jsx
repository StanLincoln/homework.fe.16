import React from "react";
import "./header.scss";
import { FaRegUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { GrCart } from "react-icons/gr";
import logo from "./../img/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__row">
          <div className="header__logo">
            <img src={logo} alt="logo" className="header__img" />
            <a className="header__title">Furniro</a>
          </div>
          <nav className="header__nav">
            <ul>
              <li>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header__icons">
            <FaRegUser />
            <IoSearch />
            <FaRegHeart />
            <GrCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
