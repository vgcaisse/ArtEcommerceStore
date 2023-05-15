import React from "react";
import { Link } from "react-router-dom";

export const Product = (props) => {
  const { productName, price, productImage } = props.data;
  return (
    <div className="product">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>{productName}</p>
        <p>${price}</p>
      </div>
      <button className="addToCartBttn">
        <Link to="/items">Description</Link>
      </button>
    </div>
  );
};
