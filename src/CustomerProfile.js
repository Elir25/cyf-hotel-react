import React, { useEffect, useState } from "react";

const CustomerProfile = props => {
  const [customer, setCustomer] = useState({});

  useEffect(() => {
    // console.log("Fetching data...");

    fetch(`https://cyf-react.glitch.me/customers/${props.customerId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCustomer(data);
      });
  }, [props.customerId]);

  return (
    <div>
      <p>Customer {customer.id} Profile:</p>
      <ul>
        <li>{customer.title}</li>
        <li>{customer.firstName}</li>
        <li>{customer.email}</li>
        <li>{customer.vip}</li>
      </ul>
      <button onClick={props.onClose}>Close profile</button>
    </div>
  );
};

export default CustomerProfile;
