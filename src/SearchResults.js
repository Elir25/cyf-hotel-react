import React, { useState } from "react";
import Customer from "./Customer";
//import moment from "moment";

const SearchResults = props => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">tittle</th>
          <th scope="col">first name</th>
          <th scope="col">surname</th>
          <th scope="col">email</th>
          <th scope="col">room id</th>
          <th scope="col">check in date</th>
          <th scope="col">check out date</th>
          <th scope="col">number of nights</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(customer => {
          return <Customer customer={customer} />;
        })}
      </tbody>
    </table>
  );
};

export default SearchResults;

/****Instructions:** Within the 
 * `<SearchResults />` component or its 
 * child components, add an `onClick` handler to each
 *  row in the table (hint: on the `<tr>` element). 
 * When clicked, the row is "selected" and highlighted
 *  with a different colour. When clicked again,
 *  the row is unselected and the coloured highlighting 
 * is removed.

**Hint:** Use a new state variable for each row to record
 if the row is selected or not, and use this value to set a 
 class to the `className` prop of the row, the className 
 value can contain an usestate and change its value depending 
 on it

**Test:** Verify that each row of your table can be highlighted
 (on and off) independently when being clicked. */
