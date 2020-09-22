import React from "react";
import "./Product.css";

function Product() {
  return (
    <div className="product">
      <div className="product__info">
        <p>title</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>⭐️</p>
        </div>
      </div>
      <img
        src="https://m.media-amazon.com/images/I/51szMBsoDZL._SL450_.jpg"
        alt=""
      />
      <button className="product__addToCart">Add to Basket</button>
      <button className="product__buyNow">Buy Now</button>
    </div>
  );
}

export default Product;
