import React from "react";

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
          return (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.title}</td>
              <td>{customer.firstName}</td>
              <td>{customer.surname}</td>
              <td>{customer.email}</td>
              <td>{customer.roomId}</td>
              <td>{customer.checkInDate}</td>
              <td>{customer.checkOutDate}</td>
              <td>
                {/*getNights(customer.checkInDate, customer.checkOutDate)*/}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
//FIX THE MOMENT.JS PROBLEM

/*function getNights(startDate, endDate) {
let a = moment(startDate);
let b = moment(endDate);
a.diff(b) 
}*/
export default SearchResults;
/****Instructions:** Add another column to your `<SearchResults />` table which 
 * shows the number of nights a guest is staying.

**Hint:** Try installing the [moment.js library](http://momentjs.com/) 
(you'll need to install it with `npm install moment --save`) and using 
the [`.diff()` method](http://momentjs.com/docs/#/displaying/difference/) to
 compare dates, you may need to declare variables for the dates and declare 
 the "unit of measurement" without leaving spaces in the ""

**Test:** Each booking in your table should show the number of nights
 in a separate column. For example, Mr John Doe has a booking for **2** nights. */
