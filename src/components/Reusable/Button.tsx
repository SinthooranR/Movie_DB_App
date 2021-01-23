import React, { MouseEvent, CSSProperties } from "react";

interface ButtonProps {
  buttonName: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  className?: string;
  type?: "submit";
}

const Button = (props: ButtonProps) => {
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
};

export default Button;
