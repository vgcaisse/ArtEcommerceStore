
import React from "react";
import { PRODUCT } from "../../products";
import { Description } from "./description";
import { useNavigate } from "react-router-dom";
import "./items.css";

export const Items = (props) => {
  const navigate = useNavigate();
  const { productId } = props;

  const product = PRODUCT.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div className="items-container">
      <div className="items-title">
        <h1>Description</h1>
      </div>
      <div className="products">
        <Description data={product} />
      </div>
      <button className="cartPageButtons" onClick={handleClick}>
        Continue Shopping
      </button>
      <button className="cartPageButtons" onClick={() => navigate("/cart")}>
        Your Cart
      </button>
    </div>
  );
};
