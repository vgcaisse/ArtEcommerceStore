import React from "react";
import { PRODUCT } from "../../products";
import { Description } from "./description";
import "./items.css";

export const Items = () => {
  return (
    <div className="items">
      <div className="itemsTitle">
        <h1>VC's Art Store</h1>
      </div>
      <div className="products">
        {PRODUCT.map((description) => (
          <Description data={description} />
        ))}
      </div>
    </div>
  );
};
