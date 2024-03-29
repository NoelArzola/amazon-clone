import moment from "moment";
import React, { useRef } from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "../../css/Order.css";

function Order({ order }: { order: any }) {
  const ref = useRef();
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order__id--mobile">
        <small>{order.id}</small>
      </p>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>

      {order.data.basket?.map((item: any, index: number) => (
        <CheckoutProduct
          key={`${item.id}-${index}`}
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <h3 className="order__total">Order Total: {value}</h3>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
