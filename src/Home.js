import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_B._CB406173267_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            title="Casio Men's MDV106-1AV 200M Duro Analog Watch, Black"
            price="65.25"
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91jXI3HY2nL._AC_UY879_.jpg"
          />
          <Product />
        </div>
        <div className="home__row">
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home__row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
