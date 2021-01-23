import React, {FormEvent} from "react";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import VpnKeyIcon from "@material-ui/icons/VpnKey";

interface InputProps {
  icon?: string;
  type: string;
  name: string;
  value: any;
  onChange: (event: FormEvent<HTMLInputElement>) => void;

}

function Input(props: InputProps) {
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

  return (
    <div>
      {icon}
      <input
        type={props.type}
        placeholder={props.name}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default Input;
