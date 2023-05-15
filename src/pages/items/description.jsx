import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Description = (props) => {
    const { id, productName, price, productImage, description } = props.data;
    const { addToCart, cartItems } = useContext(ShopContext);
  
    const cartItemAmount = cartItems[id];
    return (
      <div className="product">
        <img src={productImage} alt={productName} />
        <div className="description">
          <p>{productName}</p>
          <p>{description}</p>
          <p>${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    );
}