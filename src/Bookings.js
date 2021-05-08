import React, { useState } from "react";
import SearchResults from "./SearchResults.js";
import FakeBookings from "./data/fakeBookings.json";
import Search from "./Search.js";

const Bookings = () => {
  const [bookings, setBookings] = useState(FakeBookings);

  const search = searchVal => {
    console.info("TO DO!", searchVal);
  };

  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
      </div>
    </div>
  );
};

export default Bookings;
