import React, { useState } from "react";

const CustomerProfile = props => {
  const [profile, setProfile] = useState("");

  const ShowId = () => {
    setProfile(props.customer.id);
  };
  return <div>{/* <p>Customer id is {ShowId}</p> */}</div>;
};

export default CustomerProfile;
