import React from "react";
import Card from "./Card";

const cardsArr = [
  {
    url:
      'https://i1.wp.com/www.hisour.com/wp-content/uploads/2018/05/Architecture-in-Glasgow.jpg?fit=1024%2C640&ssl=1" className="card-img-top',
    cityName: "Glassgow",
    text:
      "Glasgow is Scotlands largest city, and it forms an independent council area that lies entirely within the historic county of Lanarkshire.",
    link: "https://peoplemakeglasgow.com/"
  },
  {
    url:
      "https://cdn1.guias-viajar.com/inglaterra-escocia-gales/wp-content/uploads/2017/12/ayuntamiento-manchester-001.jpg",
    cityName: "Manchester",
    text:
      "Manchester is the nucleus of the largest metropolitan area in the north of England, and it remains an important regional city.",
    link: "https://www.visitmanchester.com/"
  },
  {
    url:
      "https://media.gettyimages.com/photos/big-ben-and-the-parliament-in-london-picture-id487547456?s=612x612",
    cityName: "London",
    text:
      "London, city, capital of the United Kingdom. It is among the oldest of the world's great cities—its history spanning nearly two millennia—and one of the most cosmopolitan.",
    link: "https://visitlondon.com/"
  }
];
//the component that will take the card component and add the info from the cities array
const TouristInfoCards = () => {
  return (
    <div className="cards-section">
      {cardsArr.map(city => {
        //add the info as a property
        return (
          <Card
            title={city.cityName}
            description={city.text}
            imageUrl={city.url}
            moreInfoUrl={city.link}
          />
        );
      })}
    </div>
  );
};
export default TouristInfoCards;
