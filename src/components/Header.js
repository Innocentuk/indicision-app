import React from "react";

// convert header class into stateless func component
const Header = props => (
  <div>
    <h1>{props.title}</h1>
    {props.subtitle && <h2>{props.subtitle} </h2>}
  </div>
);

// to show a default value eg title
Header.defaultProps = {
  title: "Indecision"
};

export default Header;
