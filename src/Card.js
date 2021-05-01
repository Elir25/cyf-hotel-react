import React from "react";
//adding properties (props) for the card and they will be used everytime i use the card
const Card = props => {
  return (
    <div className="card">
      <img src={props.imageUrl} className="card-img-top" />
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <a href={props.moreInfoUrl} className="btn btn-primary">
          More information
        </a>
      </div>
    </div>
  );
};
export default Card;
