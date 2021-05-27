import React, { useState } from "react";
import Customer from "./Customer";
import CustomerProfile from "./CustomerProfile";

const SearchResults = props => {
  const [activeCustomerId, setActiveCustomerId] = useState(null);

  const handleOnSelectedCustomerId = Id => {
    //created this func to reciving the prop from customer
    console.log(Id);
    setActiveCustomerId(Id);
  };

  function showProfile() {
    if (activeCustomerId != null) {
      return (
        <CustomerProfile
          customerId={activeCustomerId}
          onClose={() => setActiveCustomerId(null)}
        />
      );
    }
  }

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
            //passing two props, customer and customer id
            return (
              <Customer
                key={customer.id}
                customer={customer}
                onSelectedCustomerId={handleOnSelectedCustomerId}
              />
            );
          })}
        </tbody>
      </table>
      {showProfile()}
    </div>
  );
};

export default SearchResults;
