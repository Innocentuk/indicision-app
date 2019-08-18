import React from "react";
import Option from "./Option";

// Setup options props for Options component
// Render the length of the array
// convert Options class into stateless func component
const Options = props => (
  <div>
    <button onClick={props.handleDeleteOptions}>Remove</button>
    {props.options.length === 0 && <p>Add an option to get started!</p>}
    {props.options.map(option => (
      <Option
        key={option}
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
