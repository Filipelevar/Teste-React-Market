import React, { useContext, useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import CartItem from "../CartItem/CartItem";
import AppContext from "../../context/AppContext";
import CartPDF from "../PDF/CartPDF";

import "./Cart.css";

function Cart() {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => item.preco + acc, 0);
  const [pdfVisible, setPdfVisible] = useState(false);

  return (
    <section className={`cart ${isCartVisible ? "cart--active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} data={cartItem} />
        ))}
      </div>

      <div className="cart-resume">Total Price: R${totalPrice.toFixed(2)}</div>

      {pdfVisible && (
        <PDFDownloadLink
          document={<CartPDF cartItems={cartItems} />}
          fileName="cart.pdf"
        >
          {({ blob, url, loading, error }) => (
            <a
              className="cart-download-pdf-link"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {loading ? "Loading..." : "Download PDF"}
            </a>
          )}
        </PDFDownloadLink>
      )}
      <div className="cart-button-container">
        <button className="cart-buy-button" onClick={() => setPdfVisible(true)}>
          Buy
        </button>

        <button
          className="cart-close-button"
          onClick={() => setIsCartVisible(false)}
        >
          Close Cart
        </button>
      </div>
    </section>
  );
}

export default Cart;
