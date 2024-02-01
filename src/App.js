import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleShowCart = () => {
    setCartOpen(true);
  };

  const handleHideCart = () => {
    setCartOpen(false);
  };

  return (
    <CartProvider>
      {cartOpen && <Cart onHideCart={handleHideCart} />}
      <Header onShowCart={handleShowCart} />
      <MealsSummary />
      <AvailableMeals />
    </CartProvider>
  );
}

export default App;
