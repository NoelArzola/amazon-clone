import React from "react";
import "../../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../reducer";
import { useHistory } from "react-router-dom";

interface BasketItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface User {}

function Subtotal() {
  const history = useHistory();
  const [{ basket, user }] = useStateValue(); // Corrected here

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: string) => (
          <>
            <p>
              Subtotal ({basket.length} item{basket.length !== 1 ? "s" : ""}):{" "}
              <strong>{value}</strong>{" "}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button
        onClick={() =>
          user ? history.push("/payment") : history.push("/login")
        }
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
