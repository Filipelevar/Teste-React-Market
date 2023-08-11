import React from "react";
import Header from "./Components/Header/Header";
import Provider from "./context/Provider";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <Provider>
      <Header />
      <Products />
      <Cart />
    </Provider>
  );
}

export default App;
