import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

function Input(props) {
  let input;
  let icon;

  switch (props.icon) {
    case "name":
      icon = <PersonIcon />;
      break;
    case "email":
      icon = <EmailIcon />;
      break;
    case "password":
      icon = <VpnKeyIcon />;
      break;
    default:
  }

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
          {icon}
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

  return <div style={{ marginBottom: "1%" }}>{input}</div>;
}

export default Input;
