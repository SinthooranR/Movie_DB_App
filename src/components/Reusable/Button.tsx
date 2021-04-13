import React, { MouseEvent, CSSProperties } from "react";

interface ButtonProps {
  buttonName: string;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  className?: string;
  type?: "submit";
  disabled?: boolean;
}

const Button = ({
  buttonName,
  onClick,
  style,
  className,
  type,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={className}
      type={type}
      disabled={disabled}
    >
      {buttonName}
    </button>
  );
};

export default Button;
