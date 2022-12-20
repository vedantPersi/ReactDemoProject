import React, { Fragment, useState } from "react";

import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(true);
  };

  const hideCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && (
        <Cart onCloseCart={hideCartHandler} />
      )}
      <Header onShowCart={showCartHandler} />
      <main className="bg-[#3F3F3F] h-[100vh]">
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
