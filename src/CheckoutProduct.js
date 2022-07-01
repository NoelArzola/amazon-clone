import React from "react";
import "./CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import Product from "./Product";

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
  quantity,
}) {
  // eslint-disable-next-line no-unused-vars
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    // remove the item from the basket

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct" key={Product.id}>
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>{<StarIcon />}</p>
            ))}
        </div>
        {!hideButton && (
          <div>
            <button onClick={removeFromBasket}>Remove from Cart</button>
            <select
              name="Quantity"
              id=""
              value={quantity > 1 ? `Qty: ${quantity}` : `Qty: 1`}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
