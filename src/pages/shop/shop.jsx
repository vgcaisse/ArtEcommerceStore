import React from "react";
import { PRODUCT } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="products">
        {PRODUCT.map((product, index) => (
          <Product key={index} data={product} />
        ))}
      </div>
    </div>
  );
};