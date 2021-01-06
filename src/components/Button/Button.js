import React from "react";

function Button(props) {
  return (
    <button
      onClick={props.onClick}
      style={props.style}
      className={props.className}
      type={props.type}
    >
      {props.buttonName}
    </button>
  );
}

export default Button;
