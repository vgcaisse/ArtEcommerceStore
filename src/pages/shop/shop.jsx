import React from "react";
import { PRODUCT } from "../../products";
import { Product } from "./product";
import { Link } from "react-router-dom";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>VC's Art Store</h1>
      </div>
      <div className="products">
        {PRODUCT.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
