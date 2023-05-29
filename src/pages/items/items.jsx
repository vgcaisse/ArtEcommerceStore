import React from "react";
import { PRODUCT } from "../../products";
import { Description } from "./description";
import "./items.css";
import { useNavigate } from "react-router-dom";

export const Items = (props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/`);
  };
  // const { productId } = props.data;
  return (
    <div className="items">
      <div className="itemsTitle">
        <h1>Description</h1>
      </div>
      <div className="products">
        {PRODUCT.map((description) => (
          <Description data={description} />
        ))}
      </div>
      <button onClick={handleClick}>Continue Shopping</button>
    </div>
  );
};
