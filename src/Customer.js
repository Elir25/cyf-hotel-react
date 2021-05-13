import React, { useState } from "react";
import moment from "moment";

function Customer({ customer }) {
  const [activeRow, setActiveRow] = useState("");

  const highlighRow = () => {
    if (activeRow == "") {
      setActiveRow("active-Row");
    } else {
      setActiveRow("");
    }
  };

  function getNights(startDate, endDate) {
    let a = moment(startDate);
    let b = moment(endDate);

    return b.diff(a, "days");
  }

  return (
    <tr onClick={highlighRow} className={activeRow}>
      <td>{customer.id}</td>
      <td>{customer.title}</td>
      <td>{customer.firstName}</td>
      <td>{customer.surname}</td>
      <td>{customer.email}</td>
      <td>{customer.roomId}</td>
      <td>{customer.checkInDate}</td>
      <td>{customer.checkOutDate}</td>
      <td>{getNights(customer.checkInDate, customer.checkOutDate)}</td>
    </tr>
  );
}

export default Customer;
