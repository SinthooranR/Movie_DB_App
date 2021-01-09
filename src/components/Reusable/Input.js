import React from "react";

function Input(props) {
  let input;

  switch (props.inputType) {
    case "textarea":
      input = (
        <React.Fragment>
          <label>{props.label}</label>
          <textarea
            name={props.name}
            cols={30}
            rows={10}
            onChange={props.onChange}
          >
            {props.value}
          </textarea>
        </React.Fragment>
      );
      break;

    default:
      input = (
        <React.Fragment>
          <label>{props.label}</label>
          <input
            type={props.type}
            placeholder={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        </React.Fragment>
      );
      break;
  }

  return <div>{input}</div>;
}

export default Input;
