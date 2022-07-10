import React, { useEffect, useState } from "react";
import { useCartContext } from "../context/CartContext";
import CartItemCard from "./CartItemCard";

export default function CartItems() {
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const { isCartOpen, setIsCartOpen, items, totalCartPrice } = useCartContext();
  useEffect(() => {
    if (totalCartPrice == 0) {
      setIsBtnDisabled(true);
      setIsCartOpen(false);
    } else {
      setIsBtnDisabled(false);
    }
  }, [totalCartPrice]);
  if (isCartOpen) {
    return (
      <div className="cart-list">
        <div className="cart-list-header">
          <span>Cart</span>
          <button onClick={() => setIsCartOpen(false)}>x</button>
        </div>
        <div className="cart-list-items">
          {Object.keys(items).map((key) => {
            return <CartItemCard cartItem={items[key]} />;
          })}
        </div>
        <div className="cart-list-footer">
          <span>Total Price: ${totalCartPrice.toFixed(2)}</span>
          <button className="checkout-btn" disabled={isBtnDisabled}>
            Checkout
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
