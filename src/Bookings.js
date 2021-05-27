import React, { useState, useEffect } from "react";
import Search from "./Search.js";
import SearchResults from "./SearchResults.js";
//import FakeBookings from "./data/fakeBookings.json";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState(null)

  useEffect(() => {
    console.log(isLoading);
    fetch(`https://cyf-react.glitch.me/delayed`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setBookings(data);
        setIsLoading(false);
      });
  }, []);
  const search = searchVal => {
    // console.info("TO DO!", searchVal);
    //setBookings(FakeBookings);
    const guests = bookings;

    const filteredGuests = guests.filter(guest => {
      return (
        guest.firstName.toLowerCase().indexOf(searchVal.toLowerCase()) !== -1
      );
    });

    setBookings(filteredGuests);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {isLoading && <p>Loading data...</p>}
      </div>
    </div>
  );
};

export default Bookings;
