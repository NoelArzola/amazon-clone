import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2020/Q3_Fall/deals/ilm_desktop_2x._CB404136881_.jpg"
          alt=""
          className="checkout__ad"
        />
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />

        {/* BasketItem */}
      </div>
    </div>
  );
}

export default Checkout;
