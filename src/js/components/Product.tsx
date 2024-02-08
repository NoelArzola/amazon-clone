import React from "react";
import "../../css/Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "../../StateProvider";

interface ProductProps {
  id: string;
  title: string;
  dollars: number;
  cents: number;
  rating: number;
  image: string;
  price: number;
}

function Product({
  id,
  title,
  dollars,
  cents,
  rating,
  image,
  price,
}: ProductProps) {
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
      <img src={image} alt="" />
      <div className="product__info">
        <p>{title}</p>
        <div className="product__rating">
          {Array(rating)
            .fill(null) // Providing a default value for fill
            .map((_, i) => (
              <p key={i}>
                <StarIcon />
              </p>
            ))}
        </div>
        <p className="product__price">
          <small>$</small>
          <strong>{dollars}</strong>
          <strong className="cents">{cents}</strong>
        </p>
      </div>

      <div className="product__buttonWrapper">
        <button className="product__addToCart" onClick={addToBasket}>
          Add to Cart
        </button>
      </div>

      {/* <button className="product__buyNow">Buy Now</button> */}
    </div>
  );
}

export default Product;
