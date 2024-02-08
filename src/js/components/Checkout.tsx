import React from "react";
import "../../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div>
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/01/img18/home/2020/Q3_Fall/deals/ilm_desktop_2x._CB404136881_.jpg"
          alt=""
        />
        <div>
          <h3>{user ? `Hello, ${user.email}` : "Hello, Guest"}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>
          <div className="checkout__container">
            <div className="checkout__left">
              {basket.map((item: any) => (
                <CheckoutProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
            <div className="checkout__right">
              <Subtotal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
