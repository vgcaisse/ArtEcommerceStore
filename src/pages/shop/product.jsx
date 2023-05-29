import React from "react";
import { useNavigate } from "react-router-dom";

export const Product = (props) => {
  const { productId, productName, price, productImage } = props.data;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${productId}`);
  };

  return (
    <div className="product" onClick={handleClick}>
      <img src={productImage} alt={productName} />
      <div className="description">
        <h3>{productName}</h3>
        <h4>${price}</h4>
      </div>
    </div>
  );
};
