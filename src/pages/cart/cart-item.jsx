import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { productId, productName, price, productImage } = props.data;
  const { removeFromCart, addToCart, amountChange, cartItems } =
    useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} alt={productName} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>

        <div className="countHandler">
          <button onClick={() => removeFromCart(productId)}> - </button>
          <input
            value={cartItems[productId]}
            onChange={(e) => amountChange(Number(e.target.value), productId)}
          />
          <button onClick={() => addToCart(productId)}> + </button>
        </div>
      </div>
    </div>
  );
};
