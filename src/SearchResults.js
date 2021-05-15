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
