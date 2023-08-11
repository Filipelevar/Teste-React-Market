import React, { useContext } from "react";
import propTypes from "prop-types";
import { BsCartDashFill, BsPlus } from "react-icons/bs";

import "./CartItem.css";
import AppContext from "../../context/AppContext";

function CartItem({ data }) {
  const { cartItems, setCartItems } = useContext(AppContext);
  const { nome, image, preco, descricao } = data;

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((item) => item.nome !== nome);
    setCartItems(updatedItems);
  };

  const handleAddMore = () => {
    const updatedItems = [...cartItems, data];
    setCartItems(updatedItems);
  };

  return (
    <section className="cart-item">
      <img src={image} alt="imagem do produto" className="cart-item-image" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{nome}</h3>
        <h3 className="cart-item-price">{preco}</h3>
        <small>
          <p>{descricao}</p>
        </small>

        <button
          type="button"
          className="button__remove-item"
          onClick={handleRemoveItem}
        >
          <BsCartDashFill />
        </button>
        <button
          type="button"
          className="button__add-more"
          onClick={handleAddMore}
        >
          <BsPlus />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object,
}.isRequired;
