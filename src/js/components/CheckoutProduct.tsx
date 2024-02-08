import React from "react";
import "../../css/CheckoutProduct.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";

interface Props {
  id: string;
  image: string;
  title: string;
  price: number;
  rating: number;
  hideButton?: boolean;
}

function CheckoutProduct({
  id,
  image,
  title,
  price,
  rating,
  hideButton,
}: Props) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };

  return (
    <div className="checkoutProduct" key={id}>
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {/* Generate star icons based on rating */}
          {Array.from({ length: rating }, (_, i) => (
            <p key={i}>
              <StarIcon />
            </p>
          ))}
        </div>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        {!hideButton && (
          <div>
            <button onClick={removeFromBasket}>Remove from Cart</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
