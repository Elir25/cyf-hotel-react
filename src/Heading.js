import React from "react";

const Heading = () => {
  return (
    <header className="App-header">
      <img
        className="App-logo"
        src="https://image.flaticon.com/icons/svg/139/139899.svg"
        alt="logo"
      />
      <h4>CYF Hotel</h4>
    </header>
  );
};

export default Heading;

/**Extract the `<header>` from the `src/App.js` 
 * file to be its own separate component called `Heading`. 
 * Make sure that you import and render the `<Heading />` 
 * component within `src/App.js`. In the `Heading` component, 
 * render the hotel's logo in an `<img>` 
 * (you can use `https://image.flaticon.com/icons/svg/139/139899.svg` 
 * or find your own image URL). You can adjust the CSS by editing `src/App.css` 
 * to make your Heading looks better if necessary.

**Test:** The header should be displayed with a logo on the page. */
