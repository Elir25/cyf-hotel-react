import React from "react";

const ShowProfileButton = props => {
  return (
    <button onClick={props.click} className="btn btn-primary">
      Show Profile
    </button>
  );
};

export default ShowProfileButton;
