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
      <p>Customer {customer.id} Profile</p>
      {customer.title}
      <button onClick={props.onClose}>Close profile</button>
    </div>
  );
};

export default CustomerProfile;
