import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCT } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import "./cart.css";

export const Cart = () => {
  const { cartItems, getCartTotal } = useContext(ShopContext);
  const totalAmount = getCartTotal();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCT.map((product) => {
          if (cartItems[product.productId] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <h1>
          Cart Total: {totalAmount.length ? "" : "$"}
          {totalAmount}
        </h1>
        <button onClick={() => navigate("/")}>Continue shopping</button>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
};
