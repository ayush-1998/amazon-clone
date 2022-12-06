import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/51jKifqW4XL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Lenovo Ideapad Gaming 3 AMD Ryzen 7 5800H 15.6 (39.62cm) FHD IPS Gaming Laptop (16GB/512GB SSD/Windows 11/Nvidia GTX 1650 4GB/120Hz Refresh Rate/Backlit Keyboard/Shadow Black/2.25Kg), 82K200X2IN"
            price={74990.00}
            rating={5}
            image="https://images-eu.ssl-images-amazon.com/images/I/41bufC9IzpL._SX300_SY300_QL70_FMwebp_.jpg"
          />
          <Product
            id="49538094"
            title="2020 Apple iPad Air with A14 Bionic chip (10.9-inch/27.69 cm, Wi-Fi, 256GB) - Rose Gold (4th Generation)"
            price={61900}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41YRIsuHiwL._SY445_SX342_QL70_FMwebp_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder 2 lbs, 907 g (Mocha Cappuccino), for Muscle Support & Recovery, Vegetarian - Primary Source Whey Isolate"
            price={3218.0}
            rating={3}
            image="https://m.media-amazon.com/images/I/713ZN2FHJ+S._SX679_.jpg"
          />
          <Product
            id="23445930"
            title="Casio Youth-Analog Black Dial Men's Watch-MCW-100H-9A2VDF (AD215)"
            price={3195.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61UKedQHRKL._UL1100_.jpg"
          />
          <Product
            id="3254354345"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Mass Market Paperback – 11 April 2017"
            price={340}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51u2E5fNq8L._SX301_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="12345678"
            title="Dennis Lingo Men's Solid Slim Fit Casual Shirt"
            price={480}
            rating={3}
            image="https://m.media-amazon.com/images/I/61qcnAHZP3L._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="234459300"
            title="Bourge Men's Loire-z189 Running Shoes"
            price={719}
            rating={5}
            image="https://m.media-amazon.com/images/I/71vwCXqAfUL._UY695_.jpg"
          />
          <Product
            id="7654321"
            title="Rayon Fabric Embroidery Worked Printed Regular Fit"
            price={520}
            rating={4}
            image="https://m.media-amazon.com/images/I/41lZ096YJyS._AC_UL480_FMwebp_QL65_.jpg"
          />
          <Product
            id="23115930"
            title="Fashion Play Baywatch BP19 32 Litre Unisex Casual Polyester"
            price={479}
            rating={5}
            image="https://m.media-amazon.com/images/I/71bqoYtdenL._UX679_.jpg"
          />
          <Product
            id="3255554345"
            title="Men's Square Sunglasses"
            price={550}
            rating={4}
            image="https://m.media-amazon.com/images/I/61FRNws4P+L._AC_UL480_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;