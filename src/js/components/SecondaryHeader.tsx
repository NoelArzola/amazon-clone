import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";
import "../../css/SecondaryHeader.css";

export const SecondaryHeader = () => {
  const [{ user }] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <nav>
      <Link to="/" className="mobileCta">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
      <div className="secondaryHeader">
        <Link to={!user ? "/login" : ""} className="mobileloginSignup">
          <div
            className="secondaryHeader__option"
            onClick={handleAuthentication}
          >
            <span className="secondaryHeader__optionLineOne">
              {user ? <span>Hello, {user.email}</span> : "Hello, Guest"}
            </span>{" "}
            <span className="secondaryHeader__optionLineTwo">
              {user ? "Sign out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div>
          <Link to="/orders">
            <div className="secondaryHeader__option orders">
              <span className="secondaryHeader__optionLineOne">Returns</span>
              <span className="secondaryHeader__optionLineTwo">& Orders</span>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};
