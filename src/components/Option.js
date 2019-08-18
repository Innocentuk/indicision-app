import React from "react";

// convert Option class into stateless func component
const Option = props => (
  <div>
    Option: {props.optionText}
    <button
      onClick={e => {
        props.handleDeleteOption(props.optionText);
      }}
    >
      {" "}
      Delete
    </button>
  </div>
);
export default Option;
