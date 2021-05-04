import React from "react";

const footerInfo = [
  "123 Fake Streest, London, E1 4UD",
  "hello@fakehotel.com",
  "0123 456789"
];

const Footer = props => {
  return (
    <footer className="footer">
      <ul style={{ listStyleType: "none" }}>
        {footerInfo.map(item => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </footer>
  );
};
//I NEED TO ADD A KEY FOR EACH LI ELEMENT
export default Footer;
