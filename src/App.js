import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import MealsSummary from "./components/Meals/MealsSummary";

function App() {
  return (
    <div>
      <Cart />
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </div>
  );
}

export default App;
