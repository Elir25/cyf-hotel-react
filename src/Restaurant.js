import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";

const Restaurant = () => {
  //const pizzas = 0;

  const [orders, setOrders] = useState(0);

  function orderOne() {
    setOrders(orders + 1);
  }

  return (
    <div>
      <h3>Restaurant Orders</h3>
      <ul>
        <li>
          Pizzas: {orders} <RestaurantButton orderOne={orderOne} />
        </li>
      </ul>
    </div>
  );
};
//<li>Pizzas: {orders}<button onClick={orderOne} className="btn btn-primary">Add</button></li>
export default Restaurant;

/****Instructions:** Extract the `<button>` currently in the `<Restaurant />` 
 * component to a new component named `RestaurantButton`. Pass the `orderOne` 
 * function as a prop to the `<RestaurantButton />` component and use this prop in the `onClick` handler.

**Tips** Functions can be saved as a props by giving it a name and then used as property of PROPS.

**Test:** Clicking the button should still increment the number of pizzas.*/
