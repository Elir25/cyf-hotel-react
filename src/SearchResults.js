import React, { useState } from "react";
import Customer from "./Customer";
import CustomerProfile from "./CustomerProfile";
//import moment from "moment";

const SearchResults = props => {
  const [activeCustomer, setActiveCustomer] = useState(null);

  const customerID = Id => {
    console.log(Id);

    setActiveCustomer(Id);
  };

  return (
    <div>
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
            return <Customer customer={customer} customerId={customerID} />;
          })}
        </tbody>
      </table>
      <CustomerProfile />
    </div>
  );
};

export default SearchResults;
