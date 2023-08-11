import React, { useContext } from "react";
import propTypes from "prop-types";

import "./ProductCard.css";
import AppContext from "../../context/AppContext";

function ProductCard({ data }) {
  const { nome, image, preco, descricao } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = () => setCartItems([...cartItems, data]);

  return (
    <section className="product-card">
      <img src={image} alt="product" className="card__image" />

      <div className="card__infos">
        <h2 className="card__title">{nome}</h2>
        <h3 className="card__price">R$ {preco}</h3>
        <p className="card__description">{descricao}</p>

        <button
          type="button"
          className="button__add-cart"
          onClick={handleAddCart}
        >
          Add to Cart
        </button>
      </div>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({}),
}.isRequired;
