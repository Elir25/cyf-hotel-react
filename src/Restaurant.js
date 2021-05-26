import React from "react";
import Order from "./Order";

const Restaurant = () => {
  return (
    <div>
      <h3 className="rest-tittle">Restaurant Orders</h3>
      <ul className="food-list">
        <Order orderType="Pizzas" />
        <Order orderType="Salads" />
        <Order orderType="Chocolate cake" />
      </ul>
    </div>
  );
};

export default Restaurant;
