import React from "react";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <>
      <ul
        style={{
          listStyle: "none",
          margin: "50px 300px 0px 300px",
          background: "white",
          borderRadius: "15px",
        }}
      >
        {DUMMY_MEALS.map((item) => (
          <li key={item.id} style={{ padding: "15px 20px " }}>
            <h3>{item.name}</h3>
            <i>{item.description}</i>
            <h2>${item.price}</h2>
            <hr />
          </li>
        ))}
      </ul>
    </>
  );
};

export default AvailableMeals;
