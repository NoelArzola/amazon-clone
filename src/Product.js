import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";

function Product({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log("this is the basket >>>", basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>{<StarIcon />}</p>
            ))}
        </div>
      </div>

      <img src={image} alt="" />

      <button className="product__addToCart" onClick={addToBasket}>
        Add to Cart
      </button>

      <button className="product__buyNow">Buy Now</button>
    </div>
  );
}

export default Product;
