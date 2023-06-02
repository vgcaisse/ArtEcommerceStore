import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import "./items.css"; 

export const Description = (props) => {
  const { productId, productName, price, productImage, description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[productId];
  return (
    <div className="items">
      <div className="image-container">
        <img className="product-image" src={productImage} alt={productName} />
      </div>
      <div className="product-details">
        <h1 className="product-name">{productName}</h1>
        <h2 className="product-description">{description}</h2>
        <p className="product-price">${price}</p>
        <button
          className="addToCartBttn"
          onClick={() => addToCart(productId)}
        >
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};
