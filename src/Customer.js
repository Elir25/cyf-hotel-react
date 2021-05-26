import React, { useState } from "react";
import moment from "moment";
import CustomerProfile from "./CustomerProfile";
import ShowProfileButton from "./ShowProfileButton";

function Customer({ customer, onSelectedCustomerId }) {
  const [activeRow, setActiveRow] = useState("");

  const highlighRow = () => {
    if (activeRow == "") {
      setActiveRow("active-row");
    } else {
      setActiveRow("");
    }
  };

  function getNights(startDate, endDate) {
    let a = moment(startDate);
    let b = moment(endDate);

    return b.diff(a, "days");
  }

  const handleOnClickProfButton = () => {
    // console.log("This");
    onSelectedCustomerId(customer.id);
  };

  return (
    <tr key={customer.id} onClick={highlighRow} className={activeRow}>
      <td>{customer.id}</td>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
      <td>{getNights(customer.checkInDate, customer.checkOutDate)}</td>
      <td>
        <ShowProfileButton onClickButton={handleOnClickProfButton} />
      </td>
    </tr>
  );
}

export default Customer;
