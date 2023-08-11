import React from "react";
import CartButton from "../CartButton/CartButton";
import SearchBar from "../SearchBar/SearchBar";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img
          className="image-logo"
          src="https://img.freepik.com/vetores-premium/logotipo-colorido-do-mercado-com-gradiente_23-2148472540.jpg"
          alt=""
        />
        <h1 className="logo">My Store</h1>
        <SearchBar />
        <CartButton />
      </div>
    </header>
  );
}

export default Header;
