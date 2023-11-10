import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { SecondaryHeader } from "./SecondaryHeader";

function Header({ city, stateName }) {
  const [{ basket, user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <header>
      {city && stateName && (
        <SecondaryHeader city={city} stateName={stateName} />
      )}

      <nav className="header">
        <Link to="/" className="cta">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {city && stateName && (
          <div className="header__option location">
            <span className="header__optionLineOne">{`Delivering to ${city}`}</span>{" "}
            {<span className="header__optionLineTwo">{stateName}</span>}
          </div>
        )}

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"} className="loginSignup">
            <div className="header__option" onClick={handleAuthentication}>
              <span className="header__optionLineOne">
                {user ? <span>Hello, {user.email}</span> : "Hello, Guest"}
              </span>
              <span className="header__optionLineTwo">
                {user ? "Sign out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders" className="header__option__orders">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartOutlinedIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <div className="header__option mobileLocation">
        <span className="header__optionLineOne">
          {`Delivering to ${city}, `}
          <span className="">{stateName}</span>
        </span>
      </div>
    </header>
  );
}

export default Header;
