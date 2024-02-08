import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import "../../css/Payment.css";
import { useStateValue } from "../../StateProvider";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "../../axios";
import { db } from "../../firebase";

interface BasketItem {
  id: string;
  title: string;
  image: string;
  price: number;
  rating: number;
}

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState<boolean | string>(false);
  const [error, setError] = useState<any>(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState<string | boolean>(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios.post("/payments/create", {
        total: getBasketTotal(basket) * 100,
      });
      setClientSecret(response.data.clientSecret);
    };

    getClientSecret();
  }, [basket]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements || !dispatch) {
      return;
    }

    const payload = await stripe.confirmCardPayment(clientSecret as string, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    });

    if (payload.error) {
      setError(`Payment failed: ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);

      if (user && dispatch) {
        db.collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(payload.paymentIntent!.id)
          .set({
            basket: basket,
            amount: payload.paymentIntent!.amount,
            created: payload.paymentIntent!.created,
          });

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      }
    }
  };

  const handleChange = (event: any) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout: (<Link to="/checkout">{basket.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Vienna, WV 26105</p>
          </div>
        </div>
        <div className="payment__section">
          <h3>Review items and delivery</h3>
          <div className="payment__items">
            {basket.map((item: BasketItem) => (
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
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button
                  disabled={processing || disabled || succeeded ? true : false}
                >
                  <span>{processing ? <p>Processing...</p> : "Purchase"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
