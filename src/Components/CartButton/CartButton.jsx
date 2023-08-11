import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";

import "./CartButton.css";
import AppContext from "../../context/AppContext";

function CartButton() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <div className="cart-button-container">
      <h5 className="button-name">Cart</h5>
      <button
        type="button"
        className="cart__button"
        onClick={() => setIsCartVisible(!isCartVisible)}
      >
        <AiOutlineShoppingCart />
        {cartItems.length > 0 && (
          <span className="cart-status">{cartItems.length}</span>
        )}
      </button>
    </div>
  );
}

export default CartButton;
