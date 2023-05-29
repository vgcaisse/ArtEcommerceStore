import React from "react";
import { PRODUCT } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>VC's Art Store</h1>
      </div>
      <div className="products">
        {PRODUCT.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};