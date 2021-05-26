import React from "react";

const ShowProfileButton = props => {
  return (
    //clickButton is the name of the prop im using (defined in customer and used here)
    <button onClick={props.onClickButton} className="btn btn-primary">
      Show Profile
    </button>
  );
};

export default ShowProfileButton;
