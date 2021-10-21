import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/crown.svg";
import "./Header.scss";
const Header_54 = () => {
  return (
    <div>
      <div class="header">
        <Link to="/" class="logo-container">
          <Logo />
        </Link>
        <div class="options">
          <Link to="/shop_54" class="option">
            Shop
          </Link>
          <Link to="/contact_54" class="option">
            Contact
          </Link>
          <Link to="/signin_54" class="option">
            Sign In
          </Link>
          <div class="cart-icon" onclick="cartToggle()">
            <img class="shopping-icon" src="./assets/shopping-bag.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header_54;
