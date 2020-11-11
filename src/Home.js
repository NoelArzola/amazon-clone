import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2020/TV/BRND/BRND_MTH20_00000_GWBleedingHero_1500x600_Final_en-US_PVD5529_A._CB406173264_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="101"
            title="1MORE Stylish True Wireless Earbuds, Bluetooth 5.0, 24-Hour Playtime, Stereo In-Ear Headphones with Charging Case, Built-in Microphone, Alternate Pairing Mode"
            price={63.74}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61Y%2B8BuBwwL._AC_SL1500_.jpg"
          />

          <Product
            id="102"
            title="Casio Men's MDV106-1AV 200M Duro Analog Watch, Black"
            price={65.25}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91jXI3HY2nL._AC_UY879_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="103"
            title="Teak Cutting Board - Rectangle Butcher Block With Hand Grip ( 20 x 15 x 1.5 in.) - By Teakhaus"
            price={119.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/91yDcMeojLL._AC_SL1500_.jpg"
          />
          <Product
            id="104"
            title='Teakhaus by Proteak Edge Grain Carving Board w/Hand Grip (Rectangle) | 24" x 18" x 1.5"'
            price={99.95}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61G721zTh7L._AC_SL1000_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="105"
            title="Kreg Jig K4 Pocket Hole System with Pocket-Hole Screw Kit in 5 Sizes"
            price={126.53}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61hjPkdFBXL._AC_SL1000_.jpg"
          />
          <Product
            id="106"
            title='Irwin Tools Combination Square, Metal-Body, 12", 1794469'
            price={15.51}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/61K2Uknjw5L._AC_SL1500_.jpg"
          />

          <Product
            id="107"
            title="Milescraft 1323 PocketJig200 Kit - Complete Pocket Hole Kit with Jig, Bit, Screws and Drivers,Black/Red"
            price={49.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/710nkFKI71L._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="108"
            title="Craft Wok Traditional Hand Hammered Carbon Steel Pow Wok with Wooden and Steel Helper Handle (14 Inch, Round Bottom) / 731W88"
            price={59.75}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/61NtRvfYySL._AC_SL1208_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="109"
            title="The Total Money Makeover: Classic Edition: A Proven Plan for Financial Fitness"
            price={10.77}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/51hYj7396-L.jpg"
          />

          <Product
            id="110"
            title="Everyday Millionaires: How Ordinary People Built Extraordinary Wealth―and How You Can Too"
            price={19.63}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/812aOG69n3L.jpg"
          />

          <Product
            id="111"
            title="Smart Money Smart Kids: Raising the Next Generation to Win with Money"
            price={18.24}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/91mxYw1OIwL.jpg"
          />

          <Product
            id="112"
            title="The Proximity Principle: The Proven Strategy That Will Lead to a Career You Love"
            price={11.69}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71xILEiY-iL.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
